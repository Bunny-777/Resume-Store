import { Star } from "lucide-react";

interface ReviewsProps {
  darkMode: boolean;
}

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    review: "ryanCV helped me create an amazing portfolio website. The design is modern and professional, and I got multiple job offers after launching it!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    review: "The code quality is excellent and the customization options are endless. I was able to create exactly what I envisioned for my CV website."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    review: "Outstanding template with great attention to detail. The support team was incredibly helpful during the setup process. Highly recommended!"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Graphic Designer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    review: "Beautiful design and smooth animations. The responsive layout works perfectly on all devices. This template exceeded my expectations."
  }
];

const Reviews = ({ darkMode }: ReviewsProps) => {
  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            What Our Clients Say
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-white/80" : "text-gray-500"}`}>
            Join thousands of satisfied customers who have transformed their careers with ryanCV
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                darkMode ? "bg-gray-900 hover:bg-gray-800" : "bg-white hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {review.name}
                  </h4>
                  <p className="text-green-400">{review.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className={`${darkMode ? "text-white/80" : "text-gray-600"} leading-relaxed italic`}>
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div
            className={`inline-flex items-center space-x-4 px-8 py-4 rounded-xl ${
              darkMode ? "bg-gray-900" : "bg-gray-200"
            }`}
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className={`${darkMode ? "text-white" : "text-gray-900"} font-bold`}>4.9/5 Rating</p>
              <p className={`${darkMode ? "text-white/80" : "text-gray-600"} text-sm`}>Based on 2,500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
