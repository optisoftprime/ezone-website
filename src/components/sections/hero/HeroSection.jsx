import { useEffect, useState } from "react";
import appImage from "../../../assets/img/home/app-desktop-image.png";
import { handleRoute } from "../../../utis/route-function";
// import backgroundImage from "../../../assets/img/background-img.jpg"

// const HeroSection = () => {
//   return (
//     <div
//       className="relative min-h-screen overflow-hidden"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* Optional overlay to darken the background if needed */}
//       {/* <div className="absolute inset-0 bg-black/10  "></div> */}

//       <div className="relative z-10 container mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div className="space-y-6">
//               <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
//                 Ezone Solutions
//                 <br />
//                 <span className="text-gray-700">
//                   Automates Business Processes.
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-700 leading-relaxed ">
//                 This innovative business Solution powered with AI will turn your
//                 business around. It's built for efficiency, transparency and
//                 improved turn around time.
//               </p>
//             </div>

//             <button className="bg-[#0C0292] hover:bg-[#0C0292] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
//               Start My Free Trial
//             </button>
//           </div>

//           {/* Right Content - Dashboard Preview */}
//           <div className="relative">
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
//               <img src={appImage} alt="Ezone Solutions Dashboard" className="w-full h-auto" />
//             </div>

//             {/* Floating Calendar Widget */}
//             <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-xl p-4 w-32">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">10</div>
//                 <div className="text-xs text-gray-500">Dec 2024</div>
//                 <div className="grid grid-cols-7 gap-1 mt-2 text-xs">
//                   <div className="text-center text-gray-400">S</div>
//                   <div className="text-center text-gray-400">M</div>
//                   <div className="text-center text-gray-400">T</div>
//                   <div className="text-center text-gray-400">W</div>
//                   <div className="text-center text-gray-400">T</div>
//                   <div className="text-center text-gray-400">F</div>
//                   <div className="text-center text-gray-400">S</div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Notification */}
//             <div className="absolute -left-6 top-1/2 bg-blue-500 text-white rounded-lg p-3 shadow-lg w-40">
//               <div className="text-sm font-medium">New Message</div>
//               <div className="text-xs opacity-90">
//                 Task completed successfully
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection

const HeroSection = () => {
  console.log(Date.now());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date()); // update every 60 seconds
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // e.g. Dec
  const year = date.getFullYear();
  return (
    // <div className="relative min-h-auto bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 overflow-hidden">
    <div className="relative min-h-auto bg-gradient-to-b from-white via-[#cbedf9] to-blue-300 overflow-hidden">
      {/* Background City Illustration */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          {/* City skyline with buildings */}
          <rect
            x="100"
            y="400"
            width="60"
            height="200"
            fill="#4A90E2"
            opacity="0.6"
          />
          <rect
            x="180"
            y="350"
            width="80"
            height="250"
            fill="#5BA0F2"
            opacity="0.7"
          />
          <rect
            x="280"
            y="300"
            width="70"
            height="300"
            fill="#6BB0FF"
            opacity="0.6"
          />
          <rect
            x="370"
            y="380"
            width="90"
            height="220"
            fill="#4A90E2"
            opacity="0.8"
          />
          <rect
            x="480"
            y="320"
            width="75"
            height="280"
            fill="#5BA0F2"
            opacity="0.7"
          />
          <rect
            x="580"
            y="360"
            width="85"
            height="240"
            fill="#6BB0FF"
            opacity="0.6"
          />
          <rect
            x="690"
            y="290"
            width="95"
            height="310"
            fill="#4A90E2"
            opacity="0.8"
          />
          <rect
            x="810"
            y="340"
            width="80"
            height="260"
            fill="#5BA0F2"
            opacity="0.7"
          />

          {/* Windows on buildings */}
          <rect
            x="110"
            y="420"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="125"
            y="420"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="140"
            y="420"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="110"
            y="440"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="125"
            y="440"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="140"
            y="440"
            width="8"
            height="8"
            fill="#FFF"
            opacity="0.8"
          />

          {/* More windows on other buildings */}
          <rect
            x="200"
            y="370"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="220"
            y="370"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="240"
            y="370"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="200"
            y="390"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="220"
            y="390"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
          <rect
            x="240"
            y="390"
            width="10"
            height="10"
            fill="#FFF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Cloud shapes */}
      <div className="absolute top-20 left-20 w-24 h-12 bg-white opacity-40 rounded-full"></div>
      <div className="absolute top-32 left-40 w-32 h-16 bg-white opacity-30 rounded-full"></div>
      <div className="absolute top-16 right-32 w-28 h-14 bg-white opacity-40 rounded-full"></div>
      <div className="absolute top-40 right-64 w-36 h-18 bg-white opacity-35 rounded-full"></div>

      <div className="relative z-10 container mx-auto px-6 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
                Ezone Solutions
                <br />
                <span className="text-[#222222]">
                  Automates Business Processes.
                </span>
              </h1>

              <p className="text-xl text-[#222222] leading-relaxed ">
                This innovative business Solution powered with AI will turn your
                business around. It's built for efficiency, transparency and
                improved turn around time.
              </p>
            </div>

            <button
              onClick={handleRoute}
              className="bg-[#0c0292] hover:bg-[#0c0292] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Start My Free Trial
            </button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="hidden md:block relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Dashboard Header */}
              {/* <div className="bg-blue-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <span className="font-semibold">E ZONE</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div> */}

              {/* Dashboard Content */}

              <img src={appImage} />
            </div>

            {/* Floating Calendar Widget */}
            <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-xl p-4 w-32">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{day}</div>
                <div className="text-xs text-gray-500">
                  {month} {year}
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2 text-xs">
                  <div className="text-center text-gray-400">S</div>
                  <div className="text-center text-gray-400">M</div>
                  <div className="text-center text-gray-400">T</div>
                  <div className="text-center text-gray-400">W</div>
                  <div className="text-center text-gray-400">T</div>
                  <div className="text-center text-gray-400">F</div>
                  <div className="text-center text-gray-400">S</div>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            {/* <div className="absolute -left-6 top-1/2 bg-blue-500 text-white rounded-lg p-3 shadow-lg w-40">
              <div className="text-sm font-medium">New Message</div>
              <div className="text-xs opacity-90">Task completed successfully</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
