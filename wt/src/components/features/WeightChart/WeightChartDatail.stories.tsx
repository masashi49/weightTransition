import type { Meta, StoryObj } from '@storybook/react';
import { WeightChartDatail } from './WeightChartDatail';

const meta: Meta<typeof WeightChartDatail> = {
  title: 'layouts/WeightChartDatail',
  component: WeightChartDatail,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeightChartDatail>;

export const Default: Story = {};

Default.args = {
  data: {
    labels: ['5/30', '5/31', '6/1', '6/2', '6/3', '6/4', '6/5'],
    datasets: [
      {
        data: [62, 60, 66, 68, 70],
        borderColor: '#ff33cc',
        backgroundColor: '#ff33cc',
      },
    ],
  },
};
