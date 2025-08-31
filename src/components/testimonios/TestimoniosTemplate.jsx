//  Renombre el componente
const TestimoniosTemplate = ({ testimonial }) => {
  return (
    // Contenedor principal del testimonio con un diseño de tarjeta
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-lg h-full max-w-2xl mx-auto">
      
      {/* Foto del participante importante para la credibilidad */}
      {testimonial.photo && (
        <img
          src={testimonial.photo}
          alt={`Foto de ${testimonial.name}`}
          className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-yellow-400"
        />
      )}

      {/* Cita principal - El corazón del testimonio */}
      <blockquote className="text-lg md:text-xl font-medium text-gray-800 italic mb-6 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      {/* Separador visual */}
      <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>

      {/* Información del autor del testimonio */}
      <div className="mt-auto">
        <p className="text-xl font-semibold text-blue-900 mb-1">
          {testimonial.name}
        </p>
        <p className="text-base font-light text-gray-600">
          {testimonial.designation}
        </p>
      </div>
      
    </div>
  );
};


export default TestimoniosTemplate;

