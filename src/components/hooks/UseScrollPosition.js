import { useState, useEffect } from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if (window.scrollY < 350) {
                setScrollPosition(window.scrollY);
            } else {
                setScrollPosition(x => x);
            }
        };
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

export default useScrollPosition;
