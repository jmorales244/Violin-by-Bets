import { transition } from "./transitions";

export const slideLeft = {
    hidden: {
        x: -120,
    },

    visible: {
        x: 0,
        transition: transition.slow,
    },
};

export const slideRight = {
    hidden: {
        x: 120,
    },

    visible: {
        x: 0,
        transition: transition.slow,
    },
};

export const slideUp = {
    hidden: {
        y: 120,
    },

    visible: {
        y: 0,
        transition: transition.slow,
    },
};

export const slideDown = {
    hidden: {
        y: -120,
    },

    visible: {
        y: 0,
        transition: transition.slow,
    },
};