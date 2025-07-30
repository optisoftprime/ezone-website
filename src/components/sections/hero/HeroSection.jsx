import appImage from "../../../assets/img/App.png"
import backgroundImage from "../../../assets/img/background-img.jpg" // Add your background image here

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to darken the background if needed */}
      {/* <div className="absolute inset-0 bg-black/10  "></div> */}

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Ezone Solutions
                <br />
                <span className="text-gray-700">
                  Automates Business Processes.
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed ">
                This innovative business Solution powered with AI will turn your
                business around. It's built for efficiency, transparency and
                improved turn around time.
              </p>
            </div>

            <button className="bg-[#0C0292] hover:bg-[#0C0292] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start My Free Trial
            </button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src={appImage} alt="Ezone Solutions Dashboard" className="w-full h-auto" />
            </div>

            {/* Floating Calendar Widget */}
            <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-xl p-4 w-32">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-gray-500">Dec 2024</div>
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
            <div className="absolute -left-6 top-1/2 bg-blue-500 text-white rounded-lg p-3 shadow-lg w-40">
              <div className="text-sm font-medium">New Message</div>
              <div className="text-xs opacity-90">
                Task completed successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection