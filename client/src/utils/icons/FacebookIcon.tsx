import React, { ComponentProps, FC } from 'react'

export type FacebookIconProps = ComponentProps<'svg'>

const FacebookIcon: FC<FacebookIconProps> = (props): JSX.Element => {
  return (
    <svg
      {...props}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="228.000000pt"
      height="152.000000pt"
      viewBox="0 0 228.000000 152.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
        fill="#1877f2"
        stroke="none"
      >
        <path
          d="M1045 1254 c-198 -51 -329 -169 -384 -348 -79 -256 70 -546 319 -620
86 -26 80 -37 80 154 l0 170 -65 0 -65 0 0 80 0 80 65 0 65 0 0 82 c0 102 21
151 82 191 40 26 49 27 133 25 l90 -3 3 -67 3 -68 -55 0 c-72 0 -96 -27 -96
-106 l0 -54 71 0 70 0 -7 -72 c-3 -40 -9 -76 -11 -81 -2 -4 -31 -7 -64 -7
l-59 0 0 -171 0 -172 38 6 c58 10 172 71 225 121 64 62 111 139 137 225 19 61
22 88 17 165 -3 50 -13 114 -23 141 -48 139 -171 262 -309 310 -49 17 -219 29
-260 19z"
        />
      </g>
    </svg>
  )
}

export default FacebookIcon
