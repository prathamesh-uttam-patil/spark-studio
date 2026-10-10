"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import SceneErrorBoundary from "./SceneErrorBoundary";
import SparkCore from "./SparkCore";
import HeroSceneFallback from "./HeroSceneFallback";

interface HeroSceneProps {
  scrollProgress?: number;
  className?: string;
}

export default function HeroScene({ scrollProgress = 0, className = "" }: HeroSceneProps) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ctx =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebglSupported(!!ctx);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause rendering when not visible (tab hidden, out of view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (webglSupported === null) {
    // Loading state — show fallback while checking
    return (
      <div ref={containerRef} className={`${className} flex items-center justify-center`}>
        <HeroSceneFallback />
      </div>
    );
  }

  if (!webglSupported) {
    return (
      <div ref={containerRef} className={`${className} flex items-center justify-center`}>
        <HeroSceneFallback />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <SceneErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 42 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          aria-label="SPARK Core — decorative 3D sculpture"
          role="img"
          style={{ pointerEvents: "none" }}
          frameloop={isVisible ? "always" : "never"}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.4} color="#f3f0e8" />
            <directionalLight
              position={[3, 5, 3]}
              intensity={1.8}
              color="#ffffff"
              castShadow={false}
            />
            <directionalLight
              position={[-2, -1, -2]}
              intensity={0.5}
              color="#c8f169"
            />
            <pointLight
              position={[0, -3, 2]}
              intensity={0.6}
              color="#ff784f"
              distance={8}
            />
            <Environment preset="city" />

            <SparkCore
              scrollProgress={scrollProgress}
              reducedMotion={reducedMotion}
            />
          </Suspense>
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
