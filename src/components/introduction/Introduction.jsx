import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Beneficios / Puntos destacados
const informationSummaryData = [
  {
    id: 1,
    title: "🌿 Ansiedad → Claridad",
    description: "Calma el caos mental",
  },
  {
    id: 2,
    title: "🌸 Heridas → Sanación", 
    description: "Procesa el dolor pasado",
  },
  {
    id: 3,
    title: "✍️ Silencio → Voz",
    description: "Encuentra tu expresión",
  },
];

const Introduction = () => {
  return (
    <div
      className="relative mx-auto max-w-7xl z-10 rounded-b-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:px-28 xl:pb-28 lg:px-20 lg:pb-20 md:px-16 md:pb-16 sm:px-10 sm:pb-10 px-6 pb-4 pt-16 lg:pt-24 xl:pt-32"
      id="introduction"
    >
      <div className="flex max-md:flex-col justify-center lg:justify-between items-center gap-8 lg:gap-12">
        {/* Contenido de texto con proporciones del Profile */}
        <div className="max-sm:w-full w-[38rem] lg:w-[40rem] max-md:text-center">
          {/* Título principal */}
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            ¿Sientes que tus emociones te desbordan pero no sabes cómo procesarlas?
          </h2>

          {/* Descripción principal */}
          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              <span className="bg-highlight">Escritura para la sanación:</span> 8 sesiones íntimas para transformar dolor en palabras, caos en claridad, y silencio en voz propia.
            </p>
            <p className="mt-3">
            </p>
          </div>

          {/* CTA Button - Actualizado con link hacia servicios */}
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#planes"
            >
              Reservar mi cupo ahora
            </a>
          </div>

          {/* Bullets destacados */}
          <div className="mt-8 max-md:flex max-md:justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
              {informationSummaryData.map((item) => (
                <InformationSummary key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="max-w-134 w-full h-full max-md:mx-auto aspect-[536/636] relative flex items-center">
          <img
            className="shadow-2xl shadow-gray-200 w-full h-full object-cover bg-white rounded-3xl"
            src={person}
            alt="Silvia Rivera - Facilitadora de Escritura Sanadora"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
