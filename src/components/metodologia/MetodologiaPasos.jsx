import { useState } from "react";

// 👇 IMPORTANTE: Renombramos el componente
const MetodologiaPasos = ({ data, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group ${style}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isHovered
              ? "bg-[#003f59] text-white scale-110 shadow-lg"
              : "bg-gray-100 text-[#003f59]"
          }`}
        >
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            aria-hidden="true"
          >
            <path d={data.svgPath} />
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#003f59] transition-colors duration-300">
          {data.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

// 👇 IMPORTANTE: Exportamos con el nombre correcto
export default MetodologiaPasos;
