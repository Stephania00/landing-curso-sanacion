import { useState } from "react";

const PricingCard = ({ plan }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
        plan.popular 
          ? 'transform -translate-y-4 border-4 border-[#ffbf00] shadow-2xl' 
          : 'hover:-translate-y-2 border border-gray-200 shadow-xl hover:shadow-2xl'
      }`}
    >
      
      {/* Badge Popular */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#ffbf00] to-[#ffd700] text-[#003f59] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            Recomendado
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-[#003f59]' : 'text-gray-900'}`}>
          {plan.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          {plan.description}
        </p>
        
        {/* Price */}
        <div className="mb-4">
          <span className={`text-5xl font-bold ${plan.popular ? 'text-[#003f59]' : 'text-gray-900'}`}>
            {plan.currency}{plan.price.toLocaleString()}
          </span>
          <span className="text-gray-600 text-lg ml-2">
            {plan.period}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                plan.popular ? 'bg-[#ffbf00]' : 'bg-gray-200'
              }`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
        plan.popular
          ? 'bg-[#003f59] text-white hover:bg-[#004a6b] hover:scale-105 shadow-lg'
          : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
      }`}>
        {plan.buttonText}
      </button>

      {/* Hover effect border */}
      {!plan.popular && (
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 ${
          isHovered ? 'border-[#ffbf00]/30' : ''
        }`}></div>
      )}
    </div>
  );
};

export default PricingCard;
