import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Services from "./components/sections/Services/Services"
import WhyBets from "./components/sections/WhyBetsabe/WhyBets";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyBets/>
      <Footer />
    </>
  );
}

export default App;