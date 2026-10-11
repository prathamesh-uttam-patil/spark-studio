"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface HeroCubeProps {
  scrollProgress?: number;
  reducedMotion?: boolean;
}

type TileFinish = "matte" | "graphite" | "obsidian" | "perforated" | "accent";

interface TileDef {
  id: string;
  gridX: number; // -1, 0, 1
  gridY: number; // -1, 0, 1
  gridZ: number; // -1, 0, 1
  finish: TileFinish;
}

// Generate the 26 exterior tile definitions (excluding 0,0,0 which houses the glowing core)
function generateTileDefs(): TileDef[] {
  const tiles: TileDef[] = [];
  let index = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (x === 0 && y === 0 && z === 0) continue; // inner engine core

        // Curated finish assignment based on position for a balanced, engineered aesthetic
        let finish: TileFinish = "matte";

        const isFaceCenter =
          (x === 0 && y === 0) || (y === 0 && z === 0) || (x === 0 && z === 0);
        const isCorner = Math.abs(x) === 1 && Math.abs(y) === 1 && Math.abs(z) === 1;

        if (isFaceCenter) {
          if (z === 1 || y === 1) finish = "graphite";
          else if (x === -1 || z === -1) finish = "perforated";
          else finish = "obsidian";
        } else if (isCorner) {
          if (y === 1 && (x === 1 || z === 1)) finish = "graphite";
          else if (y === -1 && x === -1) finish = "obsidian";
          else finish = "matte";
        } else {
          // Edges
          if (x === 1 && y === 0 && z === 1) finish = "accent";
          else if (x === -1 && y === 1 && z === 0) finish = "accent";
          else if ((x + y + z) % 2 === 0) finish = "graphite";
          else finish = "matte";
        }

        tiles.push({
          id: `tile-${x}-${y}-${z}-${index++}`,
          gridX: x,
          gridY: y,
          gridZ: z,
          finish,
        });
      }
    }
  }

  return tiles;
}

export default function HeroCube({
  scrollProgress = 0,
  reducedMotion = false,
}: HeroCubeProps) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const topLayerRef = useRef<THREE.Group>(null);
  const midLayerRef = useRef<THREE.Group>(null);
  const bottomLayerRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);

  const { gl } = useThree();

  // Procedural bump texture & shared materials
  const { materials, cleanup } = useMemo(() => {
    let bumpMap: THREE.CanvasTexture | null = null;
    if (typeof document !== "undefined") {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#808080";
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = "#454545";
        for (let x = 6; x < 128; x += 12) {
          for (let y = 6; y < 128; y += 12) {
            ctx.beginPath();
            ctx.arc(x, y, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        bumpMap = new THREE.CanvasTexture(canvas);
        bumpMap.wrapS = THREE.RepeatWrapping;
        bumpMap.wrapT = THREE.RepeatWrapping;
        bumpMap.repeat.set(2, 2);
      }
    }

    const matte = new THREE.MeshStandardMaterial({
      color: "#161715",
      roughness: 0.82,
      metalness: 0.15,
      envMapIntensity: 0.5,
    });

    const graphite = new THREE.MeshStandardMaterial({
      color: "#252723",
      roughness: 0.28,
      metalness: 0.86,
      envMapIntensity: 1.5,
    });

    const obsidian = new THREE.MeshStandardMaterial({
      color: "#10110F",
      roughness: 0.6,
      metalness: 0.35,
      envMapIntensity: 0.7,
    });

    const perforated = new THREE.MeshStandardMaterial({
      color: "#1b1d19",
      roughness: 0.42,
      metalness: 0.65,
      bumpMap: bumpMap,
      bumpScale: 0.0035,
      envMapIntensity: 1.1,
    });

    const accent = new THREE.MeshStandardMaterial({
      color: "#1e201c",
      roughness: 0.35,
      metalness: 0.75,
      envMapIntensity: 1.2,
    });

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: "#FF5E20",
      emissive: "#FF5500",
      emissiveIntensity: 2.2,
      roughness: 0.2,
      metalness: 0.3,
    });

    const seamStripMaterial = new THREE.MeshStandardMaterial({
      color: "#FF784F",
      emissive: "#FF6A28",
      emissiveIntensity: 1.6,
      roughness: 0.3,
    });

    const tileMaterials: Record<TileFinish, THREE.MeshStandardMaterial> = {
      matte,
      graphite,
      obsidian,
      perforated,
      accent,
    };

    return {
      materials: {
        tileMaterials,
        coreMaterial,
        seamStripMaterial,
      },
      cleanup: () => {
        [
          matte,
          graphite,
          obsidian,
          perforated,
          accent,
          coreMaterial,
          seamStripMaterial,
        ].forEach((m) => m.dispose());
        bumpMap?.dispose();
      },
    };
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const tiles = useMemo(() => generateTileDefs(), []);

  // Interaction & animation state stored in refs (prevents unnecessary React re-renders)
  const state = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    // Drag rotation accumulators
    targetDragX: 0,
    targetDragY: 0,
    currentDragX: 0,
    currentDragY: 0,
    // Inertia velocities
    velX: 0,
    velY: 0,
    // Mouse hover parallax
    targetParallaxX: 0,
    targetParallaxY: 0,
    currentParallaxX: 0,
    currentParallaxY: 0,
    // Idle drift
    idleTimer: 0,
    idleRotY: 0,
    floatTime: 0,
  });

  // Attach pointer drag listeners to the Canvas DOM element
  useEffect(() => {
    const canvas = gl.domElement;
    if (!canvas) return;

    canvas.style.cursor = "grab";
    canvas.style.touchAction = "pan-y";

    const onPointerDown = (e: PointerEvent) => {
      // Primary button or single touch
      if (e.button !== 0 && e.pointerType === "mouse") return;

      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }

      state.current.isDragging = true;
      state.current.startX = e.clientX;
      state.current.startY = e.clientY;
      state.current.lastX = e.clientX;
      state.current.lastY = e.clientY;
      state.current.velX = 0;
      state.current.velY = 0;
      state.current.idleTimer = 0;

      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (state.current.isDragging) {
        const dx = e.clientX - state.current.lastX;
        const dy = e.clientY - state.current.lastY;
        state.current.lastX = e.clientX;
        state.current.lastY = e.clientY;

        const sensitivity = 0.0065;
        const impulseY = dx * sensitivity;
        const impulseX = dy * sensitivity;

        state.current.targetDragY += impulseY;
        state.current.targetDragX += impulseX;

        // Clamp vertical pitch between -1.15 and 1.15 rad to preserve sculptural silhouette
        state.current.targetDragX = THREE.MathUtils.clamp(
          state.current.targetDragX,
          -1.15,
          1.15
        );

        state.current.velX = impulseY;
        state.current.velY = impulseX;
        state.current.idleTimer = 0;
      } else {
        // Cursor position parallax when hovering
        const rect = canvas.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

          state.current.targetParallaxX =
            THREE.MathUtils.clamp(nx, -1, 1) * 0.2;
          state.current.targetParallaxY =
            THREE.MathUtils.clamp(-ny, -1, 1) * 0.14;
        }
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!state.current.isDragging) return;
      state.current.isDragging = false;

      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }

      canvas.style.cursor = "grab";
    };

    const onPointerLeave = () => {
      if (!state.current.isDragging) {
        // Softly center parallax target when mouse exits
        state.current.targetParallaxX = 0;
        state.current.targetParallaxY = 0;
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [gl]);

  // Main animation frame loop
  useFrame((_, delta) => {
    if (!masterGroupRef.current) return;

    const s = state.current;
    const clampedScroll = Math.max(0, Math.min(1, scrollProgress));

    if (reducedMotion) {
      // Reduced motion: static balanced orientation, no continuous float
      masterGroupRef.current.rotation.set(0.32, -0.52, 0);
      masterGroupRef.current.position.set(0, 0, 0);
      return;
    }

    // 1. Inertia decay when user is not dragging
    if (!s.isDragging) {
      s.targetDragY += s.velX;
      s.targetDragX += s.velY;
      s.targetDragX = THREE.MathUtils.clamp(s.targetDragX, -1.15, 1.15);

      s.velX *= 0.92;
      s.velY *= 0.92;

      s.idleTimer += delta;
      s.floatTime += delta;
    }

    // 2. Smooth damping of drag rotations (no abrupt snapping)
    s.currentDragX = THREE.MathUtils.damp(
      s.currentDragX,
      s.targetDragX,
      9,
      delta
    );
    s.currentDragY = THREE.MathUtils.damp(
      s.currentDragY,
      s.targetDragY,
      9,
      delta
    );

    // 3. Smooth cursor parallax damping
    s.currentParallaxX = THREE.MathUtils.damp(
      s.currentParallaxX,
      s.targetParallaxX,
      4,
      delta
    );
    s.currentParallaxY = THREE.MathUtils.damp(
      s.currentParallaxY,
      s.targetParallaxY,
      4,
      delta
    );

    // 4. Subtle idle animation (blends in smoothly after release)
    const idleWeight = Math.min(1, Math.max(0, (s.idleTimer - 1.0) / 1.5));
    s.idleRotY += delta * 0.12 * idleWeight;
    const floatY = Math.sin(s.floatTime * 0.9) * 0.032 * idleWeight;

    // 5. Scroll-linked transformation
    // Base architectural orientation evolves smoothly as hero scrolls
    const baseRotX = 0.35 - clampedScroll * 0.12;
    const baseRotY = -0.55 + clampedScroll * 0.45;

    // Apply combined rotations to master cube group
    masterGroupRef.current.rotation.x =
      baseRotX + s.currentDragX + s.currentParallaxY;
    masterGroupRef.current.rotation.y =
      baseRotY + s.currentDragY + s.idleRotY + s.currentParallaxX;
    masterGroupRef.current.position.y = floatY;

    // 6. Layer articulation on scroll (reveals inner orange core)
    const topTwist = clampedScroll * 0.32; // up to ~18 deg
    const bottomTwist = -clampedScroll * 0.2; // counter-twist ~11 deg
    const corePulse = 1.0 + Math.sin(s.floatTime * 1.5) * 0.05 + clampedScroll * 0.12;

    if (topLayerRef.current) {
      topLayerRef.current.rotation.y = topTwist;
    }
    if (bottomLayerRef.current) {
      bottomLayerRef.current.rotation.y = bottomTwist;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.scale.setScalar(corePulse);
      innerCoreRef.current.rotation.y += delta * 0.3;
    }
  });

  // Base tile geometry & spacing parameters
  const tileSize = 0.52; // Tile width/height/depth
  const bevelRadius = 0.032; // Crisp rounded beveled edges
  const basePitch = 0.585; // Spacing pitch between tile centers (narrow 0.065 seam)
  const expansion = scrollProgress * 0.09; // Subtle outward expansion on scroll
  const effectivePitch = basePitch + expansion;

  return (
    <group ref={masterGroupRef}>
      {/* 1. TOP LAYER (y = 1) */}
      <group ref={topLayerRef} position={[0, effectivePitch, 0]}>
        {tiles
          .filter((t) => t.gridY === 1)
          .map((tile) => (
            <TileMesh
              key={tile.id}
              tile={tile}
              pitch={effectivePitch}
              tileSize={tileSize}
              bevelRadius={bevelRadius}
              material={materials.tileMaterials[tile.finish]}
              seamStripMaterial={materials.seamStripMaterial}
            />
          ))}
      </group>

      {/* 2. MIDDLE LAYER (y = 0) with glowing inner core */}
      <group ref={midLayerRef} position={[0, 0, 0]}>
        {/* Exterior mid tiles */}
        {tiles
          .filter((t) => t.gridY === 0)
          .map((tile) => (
            <TileMesh
              key={tile.id}
              tile={tile}
              pitch={effectivePitch}
              tileSize={tileSize}
              bevelRadius={bevelRadius}
              material={materials.tileMaterials[tile.finish]}
              seamStripMaterial={materials.seamStripMaterial}
            />
          ))}

        {/* Central glowing inner engine core at (0, 0, 0) */}
        <mesh ref={innerCoreRef} position={[0, 0, 0]}>
          <RoundedBox
            args={[0.34, 0.34, 0.34]}
            radius={0.02}
            smoothness={4}
            material={materials.coreMaterial}
          />
        </mesh>

        {/* Internal warm orange seam point light emitting through seams */}
        <pointLight
          color="#FF6A00"
          intensity={1.5}
          distance={2.6}
          decay={2}
          position={[0, 0, 0]}
        />

        {/* Hairline seam accent bars nestled in interior seams */}
        <mesh position={[0, 0, 0.29]}>
          <boxGeometry args={[0.48, 0.014, 0.014]} />
          <primitive object={materials.seamStripMaterial} />
        </mesh>
        <mesh position={[0.29, 0, 0]}>
          <boxGeometry args={[0.014, 0.014, 0.48]} />
          <primitive object={materials.seamStripMaterial} />
        </mesh>
      </group>

      {/* 3. BOTTOM LAYER (y = -1) */}
      <group ref={bottomLayerRef} position={[0, -effectivePitch, 0]}>
        {tiles
          .filter((t) => t.gridY === -1)
          .map((tile) => (
            <TileMesh
              key={tile.id}
              tile={tile}
              pitch={effectivePitch}
              tileSize={tileSize}
              bevelRadius={bevelRadius}
              material={materials.tileMaterials[tile.finish]}
              seamStripMaterial={materials.seamStripMaterial}
            />
          ))}
      </group>
    </group>
  );
}

interface TileMeshProps {
  tile: TileDef;
  pitch: number;
  tileSize: number;
  bevelRadius: number;
  material: THREE.MeshStandardMaterial;
  seamStripMaterial: THREE.MeshStandardMaterial;
}

function TileMesh({
  tile,
  pitch,
  tileSize,
  bevelRadius,
  material,
  seamStripMaterial,
}: TileMeshProps) {
  // Tile coordinates relative to its layer group (y is already offset by group)
  const posX = tile.gridX * pitch;
  const posZ = tile.gridZ * pitch;

  const hasSeamDetail = tile.finish === "accent";

  return (
    <group position={[posX, 0, posZ]}>
      <RoundedBox
        args={[tileSize, tileSize, tileSize]}
        radius={bevelRadius}
        smoothness={4}
        material={material}
      />
      {/* Engineered recessed hairline seam highlight on accent tiles */}
      {hasSeamDetail && (
        <mesh position={[0, tileSize / 2 - 0.01, tileSize / 2]}>
          <boxGeometry args={[tileSize * 0.6, 0.012, 0.008]} />
          <primitive object={seamStripMaterial} />
        </mesh>
      )}
    </group>
  );
}
