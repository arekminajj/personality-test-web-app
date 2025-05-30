"use client";

import { useState, useEffect, useRef } from "react";
import TestQuestions from "../../data/TestQuestions";
import Visualization from "@/components/Visualization";
import PersonalityBarChart from "@/components/PersonalityBarChart";

const BATCH_SIZE = 5;

export default function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const vizRef = useRef(null); // 👈 odwołanie do sekcji wykresów kołowych

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`, {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load stats");
        return res.json();
      })
      .then(({ data }) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (vizRef.current) {
      // przewiń tylko do wykresów kołowych
      vizRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!data) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <div role="status" className="flex flex-col items-center gap-3">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-400 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
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
          <span className="sr-only">Loading…</span>
        </div>
      </div>
    );
  }

  const merged = data.questions
    .map(({ questionId, stats }) => {
      const q = TestQuestions.find((q) => String(q.id) === questionId);
      const statsWithText = stats.map(({ key, percent }) => ({
        answerText: q.answers[key].text,
        percent,
      }));
      return {
        questionId,
        questionText: q ? q.question : `Question ${questionId}`,
        stats: statsWithText,
      };
    })
    .sort((a, b) => Number(a.questionId) - Number(b.questionId));

  const totalPages = Math.ceil(merged.length / BATCH_SIZE);
  const currentQuestions = merged.slice(
    currentPage * BATCH_SIZE,
    (currentPage + 1) * BATCH_SIZE
  );

  return (
    <main className="bg-black min-h-screen text-white py-4 px-4 space-y-7">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Statystyki wyników
      </h1>

      <div>
        <PersonalityBarChart data={data.types} />
      </div>

      <div ref={vizRef}>
        <Visualization data={currentQuestions} />
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 0}
            className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            Poprzednie
          </button>
          <span className="text-white mt-2">
            Strona {currentPage + 1} z {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            Następne
          </button>
        </div>
      </div>
    </main>
  );
}
