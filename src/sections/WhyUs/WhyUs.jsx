import Container from "../../components/Container/Container";
import css from "./WhyUs.module.css";

export default function WhyUs({ translations }) {
  return (
    <section id="why-us" className={css.whyUs}>
      <Container>
        <div className={css.layout}>
          <div className={css.heading}>
            <p className={css.eyebrow}>
              {translations.whyUs.eyebrow}
            </p>

            <h2 className={css.title}>
              {translations.whyUs.title}
            </h2>

            <p className={css.description}>
              {translations.whyUs.description}
            </p>
          </div>

          <div className={css.list}>
            {translations.whyUs.items.map((item, index) => (
              <article className={css.item} key={item.title}>
                <div className={css.itemNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={css.itemContent}>
                  <h3 className={css.itemTitle}>
                    {item.title}
                  </h3>

                  <p className={css.itemDescription}>
                    {item.description}
                  </p>
                </div>

                <span className={css.check} aria-hidden="true">
                  ✓
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}