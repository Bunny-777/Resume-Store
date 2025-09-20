import { useState } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Demos from './components/Demos';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Installation from './components/Installation';
import Footer from './components/Footer';
import GrowYourCV from './components/GrowYourCV';
import Support from './components/Support';
import Profile from "./components/Profile";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-white text-gray-900"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <Profile darkMode={darkMode} /> {/* Add Profile section here */}
      <Demos darkMode={darkMode}/>
      <Installation darkMode={darkMode}/>
      <Features darkMode={darkMode} />
      <Reviews darkMode={darkMode} />
      <GrowYourCV />
      <Support darkMode={darkMode}/>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
