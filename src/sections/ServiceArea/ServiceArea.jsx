import Container from "../../components/Container/Container";
import css from "./ServiceArea.module.css";

import regionMap from "../../assets/images/frankfurt-region-map.jpg";

export default function ServiceArea({ translations }) {
  return (
    <section className={css.serviceArea}>
      <Container>
        <div className={css.layout}>
          <div className={css.content}>
            <p className={css.eyebrow}>
              {translations.serviceArea.eyebrow}
            </p>

            <h2 className={css.title}>
              {translations.serviceArea.title}
            </h2>

            <p className={css.description}>
              {translations.serviceArea.description}
            </p>

            <div className={css.note}>
              <span
                className={css.noteIcon}
                aria-hidden="true"
              >
                ✓
              </span>

              <p>{translations.serviceArea.note}</p>
            </div>
          </div>

          <div className={css.areaPanel}>
            <div className={css.panelHeader}>
              <div>
                <span className={css.panelEyebrow}>
                  Service Area
                </span>

                <h3>Frankfurt Rhein-Main</h3>
              </div>

              <div
                className={css.locationIcon}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </div>
            </div>

            <div className={css.mapArea}>
              <img
                src={regionMap}
                alt=""
                className={css.mapImage}
              />

              <div
                className={css.mapTint}
                aria-hidden="true"
              />

              {/* Bad Homburg */}
              <div
                className={`${css.cityMarker} ${css.badHomburgMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Bad Homburg
                </span>
              </div>

              {/* Frankfurt */}
              <div
                className={`${css.cityMarker} ${css.frankfurtMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Frankfurt
                </span>
              </div>

              {/* Offenbach */}
              <div
                className={`${css.cityMarker} ${css.offenbachMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Offenbach
                </span>
              </div>

              {/* Neu-Isenburg */}
              <div
                className={`${css.cityMarker} ${css.neuIsenburgMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Neu-Isenburg
                </span>
              </div>

              {/* Heusenstamm */}
              <div
                className={`${css.cityMarker} ${css.heusenstammMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Heusenstamm
                </span>
              </div>

              {/* Rüsselsheim */}
              <div
                className={`${css.cityMarker} ${css.ruesselsheimMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Rüsselsheim
                </span>
              </div>

              {/* Bruchköbel */}
              <div
                className={`${css.cityMarker} ${css.BruchköbelMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Bruchköbel
                </span>
              </div>

              {/* Bad Orb */}
              <div
                className={`${css.cityMarker} ${css.badOrbMarker}`}
              >
                <span className={css.markerDot} />
                <span className={css.cityLabel}>
                  Bad Orb
                </span>
              </div>

              <span className={css.mapCredit}>
                Karte: Wikimedia Commons · CC BY-SA 4.0
              </span>
            </div>

            <div className={css.locationGrid}>
              {translations.serviceArea.locations.map((location) => (
                <div
                  className={css.locationCard}
                  key={location}
                >
                  <span
                    className={css.smallPin}
                    aria-hidden="true"
                  >
                    ●
                  </span>

                  <span>{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}