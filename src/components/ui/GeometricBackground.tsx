export function GeometricBackground() {
    return (
        <div className="fixed inset-0 -z-10 w-full overflow-hidden pointer-events-none bg-[#09090b]">
            {/* Static Mesh Gradients - no JS animations, pure CSS for zero overhead */}
            <div
                className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, rgba(0,0,0,0) 70%)' }}
            />

            <div
                className="absolute bottom-0 right-0 w-[60vw] h-[60vw] rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(62,242,194,0.3) 0%, rgba(0,0,0,0) 70%)' }}
            />

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(0,0,0,0) 70%)' }}
            />

            {/* Grid Pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
