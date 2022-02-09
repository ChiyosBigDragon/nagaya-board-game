import { useEffect, useRef, useState } from 'react'
import { Camel, Props as CamelProps } from './Camel'

export type Props = {
  camels: [CamelProps, ...CamelProps[]]
}

export function CamelStack(props: Props) {
  const camels = props.camels.slice().reverse()
  const divElement = useRef<HTMLDivElement>(null)
  const [marginBottom, setMarginBottom] = useState(0)

  useEffect(() => {
    if (divElement?.current) {
      const { width } = divElement.current.getBoundingClientRect()
      setMarginBottom((0.4 / 45.8) * width - 23.5)
    }
  }, [divElement])

  return (
    <div ref={divElement}>
      {camels.map((camel, index) => (
        <div
          key={camel.id}
          style={{
            marginBottom: `${index != camels.length - 1 ? marginBottom : 0}%`
          }}
        >
          <Camel key={camel.id} {...camel} />
        </div>
      ))}
    </div>
  )
}
