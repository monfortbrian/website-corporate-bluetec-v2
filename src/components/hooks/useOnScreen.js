import { useState, useEffect } from "react";

export function useOnScreen(ref, rootMargin = "0px") {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const Observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin }
        );

        const currentElement = ref?.current;
        if (currentElement) {
            Observer.observe(currentElement);
        }
        console.log(isVisible);
        return () => {
            Observer.unobserve(currentElement);
        };
    });
    return isVisible;
}
