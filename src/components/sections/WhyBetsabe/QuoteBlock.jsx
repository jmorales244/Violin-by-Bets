import { motion } from "motion/react";

import { fadeUp } from "../../../animations";

function QuoteBlock() {

    return (

        <motion.blockquote
            className="quote-block"
            variants={fadeUp}
        >

            <p className="quote-block__text">
                Music has the power to make
                beautiful moments unforgettable.
            </p>

            <footer className="quote-block__author">
                — Bets
            </footer>

        </motion.blockquote>

    );

}

export default QuoteBlock;