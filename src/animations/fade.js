import { transition } from "./transitions";

export const fade = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: transition.normal,
    },
};

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: transition.normal,
    },
};

export const fadeDown = {
    hidden: {
        opacity: 0,
        y: -40,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: transition.normal,
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -40,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: transition.normal,
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 40,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: transition.normal,
    },
};