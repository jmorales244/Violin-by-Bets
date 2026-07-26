import "./Hero.css";
import HeroVideo from "../../../assets/videos/Hero-Intro-Video.mp4";

console.log(HeroVideo);

function Hero() {

    return (
        <section className="hero">

            {/* Background Media */}
            <div className="hero__media">

                <video
                    className="hero__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={HeroVideo}
                        type="video/mp4"
                    />
                </video>
                                   
                
            </div>

            {/* Dark overlay for readability */}

            <div className="hero__overlay"></div>

            {/* Hero Content */}

            <div className="hero__content">

                <p className="hero__brand test-font">
                    Violin by Bets
                </p>

                <p className="hero__eyebrow">
                    LIVE VIOLIN FOR WEDDINGS & EVENTS 
                    <br />
                    LOS ANGELES • CALIFORNIA
                </p>

                <h1 className="hero__title">
                    Every Moment 
                    <br />
                    Deserves 
                    <br />
                    A Beatiful Soundtrack
                </h1>

                <p className="hero__subtitle">
                    Elegant live violin performances for weddings, 
                    proposals, corporate events, and unforgettable 
                    celebrations.
                </p>

                <div className="hero__actions">

                    <button className="hero__button">
                        Reserve Your Date
                    </button>

                </div>

            </div>

            {/* Scroll Indicator */}

            <div className="hero__scroll">

                <span className="hero__scroll-text">
                    Scroll
                </span>

                <span className="hero__scroll-icon">
                    ↓
                </span>

            </div>
                    
        </section>
    );
}

export default Hero;