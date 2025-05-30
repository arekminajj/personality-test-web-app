"use client";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#4ADE80", "#F472B6", "#60A5FA", "#FBBF24", "#A78BFA"];

function CustomPieTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div
      className="rounded-lg py-2 shadow bg-gray-800 text-white border border-gray-700"
      style={{
        paddingLeft: 2,
        paddingRight: 10,
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div className="flex items-center gap-0">
        <span
          style={{
            display: "inline-block",
            width: 11,
            height: 14,
            background: item.color,
            borderRadius: "50%",
          }}
        />
        <span className="font-semibold">{item.payload.answerText}:</span>
        <span className="ml-1">{item.value}%</span>
      </div>
    </div>
  );
}

export default function Visualization({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {data.map(({ questionId, questionText, stats }, idx) => (
        <div
          key={questionId}
          className={`bg-gray-900 rounded-2xl shadow-lg p-4 h-[340px] w-full ${
            idx === 4
              ? "sm:col-span-2 max-w-[700px] mx-auto"
              : "max-w-[700px] mx-auto"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">
            {questionId}. {questionText}
          </h2>
          <div className="w-full max-w-[500px] h-[300px] sm:h-[260px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats}
                  dataKey="percent"
                  nameKey="answerText"
                  cx="50%"
                  cy="43%"
                  innerRadius={40}
                  outerRadius={80}
                  label={({ value }) => `${value}%`}
                  labelLine={false}
                >
                  {stats.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col items-center gap-3 mt-[-2.3rem]">
              {stats.map((item, idx) => (
                <div key={item.answerText} className="flex items-center gap-2">
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      backgroundColor: COLORS[idx % COLORS.length],
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: COLORS[idx % COLORS.length],
                      fontWeight: 600,
                      lineHeight: "1",
                    }}
                  >
                    {item.answerText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
