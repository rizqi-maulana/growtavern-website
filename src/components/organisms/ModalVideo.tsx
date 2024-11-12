import React, { useCallback, useState, useRef } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";

interface Props {
  onCLose: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalVideo = ({ onCLose }: Props) => {
  const [play, setplay] = useState<boolean>(false)
  const video = useRef<HTMLVideoElement>(null);

  const HandlePlay = useCallback(() => {
    setplay(!play)
    if (video && video.current) {
      if (!play) {
        video.current.play()
      } else {
        video.current.pause()
      }
    }
    console.log('keren')
  }, [play])

  return (
    <div className="w-full h-screen fixed top-0 left-0 backdrop-blur-lg bg-black/50 z-[99] flex items-center justify-center">
      <div className="lg:w-3/5 lg:h-3/5 w-full h-max bg-[#0F172A] lg:p-8 p-2 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-3xl text-xl font-bold">Spring Clash</h1>
          <button onClick={() => onCLose(false)}>
            <CgCloseO size={30} />
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center h-max relative mt-5">
          {
            !play &&
            <button className='absolute z-50 top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center rounded-xl cursor-pointer' onClick={HandlePlay}>
              <FaPlayCircle size={50} />
            </button>
          }
          <video ref={video} controls className=" rounded-xl">
            <source src="video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default ModalVideo;