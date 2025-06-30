import React, { useRef, useEffect, useState } from 'react';

const NODE_COUNT = 30;
const MAX_DISTANCE = 160;
const NODE_RADIUS = 4;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const NetworkBackground = ({ mousePosition = { x: 0, y: 0 } }) => {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [nodes, setNodes] = useState([]);
  const [velocities] = useState(() => Array.from({ length: NODE_COUNT }, () => ({
    vx: randomBetween(-0.3, 0.3),
    vy: randomBetween(-0.3, 0.3),
  })));
  const [tick, setTick] = useState(0);

  // Responsive sizing
  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Initialize nodes
  useEffect(() => {
    setNodes(Array.from({ length: NODE_COUNT }, () => ({
      x: randomBetween(0, dimensions.width),
      y: randomBetween(0, dimensions.height),
      pulse: Math.random() * Math.PI * 2,
    })));
    // eslint-disable-next-line
  }, [dimensions.width, dimensions.height]);

  // Animation loop
  useEffect(() => {
    let frame;
    function animate() {
      setNodes(prevNodes => prevNodes.map((node, i) => {
        let x = node.x + velocities[i].vx;
        let y = node.y + velocities[i].vy;
        // Bounce
        if (x < 0 || x > dimensions.width) velocities[i].vx *= -1;
        if (y < 0 || y > dimensions.height) velocities[i].vy *= -1;
        x = Math.max(0, Math.min(dimensions.width, x));
        y = Math.max(0, Math.min(dimensions.height, y));
        return {
          ...node,
          x,
          y,
          pulse: node.pulse + 0.07 + Math.random() * 0.01,
        };
      }));
      setTick(t => t + 1); // force re-render
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [dimensions.width, dimensions.height]);

  // Parallax offset
  const parallax = {
    x: (mousePosition.x || 0) * 0.5,
    y: (mousePosition.y || 0) * 0.5,
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        {/* Edges */}
        {nodes.map((nodeA, i) =>
          nodes.map((nodeB, j) => {
            if (i >= j) return null;
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MAX_DISTANCE) {
              const opacity = 1 - dist / MAX_DISTANCE;
              return (
                <line
                  key={`edge-${i}-${j}`}
                  x1={nodeA.x + parallax.x}
                  y1={nodeA.y + parallax.y}
                  x2={nodeB.x + parallax.x}
                  y2={nodeB.y + parallax.y}
                  stroke="#64748b"
                  strokeOpacity={opacity * 0.7}
                  strokeWidth={1.2}
                />
              );
            }
            return null;
          })
        )}
        {/* Nodes */}
        {nodes.map((node, i) => {
          // Pulse effect
          const pulse = Math.sin(node.pulse) * 3 + NODE_RADIUS;
          const glow = Math.abs(Math.sin(node.pulse)) * 0.7 + 0.3;
          return (
            <g key={`node-${i}`}>
              <circle
                cx={node.x + parallax.x}
                cy={node.y + parallax.y}
                r={pulse + 8}
                fill="#64748b"
                fillOpacity={glow * 0.10}
                style={{ filter: 'blur(8px)' }}
              />
              <circle
                cx={node.x + parallax.x}
                cy={node.y + parallax.y}
                r={pulse}
                fill="#60a5fa"
                fillOpacity={0.85}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default NetworkBackground; 