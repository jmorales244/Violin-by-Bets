import { motion } from "motion/react";

import "./Services.css";
import ServiceCard from "./ServiceCard";

import {
    fadeUp,
    staggerContainer,
} from "../../../animations";

import { animationConfig } from "../../../config/animationConfig";

// Temporary data until we create constants/services.js
const services = [
    {
        id: 1,
        title: "Wedding Ceremonies",
        description:
            "Elegant live violin performances designed to elevate every unforgettable moment of your ceremony.",
        image: null,
        layout: "left",
    },
    {
        id: 2,
        title: "Private Celebrations",
        description:
            "Birthdays, anniversaries, and intimate gatherings accompanied by beautiful live music.",
        image: null,
        layout: "right",
    },
    {
        id: 3,
        title: "Corporate Events",
        description:
            "Sophisticated performances that create a refined atmosphere for corporate occasions.",
        image: null,
        layout: "left",
    },
    {
        id: 4,
        title: "Proposals & Special Moments",
        description:
            "Personalized violin performances crafted for life's most meaningful memories.",
        image: null,
        layout: "right",
    },
];

function Services() {
    return (
        <motion.section
            className="services"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={animationConfig.viewport}
        >
            <div className="services__container">

                <motion.div
                    className="services__header"
                    variants={fadeUp}
                >
                    <p className="services__eyebrow">
                        SERVICES
                    </p>

                    <h2 className="services__title">
                        Crafting
                        <br />
                        Unforgettable
                        <br />
                        Experiences
                    </h2>

                    <p className="services__description">
                        Every performance is carefully curated to reflect
                        the emotion, elegance, and atmosphere of your
                        celebration.
                    </p>
                </motion.div>

                <div className="services__list">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>

            </div>
        </motion.section>
    );
}

export default Services;