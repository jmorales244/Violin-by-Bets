import { motion } from "motion/react";

import { portraits } from "../../../constants/Portraits";

function PortraitShowcase() {

    return (

        <motion.div
            className="portrait-showcase"
        >

            <img
                src={portraits[0]}
                alt="Bets performing violin"
                className="portrait-showcase__image"
            />

        </motion.div>

    );

}

export default PortraitShowcase;