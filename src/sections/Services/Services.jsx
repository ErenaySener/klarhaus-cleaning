import Container from "../../components/Container/Container";
import css from "./Services.module.css";

const serviceIcons = [
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 8 8-4 8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </svg>
  ),
];

export default function Services({ translations }) {
  return (
    <section id="services" className={css.services}>
      <Container>
        <div className={css.heading}>
          <p className={css.eyebrow}>
            {translations.services.eyebrow}
          </p>

          <h2 className={css.title}>
            {translations.services.title}
          </h2>

          <p className={css.description}>
            {translations.services.description}
          </p>
        </div>

        <div className={css.grid}>
          {translations.services.items.map((service, index) => (
            <article className={css.card} key={service.title}>
              <div className={css.cardTop}>
                <div className={css.iconBox}>
                  {serviceIcons[index]}
                </div>

                <span className={css.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className={css.cardTitle}>
                {service.title}
              </h3>

              <p className={css.cardDescription}>
                {service.description}
              </p>

              <div className={css.cardFooter}>
                <span className={css.line} />
                <span className={css.arrow} aria-hidden="true">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}