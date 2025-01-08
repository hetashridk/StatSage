import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartSwitcherLine = ({ postsData, impressionsData, likesData, sharesData, commentsData, options }) => {
  const [selectedChart, setSelectedChart] = useState('posts');


  const data = {
    labels: ["My First Datase","b"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'posts':
        return <Line data={postsData} options={options} />;
      case 'impressions':
        return <Line data={impressionsData} options={options} />;
      case 'likes':
        return <Line data={likesData} options={options} />;
      case 'shares':
        return <Line data={sharesData} options={options} />;
      case 'comments':
        return <Line data={commentsData} options={options} />;
      default:
        return <Line data={postsData} options={options} />;
    }
  };

  console.log("HERE",postsData,options)

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setSelectedChart('posts')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'posts' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Posts</button>
        <button onClick={() => setSelectedChart('impressions')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'impressions' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Impressions</button>
        <button onClick={() => setSelectedChart('likes')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'likes' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Likes</button>
        <button onClick={() => setSelectedChart('shares')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'shares' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Shares</button>
        <button onClick={() => setSelectedChart('comments')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'comments' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Comments</button>
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        {renderChart()}
        {/* <Line data={data} /> */}
      </div>
    </div>
  );
};

export default ChartSwitcherLine;