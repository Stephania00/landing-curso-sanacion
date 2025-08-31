import { useState } from "react";

const PricingCard = ({ plan }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white rounded-xl p-6 transition-all duration-300 ${
        plan.popular 
          ? 'border-4 border-[#003f59] shadow-2xl transform -translate-y-3 ring-4 ring-[#003f59]/20' 
          : 'border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      
      {/* Badge Premium - Azul para generar CONFIANZA */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#003f59] to-[#004a6b] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
            Más Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold mb-3 ${
          plan.popular ? 'text-[#003f59]' : 'text-gray-900'
        }`}>
          {plan.title}
        </h3>
        
        {/* Price - MÁS PROMINENTE para el plan popular */}
        <div className="mb-4">
          <span className={`font-bold ${
            plan.popular 
              ? 'text-4xl text-[#003f59]' 
              : 'text-3xl text-gray-900'
          }`}>
            {plan.currency}{plan.price}
          </span>
          <span className="text-gray-600 text-sm block mt-1">
            {plan.period}
          </span>
        </div>

        {/* Value proposition para plan popular */}
        {plan.popular && (
          <p className="text-[#003f59]/80 text-sm font-medium bg-[#003f59]/5 px-3 py-2 rounded-lg">
            ¡Ahorra $150.000 vs sesiones individuales!
          </p>
        )}
      </div>

      {/* Features */}
      <div className="mb-6">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                plan.popular ? 'bg-[#003f59]' : 'bg-green-500'
              }`}>
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className={plan.popular ? 'text-gray-800 font-medium' : 'text-gray-700'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button con HOVER AMARILLO para crear urgencia */}
      <button className={`w-full py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
        plan.popular
          ? 'bg-[#003f59] text-white hover:bg-[#ffbf00] hover:text-[#003f59] hover:scale-105 shadow-lg'
          : 'bg-gray-900 text-white hover:bg-[#ffbf00] hover:text-gray-900 hover:scale-102'
      }`}>
        {plan.buttonText}
      </button>

      {/* Elemento decorativo para plan popular */}
      {plan.popular && (
        <div className="absolute top-3 right-3">
          <div className="w-3 h-3 bg-[#ffbf00] rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;