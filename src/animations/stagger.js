import { transition } from "./transitions";

export const staggerContainer = {
    hidden: {},

    visible: {
        transition: {
            ...transition.normal,
            staggerChildren: 0.18,
            delayChildren: 0.1,
        },
    },
};

export const staggerFast = {
    hidden: {},

    visible: {
        transition: {
            ...transition.fast,
            staggerChildren: 0.08,
        },
    },
};