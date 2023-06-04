import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'layouts/Footer',
  component: Footer,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const emailInput = canvas.getByLabelText('email');
  await userEvent.type(emailInput, 'email@e.com', {
    delay: 100,
  });
};
