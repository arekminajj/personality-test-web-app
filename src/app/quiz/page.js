"use client";
import { useState, useEffect } from "react";
import Question from "../../components/MBTIquestion";
import TestQuestions from "../../data/TestQuestions";
import { useRouter } from "next/navigation";

const BATCH_SIZE = 5;

function getInterpolatedColor(progress) {
  let r,
    g,
    b = 0;
  if (progress <= 50) {
    r = 255;
    g = Math.round((progress / 50) * 255);
  } else {
    r = Math.round(255 - ((progress - 50) / 50) * 255);
    g = 255;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [currentBatch, setCurrentBatch] = useState(0);
  const router = useRouter();

  const totalBatches = Math.ceil(TestQuestions.length / BATCH_SIZE);
  const progress = Number(
    ((currentBatch / (totalBatches - 1)) * 100).toFixed(1)
  );
  const fillColor = getInterpolatedColor(progress);

  function scrollToTop() {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  }

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
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (currentBatch > 0) {
      setCurrentBatch(currentBatch - 1);
      scrollToTop();
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
  const progressTextColor = progress > 50 ? "text-black" : "text-white";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        {/* SR-only wrapper keeps the status semantics */}
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-gray-400 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-2 py-6">
      {/* Pasek postępu – mobilny sticky */}
      <div className="lg:hidden sticky top-0 z-50 w-full max-w-xs mx-auto h-[30px] bg-gray-800 rounded-xl border-2 border-blue-600 overflow-hidden flex items-center justify-center mb-6 relative shadow-lg">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: fillColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`${
              progress > 30 ? "text-black" : "text-white"
            } font-bold text-sm`}
          >
            {progress}%
          </span>
        </div>
      </div>

      {/* Probówka – lewa (desktop) */}
      <div className="hidden lg:flex relative w-[50px] h-[1100px] bg-gray-800 rounded-xl border-2 border-blue-600 overflow-hidden items-end justify-center mr-6">
        <div
          className="absolute bottom-0 left-0 w-full transition-all duration-500"
          style={{ height: `${progress}%`, backgroundColor: fillColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${progressTextColor} font-bold text-sm`}>
            {progress}%
          </span>
        </div>
      </div>

      {/* Główna zawartość */}
      <div className="flex-1 space-y-6 max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Test osobowości MBTI
        </h1>
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
            className={`bg-gray-300 text-black font-semibold py-2 px-4 rounded 
              ${
                currentBatch === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-400 cursor-pointer"
              }`}
          >
            Wstecz
          </button>

          <div className="text-center text-base text-gray-500 mt-0">
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
              className={`bg-blue-600 text-white font-semibold py-2 px-4 rounded 
              ${
                !isCurrentBatchComplete
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700 cursor-pointer"
              }`}
            >
              Dalej
            </button>
          )}
        </div>
      </div>

      {/* Probówka – prawa (desktop) */}
      <div className="hidden lg:flex relative w-[50px] h-[1100px] bg-gray-800 rounded-xl border-2 border-blue-600 overflow-hidden items-end justify-center ml-6">
        <div
          className="absolute bottom-0 left-0 w-full transition-all duration-500"
          style={{ height: `${progress}%`, backgroundColor: fillColor }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${progressTextColor} font-bold text-sm`}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
