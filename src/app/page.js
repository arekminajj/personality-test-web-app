"use client";
import { useState } from "react";
import Question from "./ui/MBTIquestion";
import TestQuestions from "../../data/TestQuestions";
import { useRouter } from "next/navigation";

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const handleAnswerChange = (questionId, selectedKey, questionData) => {
    const selectedAnswer = questionData.answers[selectedKey];
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        selectedKey,
        answer: selectedAnswer,
        question: questionData.question,
      },
    }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length !== TestQuestions.length) {
      alert("Odpowiedz na wszystkie pytania!");
      return;
    }

    try {
      const payload = Object.entries(answers).map(([id, data]) => ({
        id,
        question: data.question,
        selectedKey: data.selectedKey,
        selectedAnswer: data.answer,
      }));

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "ok" && result.submissionId) {
        router.push(`/result?id=${result.submissionId}`);
      } 
    } catch (error) {
      alert("Błąd przy przesyłaniu.");
    }
  };

  return (
    <div className="space-y-6 p-4 max-w-xl mx-auto space-y-6">
      {TestQuestions.map((q) => (
        <Question
          key={q.id}
          questionData={q}
          selected={answers[q.id]}
          onChange={handleAnswerChange}
        />
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Prześlij odpowiedzi
      </button>
    </div>
  );
}
