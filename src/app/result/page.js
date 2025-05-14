'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const testId = searchParams.get('id');

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

    const result =
      (traits.E >= traits.I ? 'E' : 'I') +
      (traits.S >= traits.N ? 'S' : 'N') +
      (traits.T >= traits.F ? 'T' : 'F') +
      (traits.J >= traits.P ? 'J' : 'P');

    return result;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/quiz?id=${testId}`);
        const json = await res.json();

        console.log(json)

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

    if (testId) fetchData();
  }, [testId]);

  if (loading) return <div className="p-4">Ładowanie...</div>;
  if (!data) return <div className="p-4">Nie znaleziono testu lub wystąpił błąd.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Twój wynik MBTI: <span className="text-blue-600">{resultType}</span></h1>
      
      <div className="space-y-4">
        {Object.entries(data.answers).map(([id, answerData]) => (
          <div key={id} className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-800">
            <p className="font-semibold text-gray-700 dark:text-gray-200">{answerData.question}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Twoja odpowiedź: <strong>{answerData.selectedAnswer.text}</strong> ({answerData.selectedAnswer.type})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
