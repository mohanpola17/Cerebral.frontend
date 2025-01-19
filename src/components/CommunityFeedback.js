import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunityFeedback = () => {
  const [feedbackData, setFeedbackData] = useState(null);

  useEffect(() => {
    axios
      .get('http://3.111.196.92:8020/api/v1/sample_assignment_api_5/', {
        headers: {
          Authorization: 'Basic dHJpYWw6YXNzaWdubWVudDEyMw==',
        },
      })
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  if (!feedbackData) {
    return <div>Loading...</div>;
  }

  const { negative, neutral, positive } = feedbackData;

  
  const total = negative + neutral + positive;
  const negativePercent = ((negative / total) * 100).toFixed(1);
  const neutralPercent = ((neutral / total) * 100).toFixed(1);
  const positivePercent = ((positive / total) * 100).toFixed(1);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Community Feedback</h3>
      <div className="text-sm mb-4">
        <span className="text-red-500">Negative: {negative}</span>,{' '}
        <span className="text-yellow-500">Neutral: {neutral}</span>,{' '}
        <span className="text-green-500">Positive: {positive}</span>
      </div>
      <div className="flex items-center space-x-2">
        {/* Negative bar */}
        <div className="flex-1 h-2 bg-red-500" style={{ width: `${negativePercent}%` }}></div>
        {/* Neutral bar */}
        <div className="flex-1 h-2 bg-yellow-500" style={{ width: `${neutralPercent}%` }}></div>
        {/* Positive bar */}
        <div className="flex-1 h-2 bg-green-500" style={{ width: `${positivePercent}%` }}></div>
      </div>
      <div className="mt-2 text-center">
        {negativePercent > positivePercent ? (
          <span className="text-red-500 font-semibold">Mostly Negative</span>
        ) : (
          <span className="text-green-500 font-semibold">Mostly Positive</span>
        )}
      </div>
    </div>
  );
};

export default CommunityFeedback;
