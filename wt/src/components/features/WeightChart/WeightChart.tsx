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
import { useBooks } from '@/components/hooks/useBooks';

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
  const { isLoading, books } = useBooks();

  if (isLoading) return <p>loading</p>;
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} / {book.author} / {book.price}
          </li>
        ))}
      </ul>
      <WeightChartDatail data={data} />
    </>
  );
};
