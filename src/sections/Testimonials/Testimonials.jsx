import Container from "../../components/Container/Container";
import css from "./Testimonials.module.css";

export default function Testimonials({ translations }) {
  return (
    <section className={css.testimonials}>
      <Container>
        <div className={css.heading}>
          <p className={css.eyebrow}>
            {translations.testimonials.eyebrow}
          </p>

          <h2 className={css.title}>
            {translations.testimonials.title}
          </h2>

          <p className={css.description}>
            {translations.testimonials.description}
          </p>
        </div>

        <div className={css.grid}>
          {translations.testimonials.items.map((testimonial) => (
            <article
              className={css.card}
              key={`${testimonial.name}-${testimonial.location}`}
            >
              <div className={css.stars} aria-hidden="true">
                ★★★★★
              </div>

              <blockquote className={css.quote}>
                “{testimonial.quote}”
              </blockquote>

              <div className={css.person}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}