// src/app/types/page.js
'use client';

import mbtiDescriptions from '../../../data/mbtiDescriptions';

export default function TypesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Typy osobowości MBTI</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(mbtiDescriptions).map(([type, description]) => (
          <div key={type} className="border rounded-xl shadow p-4 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-semibold text-blue-600">{type}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
