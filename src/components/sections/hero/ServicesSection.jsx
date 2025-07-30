import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Accounting",
      bgColor: "bg-yellow-100",
      iconColor: "bg-yellow-200",
      icon: <div className="w-8 h-8 bg-yellow-600 rounded"></div>,
    },
    {
      title: "Human Resources",
      bgColor: "bg-pink-100",
      iconColor: "bg-pink-200",
      icon: <div className="w-8 h-8 bg-pink-600 rounded"></div>,
    },
    {
      title: "Store & Inventory Management",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-200",
      icon: <div className="w-8 h-8 bg-purple-600 rounded"></div>,
    },
    {
      title: "Customer Relationship Management",
      bgColor: "bg-gray-100",
      iconColor: "bg-gray-200",
      icon: <div className="w-8 h-8 bg-gray-600 rounded"></div>,
    },
    {
      title: "Projects Management",
      bgColor: "bg-red-100",
      iconColor: "bg-red-200",
      icon: <div className="w-8 h-8 bg-red-600 rounded"></div>,
    },
    {
      title: "Budgeting",
      bgColor: "bg-yellow-100",
      iconColor: "bg-yellow-200",
      icon: <div className="w-8 h-8 bg-yellow-600 rounded"></div>,
    },
    {
      title: "Task management",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-200",
      icon: <div className="w-8 h-8 bg-blue-600 rounded"></div>,
    },
    {
      title: "File and Document sharing",
      bgColor: "bg-red-100",
      iconColor: "bg-red-200",
      icon: <div className="w-8 h-8 bg-red-600 rounded"></div>,
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-300 to-blue-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              bgColor={service.bgColor}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
