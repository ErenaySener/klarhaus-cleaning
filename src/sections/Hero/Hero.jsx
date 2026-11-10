import Container from "../../components/Container/Container";
import css from "./Hero.module.css";

import heroMain from "../../assets/images/hero-main.jpg";
import heroSecondary from "../../assets/images/hero-secondary.png";

export default function Hero({ translations }) {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.layout}>
          <div className={css.content}>
            <p className={css.eyebrow}>{translations.hero.eyebrow}</p>

            <h1 className={css.title}>{translations.hero.title}</h1>

            <p className={css.description}>{translations.hero.description}</p>

            <div className={css.actions}>
              <a className={css.primaryButton} href="#contact">
                {translations.hero.primaryButton}
              </a>

              <a className={css.secondaryButton} href="#services">
                {translations.hero.secondaryButton}
              </a>
            </div>

            <p className={css.microNote}>
              <span aria-hidden="true">✓</span>
              {translations.hero.microNote}
            </p>

            <div className={css.trustBadges}>
              {translations.hero.trustBadges.map((badge) => (
                <div className={css.trustBadge} key={badge}>
                  <span className={css.trustBadgeDot} aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={css.visualWrap}>
            <div className={css.floatingBadge}>
              <span className={css.floatingIcon} aria-hidden="true">
                ✓
              </span>

              <div>
                <strong>KlarHaus</strong>
                <span>Frankfurt & Offenbach</span>
              </div>
            </div>
            <div className={css.visualMain}>
              <img src={heroMain} alt="Clean modern living room" />
            </div>

            <div className={css.visualCard}>
              <p className={css.visualLocation}>
                {translations.hero.visual.location}
              </p>

              <h2 className={css.visualTitle}>
                {translations.hero.visual.title}
              </h2>

              <div className={css.visualServices}>
                {translations.hero.visual.services.map((service) => (
                  <div className={css.visualService} key={service}>
                    <span className={css.check} aria-hidden="true">
                      ✓
                    </span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <p className={css.visualNote}>{translations.hero.visual.note}</p>
            </div>

            <div className={css.visualSecondary}>
              <img src={heroSecondary} alt="Minimal clean interior detail" />
            </div>

            <div className={css.circleOne} aria-hidden="true" />
            <div className={css.circleTwo} aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
