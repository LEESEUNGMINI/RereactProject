import React from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlignRight } from "react-icons/fi";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openButton = () => {
    setMobileOpen(true);
  };
  const closeButton = () => {
    setMobileOpen(false);
  };
  return (
    <>
      <header className="w-full h-[130px] bg-[#CD2032] flex justify-center">
        {/* Logo */}
        <div className="w-full max-w-[1200px] h-full p-5">
          <div className="h-full w-full flex justify-between items-center">
            <div className="flex items-center text-white font-bold text-[30px]">
              CcooK
            </div>
            <div className="w-[50%] h-[200%] items-center justify-center border-b-2 hidden lg:flex">
              <input
                type="text"
                placeholder="다양한 레시피를 검색해보세요!"
                className="w-full h-full bg-[rgba(255,255,255,0.1)] placeholder-white text-white outline-none "
              />
            </div>
            <div
              id="Hidden_div"
              className=" space-x-4 h-full items-center text-white font-bold text-[20px] hidden xl:flex "
            >
              <p className=" cursor-pointer">추천 레시피</p>
              <p className=" cursor-pointer">추천 간편식</p>
              <p className=" cursor-pointer">이색 추천 레시피</p>
            </div>
            <button
              id="main_button"
              onClick={openButton}
              className="text-white text-[30px] cursor-pointer xl:hidden"
            >
              <FiAlignRight />
            </button>
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: "0" }}
                  exit={{ x: "100vw" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="fixed top-0 right-0 bottom-0 w-1/2 z-30 h-full bg-[rgba(255,255,255,0.9)] p-5 font-bold text-[18px]"
                >
                  <motion.div
                    onClick={closeButton}
                    className=" cursor-pointer text-[30px] flex justify-end"
                  >
                    <IoClose />
                  </motion.div>
                  <p className=" cursor-pointer">추천 레시피</p>
                  <p className=" cursor-pointer">추천 간편식</p>
                  <p className=" cursor-pointer">이색 추천 레시피</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
      <div className="w-full h-20 justify-center bg-slate-50 shadow-md pr-10 hidden xl:flex">
        <div className="w-full max-w-[1200px] h-16 font-bold  flex space-x-9 items-center p-5 text-[20px] text-gray-600">
          <div className=" border-black w-[130px] ">
            <p className="hover:text-[#CD2032] duration-200 cursor-pointer">
              인기 레시피
            </p>
          </div>
          <div className=" border-black w-[140px] hover:text-[#CD2032] duration-200">
            <p className="hover:text-[#CD2032] duration-200 cursor-pointer">
              신규 레시피
            </p>
          </div>
          <div className="w-[100px] hover:text-[#CD2032] duration-200">
            <p className="hover:text-[#CD2032] duration-200 cursor-pointer">
              계량 팁
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <Button
            variant="outline-danger"
            className="mb-2  hover:text-white transition duration-300 p-2 rounded-lg"
          >
            #자취생들을 위한
          </Button>
          <Button
            variant="outline-danger"
            className="mb-2  hover:text-white transition duration-300 p-2 rounded-lg"
          >
            #아이들을 위한
          </Button>
        </div>
      </div>
    </>
  );
}
