import Container from "../../components/Container/Container";
import css from "./CallToAction.module.css";

import ctaImage from "../../assets/images/cta-cleaning.png";

export default function CallToAction({ translations }) {
  return (
    <section className={css.cta}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.content}>
            <p className={css.eyebrow}>
              {translations.ctaBand.eyebrow}
            </p>

            <h2 className={css.title}>
              {translations.ctaBand.title}
            </h2>

            <p className={css.description}>
              {translations.ctaBand.description}
            </p>

            <a className={css.button} href="#contact">
              <span>{translations.ctaBand.button}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={css.imageWrap}>
            <img
              src={ctaImage}
              alt=""
              className={css.image}
            />

            <div className={css.imageOverlay} />
          </div>
        </div>
      </Container>
    </section>
  );
}