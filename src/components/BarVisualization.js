"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const COLORS = ["#4ADE80", "#F472B6", "#60A5FA", "#FBBF24", "#A78BFA"];

export default function BarVisualization({ data, title }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fill: "#fff", fontSize: 14 }} />
            <YAxis tick={{ fill: "#fff", fontSize: 14 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Bar dataKey="value">
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
