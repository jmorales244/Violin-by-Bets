import { useState } from "react";

import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(previous => !previous);
    }

    return (

        <>
            <header className="navbar">

                <button
                    className="navbar__brand"
                    aria-label="Home"
                >
                    VB
                </button>

                <button
                    className="navbar__menu-button"
                    onClick={toggleMenu}
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