import { transition } from "./transitions";

export const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 100% 0 0)",
    },

    visible: {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0 0% 0 0)",
        transition: transition.luxury,
    },
};

export const textReveal = {
    hidden: {
        opacity: 0,
        y: 60,
        clipPath: "inset(100% 0 0 0)",
    },

    visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        transition: transition.luxury,
    },
};