import { motion } from "motion/react";

import {
    fadeUp,
    imageReveal,
} from "../../../animations";

function FeatureCard({ feature }) {

    const {
        number,
        eyebrow,
        title,
        description,
        media,
        cta,
        href,
    } = feature;

    return (

        <motion.article
            className="feature-card"
            variants={fadeUp}
        >

            {/* ==========================
                MEDIA
            ========================== */}

            {media && (

                <motion.div
                    className="feature-card__media"
                    variants={imageReveal}
                >

                    {media.type === "video" ? (

                        <video
                            className="feature-card__video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >

                            <source
                                src={media.src}
                                type="video/mp4"
                            />

                        </video>

                    ) : (

                        <img
                            src={media.src}
                            alt={title}
                            className="feature-card__image"
                            loading="lazy"
                        />

                    )}

                </motion.div>

            )}

            {/* ==========================
                CONTENT
            ========================== */}

            <div className="feature-card__content">

            <span className="feature-card__number">
                {number}
            </span>

            <motion.p
                className="feature-card__eyebrow"
                variants={fadeUp}
            >
                {eyebrow}
            </motion.p>

            <motion.h3
                className="feature-card__title"
                variants={fadeUp}
            >
                {title}
            </motion.h3>

            <motion.p
                className="feature-card__description"
                variants={fadeUp}
            >
                {description}
            </motion.p>

            <motion.a
                href={href}
                className="feature-card__link"
                variants={fadeUp}
            >
                {cta}
            </motion.a>

        </div>
        </motion.article>

    );

}

export default FeatureCard;