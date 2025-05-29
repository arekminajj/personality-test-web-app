"use client";
import { useState } from "react";
import Question from "../ui/MBTIquestion";
import TestQuestions from "../../data/TestQuestions";
import { useRouter } from "next/navigation";

const BATCH_SIZE = 5;

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [currentBatch, setCurrentBatch] = useState(0);
  const router = useRouter();

  const totalBatches = Math.ceil(TestQuestions.length / BATCH_SIZE);

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

  const handleNext = () => {
    if (currentBatch < totalBatches - 1) {
      setCurrentBatch(currentBatch + 1);
    }
  };

  const handlePrev = () => {
    if (currentBatch > 0) {
      setCurrentBatch(currentBatch - 1);
    }
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length !== TestQuestions.length) {
      alert("Odpowiedz na wszystkie pytania!");
      return;
    }

    const payload = Object.entries(answers).map(([id, data]) => ({
      id,
      question: data.question,
      selectedKey: data.selectedKey,
      selectedAnswer: data.answer,
    }));

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "ok" && result.submissionId) {
        router.push(`/result/${result.submissionId}`);
      }
    } catch (error) {
      alert("Błąd przy przesyłaniu.");
    }
  };

  const startIdx = currentBatch * BATCH_SIZE;
  const currentQuestions = TestQuestions.slice(startIdx, startIdx + BATCH_SIZE);

  const isCurrentBatchComplete = currentQuestions.every(
    (q) => answers[q.id] && answers[q.id].selectedKey
  );

  return (
    <div className="space-y-6 p-4 max-w-xl mx-auto select-none">
      {currentQuestions.map((q, idx) => (
        <Question
          key={q.id}
          questionData={q}
          selected={answers[q.id]}
          onChange={handleAnswerChange}
          number={startIdx + idx + 1}
        />
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentBatch === 0}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          Wstecz
        </button>

        <div className="text-center text-sm text-gray-500 mt-4">
          Strona {currentBatch + 1} z {totalBatches}
        </div>

        {currentBatch === totalBatches - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentBatchComplete}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
            >
              Prześlij odpowiedzi
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCurrentBatchComplete}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
            >
              Dalej
            </button>
          )
        }
      </div>
    </div>
  );
}
