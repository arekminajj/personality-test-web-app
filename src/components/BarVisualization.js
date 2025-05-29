"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";

const COLORS = ["#4ADE80", "#F472B6", "#60A5FA", "#FBBF24", "#A78BFA"];

const renderColoredLabel = (props) => {
  const { x, y, width, value, index } = props;
  return (
    <text
      x={x + width / 2}
      y={y - 8}
      fill={COLORS[index % COLORS.length]}
      fontSize={15}
      fontWeight={700}
      textAnchor="middle"
    >
      {value}%
    </text>
  );
};

function CustomBarTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg pl-[-1rm] pr-3 py-2 shadow bg-gray-800 text-white border border-gray-700">
      <div className="flex items-center gap-1">
        <span
          style={{
            display: "inline-block",
            width: 14,
            height: 14,
            background: item.color,
            borderRadius: "50%",
          }}
        />
        <span className="font-semibold">{item.payload.name}:</span>
        <span className="ml-0">{item.value}%</span>
      </div>
    </div>
  );
}

export default function BarVisualization({ data, title }) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={false} />
            <YAxis tick={{ fill: "#fff", fontSize: 14 }} />
            <Tooltip content={<CustomBarTooltip />} />
            <Bar dataKey="value" name="" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="value" content={renderColoredLabel} />
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-[-1rem]">
        {data.map((item, idx) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              style={{
                display: "inline-block",
                width: 14,
                height: 14,
                background: COLORS[idx % COLORS.length],
                borderRadius: "50%",
              }}
            />
            <span
              className="text-sm"
              style={{
                color: COLORS[idx % COLORS.length],
                fontWeight: 600,
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
