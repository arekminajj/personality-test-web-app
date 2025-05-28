// src/app/types/page.js
"use client";

import mbtiDescriptions from "../../../data/mbtiDescriptions";

export default function TypesPage() {
  return (
    <div className="max-w-8xl mx-auto pl-6 pr-15 pt-6 pb-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Typy osobowości MBTI
      </h1>

      <div className="grid md:grid-cols-2 gap-20">
        {Object.entries(mbtiDescriptions).map(([type, description]) => (
          <div
            key={type}
            className="flex flex-col lg:flex-row-reverse items-center"
            style={{ gap: "70px" }}
          >
            <img
              src={`/types/${type}.png`}
              alt={`Obrazek typu ${type}`}
              className="w-full lg:w-[300px] h-[280px] object-COVER shadow-lg rounded-2xl overflow-hidden"
            />

            <div
              className="bg-white dark:bg-gray-900 border rounded-xl shadow px-6 py-4 "
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
        ))}
      </div>
    </div>
  );
}
