import { Board, Props } from './Board'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Board,
  title: 'Board'
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args: Props) => (
  <Board {...args} />
)

export const Default = Template.bind({})
Default.args = {
  x_max: 10,
  camels: [
    { id: '0', x: 0, y: 0, color: '#1f77b4', moved: false },
    { id: '1', x: 0, y: 2, color: '#ff7f0e', moved: true },
    { id: '2', x: 0, y: 1, color: '#2ca02c', moved: false },
    { id: '3', x: 0, y: 4, color: '#d62728', moved: true },
    { id: '4', x: 0, y: 3, color: '#9467bd', moved: false },
    { id: '5', x: 1, y: 0, color: '#8c564b', moved: false },
    { id: '6', x: 1, y: 1, color: '#1f77b4', moved: false },
    { id: '7', x: 1, y: 2, color: '#ff7f0e', moved: false },
    { id: '8', x: 1, y: 3, color: '#2ca02c', moved: false },
    { id: '9', x: 2, y: 0, color: '#1f77b4', moved: false },
    { id: '10', x: 2, y: 1, color: '#ff7f0e', moved: false },
    { id: '11', x: 2, y: 2, color: '#2ca02c', moved: false },
    { id: '12', x: 3, y: 0, color: '#d62728', moved: false },
    { id: '13', x: 3, y: 1, color: '#9467bd', moved: false },
    { id: '14', x: 4, y: 0, color: '#1f77b4', moved: false },
    { id: '15', x: 8, y: 0, color: '#1f77b4', moved: false }
  ]
}
