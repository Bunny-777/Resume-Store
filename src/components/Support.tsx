interface SupportProps {
  darkMode: boolean;
}

const Support = ({ darkMode }: SupportProps) => {
  return (
    <section className={`py-20 transition-colors duration-300 ${
  darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
}`} id="support">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Our support team is always here to help you with installation, customization, or troubleshooting.  
          Get in touch and we’ll assist you within 24 hours.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:support@ryan202410@gmail.com"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            Email Support
          </a>

          <a
            href="#"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            Live Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;
