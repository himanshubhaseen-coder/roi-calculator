import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Premium CSS-only Fallback if 3D scene fails
      return (
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="absolute w-64 h-64 border-[4px] border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-48 h-48 border-[2px] border-accent/40 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
          <div className="w-32 h-32 bg-gradient-to-tr from-primary to-accent rounded-full blur-[20px] animate-pulse-slow" />
        </div>
      );
    }

    return this.props.children; 
  }
}
