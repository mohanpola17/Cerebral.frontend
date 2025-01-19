import React, { useEffect, useState } from "react";
import axios from "axios";

const SummaryCards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/", {
        headers: {
          Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==", 
        },
      })
      .then((response) => {
        if (response.data) {
          setData(response.data);
        } else {
          console.error("Invalid response format:", response.data);
          setError("Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      });
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div className="text-center">
        <p className="text-gray-500 text-sm">Purchases</p>
        <h3 className="text-2xl font-bold">{data.purchases.toLocaleString()}</h3>
        <p className="text-green-500 text-sm">+32%</p>
      </div>
      <div className="text-center">
        <p className="text-gray-500 text-sm">Revenue</p>
        <h3 className="text-2xl font-bold">${(data.revenue / 1000).toLocaleString()}k</h3>
        <p className="text-green-500 text-sm">+49%</p>
      </div>
      <div className="text-center">
        <p className="text-gray-500 text-sm">Refunds</p>
        <h3 className="text-2xl font-bold">${(data.refunds / 1000).toLocaleString()}k</h3>
        <p className="text-red-500 text-sm">-7%</p>
      </div>
    </div>
  );
};

export default SummaryCards;
