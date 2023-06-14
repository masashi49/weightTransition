'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { getApp, FirebaseApp } from 'firebase/app';
import '@/utils/firebase/init';
import { AddWeightDataModal } from '@/components/features/AddWeightDataModal';
import { WeightChart } from '@/components/features/WeightChart';

export const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const weightAdd = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weigthNumber = e.target.value;
    console.log(weigthNumber);
  };
  Modal.setAppElement('#weightDataArea');

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
      <div id='weightDataArea'></div>
      <AddWeightDataModal isOpen={isOpen} weightAdd={weightAdd} />
      <WeightChart />
    </div>
  );
};
