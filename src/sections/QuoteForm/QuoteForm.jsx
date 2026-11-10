import { useState } from "react";

import Container from "../../components/Container/Container";
import css from "./QuoteForm.module.css";

export default function QuoteForm({ translations }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleNewRequest = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className={css.quoteForm}>
      <Container>
        <div className={css.layout}>
          <div className={css.heading}>
            <p className={css.eyebrow}>{translations.quoteForm.eyebrow}</p>

            <h2 className={css.title}>{translations.quoteForm.title}</h2>

            <p className={css.description}>
              {translations.quoteForm.description}
            </p>

            <div className={css.contactInfo}>
              <div>
                <span className={css.contactLabel}>E-Mail</span>
                <a href="mailto:hallo@klarhaus-demo.de">
                  hallo@klarhaus-demo.de
                </a>
              </div>

              <div>
                <span className={css.contactLabel}>Telefon</span>
                <a href="tel:+496912345678">+49 69 12345678</a>
              </div>
            </div>
          </div>

          <div className={css.formPanel}>
            {!isSubmitted ? (
              <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.row}>
                  <label className={css.field}>
                    <span>
                      {translations.quoteForm.fields.name}
                      <strong aria-hidden="true"> *</strong>
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={translations.quoteForm.placeholders.name}
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label className={css.field}>
                    <span>
                      {translations.quoteForm.fields.email}
                      <strong aria-hidden="true"> *</strong>
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={translations.quoteForm.placeholders.email}
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className={css.row}>
                  <label className={css.field}>
                    <span>{translations.quoteForm.fields.phone}</span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={translations.quoteForm.placeholders.phone}
                      autoComplete="tel"
                    />
                  </label>

                  <label className={css.field}>
                    <span>
                      {translations.quoteForm.fields.service}
                      <strong aria-hidden="true"> *</strong>
                    </span>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        {translations.quoteForm.serviceOptions.default}
                      </option>

                      <option value="home">
                        {translations.quoteForm.serviceOptions.home}
                      </option>

                      <option value="office">
                        {translations.quoteForm.serviceOptions.office}
                      </option>

                      <option value="moving">
                        {translations.quoteForm.serviceOptions.moving}
                      </option>

                      <option value="other">
                        {translations.quoteForm.serviceOptions.other}
                      </option>
                    </select>
                  </label>
                </div>

                <label className={css.field}>
                  <span>
                    {translations.quoteForm.fields.message}
                    <strong aria-hidden="true"> *</strong>
                  </span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={translations.quoteForm.placeholders.message}
                    rows="5"
                    required
                  />
                </label>

                <button className={css.submitButton} type="submit">
                  <span>{translations.quoteForm.submit}</span>

                  <span aria-hidden="true">→</span>
                </button>

                <p className={css.demoNotice}>
                  {translations.quoteForm.demoNotice}
                </p>
              </form>
            ) : (
              <div
                className={css.successPanel}
                role="status"
                aria-live="polite"
              >
                <div className={css.successIcon} aria-hidden="true">
                  ✓
                </div>

                <h3>{translations.quoteForm.successTitle}</h3>

                <p>{translations.quoteForm.success}</p>

                <button
                  type="button"
                  className={css.newRequestButton}
                  onClick={handleNewRequest}
                >
                  {translations.quoteForm.newRequest}
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
