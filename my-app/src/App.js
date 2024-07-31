
import React from 'react';
import { DarkModeProvider } from './components/DarkMode';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Sections/Home';
import About from './Sections/About';
import PropertyList from './Sections/PropertyList';
import PopularAreas from './Sections/PopularAreas';
import Contact from './Sections/Contact';


const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Home/>
      <About/>
      <PopularAreas/>
      <PropertyList/>
      <Contact/>
      <Footer/>
      </DarkModeProvider>
    </>
  );
};

export default App;
