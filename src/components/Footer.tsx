interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className={`py-8 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900" // changed from bg-gray-100 to bg-gray-50
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm mb-4 md:mb-0`}>
            © 2025 ryanCV. All Rights Reserved.
          </div>

          <div className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
            Design by <span className="text-green-400 font-medium">ryan</span>
          </div>
        </div>
      </div>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.4 0-2.74-.35-3.9-.99L3 20l1.99-5.1C4.35 13.74 4 12.4 4 11c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
