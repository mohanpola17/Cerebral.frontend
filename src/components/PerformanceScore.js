import React, { useEffect, useState } from "react";
import axios from "axios";

const PerformanceScore = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_3/", {
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
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
          <p className="text-2xl font-bold text-blue-500">{data.score}</p>
        </div>
        <p className="text-gray-500 text-sm mt-2">of 100 points</p>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-gray-600 text-sm">{data.message}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          Improve Your Score
        </button>
      </div>
    </div>
  );
};

export default PerformanceScore;
