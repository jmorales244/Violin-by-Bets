import { motion } from "motion/react";

import {
    fadeUp,
    imageReveal,
    staggerContainer,
} from "../../../animations";

import { animationConfig } from "../../../config/animationConfig";

function ServiceCard({ service }) {

    const {
        title,
        description,
        image,
        layout,
    } = service;

    return (
        <motion.article
            className={`service-card service-card--${layout}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={animationConfig.viewport}
        >

            <motion.div
                className="service-card__image-wrapper"
                variants={imageReveal}
            >
                <img
                    src={image}
                    alt={title}
                    className="service-card__image"
                    loading="lazy"
                />
            </motion.div>

            <div className="service-card__content">

                <motion.h3
                    className="service-card__title"
                    variants={fadeUp}
                >
                    {title}
                </motion.h3>

                <motion.p
                    className="service-card__description"
                    variants={fadeUp}
                >
                    {description}
                </motion.p>

                <motion.button
                    className="service-card__button"
                    variants={fadeUp}
                >
                    Learn More
                </motion.button>

            </div>

        </motion.article>
    );
}

export default ServiceCard;