import ServiceCard from "./ServiceCard";
import accountImage from "../../../assets/img/home/hero-account.png";
import storeImage from "../../../assets/img/home/store-inventory.png";
import hrImage from "../../../assets/img/home/hr.png";
import customerRel from "../../../assets/img/home/amico.png";
import crossPlatform from "../../../assets/img/home/cross-platform.png";
import budgeting from "../../../assets/img/home/pana.png";
import taskManagement from "../../../assets/img/home/rafiki.png";
import fileSharing from "../../../assets/img/home/file-sharing.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Accounting",
      // bgColor: "bg-yellow-100",
      bgColor: "bg-white",
      iconColor: "bg-yellow-200",
      icon: <div className="w-8 h-8 bg-yellow-600 rounded"></div>,
      img: accountImage,
    },
    {
      title: "Human Resources",
      bgColor: "bg-pink-100",
      iconColor: "bg-pink-200",
      icon: <div className="w-8 h-8 bg-pink-600 rounded"></div>,
      img: hrImage,
    },
    {
      title: "Store & Inventory Management",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-200",
      icon: <div className="w-8 h-8 bg-purple-600 rounded"></div>,
      img: storeImage,
    },
    {
      title: "Customer Relationship Management",
      bgColor: "bg-gray-100",
      iconColor: "bg-gray-200",
      icon: <div className="w-8 h-8 bg-gray-600 rounded"></div>,
      img: customerRel,
    },
    {
      title: "Projects Management",
      bgColor: "bg-red-100",
      iconColor: "bg-red-200",
      icon: <div className="w-8 h-8 bg-red-600 rounded"></div>,
      img: crossPlatform,
    },
    {
      title: "Budgeting",
      bgColor: "bg-yellow-100",
      iconColor: "bg-yellow-200",
      icon: <div className="w-8 h-8 bg-yellow-600 rounded"></div>,
      img: budgeting,
    },
    {
      title: "Task management",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-200",
      icon: <div className="w-8 h-8 bg-blue-600 rounded"></div>,
      img: taskManagement,
    },
    {
      title: "File and Document sharing",
      bgColor: "bg-red-100",
      iconColor: "bg-red-200",
      icon: <div className="w-8 h-8 bg-red-600 rounded"></div>,
      img: fileSharing,
    },
  ];

  return (
    // <div className="py-16 bg-gradient-to-b from-blue-300 to-blue-200">
    // <div className="pb-16 bg-gradient-to-r from-[#b4d7ff] via-[#aad2ff] to-blue-300">
        <div className="pb-16 pt-5 bg-gradient-to-t from-[#1b89e2] via-[#1b89e2] to-blue-300">

      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              bgColor={service.bgColor}
              iconColor={service.iconColor}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
