import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { platforms } from "@/content/platforms";
import { texts, colors } from "@/content/texts";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm ${colors.sections.hero}`}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {texts.hero.pill}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {texts.hero.headline}
          </h1>

          <p className="mt-4 max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl font-medium">
            {texts.hero.subheadline}
          </p>

          <p className={`mt-6 max-w-2xl text-base leading-relaxed ${colors.ui.textSecondary} md:text-lg`}>
            {texts.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#produkte" className={`rounded-xl ${colors.ui.ctaPrimary} px-5 py-3 font-semibold transition inline-flex items-center gap-2`}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {texts.hero.ctaPrimary}
            </a>
            <a href="#wie" className={`rounded-xl ${colors.ui.ctaSecondary} px-5 py-3 font-semibold transition`}>
              {texts.hero.ctaSecondary}
            </a>
          </div>

          <div className={`mt-10 flex flex-wrap gap-6 text-sm ${colors.ui.textSecondary}`}>
            {texts.hero.features.map((feature) => (
              <span key={feature} className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> {feature}
              </span>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {texts.hero.trustBadges[0]}
            </span>
            {texts.hero.trustBadges.slice(1).map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                {badge.includes("Austria") && "🇦🇹 "}{badge}
              </span>
            ))}
          </div>

          {/* KPI Badges - Fitness Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {texts.hero.stats.map((stat) => (
              <div key={stat.label} className={`rounded-2xl border ${colors.ui.cardBorder} ${colors.ui.cardBg} p-4 text-center`}>
                <div className="text-2xl font-extrabold">{stat.value}</div>
                <div className={`mt-1 text-sm ${colors.ui.textMuted}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LÖSUNGEN */}
      <section id="produkte" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-violet-600/5 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-sm font-medium ${colors.sections.products} uppercase tracking-wider mb-2`}>{texts.products.sectionLabel}</p>
            <h2 className="text-3xl font-extrabold tracking-tight">{texts.products.headline}</h2>
            <p className={`mt-2 max-w-2xl leading-relaxed ${colors.ui.textSecondary}`}>
              {texts.products.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const catColors = colors.categories[platform.category as keyof typeof colors.categories];
            return (
              <ProductCard
                key={platform.slug}
                name={platform.name}
                tag={platform.category}
                tagline={platform.tagline}
                href={platform.website}
                bullets={platform.bullets}
                ctaLabel={texts.products.ctaLabel}
                status={platform.status}
                statusLabel={platform.statusLabel}
                tagColor={catColors.tag}
                dotColor={catColors.dot}
              />
            );
          })}
        </div>
        </div>
      </section>

      {/* PLATTFORMEN IM DETAIL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className={`text-sm font-medium ${colors.sections.stations} uppercase tracking-wider mb-2`}>{texts.stations.sectionLabel}</p>
        <h2 className="text-3xl font-extrabold tracking-tight mb-4">{texts.stations.headline}</h2>
        <p className={`max-w-2xl leading-relaxed ${colors.ui.textSecondary} mb-10`}>
          {texts.stations.description}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => {
            const catColors = colors.categories[platform.category as keyof typeof colors.categories];
            return (
              <div key={platform.slug} className={`rounded-3xl border ${colors.ui.cardBorder} bg-gradient-to-br ${catColors.gradient} to-transparent p-8`}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${catColors.tag}`}>
                    {platform.name}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    platform.status === "live"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  }`}>
                    {platform.statusLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{platform.tagline}</h3>
                <p className={`mt-3 ${colors.ui.textSecondary} leading-relaxed text-sm`}>
                  {platform.description}
                </p>
                {platform.sections[0] && (
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{platform.sections[0].title}</p>
                    {platform.sections[0].items?.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className={`mt-1 h-2 w-2 rounded-full ${catColors.dot}`} />
                        <p className="text-sm text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={platform.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
                >
                  {platform.name} {texts.stations.visitLabel}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* GYM STANDARDS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className={`rounded-3xl border ${colors.ui.cardBorder} bg-gradient-to-br from-violet-600/5 to-emerald-600/5 p-8 md:p-12 text-center`}>
          <p className={`text-sm font-medium ${colors.sections.gymStandards} uppercase tracking-wider`}>{texts.gymStandards.sectionLabel}</p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">{texts.gymStandards.headline}</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${colors.ui.textSecondary} leading-relaxed`}>
            {texts.gymStandards.description}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {texts.gymStandards.badges.map((badge, i) => (
              <div key={badge.title} className={`rounded-2xl border ${colors.ui.cardBorder} ${colors.ui.cardBg} p-6`}>
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <div className={`text-xl font-extrabold ${Object.values(colors.badges)[i]}`}>{badge.title}</div>
                <div className={`mt-2 text-sm ${colors.ui.textMuted}`}>{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LERNPROZESS */}
      <section id="wie" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-amber-600/5 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p className={`text-sm font-medium ${colors.sections.trainingPlan} uppercase tracking-wider mb-2`}>{texts.trainingPlan.sectionLabel}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{texts.trainingPlan.headline}</h2>
        <p className={`mt-2 max-w-2xl leading-relaxed ${colors.ui.textSecondary}`}>
          {texts.trainingPlan.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {texts.trainingPlan.steps.map((step, i) => {
            const stepColors = Object.values(colors.trainingSteps)[i];
            return (
              <div key={step.title} className={`rounded-2xl border ${stepColors} p-6`}>
                <div className="text-3xl mb-3">{step.emoji}</div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className={`mt-2 leading-relaxed ${colors.ui.textSecondary} text-sm`}>{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Fitness Philosophy */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {texts.trainingPlan.philosophy.map((item, i) => (
            <div key={item.title} className={`rounded-2xl border ${colors.ui.cardBorder} bg-gradient-to-br ${i === 0 ? 'from-violet-600/10' : 'from-emerald-600/10'} to-transparent p-6`}>
              <div className="text-2xl mb-3">{item.emoji}</div>
              <h3 className="font-extrabold">{item.title}</h3>
              <p className={`mt-3 leading-relaxed ${colors.ui.textSecondary}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ZIELGRUPPEN-MATRIX */}
      <section id="zielgruppen" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-violet-600/5 via-transparent to-cyan-600/5" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p className={`text-sm font-medium ${colors.sections.targetAudiences} uppercase tracking-wider mb-2`}>{texts.targetAudiences.sectionLabel}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{texts.targetAudiences.headline}</h2>
        <p className={`mt-2 max-w-2xl leading-relaxed ${colors.ui.textSecondary}`}>
          {texts.targetAudiences.description}
        </p>

        <div className="mt-10 space-y-6">
          {texts.targetAudiences.audiences.map((audience) => (
            <div key={audience.role} className={`rounded-2xl border ${colors.ui.cardBorder} ${colors.ui.cardBg} p-6`}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Zielgruppe Header */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{audience.emoji}</span>
                    <div>
                      <h3 className="font-extrabold text-lg">{audience.role}</h3>
                      <p className={`text-sm ${colors.ui.textSecondary}`}>{audience.benefit}</p>
                    </div>
                  </div>
                </div>

                {/* Plattformen */}
                <div className="md:w-2/3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {audience.platforms.map((platform) => (
                      <div key={platform.name} className={`rounded-xl border ${colors.ui.cardBorder} bg-white/5 p-4`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-sm">{platform.name}</span>
                          <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                            platform.status === "live"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          }`}>
                            {platform.status === "live" ? "Live" : "Coming soon"}
                          </span>
                        </div>
                        <p className={`text-xs ${colors.ui.textMuted}`}>{platform.use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ANWENDUNGSFÄLLE */}
      <section id="use-cases" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-rose-600/5 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p className={`text-sm font-medium ${colors.sections.useCases} uppercase tracking-wider mb-2`}>{texts.useCases.sectionLabel}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{texts.useCases.headline}</h2>
        <p className={`mt-2 max-w-2xl leading-relaxed ${colors.ui.textSecondary}`}>
          {texts.useCases.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {texts.useCases.cases.map((useCase) => (
            <div key={useCase.title} className={`rounded-2xl border ${colors.ui.cardBorder} ${colors.ui.cardBg} p-6 ${colors.ui.cardHover} transition`}>
              <div className="text-2xl mb-3">{useCase.emoji}</div>
              <h3 className="font-bold">{useCase.title}</h3>
              <p className={`mt-2 leading-relaxed ${colors.ui.textSecondary} text-sm`}>{useCase.description}</p>
              <p className={`mt-3 text-xs ${colors.sections.products} font-medium`}>→ {useCase.platform}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* DER GRÜNDER */}
      <section id="ueber-uns" className="mx-auto max-w-6xl px-6 py-16">
        <div className={`rounded-3xl border ${colors.ui.cardBorder} bg-gradient-to-br from-emerald-600/5 to-violet-600/5 p-8 md:p-12`}>
          <p className={`text-sm font-medium ${colors.sections.about} uppercase tracking-wider mb-2`}>{texts.about.sectionLabel}</p>
          <h2 className="text-3xl font-extrabold tracking-tight">{texts.about.headline}</h2>
          <p className={`mt-4 max-w-3xl leading-relaxed ${colors.ui.textSecondary}`}>
            {texts.about.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-2xl">
                {texts.about.founder.emoji}
              </div>
              <div>
                <p className={`font-bold ${colors.ui.textPrimary}`}>{texts.about.founder.name}</p>
                <p className={`text-sm ${colors.ui.textMuted}`}>{texts.about.founder.role}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={texts.about.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg border ${colors.ui.cardBorder} ${colors.ui.cardBg} px-4 py-2 text-sm font-medium ${colors.ui.cardHover} transition`}
              >
                LinkedIn
              </a>
              <a
                href={texts.about.founder.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-lg border ${colors.ui.cardBorder} ${colors.ui.cardBg} px-4 py-2 text-sm font-medium ${colors.ui.cardHover} transition`}
              >
                Zuhörakademie
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-cyan-600/5 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p className={`text-sm font-medium ${colors.sections.faq} uppercase tracking-wider mb-2`}>{texts.faq.sectionLabel}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{texts.faq.headline}</h2>
        <p className={`mt-2 max-w-2xl leading-relaxed ${colors.ui.textSecondary}`}>
          {texts.faq.description}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {texts.faq.questions.map((item) => (
            <details key={item.q} className={`group rounded-2xl border ${colors.ui.cardBorder} ${colors.ui.cardBg} p-5 ${colors.ui.cardHover} transition`}>
              <summary className="cursor-pointer font-bold">{item.q}</summary>
              <p className={`mt-3 leading-relaxed ${colors.ui.textSecondary}`}>{item.a}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`rounded-3xl border ${colors.ui.cardBorder} bg-gradient-to-br from-violet-600/10 to-transparent p-8`}>
            <p className={`text-sm font-medium ${colors.sections.contact} uppercase tracking-wider mb-2`}>{texts.contact.sectionLabel}</p>
            <h2 className="text-3xl font-extrabold tracking-tight">{texts.contact.headline}</h2>
            <p className={`mt-3 leading-relaxed ${colors.ui.textSecondary}`}>
              {texts.contact.description}
            </p>

            <div className="mt-8 space-y-3 text-white/80">
              <p>
                <b>E-Mail:</b>{" "}
                <a href={`mailto:${texts.contact.email}`} className="underline hover:text-white">
                  {texts.contact.email}
                </a>
              </p>
              <p>
                <b>Telefon:</b>{" "}
                <a href={`tel:${texts.contact.phone.replace(/\s/g, '')}`} className="underline hover:text-white">
                  {texts.contact.phone}
                </a>
              </p>
            </div>

            <div className={`mt-8 rounded-xl border ${colors.categories.Sales.border} ${colors.categories.Sales.bg} p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{texts.contact.probeAbo.emoji}</span>
                <p className="text-sm font-semibold text-violet-300">{texts.contact.probeAbo.title}</p>
              </div>
              <p className={`text-sm leading-relaxed ${colors.ui.textSecondary}`}>
                {texts.contact.probeAbo.description}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
