export type Props = {
  id: string
  x: number
  y: number
  color: string
  moved: boolean
}

export function Camel(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 18"
      style={{ display: 'block' }}
    >
      <g>
        <path
          fill="#000000"
          d="M20,0h1v1h1v1h2v1h1v1h1v3h-1v1h-2v3h-1v1h-1v1h-1v1h-1v1h-1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v2h-1v1h-2v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-7h1v-1h1v-1h1v-1h2v1h1v1h2v-2h1v-1h1v-1h2v1h1v1h1v1h1v1h2v-2h1v-1h1v-1h1z"
        />
        <path
          fill={props.color}
          d="M20,1h1v1h1v1h2v1h1v3h-2v1h-1v3h-1v1h-1v1h-1v1h-1v1h-1v2h-2v-1h-1v-1h-1v-1h-1v-1h-2v1h-1v1h-1v2h-2v-1h-1v-1h-2v-1h-1v-1h-1v-7h1v-1h1v-1h2v1h1v1h2v-1h1v-2h1v-1h2v1h1v1h1v1h1v1h2v-1h1v-2h1v-1h1z"
        />
        {/* {props.moved ? (
          <path
            fill="#ffffff"
            d="M9,9h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1z"
          />
        ) : (
          <></>
        )}
        {props.moved ? (
          <path
            fill="#000000"
            d="M9,9h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1z"
          />
        ) : (
          <></>
        )} */}
      </g>
    </svg>
  )
}
