import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import WhyUs from "./sections/WhyUs/WhyUs";
import CallToAction from "./sections/CallToAction/CallToAction";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import ServiceArea from "./sections/ServiceArea/ServiceArea";
import Testimonials from "./sections/Testimonials/Testimonials";
import QuoteForm from "./sections/QuoteForm/QuoteForm";
import Footer from "./components/Footer/Footer";
import TrustBand from "./sections/TrustBand/TrustBand";

import { de } from "./locales/de";
import { tr } from "./locales/tr";

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    return savedLanguage || "de";
  });

  const translations = language === "de" ? de : tr;
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {translations.accessibility.skipToContent}
      </a>

      <Header
        translations={translations}
        language={language}
        setLanguage={handleLanguageChange}
      />

      <main id="main-content">
        <Hero translations={translations} />
        <Services translations={translations} />
        <TrustBand translations={translations} />
        <WhyUs translations={translations} />
        <HowItWorks translations={translations} />
        <ServiceArea translations={translations} />
        <CallToAction translations={translations} />
        <Testimonials translations={translations} />
        <QuoteForm translations={translations} />
      </main>
      <Footer translations={translations} />
    </>
  );
}

export default App;
