import Container from "../../components/Container/Container";
import css from "./TrustBand.module.css";

const icons = [
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v12H8l-4 4V5Z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  ),
];

export default function TrustBand({ translations }) {
  return (
    <section className={css.trustBand}>
      <Container>
        <div className={css.grid}>
          {translations.trustBand.items.map((item, index) => (
            <div className={css.item} key={item.title}>
              <div className={css.iconBox}>
                {icons[index]}
              </div>

              <div>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}