"use client";
import { useEffect, useMemo, useState } from "react";
import unitsData from "../../../content/tests/units.json";

type Q = { id: string; type: "multiple-choice" | "free-response"; question: string; options?: string[]; correct?: number };

export default function Teaching() {
  const unit = unitsData.units?.[0];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const q = useMemo(() => unit?.questions?.[idx] as Q | undefined, [idx, unit]);

  useEffect(() => { if (typeof window !== "undefined") {
    const saved = localStorage.getItem("answers");
    if (saved) setAnswers(JSON.parse(saved));
  }}, []);
  useEffect(() => { if (typeof window !== "undefined") localStorage.setItem("answers", JSON.stringify(answers)); }, [answers]);

  if (!unit) return <main className="container py-12">No demo unit found</main>;

  return (
    <main className="container py-12">
      <div className="mb-6">
        <div className="h-1 bg-brand-yellow-50 rounded-full">
          <div className="h-1 bg-brand-yellow rounded-full" style={{ width: `${((idx + 1) / unit.questions.length) * 100}%` }} />
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {idx + 1} of {unit.questions.length}
        </p>
      </div>

      {q && (
        <div className="rounded-2xl border p-6 shadow-soft">
          <h1 className="text-xl font-semibold">{q.question}</h1>
          {q.type === "multiple-choice" ? (
            <ul className="mt-4 space-y-3">
              {q.options?.map((opt, i) => {
                const key = `${unit.id}-${q.id}`;
                return (
                  <li key={i}>
                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={key}
                        checked={answers[key] === String(i)}
                        onChange={() => setAnswers({ ...answers, [key]: String(i) })}
                      />
                      <span>{opt}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          ) : (
            <textarea
              className="mt-4 w-full rounded-xl border p-3"
              rows={5}
              placeholder="Type your answer"
              value={answers[`${unit.id}-${q.id}`] ?? ""}
              onChange={(e) => setAnswers({ ...answers, [`${unit.id}-${q.id}`]: e.target.value })}
            />
          )}

          <div className="mt-6 flex items-center justify-between">
            <button
              className="rounded-xl border px-4 py-2 hover:bg-brand-yellow-50"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
            >
              Previous
            </button>
            <button
              className="rounded-xl bg-brand-yellow px-4 py-2 font-medium text-black hover:bg-brand-yellow-600"
              onClick={() => setIdx((i) => Math.min(unit.questions.length - 1, i + 1))}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </main>
  );
}