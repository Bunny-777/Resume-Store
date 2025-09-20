const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Hero Background with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-zoom"
          style={{
            backgroundImage: `url('https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/06/big_preview_land2.jpg')`,
            backgroundAttachment: "fixed",   
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen -mt-16">
        <div className="text-left max-w-4xl ml-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Grow your <span className="text-green-400">CV/Resume Website</span>
            <br />
            to the Next Level with <span className="text-green-400">ryanCV</span>
          </h1>
          
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Buy Theme Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
