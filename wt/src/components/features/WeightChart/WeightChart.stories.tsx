import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { WeightChart } from './WeightChart';

const meta: Meta<typeof WeightChart> = {
  title: 'layouts/WeightChart',
  component: WeightChart,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeightChart>;

export const Default: Story = {};
