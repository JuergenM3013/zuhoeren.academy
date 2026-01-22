import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitgefühl & Klarheit im Klinikalltag | Masterclass für Ärztinnen (DACH)",
  description:
    "Evidenzbasierte Masterclass für Ärztinnen in der DACH-Region: Patientinnenkommunikation zur Stärkung von Adhärenz, Resilienz und beruflicher Zufriedenheit. Angebot auf Anfrage.",
};

export default function MedialogPage() {
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          color: "#1b252a",
          background: `
            radial-gradient(1200px 600px at 20% -10%, rgba(132,169,140,.25), transparent 55%),
            radial-gradient(900px 520px at 95% 0%, rgba(201,162,77,.18), transparent 50%),
            #f7f9fa
          `,
          lineHeight: 1.55,
        }}
      >
        {/* Topbar */}
        <header
          className="sticky top-0 z-50"
          style={{
            background: "rgba(247,249,250,.72)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #e6edf0",
          }}
        >
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <div className="flex items-center justify-between gap-[14px] py-[14px]">
              <Link href="/" className="flex min-w-[240px] items-center gap-3 no-underline max-md:min-w-0">
                <div
                  className="relative h-10 w-10 rounded-[14px]"
                  style={{
                    background: "linear-gradient(135deg, #2f3e46, #203038)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div
                    className="absolute inset-[10px] rounded-[12px]"
                    style={{ border: "1px solid rgba(255,255,255,.35)" }}
                  />
                </div>
                <div>
                  <strong className="block font-bold tracking-[.2px]">Zuhörakademie</strong>
                  <span className="block text-[12.5px]" style={{ color: "#53636b" }}>
                    Fortbildung PatientInnenkommunikation · DACH
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-[18px] md:flex" aria-label="Seitennavigation">
                {[
                  { href: "#warum", label: "Warum es wirkt" },
                  { href: "#module", label: "Module" },
                  { href: "#design", label: "Ablauf" },
                  { href: "#trainerinnen", label: "TrainerInnen" },
                  { href: "#kontakt", label: "Kontakt" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-[12px] px-[10px] py-[10px] text-[14px] no-underline transition-colors hover:bg-[rgba(132,169,140,.12)]"
                    style={{ color: "#53636b" }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-[14px] px-4 py-3 font-semibold tracking-[.2px] text-white no-underline transition hover:brightness-105"
                style={{
                  background: "#2f3e46",
                  boxShadow: "0 12px 24px rgba(47,62,70,.18)",
                }}
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main id="top" className="pb-[26px] pt-[56px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <div className="grid grid-cols-1 items-stretch gap-[22px] lg:grid-cols-[1.15fr_.85fr]">
              {/* Hero Left */}
              <div
                className="relative overflow-hidden rounded-[22px] p-[34px] pb-[28px]"
                style={{
                  background: "rgba(255,255,255,.84)",
                  border: "1px solid #e6edf0",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                }}
              >
                <div
                  className="pointer-events-none absolute"
                  style={{
                    width: 520,
                    height: 520,
                    right: -260,
                    top: -290,
                    background: "radial-gradient(circle at 30% 30%, rgba(132,169,140,.35), transparent 55%)",
                    borderRadius: 999,
                    transform: "rotate(10deg)",
                  }}
                />

                <div
                  className="relative z-10 inline-flex items-center gap-[10px] rounded-full px-3 py-2 text-[13px]"
                  style={{
                    color: "#2f3e46",
                    background: "rgba(132,169,140,.12)",
                    border: "1px solid rgba(132,169,140,.22)",
                  }}
                >
                  <span
                    className="h-[9px] w-[9px] rounded-full"
                    style={{
                      background: "#84a98c",
                      boxShadow: "0 0 0 6px rgba(132,169,140,.15)",
                    }}
                  />
                  Masterclass für Ärztinnen · wirksam, ruhig, alltagstauglich
                </div>

                <h1
                  className="relative z-10 my-[14px] mb-[10px] text-[clamp(30px,3.2vw,46px)] leading-[1.12] tracking-[-0.6px]"
                  style={{ color: "#1b252a" }}
                >
                  Mitgefühl &amp; Klarheit im Klinikalltag
                </h1>

                <p
                  className="relative z-10 mb-[18px] max-w-[62ch] text-[16.5px]"
                  style={{ color: "#53636b" }}
                >
                  Eine evidenzbasierte Masterclass für Ärztinnen in der DACH-Region: PatientInnenkommunikation so
                  gestalten, dass sie gleichzeitig <b style={{ color: "#1b252a" }}>Adhärenz</b> unterstützt,{" "}
                  <b style={{ color: "#1b252a" }}>Beziehung</b> stärkt und die{" "}
                  <b style={{ color: "#1b252a" }}>eigene Resilienz</b> im Alltag stabilisiert.
                </p>

                <div className="relative z-10 mt-[18px] flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center gap-[10px] rounded-[14px] px-4 py-3 font-semibold tracking-[.2px] text-white no-underline transition hover:brightness-105"
                    style={{
                      background: "#2f3e46",
                      boxShadow: "0 12px 24px rgba(47,62,70,.18)",
                    }}
                  >
                    Angebot auf Anfrage
                  </a>
                  <a
                    href="#module"
                    className="inline-flex items-center justify-center gap-[10px] rounded-[14px] px-4 py-3 font-semibold tracking-[.2px] no-underline transition hover:bg-white"
                    style={{
                      background: "rgba(255,255,255,.65)",
                      border: "1px solid #e6edf0",
                      color: "#2f3e46",
                    }}
                  >
                    Module ansehen
                  </a>
                </div>

                <div
                  className="relative z-10 mt-[18px] flex flex-wrap gap-[14px] border-t pt-[18px]"
                  style={{ borderColor: "#e6edf0" }}
                >
                  {[
                    { title: "Vor Ort in Ihrer Klinik", desc: "Bestmögliche Integration in den Arbeitsalltag." },
                    { title: "Kleingruppe bis 8", desc: "Sicherheit, Tiefe und echte Praxisnähe." },
                    { title: "2 TrainerInnen", desc: "Abwechslung, Dynamik und individuelles Feedback." },
                  ].map((pill) => (
                    <div
                      key={pill.title}
                      className="flex min-w-[220px] items-start gap-[10px] rounded-[14px] px-3 py-[10px] text-[13.5px] max-md:w-full max-md:min-w-0"
                      style={{
                        background: "rgba(247,249,250,.75)",
                        border: "1px solid #e6edf0",
                        color: "#53636b",
                      }}
                    >
                      <div
                        className="mt-[2px] h-[18px] w-[18px] rounded-[6px]"
                        style={{
                          background: "rgba(201,162,77,.14)",
                          border: "1px solid rgba(201,162,77,.25)",
                        }}
                      />
                      <div>
                        <b style={{ color: "#1b252a", fontWeight: 650 }}>{pill.title}</b>
                        <br />
                        {pill.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Right */}
              <aside
                className="flex flex-col gap-3 rounded-[22px] p-[22px]"
                style={{
                  background: "rgba(255,255,255,.84)",
                  border: "1px solid #e6edf0",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                }}
                aria-label="Kurzüberblick"
              >
                <Sidebox title="Für wen?">
                  <p className="m-0 text-[14px]" style={{ color: "#53636b" }}>
                    Für Ärztinnen aller Fachrichtungen in Klinik, Ambulanz und interdisziplinären Teams.
                  </p>
                  <div className="mt-[10px] flex flex-wrap gap-[10px]">
                    {["Aufklärungsgespräche", "Visite & Ambulanz", "Tumorboard", "Interdisziplinäre Meetings"].map(
                      (badge) => (
                        <Badge key={badge}>{badge}</Badge>
                      )
                    )}
                  </div>
                </Sidebox>

                <Sidebox title="Was Sie mitnehmen">
                  <ul className="m-0 mt-[10px] pl-[18px] text-[14px]" style={{ color: "#53636b" }}>
                    <li>klarere Gesprächsstruktur bei weniger emotionalem Aufwand</li>
                    <li>mehr Sicherheit in schwierigen Gesprächssituationen</li>
                    <li>wirksame Fragetechniken &amp; wirksames Zuhören (HaTeCo)</li>
                    <li>Tools gegen Reiz-Reaktions-Muster („gedankliche Schubladen")</li>
                  </ul>
                </Sidebox>

                <Sidebox title="Format">
                  <p className="m-0 text-[14px]" style={{ color: "#53636b" }}>
                    <b style={{ color: "#1b252a" }}>4 Module</b> à 2,5–3 Stunden · in sinnvoller Taktung (z. B.
                    14-tägig) · interaktiv, reflektierend, praxisnah.
                  </p>
                  <div className="mt-[10px] flex flex-wrap gap-[10px]">
                    <Badge>Angebot auf Anfrage</Badge>
                    <Badge>DACH-weit</Badge>
                  </div>
                </Sidebox>
              </aside>
            </div>
          </div>
        </main>

        {/* Warum Section */}
        <section id="warum" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <SectionHead
              title="Warum Kommunikation ein unterschätzter Hebel ist"
              description="Nicht zusätzliche Maßnahmen sind oft entscheidend – sondern die Qualität der alltäglichen Interaktion: Sie beeinflusst Behandlungserfolg, Kooperation und das eigene Stresserleben."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Box title="Adhärenz & Behandlungserfolg">
                Wenn PatientInnen verstanden werden, Klarheit entsteht und nächste Schritte gemeinsam gestaltet werden,
                steigt die Bereitschaft zur Mitarbeit – Kommunikation wird damit Teil von Therapiequalität.
              </Box>
              <Box title="Resilienz im Alltag">
                Wertschätzende Gesprächsführung reduziert Reibungsverluste, senkt Widerstände und schützt vor
                emotionaler Erschöpfung – besonders bei hoher Frequenz und anspruchsvollen Situationen.
              </Box>
              <Box title="Weniger Missverständnisse">
                Worte erzeugen Bilder. Kleine Formulierungen können Sicherheit geben – oder ungewollt alarmieren. Wir
                stärken Präzision, Wärme und gemeinsame Orientierung.
              </Box>
            </div>

            <Quote
              text={`„Solange man selbst redet, erfährt man nichts."`}
              author="Marie von Ebner-Eschenbach (als Leitgedanke für wirksames Zuhören)"
            />
          </div>
        </section>

        {/* Anders Section */}
        <section id="anders" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <SectionHead
              title="Was diese Masterclass anders macht"
              description={`Ruhig, evidenzbasiert und realistisch für den klinischen Alltag: keine Show, keine „verkaufsmäßigen" Techniken – sondern klare, menschliche Wirksamkeit.`}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Box title="Evidenz + Praxis">
                Wir verbinden Studienlage, bewährte Kommunikationsmodelle und konkrete Anwendung – so, dass Sie am
                nächsten Tag bereits anders (und leichter) kommunizieren können.
              </Box>
              <Box title="Reflexion statt Bewertung">
                Das Praxismodul arbeitet mit realen Situationen aus Ihrem Alltag. Rollenspiele nur auf Wunsch – der
                Fokus liegt auf Analyse, Optionen und persönlichem Transfer.
              </Box>
              <Box title="Struktur schafft Entlastung">
                Wenn Einstieg, Klärung, Emotionen und Vermittlung bewusst gestaltet werden, sinkt der Energieaufwand –
                und es entsteht ein konstruktiver Kreislauf aus Ruhe, Vertrauen und Kooperation.
              </Box>
              <Box title="HaTeCo: Wirksames Zuhören">
                Elemente des Zuhörmodells HaTeCo helfen, Dialoge zu vertiefen, Missverständnisse zu reduzieren und
                PatientInnen stärker einzubinden – auch im Umgang mit Vorinformation („Dr. Google").
              </Box>
            </div>
          </div>
        </section>

        {/* Module Section */}
        <section id="module" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <SectionHead
              title="Module"
              description="Jedes Modul baut auf dem vorherigen auf. Zwischen den Terminen wird bewusst Raum geschaffen, um kleine Schritte im Alltag zu testen – und dann gemeinsam zu reflektieren."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Module title="Modul 1 · Haltung & Wirkung" tag="Mindset · Vorbereitung · Einflusskreise">
                <li>Studienlage: Warum wertschätzende Kommunikation Adhärenz und Burnout-Prävention unterstützt</li>
                <li>Vorbereitung auf schwierige Gespräche: Was wirkt – und wie sieht eine optimale Vorbereitung aus?</li>
                <li>Mindset &amp; Einflusskreise: Energie dorthin lenken, wo Wirkung möglich ist</li>
                <li>Reiz–Reaktionsverhalten: „gedankliche Schubladen" entkoppeln, souverän bleiben</li>
                <li>Persönliche Zielsetzung für den Transfer in den Alltag</li>
              </Module>

              <Module title="Modul 2 · Verstehen & Vermitteln" tag="Modelle · Verständlichkeit · Verbindung">
                <li>Start mit Reflexion: Was hat funktioniert – was braucht Optimierung?</li>
                <li>Basismodelle der Kommunikation: Watzlawick, 4 Seiten, Double Bind, Satir, Transaktionsanalyse</li>
                <li>Komplexes verständlich erklären: Klarheit ohne Distanz</li>
                <li>Interaktive Übungen &amp; erneute persönliche Zielsetzung</li>
              </Module>

              <Module title="Modul 3 · Wertschätzung, Fragen, Zuhören" tag="Fragetechnik · HaTeCo · Patientinnenzentrierung">
                <li>Reflexion: Was hat sich seit Modul 2 verbessert?</li>
                <li>Wertschätzung &amp; Patientinnenzentrierung: Bedeutung &amp; Umsetzung</li>
                <li>Die Macht der richtigen Frage: explorieren statt interpretieren</li>
                <li>HaTeCo-Elemente: Beziehung vertiefen, Missverständnisse vermeiden</li>
                <li>„Dr. Google": Vorinformation wertschätzend einbinden</li>
              </Module>

              <Module title="Modul 4 · Praxismodul" tag="Fallbeispiele · Sequenzen · Integration">
                <li>Reflexion: Welche Veränderungen zeigen sich seit Modul 3?</li>
                <li>Bearbeitung realer Gesprächssituationen aus dem Alltag der Teilnehmerinnen</li>
                <li>Fokus auf Gesprächssequenzen &amp; Optionen (Rollenspiel nur auf Wunsch)</li>
                <li>Integration in den persönlichen Gesprächsstil</li>
              </Module>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section id="design" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <SectionHead
              title="Format & Ablauf"
              description="Bestmögliche Integration in den Arbeitsalltag: kurz, intensiv, transferorientiert – mit hoher Sicherheit durch Kleingruppen."
            />

            <div
              className="rounded-[22px] p-[18px]"
              style={{
                background: "rgba(255,255,255,.84)",
                border: "1px solid #e6edf0",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { k: "Dauer", v: "4 × 2,5–3 Std." },
                  { k: "Taktung", v: "z. B. 14-tägig" },
                  { k: "Gruppe", v: "max. 8 Ärztinnen" },
                  { k: "TrainerInnen", v: "2 Personen" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-[18px] px-[14px] pb-3 pt-[14px]"
                    style={{
                      background: "rgba(247,249,250,.72)",
                      border: "1px solid #e6edf0",
                    }}
                  >
                    <div className="text-[12px]" style={{ color: "#53636b" }}>
                      {item.k}
                    </div>
                    <div className="mt-1 font-bold" style={{ color: "#1b252a" }}>
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[14px] grid grid-cols-1 gap-4 md:grid-cols-2">
                <Sidebox title="Ort">
                  <p className="m-0 text-[14px]" style={{ color: "#53636b" }}>
                    DACH-weit – idealerweise direkt in Ihrer Klinik (oder nach Abstimmung als Inhouse-Format).
                  </p>
                </Sidebox>
                <Sidebox title="Hinweis zur Investition">
                  <p className="m-0 text-[14px]" style={{ color: "#53636b" }}>
                    <b style={{ color: "#1b252a" }}>Angebot auf Anfrage.</b> Wir freuen uns über Ihre Kontaktaufnahme
                    – wir erstellen ein passendes Konzept für Ihre Rahmenbedingungen.
                  </p>
                </Sidebox>
              </div>
            </div>

            <Quote
              text={`„Man kann nicht nicht kommunizieren."`}
              author="Paul Watzlawick (als Basis für bewusste Gesprächsgestaltung)"
            />
          </div>
        </section>

        {/* TrainerInnen Section */}
        <section id="trainerinnen" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <SectionHead
              title="Ihre TrainerInnen"
              description="Medizinische Expertise trifft Kommunikations- & Zuhörkompetenz – mit Fokus auf Umsetzbarkeit und echte Alltagssituationen."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Person
                name="Priv. Doz.in Dr.in Marlene Troch"
                role="Fachärztin für Innere Medizin · klinische Perspektive & Gesprächsrealität"
              >
                <li>Praxisnähe in Aufklärung, Diagnosen und Therapieplanung</li>
                <li>Realistische Tools für anspruchsvolle Gesprächssituationen</li>
              </Person>

              <Person
                name="Jürgen Melmuka"
                role="Trainer für effektive Kommunikation & wirksames Zuhören · Gründer der Zuhörakademie"
              >
                <li>über 1.300 Seminare zu Kommunikation, Resilienz &amp; Zuhören</li>
                <li>Transferdesigns, die nachhaltig in den Alltag wirken</li>
              </Person>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-[34px]">
          <div className="mx-auto max-w-[1120px] px-[22px]">
            <div
              className="relative overflow-hidden rounded-[22px] p-[28px] text-white"
              style={{
                background: "linear-gradient(135deg, rgba(47,62,70,.96), rgba(47,62,70,.86))",
                border: "1px solid rgba(255,255,255,.10)",
                boxShadow: "0 18px 40px rgba(47,62,70,.22)",
              }}
              role="region"
              aria-label="Kontakt und Anfrage"
            >
              <div
                className="pointer-events-none absolute"
                style={{
                  width: 680,
                  height: 680,
                  left: -420,
                  bottom: -520,
                  background: "radial-gradient(circle at 40% 40%, rgba(132,169,140,.35), transparent 60%)",
                  borderRadius: 999,
                }}
              />

              <div className="relative grid grid-cols-1 items-center gap-[18px] lg:grid-cols-[1.2fr_.8fr]">
                <div>
                  <h2 className="m-0 mb-2 text-[24px]">
                    Angebot auf Anfrage – wir freuen uns über Ihre Kontaktaufnahme
                  </h2>
                  <p className="m-0 max-w-[62ch] opacity-90">
                    Sie möchten die Masterclass in Ihrer Klinik anbieten oder haben Fragen zum Ablauf? Schreiben Sie uns
                    – wir melden uns kurzfristig mit einem passenden Vorschlag zu Terminlogik, Gruppengröße und
                    Umsetzung.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-[10px]">
                    <a
                      href="mailto:hallo@zuhoerakademie.at?subject=Anfrage%20Masterclass%20Mitgefühl%20%26%20Klarheit%20im%20Klinikalltag%20(DACH)&body=Guten%20Tag%2C%0A%0Awir%20interessieren%20uns%20für%20die%20Masterclass%20%E2%80%9EMitgefühl%20%26%20Klarheit%20im%20Klinikalltag%E2%80%9C.%0A%0ABitte%20übermitteln%20Sie%20uns%20ein%20unverbindliches%20Angebot%20inkl.%20Ablaufvorschlag.%0A%0AOrganisation%2FKlinik%3A%20%0AOrt%3A%20%0AGewünschter%20Zeitraum%3A%20%0ATeilnehmerinnenzahl%3A%20%0A%0AVielen%20Dank%20und%20freundliche%20Grüße"
                      className="inline-flex items-center justify-center gap-[10px] rounded-[14px] px-4 py-3 font-semibold tracking-[.2px] text-white no-underline transition hover:brightness-105"
                      style={{
                        background: "#2f3e46",
                        boxShadow: "0 12px 24px rgba(47,62,70,.18)",
                      }}
                    >
                      E-Mail senden
                    </a>
                    <a
                      href="tel:+436643978684"
                      className="inline-flex items-center justify-center gap-[10px] rounded-[14px] px-4 py-3 font-semibold tracking-[.2px] text-white no-underline transition hover:bg-white hover:text-[#2f3e46]"
                      style={{
                        background: "rgba(255,255,255,.08)",
                        border: "1px solid rgba(255,255,255,.14)",
                      }}
                    >
                      Anrufen
                    </a>
                  </div>
                </div>

                <div
                  className="rounded-[18px] p-4"
                  style={{
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  <div className="mb-2 font-bold">Kontakt</div>
                  <div className="mb-[6px] opacity-[.92]">+43 664 397 8684</div>
                  <div className="mb-[6px] opacity-[.92]">hallo@zuhoerakademie.at</div>
                  <div className="opacity-[.92]">zuhoerakademie.at</div>

                  <div className="mt-3 text-[13.5px] opacity-[.86]">
                    <b>Hinweis:</b> Dieses Angebot ist eine Fortbildung in Gesprächsführung/Kommunikation und ersetzt
                    keine Psychotherapie oder vergleichbare Behandlungen.
                  </div>
                </div>
              </div>
            </div>

            <footer className="pb-[40px] pt-[26px] text-[13.5px]" style={{ color: "#53636b" }}>
              <div className="border-t pt-4" style={{ borderColor: "#e6edf0" }}>
                © Zuhörakademie · PatientInnenkommunikation-Resiliente Kommunikation · DACH ·{" "}
                <Link href="/" className="underline hover:no-underline">
                  Zurück zur Startseite
                </Link>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper Components
function SectionHead({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-[14px] flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="m-0 text-[22px] tracking-[-0.2px]" style={{ color: "#1b252a" }}>
          {title}
        </h2>
        <p className="m-0 mt-1 max-w-[68ch] text-[14.5px]" style={{ color: "#53636b" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-[22px] p-[18px]"
      style={{
        background: "rgba(255,255,255,.84)",
        border: "1px solid #e6edf0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h3 className="m-0 mb-[6px] text-[16px]" style={{ color: "#2f3e46" }}>
        {title}
      </h3>
      <p className="m-0 text-[14.5px]" style={{ color: "#53636b" }}>
        {children}
      </p>
    </div>
  );
}

function Sidebox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-[14px] px-[18px] pb-4 pt-[18px]"
      style={{
        background: "rgba(247,249,250,.7)",
        border: "1px solid #e6edf0",
      }}
    >
      <h3 className="m-0 mb-[6px] text-[15px] tracking-[.1px]" style={{ color: "#2f3e46" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-full px-[10px] py-2 text-[12.5px]"
      style={{
        color: "#2f3e46",
        background: "rgba(255,255,255,.75)",
        border: "1px solid #e6edf0",
      }}
    >
      {children}
    </div>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <div
      className="mt-4 rounded-[22px] p-[18px]"
      style={{
        background: "linear-gradient(135deg, rgba(132,169,140,.14), rgba(255,255,255,.85))",
        border: "1px solid rgba(132,169,140,.22)",
      }}
    >
      <p className="m-0 font-semibold" style={{ color: "#2f3e46" }}>
        {text}
      </p>
      <span className="mt-[6px] block text-[13.5px]" style={{ color: "#53636b" }}>
        — {author}
      </span>
    </div>
  );
}

function Module({ title, tag, children }: { title: string; tag: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-[22px] p-[18px]"
      style={{
        background: "rgba(255,255,255,.86)",
        border: "1px solid #e6edf0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="mb-[10px] flex flex-wrap items-center justify-between gap-3">
        <h3 className="m-0 text-[16px]" style={{ color: "#2f3e46" }}>
          {title}
        </h3>
        <div
          className="whitespace-nowrap rounded-full px-[10px] py-[6px] text-[12px]"
          style={{
            color: "#2f3e46",
            background: "rgba(132,169,140,.12)",
            border: "1px solid rgba(132,169,140,.22)",
          }}
        >
          {tag}
        </div>
      </div>
      <ul className="m-0 mt-[10px] pl-[18px] text-[14.5px]" style={{ color: "#53636b" }}>
        {children}
      </ul>
    </div>
  );
}

function Person({ name, role, children }: { name: string; role: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-start gap-[14px] rounded-[22px] p-[18px]"
      style={{
        background: "rgba(255,255,255,.86)",
        border: "1px solid #e6edf0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        className="relative h-[56px] w-[56px] flex-shrink-0 rounded-[18px]"
        style={{
          background: "linear-gradient(135deg, rgba(47,62,70,.9), rgba(132,169,140,.6))",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-[10px] rounded-[14px]"
          style={{ border: "1px solid rgba(255,255,255,.35)" }}
        />
      </div>
      <div>
        <h3 className="m-0 text-[16px]" style={{ color: "#2f3e46" }}>
          {name}
        </h3>
        <p className="m-0 mt-[6px] text-[14.5px]" style={{ color: "#53636b" }}>
          {role}
        </p>
        <ul className="m-0 mt-[10px] pl-[18px] text-[14.5px]" style={{ color: "#53636b" }}>
          {children}
        </ul>
      </div>
    </div>
  );
}
