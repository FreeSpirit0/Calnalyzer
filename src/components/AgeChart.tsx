import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AgeCalorie } from "../routes/Home";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeChart = ({ formData }: { formData: AgeCalorie[] }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Average calories by age",
      },
    },
  };

  const labels = formData.map(data => data.age)

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: formData.map(data => data.calorie),
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(100, 99, 132, 0.5)"],
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default AgeChart;
