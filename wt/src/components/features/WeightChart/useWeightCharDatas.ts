import React from 'react';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const useWeightCharDatas = () => {
  const labels = ['5/30', '5/31', '6/1', '6/2', '6/3', '6/4', '6/5'];

  const data = {
    labels,
    datasets: [
      {
        data: [62, 60, 66, 68, 70],
        borderColor: '#ff33cc',
        backgroundColor: '#ff33cc',
      },
    ],
  };
  return { data };
};
