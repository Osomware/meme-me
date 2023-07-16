import React, { ComponentProps, FC } from 'react'

type Props = ComponentProps<'svg'>

const LogoIcon: FC<Props> = (props): JSX.Element => {
  return (
    <svg
      {...props}
      width="114"
      height="134"
      viewBox="0 0 114 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_167_143)">
        <ellipse cx="77" cy="41" rx="32" ry="31" transform="rotate(-4.93329 77 41)" fill="white" />
      </g>
      <circle
        cx="77.9962"
        cy="40.914"
        r="14.5"
        transform="rotate(-4.93329 77.9962 40.914)"
        stroke="#A874FE"
        strokeWidth="11"
      />
      <path
        d="M91.2629 26.4255L84.7428 36.3822C85.3507 36.7715 85.8364 39.2238 86.3222 41.6762C86.7108 43.6381 84.8779 46.8895 83.9129 48.27L89.1146 58.4533C89.901 57.9578 91.6393 56.7299 92.3011 55.7833C93.1282 54.6001 96.7283 51.3384 98.2383 42.8839C99.4462 36.1203 94.0913 29.0935 91.2629 26.4255Z"
        fill="white"
      />
      <path
        d="M84.7428 36.3822L91.2629 26.4255C94.0913 29.0935 99.4462 36.1203 98.2383 42.8839C96.7283 51.3384 93.1282 54.6001 92.3011 55.7833C91.6393 56.7299 89.901 57.9578 89.1146 58.4533L83.9129 48.27C84.8779 46.8895 86.7108 43.6381 86.3222 41.6762M84.7428 36.3822C85.3507 36.7715 85.8364 39.2238 86.3222 41.6762M84.7428 36.3822C85.2468 38.0338 86.2684 41.405 86.3222 41.6762"
        stroke="white"
      />
      <circle
        cx="93.1986"
        cy="42.6131"
        r="7"
        transform="rotate(-4.93329 93.1986 42.6131)"
        fill="#A874FE"
      />
      <defs>
        <filter
          id="filter0_d_167_143"
          x="-19.9946"
          y="0.990479"
          width="133.989"
          height="132.019"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="6"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_167_143"
          />
          <feOffset dx="-30" dy="26" />
          <feGaussianBlur stdDeviation="14.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.643137 0 0 0 0 0.713726 0 0 0 0 0.882353 0 0 0 0.15 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_167_143" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_167_143"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default LogoIcon
