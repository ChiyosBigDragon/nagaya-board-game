import { Camel, Props } from './Camel'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Camel,
  title: 'Camel'
} as ComponentMeta<typeof Camel>

const Template: ComponentStory<typeof Camel> = (args: Props) => (
  <Camel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  color: '#ffffff',
  moved: false
}
