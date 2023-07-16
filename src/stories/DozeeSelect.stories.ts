import type { Meta, StoryObj } from '@storybook/react';
import DozeeSelect from '../components/DozeeSelect/DozeeSelect.jsx';


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


// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     isSearchable: true,
//     isMulti: true,
//     placeHolder="Select...",
//     options={options},
//     onChange={(value) => console.log(value)}
//   },
// };

