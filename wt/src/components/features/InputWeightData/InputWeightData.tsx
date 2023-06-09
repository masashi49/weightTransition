import React from 'react';
import Link from 'next/link';

export const InputWeightData = () => {
  const handleChangeWeight = () => {
    console.log(1);
  };
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p>体重</p>
        <input type='number' name='' id='' onChange={handleChangeWeight} />
      </div>
      <div className='flex justify-between items-center'>
        <p>日付</p>
        <span>今日の日付</span>
      </div>
    </div>
  );
};
