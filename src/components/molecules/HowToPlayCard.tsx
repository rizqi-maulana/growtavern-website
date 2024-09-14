"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hook/use-outside-click";
import { HowToPlayData } from "@/data/howtoplay";
import toast, { Toaster } from 'react-hot-toast';

export function HowToPlayCard() {
  const [active, setActive] = useState<(typeof HowToPlayData)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const HandleCopy = useCallback(async (host: string) => {
    navigator.clipboard.writeText(host);
    toast.success('Copied to clipboard!')
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <Toaster />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.Title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.Title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#171f2c] sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.Title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.Image}
                  alt={active.Title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                  sizes="100vw"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start px-4 mt-5">
                  <div className="">
                    <motion.h3
                      layoutId={`Title-${active.Title}-${id}`}
                      className="font-GothicBold text-neutral-200"
                    >
                      {active.Title}
                    </motion.h3>
                  </div>
                  {
                    active.File && active.Host ?
                      <div className="flex gap-2">
                        <motion.a
                          layoutId={`button-${active.File}-${id}`}
                          href={active.File}
                          download
                          target="_blank"
                          className="px-10 py-2 text-sm rounded-full font-GothicBold bg-white text-black cursor-pointer"
                        >
                          VHost
                        </motion.a>
                        <motion.a
                          layoutId={`button-${active.Host}-${id}`}
                          href={active.Host}
                          target="_parent"
                          className="px-10 py-2 text-sm rounded-full font-GothicBold bg-white text-black cursor-pointer"
                        >
                          PTunnel
                        </motion.a>
                      </div>

                      :
                      <button
                        onClick={() => active?.Host && HandleCopy(active.Host)}
                        className="px-10 py-2 text-sm rounded-full font-GothicBold bg-white text-black cursor-pointer"
                      >Copy Host</button>

                  }
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm md:text-sm lg:text-base h-96 md:h-fit md:max-h-52 pb-10 overflow-y-auto flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] "
                  >
                    {
                      active.Content.split('\n').map((item: string, index: number) => (
                        <p key={index} className="md:text-sm text-[12px] mt-3">{item}</p>
                      ))
                    }
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4 flex xl:flex-row flex-col">
        {HowToPlayData.map((card) => (
          <motion.div
            layoutId={`card-${card.Title}-${id}`}
            key={`card-${card.Title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between group  items-start md:items-center bg-[#171f2c] hover:bg-[#1E293B] rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-row">
              <motion.div layoutId={`image-${card.Title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.Icon}
                  alt={card.Title}
                  className="h-10 w-10 md:h-14 md:w-14 rounded-lg object-contain"
                  sizes="100vw"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`Title-${card.Title}-${id}`}
                  className="font-GothicSemiBold text-white text-left"
                >
                  {card.Title}
                </motion.h3>
                <p
                  // layoutId={`Description-${card.Description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left w-[80%]"
                >
                  {card.Description}
                </p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.Title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-GothicRegular bg-gray-100 hover:bg-[#179BE6] group-hover:bg-[#179BE6] group-hover:text-white hover:text-white text-black mt-4 md:mt-0"
            >
              Details
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
