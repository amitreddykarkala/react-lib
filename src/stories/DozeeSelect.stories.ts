import type { Meta, StoryObj } from '@storybook/react';
import DozeeSelect from '../components/DozeeSelect/DozeeSelect';


const meta: Meta<typeof DozeeSelect> = {
  title: 'Example/DozeeSelect',
  component: DozeeSelect,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;
type Story = StoryObj<typeof DozeeSelect>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button123',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

