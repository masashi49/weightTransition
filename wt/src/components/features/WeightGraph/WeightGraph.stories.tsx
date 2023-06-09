import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { WeightGraph } from './WeightGraph';

const meta: Meta<typeof WeightGraph> = {
  title: 'layouts/WeightGraph',
  component: WeightGraph,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeightGraph>;

export const Default: Story = {};
