import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      {/* 푸터 위에있는 작은 바  */}
      <div className="w-full h-20 flex justify-center bg-[#A20A1F] shadow-md">
        <div className="w-full max-w-[1200px] h-16 font-bold  flex space-x-9 items-center p-5 text-[20px] text-white">
          <div className=" border-black w-[130px] ">
            <p className=" duration-200 cursor-pointer">인기 레시피</p>
          </div>
          <div className=" border-black w-[140px] duration-200">
            <p className=" duration-200 cursor-pointer">신규 레시피</p>
          </div>
          <div className="w-[100px]  duration-200">
            <p className=" duration-200 cursor-pointer">계량 팁</p>
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <footer className="w-full h-[130px] bg-[#CD2032] flex justify-center">
        {/* Logo */}
        <div className="w-full max-w-[1200px] h-full p-5">
          <div className="h-full w-full flex justify-between items-center">
            <div className="flex flex-col text-white font-bold text-[16px]">
              <h6 className="font-bold">(주)CcooK</h6>
              <h6>대구광역시 동구 화랑로 525 </h6>
              <h6>Copyright ⓒ CcooK.,Ltd All Rights Reserved.</h6>
            </div>

            <div className="flex space-x-4 h-full items-center text-white text-[24px]">
              <p>
                <FaInstagram />
              </p>
              <p>
                {" "}
                <FaSquareFacebook />
              </p>
              <p>
                {" "}
                <CiYoutube />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
