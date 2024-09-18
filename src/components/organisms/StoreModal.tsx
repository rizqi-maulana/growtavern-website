"use client"

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  special: string[]
}

const StoreModal = ({ special }: Props) => {
  const images = [
    "https://i.pinimg.com/564x/01/1c/ab/011cabc337c29a4780a1829e89018e49.jpg",
    "https://i.pinimg.com/736x/3b/11/d8/3b11d8c53b4c6f74f99eb55e04cb5b5c.jpg",
    "https://i.pinimg.com/564x/bb/c6/77/bbc67786884b5b23f4b8be79764d9adb.jpg",
    "https://i.pinimg.com/564x/e0/1c/f8/e01cf839ace25a10bf9525975b3e05d4.jpg",
    "https://i.pinimg.com/564x/61/e0/05/61e0051e438124441c058c42a3c48694.jpg",
  ];
  return (
    <Modal>
      <ModalTrigger className="bg-white text-black flex justify-center group/modal-btn rounded-xl">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Check Here
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✨
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-8">
            How{" "}
            <span className="px-1 py-0.5 rounded-md bg-neutral-800 border-neutral-700 border ">
              Amazing
            </span>{" "}
            are these items? ✨
          </h4>
          <div className="flex justify-center items-center">
            {images.map((image, idx) => (
              <motion.div
                key={"images" + idx}
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border  flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={image}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
            ))}
          </div>
          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            {
              special.map((items: string, id: number) => (
                <div className="flex items-center justify-center" key={id}>
                  <span className="text-neutral-300 text-sm">
                    {items}
                  </span>
                </div>
              ))
            }
            {/* <div className="flex items-center justify-center">
              <span className="text-neutral-300 text-sm">
                69 visiting spots
              </span>
            </div>
            <div className="flex  items-center justify-center">
              <span className="text-neutral-300 text-sm">
                Good food everyday
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-neutral-300 text-sm">
                Open Mic
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-neutral-300 text-sm">
                Paragliding
              </span>
            </div> */}
          </div>
        </ModalContent>
        {/* <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-black border-black text-white border rounded-md text-sm w-28">
            Cancel
          </button>
          <button className=" bg-white text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Book Now
          </button>
        </ModalFooter> */}
      </ModalBody>
    </Modal>
  );
}

export default StoreModal;