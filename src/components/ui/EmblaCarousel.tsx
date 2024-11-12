"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import ModalVideo from '../organisms/ModalVideo'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { FaPlayCircle } from "react-icons/fa";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Image, { StaticImageData } from 'next/image'

interface SlidesProps {
  title: string;
  image: StaticImageData;
  desc: string;
  banner?: StaticImageData;
  video?: boolean;
  videosrc?: string
}

type PropType = {
  slides: Array<SlidesProps>,
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 })
  ])
  const [ShowVideoModal, setShowVideoModal] = useState<boolean>(false)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])



  return (
    <>
      {
        ShowVideoModal &&
        <ModalVideo onCLose={setShowVideoModal} />
      }
      <div className="embla xl:w-[70%] w-full relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((data, index) => (
              <div className="embla__slide flex justify-between w-full" key={index}>
                <div className="relative flex lg:block flex-col pt-5 lg:w-[40%] w-full">
                  {
                    data.video && <button className='absolute top-0 left-0 w-full lg:h-full h-[230px] bg-black/50 flex items-center justify-center rounded-xl cursor-pointer' onClick={() => setShowVideoModal(true)}>
                      <FaPlayCircle size={50} />
                    </button>
                  }
                  {/* <div className='h-full grid place-items-center'> */}
                  <Image src={data.image} alt="Slide" width={500} height={500} sizes='100vw' className='rounded-xl h-[230px] object-contain' />
                  {/* </div> */}
                  <div className='h-max bg-black/50 w-full p-3 md:hidden block md:mt-0 mt-2'>
                    <h3 className='font-GothicBold text-base'>{data.title}</h3>
                    <p className='text-xs font-GothicLight'>
                      {data.desc}
                    </p>
                  </div>
                </div>
                <div className='bg-[#1E293B] w-[500px] h-[230px] rounded-xl space-y-3 p-3 md:block hidden'>
                  <h3 className='font-GothicBold text-1xl'>{data.title}</h3>
                  <p className='text-sm font-GothicLight'>
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full justify-end md:flex hidden'>
          <div className="embla__controls w-[500px]">
            <div className="embla__buttons">
              <PrevButton
                onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                disabled={nextBtnDisabled}
              />
            </div>
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel
