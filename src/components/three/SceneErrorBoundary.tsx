"use client";

import React, { Component, ReactNode } from "react";
import HeroSceneFallback from "./HeroSceneFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class SceneErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[SparkCore] WebGL scene error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return <HeroSceneFallback />;
    }
    return this.props.children;
  }
}
