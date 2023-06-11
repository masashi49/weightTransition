'use client';
import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { DataType } from './WeightChartTypes';
import { options } from './useWeightCharDatas';

export const WeightChartDatail: FC<DataType> = ({ data }) => {
  return <Line options={options} data={data} />;
};
