// src/components/contact/Contact.jsx - VERSIÓN PROFESIONAL LIMPIA

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    pregunta: "¿Para quién es este taller?",
    respuesta: "Para toda persona que sepa escribir y busque sanación emocional a través de la escritura terapéutica.",
  },
  {
    pregunta: "¿Qué horarios maneja el taller?", 
    respuesta: "Sábados de 5:00 PM a 7:00 PM, 8 sesiones virtuales consecutivas.",
  },
  {
    pregunta: "¿Necesito experiencia previa escribiendo?",
    respuesta: "No necesitas ser escritor profesional. Solo ganas de explorar tus emociones a través de la palabra escrita.",
  },
  {
    pregunta: "¿Cómo son las sesiones virtuales?",
    respuesta: "Sesiones interactivas vía Zoom con ejercicios prácticos, reflexión grupal y acompañamiento personalizado.",
  },
  {
    pregunta: "¿Cuál es la metodología del taller?",
    respuesta: "Trabajamos con cuatro ejes: autoconocimiento, expresión emocional, técnicas narrativas y integración sanadora.",
  },
  {
    pregunta: "¿Qué necesito para participar?",
    respuesta: "Solo una conexión a internet estable, disposición para escribir y compartir en un espacio seguro y empático.",
  }
];

const Contact = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const abrirChatbot = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      alert('El asistente virtual se está configurando. Por ahora usa las preguntas frecuentes o visita nuestras redes sociales.');
    }
  };

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#f8fafc'}}>
      <div className="content max-2xl:px-6">
        
        {/* Header Elegante */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#003f59'}}>
            Preguntas Frecuentes
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-600">
            Encuentra respuestas a las dudas más comunes sobre el taller de escritura sanadora.
          </p>
        </div>

        {/* Chatbot Card Minimalista */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-lg mx-auto mb-16 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #003f59 0%, #ffbf00 100%)'}}>
              <FontAwesomeIcon icon={faRobot} className="text-2xl text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#003f59'}}>
            Asistente Virtual 24/7
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            ¿Tienes una pregunta específica que no encuentras aquí? Nuestro asistente virtual está disponible para ayudarte.
          </p>
          <button 
            onClick={abrirChatbot}
            className="w-full px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            style={{backgroundColor: '#003f59'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#002844'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#003f59'}
          >
            💬 Iniciar Conversación
          </button>
        </div>

        {/* FAQ Accordion Mejorado */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold pr-4" style={{color: '#003f59'}}>
                    {faq.pregunta}
                  </span>
                  <span className="text-2xl flex-shrink-0" style={{color: '#ffbf00'}}>
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje Final Profesional */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#003f59'}}>
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro asistente virtual está disponible las 24 horas para resolver cualquier duda específica que puedas tener.
            </p>
            
            <div className="flex justify-center items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <span className="text-xl mr-2" style={{color: '#ffbf00'}}>✓</span>
                <span>Respuesta inmediata</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2" style={{color: '#ffbf00'}}>✓</span>
                <span>Información actualizada</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2" style={{color: '#ffbf00'}}>✓</span>
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
