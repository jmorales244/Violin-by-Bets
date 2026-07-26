import { useState } from "react";

import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((previous) => !previous);
    }

    return (
        <>
            <header
                className={`navbar ${
                    isMenuOpen ? "navbar--menu-open" : ""
                }`}
            >
                <button
                    className="navbar__brand"
                    aria-label="Go to homepage"
                >
                    VB
                </button>

                <button
                    className={`navbar__menu-button ${
                        isMenuOpen ? "navbar__menu-button--open" : ""
                    }`}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
            </header>

            <NavbarMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
            />
        </>
    );
}

export default Navbar;