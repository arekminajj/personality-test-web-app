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

function CustomPieTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div
      className="rounded-lg py-2 shadow bg-gray-800 text-white border border-gray-700"
      style={{ paddingLeft: 4, paddingRight: 10 }}
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

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      fontSize={15}
      fontWeight={700}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${value}%`}
    </text>
  );
};

export default function Visualization({ data, title }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-6 mt-3">
      <h2 className="text-xl font-semibold mb-1 text-center">{title}</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="percent"
              nameKey="answerText"
              cx="50%"
              cy="40%"
              innerRadius={40}
              outerRadius={80}
              label={renderCustomLabel}
              labelLine={false}
            >
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-[-2rem]">
        {data.map((item, idx) => (
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
  );
}
