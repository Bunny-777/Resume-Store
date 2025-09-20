const GrowYourCV = () => {
  return (
    <section id="GrowYourCV" className="relative min-h-screen overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/footerbg.jpg')`
    }}>
      {/* Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight text-shadow">
            Grow your <span className="text-green-400">CV/Resume Website</span>
            <br />
            to the Next Level with <span className="text-green-400">ryanCV</span>
          </h1>
          
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl btn-animate">
            Buy Theme Now
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default GrowYourCV;