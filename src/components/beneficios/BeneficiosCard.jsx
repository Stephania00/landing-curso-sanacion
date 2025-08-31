import { useState } from "react";

const BeneficiosCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#003f59]/20 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icono */}
      <div className="mb-6">
        <div 
          className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 ${
            isHovered 
              ? "bg-[#003f59] transform scale-110 shadow-lg shadow-[#003f59]/30" 
              : "bg-gray-50 group-hover:bg-gray-100"
          }`}
        >
          {isHovered ? (
            <span className="text-white text-2xl">✨</span>
          ) : (
            <span>{data?.icon}</span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#003f59] transition-colors duration-300 mb-4">
          {data?.title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {data?.description}
        </p>
      </div>

      {/* Elemento decorativo */}
      <div 
        className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#ffbf00]/20 to-transparent rounded-full transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

// 👇 IMPORTANTE: Exportamos con el nombre correcto
export default BeneficiosCard;
