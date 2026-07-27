import { useScroll, useTransform } from "motion/react";

export function useHeroParallax(distance = 120) {
    const { scrollY } = useScroll();

    const y = useTransform(
        scrollY,
        [0, 1000],
        [0, distance]
    );

    return y;
}

export function useImageParallax(distance = 80) {
    const { scrollY } = useScroll();

    const y = useTransform(
        scrollY,
        [0, 1200],
        [0, distance]
    );

    return y;
}