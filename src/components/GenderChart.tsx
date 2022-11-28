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
import { AgeCalorie, GenderCalorie } from "../routes/Home";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderChart = ({ formData }: { formData: GenderCalorie[] }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Average calories by gender",
      },
    },
  };

  const labels = formData.map(data => data.gender)

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: formData.map(data => data.calorie),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default GenderChart;
