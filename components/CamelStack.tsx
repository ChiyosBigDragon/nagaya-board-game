import { Camel, Props as CamelProps } from './Camel'

export type Props = {
  camels: [CamelProps, ...CamelProps[]]
}

export function CamelStack(props: Props) {
  try {
    console.log(typeof props.camels, props.camels)
    const camels = props.camels.slice().reverse()
    return (
      <div style={{ paddingTop: '23%' }}>
        {camels.map((camel) => (
          <div key={camel.id} style={{ marginTop: '-23%' }}>
            <Camel key={camel.id} {...camel} />
          </div>
        ))}
      </div>
    )
  } catch (e) {
    console.log(e)
  }
  return <div></div>
}
