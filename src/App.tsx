import Header from './components/Header';
import Hero from './components/Hero';
import Demos from './components/Demos';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Installation from './components/Installation';
import Footer from './components/Footer';
import GrowYourCV from './components/GrowYourCV';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Demos />
      <Installation />
      <Features />
      <Reviews />
      <GrowYourCV />
      <Footer />
    </div>
  );
}

export default App;