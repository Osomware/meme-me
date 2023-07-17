import React, { ComponentProps, FC } from 'react'

export type MessageiconProps = ComponentProps<'svg'>

const Messageicon: FC<MessageiconProps> = (props): JSX.Element => {
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_130_35)">
        <path
          d="M12.25 6.70835C12.252 7.47827 12.0721 8.23778 11.725 8.92502C11.3134 9.74853 10.6807 10.4412 9.89768 10.9254C9.11467 11.4097 8.21231 11.6663 7.29167 11.6667C6.52174 11.6687 5.76223 11.4888 5.075 11.1417L1.75 12.25L2.85833 8.92502C2.51121 8.23778 2.33133 7.47827 2.33333 6.70835C2.33369 5.78771 2.59036 4.88535 3.07459 4.10234C3.55882 3.31933 4.25148 2.6866 5.075 2.27502C5.76223 1.92789 6.52174 1.74801 7.29167 1.75002H7.58333C8.7992 1.8171 9.94761 2.33029 10.8087 3.19135C11.6697 4.05241 12.1829 5.20081 12.25 6.41668V6.70835Z"
          fill="#586CA0"
          stroke="#586CA0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 6 6)" fill="white" />
        <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 8 6)" fill="white" />
        <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(-1 0 0 1 10 6)" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_130_35">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Messageicon
