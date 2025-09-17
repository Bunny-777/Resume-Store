const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center space-x-2">
              <img
                src="https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/ryan_bg2.png"
                alt="RyanCV Logo"
                className="h-8"
              />
            </div> */}
            <div className="flex items-center space-x-2">
  <a href="#top" onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}>
    <img
      src="https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/ryan_bg2.png"
      alt="RyanCV Logo"
      className="h-8 cursor-pointer"
    />
  </a>
</div>


          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#demos"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Our Demos
            </a>
            <a
              href="#installation"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Installation
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#reviews"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Reviews
            </a>
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
