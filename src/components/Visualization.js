'use client'
import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from 'recharts' 

const COLORS = [
  '#4ADE80',
  '#F472B6',
  '#60A5FA',
  '#FBBF24',
  '#A78BFA',
]

export default function Visualization({ data }) {
  return (
    <div className="space-y-8 p-4">
      {data.map(({ questionId, questionText, stats }) => (
        <div
          key={questionId}
          className="bg-gray-900 rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">
            {questionId}. {questionText}
          </h2>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={stats}
                  dataKey="percent"
                  nameKey="answerText"
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  label={({ value }) => `${value}%`}
                  labelLine={false}
                >
                  {stats.map((_, idx) => (
                    <Cell
                      key={idx}
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${value}%`}
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    color: '#fff',
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  )
}
