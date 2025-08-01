const ServiceCard = ({ icon, title, bgColor, img, iconColor }) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {/* <div className={`w-25 h-25 ${bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}> */}
      <div
        className={`w-25 h-25 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <div
          className={`w-16 h-16 bg-white rounded-lg flex items-center justify-center`}
        >
          {/* {icon} */}
          <img src={img} alt="Ezone Solutions Dashboard" />
        </div>
      </div>
      <p className="text-gray-800 font-normal text-sm leading-tight">{title}</p>
    </div>
  );
};

export default ServiceCard;
