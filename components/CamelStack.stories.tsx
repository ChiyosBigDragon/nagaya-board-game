import { Props as CamelProps } from './Camel'
import { CamelStack, Props as CamelStackProps } from './CamelStack'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: CamelStack,
  title: 'CamelStack',
  argTypes: {
    numberRange: { control: { type: 'range', min: 1, max: 10, step: 1 } }
  }
} as ComponentMeta<typeof CamelStack>

const Template: ComponentStory<
  (props: CamelStackProps & { numberRange?: number }) => JSX.Element
> = (args) => {
  const camels: CamelStackProps = {
    camels: (args.camels.slice(0, args.numberRange) as unknown) as [
      CamelProps,
      ...CamelProps[]
    ]
  }
  return (
    <div style={{ width: '50px' }}>
      <CamelStack {...camels} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  camels: [
    { id: '0', color: '#1f77b4', x: 0, y: 0, moved: false },
    { id: '1', color: '#ff7f0e', x: 0, y: 0, moved: false },
    { id: '2', color: '#2ca02c', x: 0, y: 0, moved: false },
    { id: '3', color: '#d62728', x: 0, y: 0, moved: false },
    { id: '4', color: '#9467bd', x: 0, y: 0, moved: false },
    { id: '5', color: '#8c564b', x: 0, y: 0, moved: false },
    { id: '6', color: '#e377c2', x: 0, y: 0, moved: false },
    { id: '7', color: '#7f7f7f', x: 0, y: 0, moved: false },
    { id: '8', color: '#bcbd22', x: 0, y: 0, moved: false },
    { id: '9', color: '#17becf', x: 0, y: 0, moved: false }
  ],
  numberRange: 10
}
