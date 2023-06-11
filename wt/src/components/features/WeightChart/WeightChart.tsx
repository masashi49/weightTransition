'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useWeightCharDatas } from './useWeightCharDatas';
import { WeightChartDatail } from './WeightChartDatail';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const WeightChart = () => {
  const { data } = useWeightCharDatas();

  return <WeightChartDatail data={data} />;
};
