import assert from 'assert'
import { Props as CamelProps } from './Camel'
import { CamelStack } from './CamelStack'

export type Props = {
  x_max: number
  camels: [CamelProps, ...CamelProps[]]
}

export function Board(props: Props) {
  assert(props.x_max > 0)
  const camel_width = 100 / props.x_max
  const array = Array(props.x_max)
  for (let index = 0; index < array.length; index++) {
    array[index] = index
  }
  const camels = Array(props.x_max)
  for (let index = 0; index < array.length; index++) {
    camels[index] = props.camels
      .filter((camel) => camel.x == index)
      .sort((l, r) => l.y - r.y)
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'pink',
          alignItems: 'flex-end'
        }}
      >
        {array.map((id) => (
          <div
            key={id}
            style={{
              height: '100%',
              width: `${camel_width}%`,
              backgroundColor: 'blue',
              bottom: '0%'
            }}
          >
            <CamelStack camels={camels[id]} />
          </div>
        ))}
      </div>
      <div
        style={{
          bottom: '100%',
          width: '100%',
          height: '50px',
          backgroundColor: 'red'
        }}
      ></div>
    </div>
  )
}
