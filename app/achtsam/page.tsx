import Link from "next/link";
import type { Metadata } from "next";
import {
  BreathingTimer,
  ListeningSelfCheck,
  PillarsInteractive,
  ScrollJourney,
  StickyCTA,
} from "@/components/achtsam/sections";

export const metadata: Metadata = {
  title: "Achtsames Zuhören – Seminar für Präsenz, Klarheit & Verbindung | Zuhörakademie",
  description:
    "Erleben Sie achtsames Zuhören als Haltung: Achtsamkeit, Selbsterfahrung, wissenschaftliche Impulse & praxisnahe Dialogübungen. Für Beruf und Alltag. Angebot auf Anfrage.",
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#e2e4e8] bg-white/60 px-3 py-1 text-sm">
      {children}
    </span>
  );
}

function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  if (variant === "primary") {
    return (
      <a
        href={href}
        className={`${base} bg-[#106278] text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:opacity-95 active:scale-[0.99]`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border border-[#e2e4e8] bg-white/70 text-[#121418] hover:bg-white active:scale-[0.99]`}
    >
      {children}
    </a>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-[#e2e4e8] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-7">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-[#616974]">{text}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#e2e4e8]" />;
}

export default function AchtsamPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "rgb(248 247 244)",
        color: "rgb(18 20 24)",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Sticky CTA */}
      <StickyCTA />

      {/* HERO */}
      <div
        style={{
          background: `
            radial-gradient(1200px 600px at 15% 10%, rgba(16,98,120,0.10), transparent 55%),
            radial-gradient(900px 500px at 85% 20%, rgba(194,122,73,0.12), transparent 55%),
            linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0))
          `,
        }}
      >
        <Section className="pt-12 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Badge>Seminar</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Achtsames Zuhören
              </h1>
              <p className="mt-4 text-xl text-[#616974]">Präsenz. Verbindung. Klarheit.</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#616974]">
                In einer Welt voller Ablenkungen wird echtes Zuhören immer seltener – und gleichzeitig
                immer wertvoller. Dieses Seminar lädt dazu ein, Zuhören neu zu erfahren: nicht als
                Technik, sondern als innere, achtsame Haltung.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#seminar">Seminar entdecken</Button>
                <Button href="#kontakt" variant="secondary">
                  Kontakt aufnehmen
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-sm text-[#616974]">
                <span>Achtsamkeit</span>
                <span>·</span>
                <span>Selbsterfahrung</span>
                <span>·</span>
                <span>Wissenschaftliche Impulse</span>
                <span>·</span>
                <span>Dialogübungen</span>
              </div>
            </div>

            {/* Right side: Breathing Timer */}
            <div className="lg:col-span-5">
              <BreathingTimer />
            </div>
          </div>
        </Section>
      </div>

      {/* SELF-CHECK */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">Wie gut hören Sie wirklich zu?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#616974]">
              Zuhören scheitert selten am guten Willen – eher am Autopilot, an Bewertungen und daran,
              dass innerlich zu wenig Raum bleibt, wirklich offen zu sein.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#616974]">
              Machen Sie den kurzen Selbsttest und finden Sie heraus, wo Sie stehen – ganz ohne Wertung.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ListeningSelfCheck />
          </div>
        </div>
      </Section>

      {/* PAIN */}
      <Section className="pt-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Warum wir oft hören – aber nicht zuhören</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#616974]">
            Drei typische Hindernisse, die wir alle kennen.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Autopilot"
            text="Wir sind gedanklich schon beim Nächsten – und verpassen das Wesentliche im Moment."
          />
          <Card
            title="Filter & Bewertungen"
            text="Erfahrungen, Erwartungen und Wertungen legen sich zwischen uns und das Gesagte."
          />
          <Card
            title="Zu wenig innerer Raum"
            text="Ohne Präsenz und Selbstregulation wird Zuhören schnell anstrengend – für beide Seiten."
          />
        </div>
      </Section>

      {/* ABOUT */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-[#e2e4e8] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-10">
          <h2 className="text-2xl font-semibold">Dieses Seminar ist keine Technik-Schulung.</h2>
          <p className="mt-2 text-lg text-[#616974]">Es ist eine Erfahrung.</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "Achtsamkeit & Selbsterfahrung – spürbar im Körper",
              "Wissenschaftlich fundierte Impulse – ohne Theorie-Overload",
              "Dialogübungen, die Beziehung und Klarheit fördern",
              "Werkzeuge für Alltag, Beruf, Führung und Zusammenarbeit",
            ].map((b) => (
              <div key={b} className="flex gap-3">
                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c27a49]" />
                <div className="text-sm leading-relaxed text-[#616974]">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="seminar">
        <ScrollJourney />
      </Section>

      {/* PILLARS */}
      <Section className="pt-0">
        <PillarsInteractive />
      </Section>

      {/* BREATH */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold">Zuhören beginnt im Körper</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#616974]">
              Atem, Nervensystem und innere Ruhe beeinflussen, wie offen und klar wir zuhören können.
              Sie lernen einfache, alltagstaugliche Atem-Tools – und wann sie im Gespräch wirklich
              helfen.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: "Box Breathing", desc: "4-4-4-4: Einatmen, Halten, Ausatmen, Halten." },
                { name: "4-7-8 Atmung", desc: "Beruhigt das Nervensystem in Sekunden." },
                { name: "Summatmung", desc: "Löst Anspannung und schafft inneren Raum." },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl border border-[#e2e4e8] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-sm font-semibold">{t.name}</div>
                  <p className="mt-2 text-xs leading-relaxed text-[#616974]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section className="pt-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Was Sie mitnehmen</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#616974]">
            Spürbar im Inneren – sichtbar im Kontakt.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Innen",
              items: [
                "mehr Präsenz und innere Ruhe in Gesprächen",
                "klareres Wahrnehmen von sich selbst",
                "mehr Selbstmitgefühl statt innerem Druck",
              ],
            },
            {
              title: "Im Kontakt",
              items: [
                "wertschätzendere Kommunikation – auch wenn es schwierig wird",
                "stärkere Beziehungsqualität im Beruf und Privatleben",
                "konkrete Werkzeuge für Alltag und Beruf",
              ],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-3xl border border-[#e2e4e8] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="text-base font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-[#616974]">
                {col.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-[#c27a49]">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* TRAINERS */}
      <Section>
        <h2 className="text-2xl font-semibold">Ihre Trainer:innen</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#616974]">
          Zwei Perspektiven – eine gemeinsame Haltung: präsent, wertfrei, zugewandt.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Katharina Kunisch",
              role: "Die ZuhörerIn",
              focus: "Achtsamkeit · Präsenz · Tiefe",
              linkLabel: "diezuhoererin.at",
              linkHref: "https://www.diezuhoererin.at",
            },
            {
              name: "Jürgen Melmuka",
              role: "Gründer Zuhörakademie",
              focus: "Kommunikationstrainer · Autor »Kernkompetenz Zuhören«",
              linkLabel: "zuhoerakademie.at",
              linkHref: "https://www.zuhoerakademie.at",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-[#e2e4e8] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="text-base font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-[#616974]">{p.role}</div>
              <div className="mt-3 text-sm text-[#616974]">{p.focus}</div>
              <a
                href={p.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-medium text-[#106278] underline underline-offset-4"
              >
                {p.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div
          className="rounded-3xl border border-[#e2e4e8] p-7 sm:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(16,98,120,0.12), rgba(194,122,73,0.10))",
          }}
        >
          <h2 className="text-2xl font-semibold">
            Wenn Sie spüren, dass Zuhören gerade wichtig ist …
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#616974]">
            Wir senden Ihnen die Seminarinfos oder klären Fragen in einem kurzen Gespräch. Ohne Druck
            – als Einladung.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#kontakt">Gespräch anfragen</Button>
            <Button href="#kontakt" variant="secondary">
              Seminarinfos erhalten
            </Button>
          </div>
          <p className="mt-4 text-xs text-[#616974]">Angebot auf Anfrage.</p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="kontakt">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#616974]">
              Schreiben Sie uns kurz, wofür Sie achtsames Zuhören nutzen möchten (Beruf, Führung,
              Team, privat). Wir melden uns zeitnah.
            </p>

            <div className="mt-6 space-y-2 text-sm text-[#616974]">
              <div>+43 664 397 8684</div>
              <div>hallo@zuhoerakademie.at</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              className="rounded-3xl border border-[#e2e4e8] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              action="mailto:hallo@zuhoerakademie.at"
              method="POST"
              encType="text/plain"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  Name
                  <input
                    className="mt-2 w-full rounded-2xl border border-[#e2e4e8] px-4 py-3 text-sm"
                    placeholder="Vor- und Nachname"
                    name="name"
                  />
                </label>

                <label className="text-sm">
                  E-Mail
                  <input
                    className="mt-2 w-full rounded-2xl border border-[#e2e4e8] px-4 py-3 text-sm"
                    placeholder="name@organisation.at"
                    name="email"
                    type="email"
                  />
                </label>

                <label className="text-sm sm:col-span-2">
                  Organisation (optional)
                  <input
                    className="mt-2 w-full rounded-2xl border border-[#e2e4e8] px-4 py-3 text-sm"
                    placeholder="Praxis / Klinik / Unternehmen"
                    name="organisation"
                  />
                </label>

                <label className="text-sm sm:col-span-2">
                  Nachricht
                  <textarea
                    className="mt-2 min-h-[120px] w-full rounded-2xl border border-[#e2e4e8] px-4 py-3 text-sm"
                    placeholder="Worum geht es Ihnen? Was möchten Sie verbessern?"
                    name="message"
                  />
                </label>

                <label className="flex items-start gap-3 text-xs text-[#616974] sm:col-span-2">
                  <input type="checkbox" className="mt-1" required />
                  <span>
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme verarbeitet werden.
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="rounded-2xl bg-[#106278] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:opacity-95"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="pb-10">
        <Container>
          <Divider />
          <div className="mt-6 flex flex-col gap-2 text-xs text-[#616974] sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Zuhörakademie</div>
            <div className="flex gap-4">
              <Link href="/impressum" className="underline underline-offset-4">
                Impressum
              </Link>
              <Link href="/datenschutz" className="underline underline-offset-4">
                Datenschutz
              </Link>
              <Link href="/" className="underline underline-offset-4">
                Startseite
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
