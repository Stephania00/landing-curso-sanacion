import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
//  Actualice el nombre y la ruta del template
import TestimoniosTemplate from "./TestimoniosTemplate"; 
//  IMPORTANTE: Actualce el nombre del archivo CSS
import "./testimonios.css"; 

// --- DATOS DE TESTIMONIOS ACTUALIZADOS ---
const historiasReales = [
  {
    // Mensaje corto para el slide
    message:
      "Logré procesar un duelo que llevaba años cargando...",
    // Cita completa para el cuerpo del testimonio
    quote: `Después del taller, logré procesar un duelo que llevaba años cargando. La escritura me devolvió la paz y me dio herramientas que usaré toda la vida. Silvia crea un espacio seguro y lleno de compasión.`,
    // Nombre del participante
    name: "Ana María G.",
    // Descripción para dar contexto y credibilidad
    designation: "Participante del Taller, 34 años",
    // Foto (opcional, pero muy recomendado)
    photo: "/ruta/a/foto-ana-maria.jpg", 
  },
  {
    message:
      "Encontré calma en medio del caos de mi ansiedad...",
    quote: `Llevaba años sintiéndome abrumado por la ansiedad. Este taller no solo me enseñó a escribir, me enseñó a escucharme y a encontrar calma. Las 8 sesiones fueron un viaje transformador.`,
    name: "Carlos V.",
    designation: "Participante del Taller, 28 años",
    photo: "/ruta/a/foto-carlos.jpg",
  },
  {
    message:
      "Transformé mi dolor en mi mayor fortaleza...",
    quote: `Siempre pensé que mi pasado doloroso era una debilidad. Gracias a Silvia y al poder de la escritura, aprendí a verlo como mi mayor fuente de fortaleza y empatía. Recomiendo este taller al 100%.`,
    name: "Laura F.",
    designation: "Participante del Taller, 42 años",
    photo: "/ruta/a/foto-laura.jpg",
  },
];

// 👇 IMPORTANTE: Renombramos el componente
const Testimonios = () => {
  return (
    // Asignamos el ID para la navegación con scroll
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="flex mx-auto justify-center px-4 max-w-4xl">
        <div className="w-full h-full cursor-grab">
          {/* Título más potente y centrado */}
          <h2 className="section-title mb-12 text-center text-3xl font-bold">
            Historias de Transformación Real
          </h2>
          <Swiper
            id="testimonialSwiper"
            spaceBetween={30}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            {/* Mapeamos sobre los nuevos datos */}
            {historiasReales.map((testimonio, index) => (
              <SwiperSlide key={index}>
                {/* 👇 Pasamos los nuevos datos al template */}
                <TestimoniosTemplate testimonial={testimonio} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


export default Testimonios;

