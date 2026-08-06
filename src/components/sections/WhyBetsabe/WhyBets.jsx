import { motion } from "motion/react";

import "./WhyBets.css";

import {
    fadeUp,
    staggerContainer,
} from "../../../animations";

import { animationConfig } from "../../../config/animationConfig";

function WhyBets() {

    return (

        <motion.section
            className="why-bets"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={animationConfig.viewport}
        >

            <div className="why-bets__container">

                {/* ==========================
                    SECTION HEADER
                ========================== */}

                <motion.header
                    className="why-bets__header"
                    variants={fadeUp}
                >

                    <p className="why-bets__eyebrow">

                        MEET BETS

                    </p>

                    <h2 className="why-bets__title">

                        More Than
                        <br />
                        Beautiful Music

                    </h2>

                    <p className="why-bets__description">

                        A memorable performance begins long before
                        the first note is played. Every detail is
                        thoughtfully prepared to create an elegant,
                        stress-free experience for you and your guests.

                    </p>

                </motion.header>

                {/* ==========================
                    FEATURED MEDIA
                ========================== */}

                <motion.div
                    className="why-bets__media"
                    variants={fadeUp}
                >

                    {/* Image or video goes here */}

                </motion.div>

                {/* ==========================
                    FEATURES GRID
                ========================== */}

                <div className="why-highlights">

                    {/* FeatureCard components */}

                </div>

                {/* ==========================
                    CLOSING STATEMENT
                ========================== */}

                <motion.blockquote
                    className="why-bets__quote"
                    variants={fadeUp}
                >

                    "Every love story deserves a soundtrack
                    as unforgettable as the moment itself."

                </motion.blockquote>

            </div>

        </motion.section>

    );

}

export default WhyBets;