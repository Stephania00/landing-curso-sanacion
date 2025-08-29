import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Beneficios / Puntos destacados
const informationSummaryData = [
  {
    id: 1,
    title: "🌿 Conexión",
    description: "Emociones profundas",
  },
  {
    id: 2,
    title: "✍️ Escritura",
    description: "Herramientas sanadoras",
  },
  {
    id: 3,
    title: "🌸 Fortaleza",
    description: "Cuidado y compasión",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          {/* Título emocional */}
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Encuentra tu calma
          </p>

          {/* Subtítulo liberador */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <span className="bg-highlight">Escritura para la sanación</span> 
            es un taller íntimo para transformar emociones, recuerdos y deseos 
            en claridad, fortaleza y conexión contigo misma.
          </p>

          {/* CTA principal */}
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Inscríbete ahora – Cupos limitados
            </a>
          </p>

          {/* Frase inspiradora debajo del CTA */}
          <p className="text-xs lg:text-sm italic mt-4 opacity-80">
            La sociedad premia la productividad y castiga la sensibilidad. Este taller es un refugio y una resistencia a la exigencia que olvida sentir.
          </p>
        </div>

        {/* Bullets destacados */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
