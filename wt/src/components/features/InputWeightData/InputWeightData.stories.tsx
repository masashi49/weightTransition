import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { InputWeightData } from './InputWeightData';

const meta: Meta<typeof InputWeightData> = {
  title: 'layouts/InputWeightData',
  component: InputWeightData,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputWeightData>;

export const Default: Story = {};

