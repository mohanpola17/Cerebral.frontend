import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CustomersByDevice = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
   
    axios
      .get("http://localhost:4000/component_4") 
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const dates = response.data.map((row) =>
            new Date(row.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          );
          const webSales = response.data.map((row) => row.web_sales);
          const offlineSales = response.data.map((row) => row.offline_sales);

          setChartData({
            labels: dates,
            datasets: [
              {
                label: "Web Sales",
                data: webSales,
                borderColor: "rgba(0, 102, 204, 1)", 
                backgroundColor: "rgba(0, 102, 204, 0.2)", 
                borderWidth: 1, 
                fill: true, 
                tension: 0.4, 
              },
              {
                label: "Offline Sales",
                data: offlineSales,
                borderColor: "rgba(135, 206, 250, 1)", 
                backgroundColor: "rgba(135, 206, 250, 0.2)", 
                borderWidth: 1,
                fill: true,
                tension: 0.4, 
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
    <div className="h-84 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-4">Customers by Device</h3>
      <div className="h-80"> 
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Web Sales vs Offline Sales",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
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
    </div>
  );
};

export default CustomersByDevice;
