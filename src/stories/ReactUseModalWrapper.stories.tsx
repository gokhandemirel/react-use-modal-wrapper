import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useModalWrapper } from '..';

const meta = {
  title: 'Example/ReactUseModalWrapper',
  parameters: {
    layout: 'centered'
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { modal, openModal } = useModalWrapper({
      children: <div>React use modal wrapper</div>
    });

    return (
      <div>
        {modal}
        <button onClick={() => openModal()}>Modal</button>
      </div>
    );
  }
};
