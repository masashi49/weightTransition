'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Home = () => {
  const [count, setCount] = useState<number>(0);
  const weightAdd = () => {
    console.log(count);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weigthNumber = e.target.value;
    setCount(Number(weigthNumber));
  };
  return (
    <main>
      <p>体重を入力してください。</p>
      <input type='number' value={count} onChange={changeInput} />
      <button onClick={weightAdd}>追加</button>
    </main>
  );
};
