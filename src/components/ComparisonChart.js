import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComparisonChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/component_2") 
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const months = response.data.map((row) => row.month);
          const lastYearSales = response.data.map((row) => row.last_year);
          const thisYearSales = response.data.map((row) => row.this_year);

          setChartData({
            labels: months,
            datasets: [
              {
                label: "Last Year",
                data: lastYearSales,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
              },
              {
                label: "This Year",
                data: thisYearSales,
                backgroundColor: "rgba(255, 99, 132, 0.6)", 
              },
            ],
          });
        } else {
          console.error("Invalid response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching chart data:", error);
      });
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div>
      <h3>Comparison</h3>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Sales Comparison (Last Year vs. This Year)",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Months",
              },
            },
            y: {
              title: {
                display: true,
                text: "Sales",
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ComparisonChart;
