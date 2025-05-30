"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function PersonalityBarChart({ data }) {
  if (!data?.length) return null;

  const labels  = data.map((d) => d.type);
  const counts  = data.map((d) => d.count);
  const colours = labels.map(() => "rgba(59, 130, 246, 0.8)");

  const chartData = {
    labels,
    datasets: [
      {
        label: "Liczba użytkowników",
        data: counts,
        backgroundColor: colours,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales:   { y: { beginAtZero: true } },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Bar data={chartData} options={options} />
    </div>
  );
}
