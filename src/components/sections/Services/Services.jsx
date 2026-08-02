import { motion } from "motion/react";

import "./services.css";

import ServiceCard from "./ServiceCard";

import { services } from "../../../constants/Services";

import {
    fadeUp,
    staggerContainer,
} from "../../../animations";

import { animationConfig } from "../../../config/animationConfig";

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