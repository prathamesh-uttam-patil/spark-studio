"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SparkCoreProps {
  scrollProgress?: number;
  reducedMotion?: boolean;
}

export default function SparkCore({
  scrollProgress = 0,
  reducedMotion = false,
}: SparkCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const accentRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  // Easing function
  const easeInOut = (x: number) =>
    x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;

    t.current += delta * 0.4;

    // Ambient breath — subtle
    const breath = Math.sin(t.current * 0.8) * 0.012;

    // Scroll-driven stages:
    // Stage A (0–0.25): Introduction — assembled, minimal motion
    // Stage B (0.25–0.5): Exploration — rings separate, camera shift
    // Stage C (0.5–0.75): Transformation — inner reveals, geometry expands
    // Stage D (0.75–1.0): Resolution — settles into final balanced state

    const sp = Math.max(0, Math.min(1, scrollProgress));

    // Stage A: Rotation ramp-up
    const stageA = easeInOut(Math.min(sp / 0.25, 1));
    // Stage B: Ring separation
    const stageB = easeInOut(Math.min(Math.max(sp - 0.25, 0) / 0.25, 1));
    // Stage C: Inner transformation
    const stageC = easeInOut(Math.min(Math.max(sp - 0.5, 0) / 0.25, 1));
    // Stage D: Resolution
    const stageD = easeInOut(Math.min(Math.max(sp - 0.75, 0) / 0.25, 1));

    // Base group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y =
        t.current * 0.15 + stageA * 0.4 + stageB * 0.8 + stageC * 0.3;
      groupRef.current.rotation.x = breath + stageB * 0.15 - stageD * 0.1;
      groupRef.current.position.y = breath * 0.5;
    }

    // Outer dodecahedron — main body
    if (outerRef.current) {
      outerRef.current.rotation.x = t.current * 0.1 + stageC * 0.6;
      outerRef.current.rotation.z = t.current * -0.05 + stageB * 0.3;
      const outerScale = 1 + stageB * 0.08 + stageC * -0.06 + stageD * 0.04;
      outerRef.current.scale.setScalar(outerScale);
    }

    // Inner icosahedron — emerges in Stage C
    if (innerRef.current) {
      innerRef.current.rotation.x = t.current * -0.25;
      innerRef.current.rotation.y = t.current * 0.2 + stageC * 1.2;
      const innerScale = 0.38 + stageC * 0.28;
      innerRef.current.scale.setScalar(innerScale);
      (innerRef.current.material as THREE.MeshStandardMaterial).opacity =
        0.6 + stageC * 0.4;
    }

    // Rings group — separates in Stage B
    if (ringsRef.current) {
      ringsRef.current.rotation.y = t.current * 0.2;
      ringsRef.current.rotation.z = stageB * 0.6 + stageC * -0.2;
      const ringsY = stageB * 0.45 - stageD * 0.35;
      ringsRef.current.position.y = ringsY;
    }

    // Accent cube — spins independently
    if (accentRef.current) {
      accentRef.current.rotation.x = t.current * 0.6;
      accentRef.current.rotation.y = t.current * 0.4;
      const accentY = 1.1 + stageB * 0.4 - stageD * 0.3;
      accentRef.current.position.y = accentY;
      (accentRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.3 + stageC * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer form — main sculptural body */}
      <mesh ref={outerRef}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#2a2b27"
          roughness={0.55}
          metalness={0.3}
          envMapIntensity={1}
        />
      </mesh>

      {/* Inner core — revealed on scroll */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C8F169"
          roughness={0.2}
          metalness={0.6}
          emissive="#C8F169"
          emissiveIntensity={0.15}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Rings system */}
      <group ref={ringsRef}>
        <Ring radius={1.45} thickness={0.028} color="#343530" rotation={[Math.PI / 2, 0, 0]} />
        <Ring radius={1.62} thickness={0.018} color="#C8F169" rotation={[Math.PI / 3, Math.PI / 5, 0]} opacity={0.5} />
        <Ring radius={1.8} thickness={0.012} color="#343530" rotation={[-Math.PI / 4, 0, Math.PI / 6]} opacity={0.35} />
      </group>

      {/* Accent cube — lime, floats above */}
      <mesh ref={accentRef} position={[0, 1.1, 0]}>
        <boxGeometry args={[0.22, 0.22, 0.22]} />
        <meshStandardMaterial
          color="#C8F169"
          roughness={0.1}
          metalness={0.8}
          emissive="#C8F169"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Small orange accent — contrasting detail */}
      <mesh position={[-0.85, -0.65, 0.4]}>
        <octahedronGeometry args={[0.12, 0]} />
        <meshStandardMaterial
          color="#FF784F"
          roughness={0.3}
          metalness={0.5}
          emissive="#FF784F"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Ring helper component
interface RingProps {
  radius: number;
  thickness: number;
  color: string;
  rotation?: [number, number, number];
  opacity?: number;
}

function Ring({ radius, thickness, color, rotation = [0, 0, 0], opacity = 1 }: RingProps) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, thickness, 16, 80]} />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.6}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  );
}
