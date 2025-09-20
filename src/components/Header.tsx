import { Sun, Moon } from "lucide-react";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm transition-colors duration-300 ${
        darkMode ? "bg-black/95 text-white" : "bg-white/95 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center space-x-1 text-2xl font-bold cursor-pointer"
            >
              {/* B Logo Image */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Eo_circle_green_letter-b.svg/2048px-Eo_circle_green_letter-b.svg.png"
                alt="B Logo"
                className="h-8 w-8"
              />

              {/* unny Text */}
              <span className={darkMode ? "text-white" : "text-black"}>
                unny
              </span>
            </a>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#profile"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Profile
            </a>
            <a
              href="#demos"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Our Demos
            </a>
            <a
              href="#installation"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Installation
            </a>
            <a
              href="#features"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Features
            </a>
            <a
              href="#reviews"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Reviews
            </a>
            <a
              href="#support"
              className={`transition-colors duration-200 ${
                darkMode
                  ? "hover:text-green-400 text-white"
                  : "hover:text-green-500 text-gray-900"
              }`}
            >
              Support
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-colors duration-300 ${
                darkMode
                  ? "border-gray-600 hover:bg-gray-900"
                  : "border-gray-300 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Buy Now */}
            <a href="#GrowYourCV">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
