import BeneficiosCard from "./BeneficiosCard";

const benefitsData = [
  {
    id: 1,
    icon: "🧠",
    title: "Claridad Mental",
    description: "Convierte pensamientos caóticos en reflexiones organizadas",
  },
  {
    id: 2,
    icon: "💪",
    title: "Fortaleza Emocional",
    description: "Procesarás traumas y experiencias difíciles de forma saludable",
  },
  {
    id: 3,
    icon: "✍️",
    title: "Herramientas Permanentes",
    description: "Técnicas que usarás toda la vida",
  },
  {
    id: 4,
    icon: "📖",
    title: "Creación Literaria",
    description: "Material poético y narrativo auténtico",
  },
];

// 👇 IMPORTANTE: Renombramos el componente
const Beneficios = () => {
  // 👇 IMPORTANTE: La función ahora apunta a la sección de #planes
  const scrollToPlanes = () => {
    const planesSection = document.getElementById("planes");
    if (planesSection) {
      planesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 👇 IMPORTANTE: Asignamos el ID correcto
    <section className="bg-white py-16 lg:py-24" id="beneficios">
      <div className="content px-4 lg:px-8 xl:px-12">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="section-title mb-6">Lo que lograrás en 8 sesiones</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Un proceso transformador que te llevará del caos emocional a la claridad personal, 
            usando la escritura como herramienta de sanación y autoconocimiento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {benefitsData.map((data) => (
            // 👇 IMPORTANTE: Usamos el nuevo nombre del componente hijo
            <BeneficiosCard data={data} key={data.id} />
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-[#003f59]/5 to-transparent rounded-2xl p-8 lg:p-12 mx-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Inicia tu proceso de sanación a través de la escritura
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Un taller íntimo para cualquier persona que sepa escribir y busque reconectar consigo misma a través de la palabra.
          </p>
          
          <button
            // 👇 IMPORTANTE: Asignamos la función correcta
            onClick={scrollToPlanes}
            className="group inline-flex items-center justify-center btn btn-primary text-lg font-semibold px-10 py-4 hover:scale-105 transition-all duration-300 min-w-[280px] h-[56px]"
          >
            <span className="flex items-center gap-2">
              Ver planes y precios
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            ✨ Modalidad virtual • Sábados 5:00 PM - 7:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

// 👇 IMPORTANTE: Exportamos con el nuevo nombre
export default Beneficios;
