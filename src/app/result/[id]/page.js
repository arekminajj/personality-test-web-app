'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import mbtiDescriptions from '../../../../data/mbtiDescriptions';

export default function ResultPage() {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [resultType, setResultType] = useState(null);
  const [loading, setLoading] = useState(true);

  // Nowe stany dla dzielenia na strony
  const [currentPage, setCurrentPage] = useState(0);
  const answersPerPage = 5;

  const calculateResult = (answers) => {
    const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    Object.values(answers).forEach((item) => {
      const typeLetter = item.selectedAnswer.type;
      if (traits.hasOwnProperty(typeLetter)) {
        traits[typeLetter]++;
      }
    });

    return (
      (traits.E >= traits.I ? 'E' : 'I') +
      (traits.S >= traits.N ? 'S' : 'N') +
      (traits.T >= traits.F ? 'T' : 'F') +
      (traits.J >= traits.P ? 'J' : 'P')
    );
  };

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/quiz?id=${id}`);
        const json = await res.json();

        if (json.data) {
          setData(json.data);
          setResultType(calculateResult(json.data.answers));
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching result:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="p-4">Ładowanie...</div>;
  if (!data) return <div className="p-4">Nie znaleziono testu lub wystąpił błąd.</div>;

  const answersArray = Object.entries(data.answers);
  const totalPages = Math.ceil(answersArray.length / answersPerPage);

  const paginatedAnswers = answersArray.slice(
    currentPage * answersPerPage,
    (currentPage + 1) * answersPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Twój wynik MBTI: <span className="text-blue-600">{resultType}</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          {mbtiDescriptions[resultType]}
        </p>
      </div>

      <div className="space-y-4">
        {paginatedAnswers.map(([id, answerData], index) => (
          <div
            key={id}
            className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-800"
          >
            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {currentPage * answersPerPage + index + 1}. {answerData.question}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Twoja odpowiedź:{" "}
              <strong>{answerData.selectedAnswer.text}</strong> (
              {answerData.selectedAnswer.type})
            </p>
          </div>
        ))}

        {/* Nawigacja stron */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Poprzednie
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Strona {currentPage + 1} z {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Następne
          </button>
        </div>
      </div>
    </div>
  );
}
