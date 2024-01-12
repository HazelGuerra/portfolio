import React, { useState, useEffect } from "react";

import Desarrollo from "./assets/componentes/Info/Desarrollo";
import Navbar from "./assets/componentes/Nav/Encabezado";
import Footer from "./assets/componentes/Footer/Footer";
import Proyectos from "./assets/componentes/Proyectos/Proyectos";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app" style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      <Navbar />
      <Desarrollo />
      <Proyectos />
      <div className="rounded-full">
        {showScroll && (
          <button className="scroll-top-btn rounded-full " onClick={scrollTop}>
            Back to Top <i className="fa-solid fa-arrow-up"></i>
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
