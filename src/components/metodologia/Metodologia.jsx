import MetodologiaPasos from "./MetodologiaPasos";

const workStepData = [
  {
    id: 1,
    title: "Conexión",
    description: "Recuperar la sensación de conexión para habitar presencia, cuerpo y comunidad.",
    svgPath: "M12 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h.5 M15 14h1.5a2 2 0 0 1 0 4h-1.5 M13.5 16h3", // users-group
  },
  {
    id: 2,
    title: "Fortaleza", 
    description: "Recuperar la sensación de fortaleza para sostener límites, decisiones y foco creativo.",
    svgPath: "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3 M9 12l2 2l4 -4", // shield-check
  },
  {
    id: 3,
    title: "Compasión",
    description: "Recuperar la sensación de compasión para mirar(se) con amabilidad y ampliar posibilidades.",
    svgPath: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566z M12 6L8.7 9.7a1 1 0 0 0 1.4 1.4l1.9 -2.2l1.9 2.2a1 1 0 0 0 1.4 -1.4z", // heart-handshake
  },
  {
    id: 4,
    title: "Autopreservación",
    description: "Recuperar la sensación de autopreservación para cuidar energía, ritmos y procesos creativos.",
    svgPath: "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3 M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0 M12 12l0 2.5", // shield-lock
  },
];

const Metodologia = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="metodologia">
      <div className="content grid xl:grid-cols-2 xl:items-center px-4 lg:px-8 xl:px-12">
        
        {/* Columna Izquierda: Contenido Textual */}
        <div className="lg:pe-10 xl:pe-16 max-xs:mb-8 max-xl:mb-12">
          <h2 className="section-title max-xl:text-center mb-6">Metodología del Taller</h2>
          
          {/* Quote destacado con estilo elegante */}
          <div className="mb-8 p-6 bg-white rounded-xl border-l-4 border-[#ffbf00] shadow-lg">
            <blockquote className="text-lg font-medium text-gray-800 italic leading-relaxed">
              "La escritura es rebelde y transformadora; tiene el poder de cambiar el mundo y tú eres el mundo."
            </blockquote>
          </div>
          
          {/* Descripción mejorada */}
          <div className="space-y-4 mb-8">
            <p className="text-base lg:text-lg text-gray-600 max-xl:text-center leading-relaxed">
              Un recorrido en cuatro ejes: <span className="font-semibold text-[#003f59]">Conexión, Fortaleza, Compasión y Autopreservación</span> — para recuperar presencia a través de la escritura.
            </p>
            <p className="text-base lg:text-lg text-gray-600 max-xl:text-center leading-relaxed">
              Este es un curso para cualquier persona que sepa escribir y quiera sanar.
            </p>
          </div>
          
          {/* Temario en card elegante */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-xl:text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center max-xl:justify-center">
              <span className="w-3 h-3 bg-[#ffbf00] rounded-full mr-3"></span>
              Programa del Taller
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 max-xl:justify-center max-xl:flex-col max-xl:items-center">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#003f59]/10 text-[#003f59] text-sm font-semibold rounded-full">
                  Día 1-2
                </span>
                <span className="text-gray-600 text-sm lg:text-base">Recuperar la sensación de conexión</span>
              </div>
              <div className="flex items-start gap-3 max-xl:justify-center max-xl:flex-col max-xl:items-center">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#003f59]/10 text-[#003f59] text-sm font-semibold rounded-full">
                  Día 3-4
                </span>
                <span className="text-gray-600 text-sm lg:text-base">Recuperar la sensación de fortaleza</span>
              </div>
              <div className="flex items-start gap-3 max-xl:justify-center max-xl:flex-col max-xl:items-center">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#003f59]/10 text-[#003f59] text-sm font-semibold rounded-full">
                  Día 5-6
                </span>
                <span className="text-gray-600 text-sm lg:text-base">Recuperar la sensación de compasión</span>
              </div>
              <div className="flex items-start gap-3 max-xl:justify-center max-xl:flex-col max-xl:items-center">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-[#003f59]/10 text-[#003f59] text-sm font-semibold rounded-full">
                  Día 7-8
                </span>
                <span className="text-gray-600 text-sm lg:text-base">Recuperar la sensación de autopreservación</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Grid de Cards con tu espaciado original */}
        <div className="grid xs:grid-cols-2 gap-6 justify-center mx-auto">
          {workStepData.map((data, index) => {
            return (
              <div
                key={data.id}
                className={index % 2 == 1 ? "xs:mt-8" : ""}
              >
                <MetodologiaPasos
                  data={data}
                  style={`p-6 lg:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#003f59]/20 max-w-80 mx-auto`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
