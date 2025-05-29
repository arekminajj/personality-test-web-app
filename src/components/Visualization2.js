"use client";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#4ADE80", "#F472B6", "#60A5FA", "#FBBF24", "#A78BFA"];

export default function Visualization({ data, title }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
              nameKey="answerText"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              label={({ value }) => `${value}%`}
              labelLine={false}
            >
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend verticalAlign="bottom" wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
