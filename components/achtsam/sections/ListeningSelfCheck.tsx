"use client";

import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: { label: string; score: number }[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Wenn jemand spricht, wie oft ertappen Sie sich dabei, schon an Ihre Antwort zu denken?",
    options: [
      { label: "Fast immer", score: 1 },
      { label: "Häufig", score: 2 },
      { label: "Manchmal", score: 3 },
      { label: "Selten", score: 4 },
    ],
  },
  {
    id: 2,
    text: "Wie leicht fällt es Ihnen, Urteile über Ihr Gegenüber während des Zuhörens zurückzustellen?",
    options: [
      { label: "Sehr schwer", score: 1 },
      { label: "Eher schwer", score: 2 },
      { label: "Eher leicht", score: 3 },
      { label: "Sehr leicht", score: 4 },
    ],
  },
  {
    id: 3,
    text: "Wie oft bemerken Sie Ihre eigenen Körpersignale (Anspannung, Atem) während eines Gesprächs?",
    options: [
      { label: "Fast nie", score: 1 },
      { label: "Selten", score: 2 },
      { label: "Manchmal", score: 3 },
      { label: "Regelmäßig", score: 4 },
    ],
  },
  {
    id: 4,
    text: "Können Sie gut Stille aushalten, wenn Ihr Gegenüber nachdenkt?",
    options: [
      { label: "Fällt mir sehr schwer", score: 1 },
      { label: "Fällt mir eher schwer", score: 2 },
      { label: "Geht meistens", score: 3 },
      { label: "Ja, gut", score: 4 },
    ],
  },
  {
    id: 5,
    text: "Wie präsent fühlen Sie sich nach einem wichtigen Gespräch?",
    options: [
      { label: "Oft erschöpft/zerstreut", score: 1 },
      { label: "Eher müde", score: 2 },
      { label: "Meistens okay", score: 3 },
      { label: "Klar und verbunden", score: 4 },
    ],
  },
];

type Result = {
  title: string;
  description: string;
  tip: string;
  color: string;
};

function getResult(score: number): Result {
  if (score <= 8) {
    return {
      title: "Der Autopilot-Zuhörer",
      description: `Sie hören oft, während Ihr Kopf schon woanders ist. Das ist menschlich – und veränderbar.`,
      tip: `Das Seminar kann Ihnen helfen, bewusster wahrzunehmen, wann Sie „abschalten" – und wie Sie sanft zurückkommen.`,
      color: "#c27a49",
    };
  }
  if (score <= 13) {
    return {
      title: "Der bemühte Zuhörer",
      description: `Sie möchten wirklich zuhören, aber innere Filter und Ablenkungen kommen dazwischen.`,
      tip: `Im Seminar lernen Sie, wie Körper und Atem das Zuhören unterstützen – ohne Anstrengung.`,
      color: "#8b7355",
    };
  }
  if (score <= 17) {
    return {
      title: "Der aufmerksame Zuhörer",
      description: `Sie sind auf einem guten Weg. Mit mehr Achtsamkeit können Sie noch tiefer zuhören.`,
      tip: `Das Seminar kann Ihre Praxis vertiefen – mit den sieben Säulen und neuen Dialogformen.`,
      color: "#5a8a70",
    };
  }
  return {
    title: "Der achtsame Zuhörer",
    description: `Sie bringen schon viel Präsenz und Offenheit mit. Chapeau!`,
    tip: `Das Seminar kann Ihre Fähigkeiten verfeinern und Ihnen neue Perspektiven eröffnen.`,
    color: "#106278",
  };
}

export function ListeningSelfCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / QUESTIONS.length) * 100;

  return (
    <div className="rounded-3xl border border-[#e2e4e8] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-[#121418]">Mini-Selbsttest: Wie gut hören Sie zu?</h3>
        <p className="mt-2 text-sm text-[#616974]">
          5 Fragen, 2 Minuten – ehrliche Einschätzung.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e2e4e8]">
          <div
            className="h-full rounded-full bg-[#106278] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-[#616974]">
          {showResult ? "Fertig" : `Frage ${currentQuestion + 1} von ${QUESTIONS.length}`}
        </div>
      </div>

      {!showResult ? (
        <div className="mt-8">
          {/* Question */}
          <p className="text-base font-medium text-[#121418]">
            {QUESTIONS[currentQuestion].text}
          </p>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {QUESTIONS[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.score)}
                className="w-full rounded-2xl border border-[#e2e4e8] bg-[#f8f7f4] px-5 py-4 text-left text-sm transition hover:border-[#106278] hover:bg-white"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          {/* Result */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: `${result.color}15` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: result.color }}
              />
              <h4 className="text-lg font-semibold" style={{ color: result.color }}>
                {result.title}
              </h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#616974]">
              {result.description}
            </p>
            <p className="mt-4 text-sm font-medium text-[#121418]">
              {result.tip}
            </p>
          </div>

          {/* Score */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#e2e4e8] bg-[#f8f7f4] px-5 py-4">
            <span className="text-sm text-[#616974]">Ihr Punktestand</span>
            <span className="text-lg font-semibold" style={{ color: result.color }}>
              {totalScore} / 20
            </span>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={reset}
              className="rounded-2xl border border-[#e2e4e8] bg-white px-5 py-3 text-sm font-medium text-[#121418] transition hover:bg-[#f8f7f4]"
            >
              Nochmal starten
            </button>
            <a
              href="#kontakt"
              className="rounded-2xl bg-[#106278] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(16,98,120,0.2)] transition hover:opacity-95"
            >
              Seminar anfragen
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
