import React, { FC } from 'react';
import Modal from 'react-modal';
import { InputWeightData } from '@/components/features/InputWeightData';

type Props = {
  isOpen: boolean;
  weightAdd: () => void;
};
export const AddWeightDataModal: FC<Props> = ({ isOpen, weightAdd }) => {
  Modal.setAppElement('#weightDataArea');
  return (
    <Modal isOpen={isOpen}>
      <InputWeightData />
      <button
        onClick={weightAdd}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        閉じる
      </button>
    </Modal>
  );
};
