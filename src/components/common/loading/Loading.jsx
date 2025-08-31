import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transition-opacity duration-300">
      {/* Loader principal */}
      <HashLoader 
        color="#ffbf00"           // ← Color brand coherente
        speedMultiplier={1.5}     // ← Ligeramente más lento, más elegante
        size={60}                 // ← Tamaño más equilibrado
      />
      
      {/* Texto opcional (elegante) */}
      <p className="mt-6 text-gray-600 text-sm font-medium animate-pulse">
        Cargando tu experiencia de sanación...
      </p>
    </div>
  );
};

export default Loading;
