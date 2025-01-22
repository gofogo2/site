import { useState, useEffect } from 'react';

export default function ResolutionDisplay() {
    const [resolution, setResolution] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setResolution({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 text-[#e2e2e2] text-xs opacity-50">
            {resolution.width} x {resolution.height}
        </div>
    );
} 