import Container from "../../components/Container/Container";
import css from "./HowItWorks.module.css";

const stepIcons = [
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v12H8l-4 4V5Z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
];

export default function HowItWorks({ translations }) {
  return (
    <section className={css.howItWorks}>
      <Container>
        <div className={css.heading}>
          <p className={css.eyebrow}>
            {translations.howItWorks.eyebrow}
          </p>

          <h2 className={css.title}>
            {translations.howItWorks.title}
          </h2>

          <p className={css.description}>
            {translations.howItWorks.description}
          </p>
        </div>

        <div className={css.steps}>
          {translations.howItWorks.steps.map((step, index) => (
            <article className={css.step} key={step.number}>
              <div className={css.iconRow}>
                <div className={css.iconBox}>
                  {stepIcons[index]}
                </div>

                {index < translations.howItWorks.steps.length - 1 && (
                  <div className={css.connector} aria-hidden="true">
                    <span className={css.connectorLine} />
                    <span className={css.connectorArrow}>→</span>
                  </div>
                )}
              </div>

              <span className={css.number}>
                {step.number}
              </span>

              <h3 className={css.stepTitle}>
                {step.title}
              </h3>

              <p className={css.stepDescription}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}