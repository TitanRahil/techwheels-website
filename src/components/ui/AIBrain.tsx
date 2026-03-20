import { useMemo } from 'react';

export function AIBrain() {
    // Generate a structured but organic looking neural network
    const { nodes, connections } = useMemo(() => {
        const n: any[] = [];
        const c: any[] = [];
        // Core
        n.push({ id: 0, x: 50, y: 50, size: 14, layer: 0 });

        // Inner ring (8 nodes)
        const innerCount = 8;
        for(let i=0; i<innerCount; i++) {
            const angle = (i / innerCount) * Math.PI * 2 + Math.random() * 0.2;
            const r = 18 + Math.random() * 6;
            n.push({ id: n.length, x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r, size: 5 + Math.random() * 4, layer: 1 });
            c.push([0, n.length - 1]); // connect to core
            if (i > 0) c.push([n.length - 1, n.length - 2]); // connect to previous
        }
        c.push([n.length - 1, 1]); // close ring

        // Outer ring (16 nodes)
        const innerLayerStart = 1;
        const outerCount = 16;
        for(let i=0; i<outerCount; i++) {
            const angle = (i / outerCount) * Math.PI * 2 + Math.random() * 0.1;
            const r = 38 + Math.random() * 10;
            n.push({ id: n.length, x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r, size: 2 + Math.random() * 3, layer: 2 });
            // connect to corresponding inner node (roughly)
            const innerNode = innerLayerStart + Math.floor((i / outerCount) * innerCount);
            c.push([innerNode, n.length - 1]);
            // connection to previous outer node (sometimes skip for organic look)
            if (i > 0 && Math.random() > 0.2) c.push([n.length - 1, n.length - 2]); 
        }
        c.push([n.length - 1, innerLayerStart + innerCount]); // close ring

        // Random organic cross connections
        for(let i=0; i<15; i++) {
            const a = Math.floor(Math.random() * n.length);
            const b = Math.floor(Math.random() * n.length);
            if (a !== b && Math.abs(a-b) > 2) c.push([a, b]);
        }

        return { nodes: n, connections: c };
    }, []);

    return (
        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
            {/* Ambient Background Glows (GPU Accelerated divs) */}
            <div className="absolute inset-0 bg-accent-violet/10 blur-[80px] rounded-full animate-pulse z-0" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-1/4 bg-accent-mint/10 blur-[60px] rounded-full animate-pulse z-0" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            
            {/* Core Node Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-mint/30 blur-[20px] rounded-full animate-pulse z-0" style={{ animationDuration: '2s' }} />

            {/* Orbiting Tech Rings */}
            <div className="absolute inset-8 border border-accent-violet/20 rounded-full animate-spin z-0" style={{ borderStyle: 'dashed', animationDuration: '60s' }} />
            <div className="absolute inset-14 border border-accent-mint/20 rounded-full animate-spin z-0" style={{ borderStyle: 'dotted', borderWidth: '2px', animationDuration: '40s', animationDirection: 'reverse' }} />
            <div className="absolute inset-24 border border-white/5 rounded-full animate-spin z-0" style={{ animationDuration: '20s' }} />

            {/* SVG Data Visualization - Flat Vector Layer for extreme performance */}
            <svg viewBox="0 0 100 100" className="absolute z-10 w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7b61ff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3ef2c2" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7b61ff" stopOpacity="0.8" />
                    </linearGradient>
                </defs>

                {/* Connections (CSS Animated Pulse) */}
                {connections.map(([start, end], i) => {
                    const n1 = nodes[start];
                    const n2 = nodes[end];
                    return (
                        <line
                            key={`line-${i}`}
                            x1={n1.x} y1={n1.y}
                            x2={n2.x} y2={n2.y}
                            stroke="url(#glow-gradient)"
                            strokeWidth="0.25"
                            className="animate-pulse opacity-40"
                            style={{ 
                                animationDuration: `${3 + (i % 3)}s`, 
                                animationDelay: `${(i % 5) * 0.5}s` 
                            }}
                        />
                    );
                })}

                {/* Neural Nodes (CSS Animated Pulse) */}
                {nodes.map((node) => (
                    <circle
                        key={`node-${node.id}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.size / 2}
                        fill={node.layer === 0 ? "#ffffff" : (node.layer === 1 ? "#f1f5f9" : "#cbd5e1")}
                        className="animate-pulse"
                        style={{ 
                            animationDuration: `${2 + (node.id % 4)}s`, 
                            animationDelay: `${(node.id % 3) * 0.5}s`,
                            opacity: node.layer === 0 ? 0.9 : 0.6
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
