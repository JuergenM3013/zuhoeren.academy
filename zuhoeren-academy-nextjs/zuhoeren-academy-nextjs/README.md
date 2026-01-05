# zuhoeren.academy — Next.js Marketing Site (Suite)

## Setup
```bash
npm install
npm run dev
```

## Pages
- `/` Start (Suite Overview)
- `/plattformen` + `/plattformen/[slug]`
- `/use-cases`
- `/sicherheit`
- `/kontakt`
- `/impressum`, `/datenschutz`

## Content
Alle Plattform-Texte liegen zentral in `content/platforms.ts`.

## Kontaktformular
`components/marketing/contact-form.tsx` ist bewusst Dummy (kein Versand).
Binde hier deine Mail/CRM-Lösung an (z. B. API Route, Resend, Postmark, HubSpot, etc.).
