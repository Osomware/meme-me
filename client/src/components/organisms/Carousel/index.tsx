import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'react-feather'
import React, { useState, useEffect, ReactNode, FC, ComponentProps } from 'react'

type CarouselProps = {
  children: ReactNode[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

const Carousel: FC<CarouselProps> = (props): JSX.Element => {
  const { children: slides, autoSlide, autoSlideInterval } = props

  const [curr, setCurr] = useState<number>(0)

  const prev = (): void => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }
  const next = (): void => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  useEffect(() => {
    if (autoSlide !== undefined) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return (): void => {
      clearInterval(slideInterval)
    }
  }, [])

  const isSingleItem = slides.length > 1

  return (
    <div className="group overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {isSingleItem && (
        <div
          className={clsx(
            'opacity-0 group-hover:opacity-100  transition-all ease-in-out',
            'duration-200 absolute inset-0 flex items-center justify-between p-4'
          )}
        >
          <ArrowBtn onClick={prev}>
            <ChevronLeft className="w-4 h-4" />
          </ArrowBtn>
          <ArrowBtn onClick={next}>
            <ChevronRight className="w-4 h-4" />
          </ArrowBtn>
        </div>
      )}

      {isSingleItem && (
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'transition-all w-1.5 h-1.5 bg-white rounded-full',
                  curr === i ? 'p-0.5' : 'bg-opacity-50'
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

type ArrowBtnProps = {
  children: ReactNode
} & ComponentProps<'button'>

const ArrowBtn: FC<ArrowBtnProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'p-1 rounded-full shadow bg-white/80 text-secondary',
        'hover:bg-white outline-none transition ease-in-out duration-150'
      )}
    >
      {children}
    </button>
  )
}

Carousel.defaultProps = {
  autoSlide: false,
  autoSlideInterval: 3000
}

export default Carousel
