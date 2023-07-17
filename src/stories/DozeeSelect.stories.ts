import type { Meta, StoryObj } from '@storybook/react';
import DozeeSelect from '../components/DozeeSelect/DozeeSelect';
import { SelectableOptions } from '../components/DozeeSelect/DozeeSelect.types';


const meta: Meta<typeof DozeeSelect> = {
  title: 'Example/DozeeSelect',
  component: DozeeSelect,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};
export default meta;
type Story = StoryObj<typeof DozeeSelect>;
const options: SelectableOptions[] = [{
  value: "amit",
  label: "test1"
},{
  value: "amit1",
  label: "test2"
},
{
  value: "amit2",
  label: "test3"
}]


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Multi: Story = {
  args: {
    placeHolder: "Select...",
    isSearchable: true,
    isMulti: true,
    options: options,
    onChange: (value) => console.log(value)
  },
};

export const Single: Story = {
  args: {
    placeHolder: "Select...",
    isSearchable: true,
    isMulti: false,
    options: options,
    onChange: (value) => console.log(value)
  },
};
