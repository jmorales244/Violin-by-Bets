import "./NavbarMenu.css";

function NavbarMenu({ isOpen, onClose }) {

    return (

        <aside
            className={`navbar-menu ${isOpen ? "navbar-menu--open" : ""}`}
        >

            <div className="navbar-menu__content">

                <a href="#">
                    Reserve Your Date
                </a>

                <nav className="navbar-menu__links">

                    <a href="#">Weddings</a>

                    <a href="#">Private Events</a>

                    <a href="#">Corporate Events</a>

                    <a href="#">Gallery</a>

                    <a href="#">About Bets</a>

                    <a href="#">Contact</a>

                </nav>

                <div className="navbar-menu__socials">

                    <a href="#">Instagram</a>

                    <a href="#">TikTok</a>

                    <a href="#">Email</a>

                </div>

            </div>

        </aside>

    );

}

export default NavbarMenu;