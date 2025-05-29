"use client";

import MbtiDescriptions from "../../data/MbtiDescriptions";

export default function TypesPage() {
  return (
    <div className="max-w-8xl mx-auto pt-6 pb-6 pl-4 pr-4 lg:pl-6 lg:pr-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Typy osobowości MBTI
      </h1>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
        {Object.entries(MbtiDescriptions).map(([type, description]) => (
          <div key={type}>
            <div
              className="hidden lg:flex flex-row-reverse items-center"
              style={{ gap: "70px" }}
            >
              <img
                src={`/types/${type}.jpg`}
                alt={`Obrazek typu ${type}`}
                className="w-[300px] h-[280px] object-cover shadow-lg rounded-2xl"
              />
              <div
                className="bg-white dark:bg-gray-900 border rounded-xl shadow px-6 py-4"
                style={{
                  width: "480px",
                  height: "210px",
                  overflowY: "auto",
                  fontSize: "18px",
                }}
              >
                <h2 className="text-xl font-bold text-blue-600">{type}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {description}
                </p>
              </div>
            </div>

            <div
              className="flex flex-col lg:hidden items-center"
              style={{ gap: "30px" }}
            >
              <img
                src={`/types/${type}.jpg`}
                alt={`Obrazek typu ${type}`}
                className="w-full h-[400px] object-cover shadow-md rounded-xl"
              />
              <div
                className="bg-white dark:bg-gray-900 border rounded-xl shadow px-4 py-4"
                style={{
                  width: "100%",
                  fontSize: "16px",
                }}
              >
                <h2 className="text-lg font-semibold text-blue-600">{type}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
