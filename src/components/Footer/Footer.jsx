import Container from "../Container/Container";
import css from "./Footer.module.css";

export default function Footer({ translations }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.top}>
          <div className={css.brand}>
            <a className={css.logo} href="/">
              KlarHaus
            </a>

            <p className={css.description}>
              {translations.footer.description}
            </p>
          </div>

          <div className={css.column}>
            <h2 className={css.columnTitle}>
              {translations.footer.navigation.title}
            </h2>

            <nav className={css.links}>
              <a href="#services">
                {translations.footer.navigation.services}
              </a>

              <a href="#why-us">
                {translations.footer.navigation.whyUs}
              </a>

              <a href="#contact">
                {translations.footer.navigation.contact}
              </a>
            </nav>
          </div>

          <div className={css.column}>
            <h2 className={css.columnTitle}>
              {translations.footer.contact.title}
            </h2>

            <div className={css.links}>
              <a href={`tel:${translations.footer.contact.phone}`}>
                {translations.footer.contact.phone}
              </a>

              <a href={`mailto:${translations.footer.contact.email}`}>
                {translations.footer.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className={css.bottom}>
          <p>
            © {currentYear} {translations.footer.copyright}
          </p>

          <div className={css.legal}>
            <a href="#">
              {translations.footer.legal.imprint}
            </a>

            <a href="#">
              {translations.footer.legal.privacy}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}