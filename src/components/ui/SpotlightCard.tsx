import React, { useRef, useCallback } from "react";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(123, 97, 255, 0.15)"
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || !overlayRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        overlayRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`;
    }, [spotlightColor]);

    const handleMouseEnter = useCallback(() => {
        if (overlayRef.current) overlayRef.current.style.opacity = '1';
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (overlayRef.current) overlayRef.current.style.opacity = '0';
    }, []);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden transition-colors duration-500 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] ${className}`}
        >
            <div
                ref={overlayRef}
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{ opacity: 0 }}
            />
            {children}
        </div>
    );
}
