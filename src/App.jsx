import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const loader = document.querySelector(".loader-wrapper");
const hideLoader = () => loader.classList.add("loader-hide");

function App() {
  useEffect(() => {
    hideLoader();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-screen min-h-[100vh] overflow-hidden flex flex-col">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
