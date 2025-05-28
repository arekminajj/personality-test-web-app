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
          const type = calculateResult(json.data.answers);
          setResultType(type);
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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        {/* SR-only wrapper keeps the status semantics */}
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
  if (!data) return <div className="p-4">Nie znaleziono testu lub wystąpił błąd.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      {/* Lewa kolumna: wynik i opis */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md self-start w-full max-w-prose">
        <h1 className="text-3xl font-bold mb-4">
          Twój typ osobowości: <span className="text-blue-600">{resultType}</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          {mbtiDescriptions[resultType]}
        </p>
      </div>

      {/* Prawa kolumna: odpowiedzi */}
      <div className="space-y-4">
        {Object.entries(data.answers).map(([id, answerData], index) => (
          <div
            key={id}
            className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-800"
          >
            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {index + 1}. {answerData.question}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Twoja odpowiedź: <strong>{answerData.selectedAnswer.text}</strong> (
              {answerData.selectedAnswer.type})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
