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
        video,
        layout,
        cta,
        href,
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
                className="service-card__media"
                variants={imageReveal}
            >

                {video ? (

                    <video
                        className="service-card__video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >

                        <source
                            src={video}
                            type="video/mp4"
                        />

                    </video>

                ) : image ? (

                    <img
                        src={image}
                        alt={title}
                        className="service-card__image"
                        loading="lazy"
                    />

                ) : (

                    <div className="service-card__placeholder" />

                )}

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

                <motion.a
                    href={href}
                    className="service-card__button"
                    variants={fadeUp}
                >
                    {cta}
                </motion.a>

            </div>

        </motion.article>

    );

}

export default ServiceCard;