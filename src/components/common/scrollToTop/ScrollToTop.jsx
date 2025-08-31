import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ⚡ OPCIONES OPTIMIZADAS - MÁS RÁPIDO Y SUAVE
const options = {
  duration: 250,    // ← CAMBIO: 500ms → 250ms (2x más rápido)
  smooth: "easeInOutCubic",  // ← CAMBIO: mejor curva de aceleración
  offset: 0,        // ← NUEVO: asegurar posición exacta
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    
    // 🔧 OPTIMIZACIÓN: throttle para mejor performance
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
    };
  }, []);

  return (
    <div className="flex justify-end relative sm:me-10 z-10 transition-all">
      <button  // 
        onClick={scrollToTop}
        aria-label="Volver al inicio" 
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition-all duration-300 ease-out hover:scale-110 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white shadow-lg hover:shadow-xl ${
          position < 200 ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <FontAwesomeIcon icon={faAngleUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
