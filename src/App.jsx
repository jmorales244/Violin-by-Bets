import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;