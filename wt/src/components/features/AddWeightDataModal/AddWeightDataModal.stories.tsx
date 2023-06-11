import type { Meta, StoryObj } from '@storybook/react';
import { AddWeightDataModal } from './AddWeightDataModal';

const meta: Meta<typeof AddWeightDataModal> = {
  title: 'layouts/AddWeightDataModal',
  component: AddWeightDataModal,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddWeightDataModal>;

export const Default: Story = {};
