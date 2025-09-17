import { Play } from "lucide-react";

const Installation = () => {
  return (
    // Set min-height to screen height and use flexbox for centering
    <section id="installation" className="bg-white min-h-screen flex items-center">
      {/* Removed vertical padding (py-10) as flexbox now handles centering */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Installation Guide
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            How to install theme, all plugins & import demo content.
          </p>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-md">
            <Play size={20} className="text-white" />
            Watch Video
          </button>
        </div>

        {/* Right image with play button */}
        <div className="relative">
          <img
            src="https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/06/big_preview_land-950x633.jpg"
            alt="Installation Preview"
            className="rounded-xl shadow-lg"
          />
          {/* Play button overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
              <Play size={28} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Installation;