import PricingCard from "./PricingCard";

const pricingData = [
  {
    id: 1,
    type: "individual",
    title: "Sesión Individual",
    price: "50.000",
    currency: "$",
    period: "por sesión",
    features: [
      "1 sesión de 2 horas",
      "Acceso virtual",
      "Ejercicios guiados",
      "Material básico",
    ],
    buttonText: "Probar sesión",
    popular: false,
  },
  {
    id: 2,
    type: "complete",
    title: "Curso Completo",
    price: "250.000",
    currency: "$",
    period: "8 sesiones",
    features: [
      "8 sesiones de 2 horas",
      "Proceso completo de sanación",
      "Herramientas permanentes",
      "Acompañamiento personalizado",
    ],
    buttonText: "Inscribirme al curso",
    popular: true,
  },
];

const Planes = () => {
  return (
    <section
      className="relative py-16 overflow-hidden"
      // 👇 CORRECCIÓN #1: ID correcto para la navegación
      id="planes"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff9e6] via-[#f0f8ff] to-[#e8f4f8]"></div>
      
      {/* 👇 CORRECCIÓN #2: Eliminamos los ``` de la clase */}
      <div className="relative content px-4 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003f59] mb-3">
            Elige tu plan
          </h2>
          <div className="w-16 h-1 bg-[#ffbf00] mx-auto mb-4"></div>
          <p className="text-[#003f59]/80 max-w-xl mx-auto font-medium">
            <span className="font-bold">
              Virtual • Sábados 5:00-7:00 PM (Colombia)
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData.map((plan) => (
            <PricingCard plan={plan} key={plan.id} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#003f59]/70 text-sm">
            Para cualquier persona que sepa escribir
          </p>
        </div>
      </div>
    </section>
  );
};

export default Planes;

