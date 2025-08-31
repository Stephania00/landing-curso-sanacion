const InformationSummary = ({ item }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center text-center rounded-2xl shadow-md border border-[#003f59]/20 transition-transform hover:scale-105 hover:shadow-lg duration-300 p-4 sm:p-6 lg:p-8 h-full min-h-[120px] sm:min-h-[140px]">
      
      {/* Título principal */}
      <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#003f59] leading-snug mb-3">
        {item.description}
      </p>

      {/* Subtítulo */}
      <p className="text-xs sm:text-sm font-normal text-gray-600 mb-4">
        {item.title}
      </p>

      {/* Línea decorativa */}
      <div className="h-[3px] w-8 sm:w-12 rounded-full bg-[#ffbf00]" />
    </div>
  );
};

export default InformationSummary;
