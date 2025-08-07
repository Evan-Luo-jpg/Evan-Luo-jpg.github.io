"use client";

import { useEffect, useRef } from 'react';

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      sway: number;
    }> = [];

    // Create more snowflakes with bigger sizes
    for (let i = 0; i < 120; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 3, // Bigger snowflakes: 3-9px instead of 1-5px
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.4, // Higher opacity for better visibility
        sway: Math.random() * 0.02 + 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
        
        // Add a subtle glow effect for bigger snowflakes
        if (flake.size > 5) {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, flake.size + 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity * 0.3})`;
          ctx.fill();
        }
        
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y * flake.sway) * 0.8;
        
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      id="snow-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5
      }}
    />
  );
} 