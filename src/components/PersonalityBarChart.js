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
import { useEffect, useState } from "react";

const COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FF8000",
  "#800080",
  "#2F4F4F",
  "#800000",
  "#7B68EE",
  "#FF0080",
  "#708090",
  "#008000",
  "#804000",
  "#FFFFFF",
];

const renderCustomTick = ({ x, y, payload, index }) => (
  <text
    x={x}
    y={y + 20}
    textAnchor="middle"
    fill={COLORS[index % COLORS.length]}
    fontWeight={700}
    fontSize={15}
    style={{ pointerEvents: "none" }}
  >
    {payload.value}
  </text>
);

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
      {value}
    </text>
  );
};

function CustomBarTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg pr-3 py-2 shadow bg-gray-800 text-white border border-gray-700">
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
        <span className="ml-0">{item.value}</span>
      </div>
    </div>
  );
}

export default function PersonalityBarChart({
  data,
  title = "Najczęstsze typy MBTI",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const transformed = data.map((d) =>
    d.name && d.value ? d : { name: d.type, value: d.count }
  );

  return (
    <div className="mb-6 w-full max-w-[1630px] mx-auto">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        <div className="h-[320px] sm:h-[300px] w-full">
          <ResponsiveContainer>
            <BarChart
              data={transformed}
              barCategoryGap="10%"
              barGap={0}
              margin={{
                top: 20,
                left: isMobile ? -35 : -30,
                right: 10,
              }}
            >
              <XAxis
                dataKey="name"
                tick={isMobile ? false : renderCustomTick}
                axisLine={{ stroke: "#fff" }}
                tickLine={false}
              />
              <YAxis tick={{ fill: "#fff", fontSize: 14 }} />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="value" name="" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="value" content={renderColoredLabel} />
                {transformed.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legenda – wspólne tło */}
        {isMobile && (
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {transformed.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-2">
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
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
