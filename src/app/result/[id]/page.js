"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MbtiResultData from "../../../data/mbtiResultData";

export default function ResultPage() {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [resultType, setResultType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const answersPerPage = 5;
  const [clickedOnce, setClickedOnce] = useState(false);

  const calculateResult = (answers) => {
    const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    Object.values(answers).forEach((item) => {
      const typeLetter = item.selectedAnswer.type;
      if (traits.hasOwnProperty(typeLetter)) {
        traits[typeLetter]++;
      }
    });

    return (
      (traits.E >= traits.I ? "E" : "I") +
      (traits.S >= traits.N ? "S" : "N") +
      (traits.T >= traits.F ? "T" : "F") +
      (traits.J >= traits.P ? "J" : "P")
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

  if (!data) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black p-6 text-center text-white">
        <h2 className="text-xl font-semibold">Nie znaleziono testu</h2>
        <p className="mt-2 max-w-xs text-sm text-gray-300">
          Link może być niepoprawny lub wystąpił nieoczekiwany błąd.
        </p>
        <button
          onClick={() => {
            if (clickedOnce) {
              window.location.href = "/";
            } else {
              setClickedOnce(true);
            }
          }}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          {clickedOnce
            ? "Kliknij ponownie, aby wrócić na stronę główną"
            : "Odśwież stronę"}
        </button>
      </div>
    );
  }

  const answersArray = Object.entries(data.answers);
  const totalPages = Math.ceil(answersArray.length / answersPerPage);
  const paginatedAnswers = answersArray.slice(
    currentPage * answersPerPage,
    (currentPage + 1) * answersPerPage
  );

  const traitPairs = [
    ["Ekstrawertyczny", "Introwertyczny"],
    ["Intuicyjny", "Realistyczny"],
    ["Analityczny", "Uczuciowy"],
    ["Planujący", "Poszukujący"],
    ["Asertywny", "Czujący"],
  ];

  const traitData = MbtiResultData[resultType]?.traits || [];
  const getTraitValue = (name) =>
    traitData.find((t) => t.name === name)?.value ??
    (traitData.find(
      (t) => t.name === traitPairs.find((p) => p.includes(name))?.[1]
    )?.value
      ? 100 -
        traitData.find(
          (t) => t.name === traitPairs.find((p) => p.includes(name))[1]
        ).value
      : 50);

  return (
    <div className="bg-black text-white min-h-screen max-w-8xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md w-full max-w-[850px] min-h-[500px] mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Twój wynik MBTI: <span className="text-blue-600">{resultType}</span>
        </h1>

        <div className="text-white dark:text-white leading-relaxed mb-6 text-lg text-justify space-y-4">
          {MbtiResultData[resultType]?.description
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>

        <div className="space-y-4">
          {traitPairs.map(([left, right], index) => {
            const value = getTraitValue(left);
            const existsLeft = traitData.find((t) => t.name === left);
            const existsRight = traitData.find((t) => t.name === right);

            const label =
              existsLeft?.value !== undefined
                ? `${existsLeft.value}% ${left}`
                : existsRight?.value !== undefined
                ? `${existsRight.value}% ${right}`
                : `${value}%`;

            return (
              <div key={index}>
                <p className="font-semibold text-center text-white">{label}</p>
                <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700"
                    style={{ width: `${value}%` }}
                  />
                  <div
                    className="absolute top-0 h-full w-1 rounded-full bg-white border border-gray-600"
                    style={{ left: `${value}%`, transform: "translateX(-50%)" }}
                  />
                </div>
                <div className="flex justify-between text-sm mt-1 px-1 text-gray-300">
                  <span>{left}</span>
                  <span>{right}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-blue-600 text-3xl font-bold mb-4 text-center">
          Twoje odpowiedzi
        </h2>
        {paginatedAnswers.map(([id, answerData], index) => (
          <div
            key={id}
            className="border border-gray-700 rounded-lg p-4 bg-gray-800 text-white dark:bg-gray-800 w-full max-w-[680px] min-h-[90px] mx-auto"
          >
            <p className="text-lg font-semibold text-white">
              <span className="font-extrabold">
                {currentPage * answersPerPage + index + 1}.
              </span>{" "}
              <span className="font-extrabold text-blue-400">
                {answerData.question}
              </span>
            </p>
            <p className="text-base text-white mt-1">
              Twoja odpowiedź:{" "}
              <strong className="text-white">
                {answerData.selectedAnswer.text}
              </strong>{" "}
              <span className="text-blue-400">
                ({answerData.selectedAnswer.type})
              </span>
            </p>
          </div>
        ))}

        <div className="w-full flex flex-row justify-center items-center gap-2 sm:gap-6 mt-8 text-center flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 0}
            className={`min-w-[90px] sm:min-w-[120px] px-2 sm:px-4 py-2 rounded font-medium text-center text-sm sm:text-base ${
              currentPage === 0
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-600 cursor-pointer"
            }`}
          >
            Poprzednie
          </button>

          <span className="text-sm sm:text-base text-white">
            Strona {currentPage + 1} z {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage >= totalPages - 1}
            className={`min-w-[90px] sm:min-w-[120px] px-2 sm:px-4 py-2 rounded font-medium text-center text-sm sm:text-base ${
              currentPage >= totalPages - 1
                ? "bg-blue-600 opacity-50 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer text-white"
            }`}
          >
            Następne
          </button>
        </div>

        <div className="mt-6 px-4 w-full">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2 text-center">
            Twój kod wyniku
          </h3>

          <div
            className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-3 mx-auto text-center"
            style={{
              fontSize: "16px",
              maxWidth: "400px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <code className="font-bold tracking-wide break-all select-text">
              {id}
            </code>
          </div>

          <div className="mx-auto mt-2" style={{ maxWidth: "400px" }}>
            <button
              onClick={() => navigator.clipboard.writeText(id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-md shadow-md"
            >
              Kopiuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
