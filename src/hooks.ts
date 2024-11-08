import { useEffect, useState } from "react";

export const useMainHeaderScroll = () => {
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollingUp(false);
            } else {
                setScrollingUp(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return { scrollingUp };
};
