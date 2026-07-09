import React, {useEffect, useRef} from 'react'

import gsap from "gsap";

function Cursor() {

    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor ">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2" fill="#9a9a9a"/>
                <circle cx="12" cy="12" r="8" fill="none" stroke="#9a9a9a" stroke-width="2"/>
            </svg>
        </div>
    )
}

export default Cursor