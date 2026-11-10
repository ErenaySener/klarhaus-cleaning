import { useState } from "react";

import Container from "../Container/Container";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import css from "./Header.module.css";

export default function Header({ translations, language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <Container>
        <div className={css.content}>
          <a className={css.logo} href="/" onClick={closeMenu}>
            KlarHaus
          </a>

          <div className={css.desktopRightSide}>
            <nav className={css.nav}>
              <a href="#services">
                {translations.header.services}
              </a>

              <a href="#why-us">
                {translations.header.whyUs}
              </a>

              <a href="#contact">
                {translations.header.contact}
              </a>
            </nav>

            <a className={css.desktopCta} href="#contact">
              {translations.hero.primaryButton}
              <span aria-hidden="true">→</span>
            </a>

            <LanguageSwitcher
              language={language}
              setLanguage={setLanguage}
            />
          </div>

          <div className={css.mobileRightSide}>
            <LanguageSwitcher
              language={language}
              setLanguage={setLanguage}
            />

            <button
              type="button"
              className={`${css.menuButton} ${
                isMenuOpen ? css.menuButtonOpen : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={
                isMenuOpen
                  ? translations.accessibility.closeMenu
                  : translations.accessibility.openMenu
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`${css.mobileMenu} ${
          isMenuOpen ? css.mobileMenuOpen : ""
        }`}
      >
        <Container>
          <nav className={css.mobileNav}>
            <a href="#services" onClick={closeMenu}>
              {translations.header.services}
            </a>

            <a href="#why-us" onClick={closeMenu}>
              {translations.header.whyUs}
            </a>

            <a href="#contact" onClick={closeMenu}>
              {translations.header.contact}
            </a>

            <a
              className={css.mobileCta}
              href="#contact"
              onClick={closeMenu}
            >
              <span>{translations.hero.primaryButton}</span>
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}