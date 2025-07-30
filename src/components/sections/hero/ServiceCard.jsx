const ServiceCard = ({ icon, title, bgColor, iconColor }) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      <div className={`w-32 h-32 ${bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <div className={`w-16 h-16 ${iconColor} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <h3 className="text-gray-800 font-medium text-sm max-w-24 leading-tight">
        {title}
      </h3>
    </div>
  );
};


export default ServiceCard