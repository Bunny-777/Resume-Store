interface FeaturesProps {
  darkMode: boolean;
}

const Features = ({ darkMode }: FeaturesProps) => {
  const features = [
    { title: "Elementor Page Builder", description: "Create beautiful page layouts without coding.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature1.png" },
    { title: "WooCommerce Shop", description: "Compatible with WooCommerce plugin.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature3.png" },
    { title: "Animated Backgrounds", description: "17+ skins with custom color customization.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature2.png" },
    { title: "Dark Mode Support", description: "Toggle dark mode for better experience.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature8.jpg" },
    { title: "Skills", description: "with Percent & Dotted Bar, Circles, Knowledge.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature10.jpg" },
    { title: "Best vCard Customization", description: "easily configure: Cards color, Icons styles, Cards styles, Profile layouts.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature6.jpg" },
    { title: "One-Click Demo Import", description: "Quickly set up your website with one click.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/oneclick.jpg" },
    { title: "Powerful Portfolio", description: "with lightbox: Image, Gallery, Media, Video, Audio, Link.", image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/feature5.jpg" },
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
  darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
}`} id="features">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Main Features</h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
            A List Of Theme Features And New Coming Soon
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl w-full lg:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
