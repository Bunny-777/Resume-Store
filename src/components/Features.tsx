const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Main Features</h2>
          <p className="text-lg text-gray-500">
            A List Of Theme Features And New Coming Soon
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Elementor Page Builder Feature */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                    <span className="font-semibold text-gray-800">elementor</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">Drag & Drop</div>
                  <div className="text-sm font-medium text-gray-800">Page Builder</div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                      alt="Profile" 
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">Ryan Adlard</h4>
                      <div className="flex text-yellow-400 text-sm mb-2">
                        ★★★★★
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Elementor Page Builder</h3>
            <p className="text-lg text-gray-600">
              Create beautiful pages layouts without coding.
            </p>
          </div>

          {/* WooCommerce Shop Feature */}
          <div className="order-3">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">WooCommerce Shop</h3>
            <p className="text-lg text-gray-600">
              Compatible with WooCommerce plugin.
            </p>
          </div>

          <div className="order-4">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                      alt="Profile" 
                      className="w-12 h-12 rounded-lg object-cover mb-3"
                    />
                    <div className="text-sm font-medium text-gray-800 mb-1">Laptop</div>
                    <div className="flex text-yellow-400 text-xs mb-2">★★★★★</div>
                    <div className="text-lg font-bold text-gray-900">$79.00</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-800">Comb Books</span>
                      <span className="text-xs text-gray-500">Mockups</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">$79.00</div>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold">W</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">WooCommerce</div>
                        <div className="text-sm text-gray-500">Plugin</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-800">Sell your Products</div>
                      <div className="text-xs text-gray-500">or Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Features;