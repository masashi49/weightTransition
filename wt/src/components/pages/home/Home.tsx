'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { InputWeightData } from '@/components/features/InputWeightData';
import { WeightChart } from '@/components/features/WeightChart';

export const Home = () => {
  const weightAdd = () => {
    // 体重を追加するエリアを表示する
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weigthNumber = e.target.value;
    console.log(weigthNumber);
  };

  return (
    <div>
      <div className='flex justify-around items-center'>
        <p className=''>体重</p>
        <button
          onClick={weightAdd}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          追加
        </button>
      </div>
      <WeightChart />
      <InputWeightData />
    </div>
  );
};
