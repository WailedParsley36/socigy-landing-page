import { useEffect, useState } from "react";

function handleShouldSlide(): "fade" | "slide" {
    return window.innerWidth < 640 ? "slide" : "fade";
}

export function useAosSlidingAnimation() {
    const [shouldSlide, setShouldSlide] = useState<"fade" | "slide">(handleShouldSlide());

    useEffect(() => {
        function handleWindowSizeChange() {
            setShouldSlide(handleShouldSlide());
        }
        window.addEventListener("resize", handleWindowSizeChange);

        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, [])

    return shouldSlide;
}