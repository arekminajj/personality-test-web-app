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

const COLORS = [
  "#4ADE80",
  "#F472B6",
  "#60A5FA",
  "#FBBF24",
  "#A78BFA",
  "#34D399",
  "#FB923C",
  "#F87171",
  "#A3E635",
  "#FACC15",
  "#818CF8",
  "#EC4899",
  "#2DD4BF",
  "#F472B6",
  "#60A5FA",
  "#F59E0B",
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
  const transformed = data.map((d, i) =>
    d.name && d.value ? d : { name: d.type, value: d.count }
  );

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 mb-6 w-full max-w-[1630px] mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <BarChart data={transformed} barCategoryGap="10%" barGap={0}>
            <XAxis
              dataKey="name"
              tick={renderCustomTick}
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
    </div>
  );
}
