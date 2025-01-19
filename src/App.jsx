import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      welcome: "Welcome to Oqsaroy",
      discover: "Discover the beauty, history, and significance of Oqsaroy.",
      learnMore: "🗺️Open Maps",
      about: "About Aksaray",
      aboutContent:
      "Oqsaroy is a historic site in Uzbekistan, offering a glimpse into the architectural and cultural grandeur of the region. Built in the late 14th century, it served as a magnificent palace for Amir Timur, symbolizing power and vision. \n\nAksaray, known as the 'White Palace,' was the administrative center and a symbol of statehood. The intricate mosaics and towering entrance gates reflect the remarkable craftsmanship of the era. Aksaray is not just a historic landmark but also a cultural heritage site, inspiring visitors with its grandeur and history.",
    timeline: "Aksaray's Timeline",
      timelineItems: [
        { year: "1380", event: "Construction of Oqsaroy begins under Amir Timur." },
        { year: "1395", event: "The palace is completed with intricate blue tilework." },
        { year: "1800s", event: "Oqsaroy becomes a central cultural site." },
        { year: "2020", event: "Recognized as a UNESCO heritage site." },
      ],
      gallery: "Gallery",
      home: "Home",
      footer: "© 2025 Oqsaroy. All rights reserved.",
    },
    uz: {
      welcome: "Oqsaroyga Xush Kelibsiz",
      discover: "Oqsaroyning go'zalligi, tarixi va ahamiyatini kashf eting.",
      learnMore: "🗺️Xaritani ochish",
      about: "Oqsaroy haqida",
      aboutContent:
      "Oqsaroy O'zbekistonda joylashgan tarixiy joy bo'lib, mintaqaning me'moriy va madaniy ulug'vorligini aks ettiradi. 14-asr oxirida qurilgan bo'lib, u Amir Temurning ulug'vor saroyi bo'lgan. \n\nAksaroy, 'Oq saroy' nomi bilan tanilgan, ma'muriy markaz va davlat ramzi bo'lgan. Nafis mozaikalar va baland kirish eshiklari davrning ajoyib hunarmandligini aks ettiradi. Aksaroy nafaqat tarixiy yodgorlik, balki madaniy merosdir va o'zining ulug'vorligi va tarixi bilan tashrif buyuruvchilarni ilhomlantiradi.",
    timeline: "Oqsaroy Tarixi",
      timelineItems: [
        { year: "1380", event: "Oqsaroyning qurilishi Amir Temur tomonidan boshlanadi." },
        { year: "1395", event: "Saroy murakkab ko‘k sopol bezaklar bilan to‘liq qurib bitkaziladi." },
        { year: "1800-yillar", event: "Oqsaroy markaziy madaniy maskanga aylanadi." },
        { year: "2020", event: "UNESCOning meros obyekti sifatida tan olinadi." },
      ],
      gallery: "Galereya",
      home: "Bosh sahifa",
      footer: "© 2025 Oqsaroy. Barcha huquqlar himoyalangan.",
    },
    ru: {
      welcome: "Добро пожаловать в Оксарой",
      discover: "Откройте для себя красоту, историю и значение Оксароя.",
      learnMore: "🗺️Oткрыть карту",
      about: "Об Оксарой",
      aboutContent:
        "Оксарой - это историческое место в Узбекистане, которое предлагает взгляд на архитектурное и культурное величие региона. Построенный в конце 14 века, он служил великолепным дворцом для Амира Темура, символизируя силу и видение. \n\nАксарой, известный как 'Белый дворец', был административным центром и символом государственности. Изящная мозаика и величественные входные ворота отражают замечательное мастерство того времени. Аксарой - это не только историческая достопримечательность, но и объект культурного наследия, вдохновляющий посетителей своим величием и историей.",
      timeline: "Хронология Оксароя",
      timelineItems: [
        { year: "1380", event: "Строительство Оксароя начинается под руководством Амира Темура." },
        { year: "1395", event: "Дворец завершён с изысканными синими плиточными украшениями." },
        { year: "1800-е годы", event: "Оксарой становится центральным культурным объектом." },
        { year: "2020", event: "Признан объектом наследия ЮНЕСКО." },
      ],
      gallery: "Галерея",
      home: "Главная",
      footer: "© 2025 Оксарой. Все права защищены.",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 80; // Adjust for navbar height
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();

    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">Oqsaroy</div>
          <ul className="nav-links">
            <li>
              <a
                href="#hero"
                className={activeSection === "hero" ? "active" : ""}
                onClick={(e) => handleLinkClick(e, "hero")}
              >
                {translations[language].home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={(e) => handleLinkClick(e, "about")}
              >
                {translations[language].about}
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className={activeSection === "timeline" ? "active" : ""}
                onClick={(e) => handleLinkClick(e, "timeline")}
              >
                {translations[language].timeline}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={activeSection === "gallery" ? "active" : ""}
                onClick={(e) => handleLinkClick(e, "gallery")}
              >
                {translations[language].gallery}
              </a>
            </li>
          </ul>
          <LanguageChanger language={language} setLanguage={setLanguage} />

        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>{translations[language].welcome}</h1>
          <p>{translations[language].discover}</p>
          <a href="https://g.co/kgs/Nxm2dfC"><button className="cta-button">{translations[language].learnMore}</button></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>{translations[language].about}</h2>
        <p>{translations[language].aboutContent}</p>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline">
        <h2>{translations[language].timeline}</h2>
        <div className="timeline-container">
          {translations[language].timelineItems.map((item, index) => (
            <div className="timeline-item" key={index}>
              <h3>{item.year}</h3>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <h2>{translations[language].gallery}</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Oqsaroy view 1"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Oqsaroy view 2"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>{translations[language].footer}</p>
      </footer>
    </div>
  );
}


function LanguageChanger({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="language-changer">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        🌐 {language.toUpperCase()}
      </button>
      {isOpen && (
        <ul className="language-dropdown">
          <li onClick={() => handleLanguageChange("en")}>English</li>
          <li onClick={() => handleLanguageChange("uz")}>O'zbek</li>
          <li onClick={() => handleLanguageChange("ru")}>Русский</li>
        </ul>
      )}
    </div>
  );
}
export default App;