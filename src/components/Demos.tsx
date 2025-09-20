interface DemosProps {
  darkMode: boolean;
}

const demos = [
  {
    id: 1,
    title: "Default",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo2.jpg",
  },
  {
    id: 2,
    title: "DataOps",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2024/06/preview.jpg",
  },
  {
    id: 3,
    title: "App Developer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2024/02/preview-1.jpg",
  },
  {
    id: 4,
    title: "Project Manager",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2025/01/preview.jpg",
  },
  {
    id: 5,
    title: "Game Developer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2024/08/preview.jpg",
  },
  {
    id: 6,
    title: "ML Engineer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2025/04/preview.jpg",
  },
  {
    id: 7,
    title: "System Engineer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo4.jpg",
  },
  {
    id: 8,
    title: "UI/UX Designer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/09/preview.jpg",
  },
  {
    id: 9,
    title: "Cybersecurity",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/06/preview.jpg",
  },
  {
    id: 10,
    title: "SEO Specialist",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/06/preview-1.jpg",
  },
  {
    id: 11,
    title: "Developer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo1.jpg",
  },
  {
    id: 12,
    title: "Business Consultant",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo6.jpg",
  },
  {
    id: 13,
    title: "Marketing Manager",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo7.jpg",
  },
  {
    id: 14,
    title: "Digital",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/03/preview-d.jpg",
  },
  {
    id: 15,
    title: "Classic",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo11.jpg",
  },
  {
    id: 16,
    title: "Designer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo3.jpg",
  },
  {
    id: 17,
    title: "Copywriter",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo5.jpg",
  },
  {
    id: 18,
    title: "Content Creator",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo8.jpg",
  },
  {
    id: 19,
    title: "Crypto Currency",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo9.jpg",
  },
  {
    id: 20,
    title: "Lawyer",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2022/07/demo10.jpg",
  },
  {
    id: 21,
    title: "RTL Demo",
    image: "https://landing.bslthemes.com/ryancv/wp-content/uploads/sites/2/2023/03/preview-rtl.png",
  }
];
const Demos = ({ darkMode }: DemosProps) => {
  return (
    <section
      id="demos"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Our Demos
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-white/80" : "text-gray-600"}`}>
            All Ready Pre-Built Demo:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className={`relative rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border ${
                darkMode
                  ? "bg-black border-gray-700 shadow-none"
                  : "bg-gray-100 border-gray-200 shadow-lg"
              }`}
            >
              <img
                src={demo.image}
                alt={demo.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className={`p-6 text-center transition-opacity duration-500 group-hover:opacity-0`}>
                <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {demo.title}
                </h3>
              </div>

              <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
