'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const weightAdd = () => {};
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <main>
      <p>体重を入力してください。</p>
      <input type='number' value={count} onChange={changeInput} />
      <button onClick={weightAdd}>追加</button>
    </main>
  );
}
