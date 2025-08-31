import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Inicio", url: "introduction" },
  { id: 2, name: "Sobre Silvia", url: "profile" },
  { id: 3, name: "Metodología", url: "metodologia" },
  { id: 4, name: "Beneficios", url: "beneficios" },
  { id: 5, name: "Planes", url: "planes" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 mt-20">
      {/* Main Footer */}
      <div className="content max-2xl:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#introduction" className="inline-flex items-center mb-6 group">
              <div className="relative">
                <img 
                  src={logo} 
                  className="h-12 w-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 object-contain" 
                  alt="Silvia Rivera Logo" 
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Silvia Rivera
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  Escritura para la Sanación
                </p>
              </div>
            </a>
            
            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
              Transforma tu dolor en palabras poderosas. Descubre la sanación 
              a través de la escritura terapéutica en nuestros talleres especializados.
            </p>
            
            {/* Social */}
            <a
              href="https://www.instagram.com/silvia98_rivera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Síguenos
            </a>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Explora el Taller
            </h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.url.toLowerCase()}`}
                  className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200 py-1 group"
                >
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-yellow-500 transition-colors"></span>
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Info Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Información del Taller
            </h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">📅</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Horarios</p>
                    <p className="text-gray-600">Sábados 5:00-7:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600">🎯</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Modalidad</p>
                    <p className="text-gray-600">8 sesiones virtuales</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center text-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600">🌍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Colombia (Online)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50/50">
        <div className="content max-2xl:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {copyrightYear} <span className="font-medium text-gray-900">Silvia Rivera</span> - Taller "Escritura para la Sanación"
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Desarrollado con</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>por</span>
              <a
                href="https://github.com/Stephania00"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-yellow-500 hover:text-yellow-600 transition-colors underline decoration-2 underline-offset-2"
              >
                Stephania
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
