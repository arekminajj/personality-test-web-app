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

  if (loading) return <div className="p-4">Ładowanie...</div>;
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
