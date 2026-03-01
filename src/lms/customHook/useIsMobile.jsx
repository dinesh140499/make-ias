import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
    const mediaQuery = `(max-width: ${breakpoint}px)`;
    const checkMobile = () => window.matchMedia(mediaQuery).matches;

    const [isMobile, setIsMobile] = useState(checkMobile());

    useEffect(() => {
        const mediaWatcher = window.matchMedia(mediaQuery);

        const updateState = (event) => setIsMobile(event.matches);

        if (mediaWatcher.addEventListener) {
            mediaWatcher.addEventListener("change", updateState);
        } else {
            mediaWatcher.addListener(updateState);
        }

        return () => {
            if (mediaWatcher.removeEventListener) {
                mediaWatcher.removeEventListener("change", updateState);
            } else {
                mediaWatcher.removeListener(updateState);
            }
        };
    }, [mediaQuery]);

    return isMobile;
};

export default useIsMobile;
