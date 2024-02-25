import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useLocation, useParams } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  const item = state?.item;
 

  return (
    <div>
    <Header />
    <div className="relative mt-16">
      {/* Main Image */}
      <div className="w-full h-[500px]  bg-cover bg-center relative bg-[rgba(0,0,0,0.9)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0)]"></div>
        <img src={item?.ATT_FILE_NO_MAIN} alt="" className="z-10 object-contain object-center w-full h-full" />
      </div>
      {/* Title */}
      <h2 className="text-center text-5xl font-bold mt-10">{item?.RCP_NM}</h2>
      <p className="text-center mb-16 text-gray-500">{item?.RCP_NA_TIP}</p>
      {/* Detailed Information */}
      <div className="w-full max-w-7xl mx-auto lg:flex">

        {/* Left Content */}
        <div className="w-2/3 p-8">
        <h3 className="text-4xl font-semibold mb-4 text-red-500">- 레시피</h3>
          <ol className=" list-none ">
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL01}</li>
            <img src={item?.MANUAL_IMG01} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL02}</li>
            <img src={item?.MANUAL_IMG02} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL03}</li>
            <img src={item?.MANUAL_IMG03} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL04}</li>
            <img src={item?.MANUAL_IMG04} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL05}</li>
            <img src={item?.MANUAL_IMG05} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL06}</li>
            <img src={item?.MANUAL_IMG06} alt=""  className="w-[300px] shadow-sm"/>
            <li className="mt-8 text-[18px] font-semibold">{item?.MANUAL07}</li>
            <img src={item?.MANUAL_IMG07} alt=""  className="w-[300px] shadow-sm"/>
          </ol>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/3 p-8 border lg:h-[600px]">
        <h3 className="text-2xl font-bold mb-4 text-red-500">- 준비재료</h3>

        <p className="pl-6">{item?.RCP_PARTS_DTLS}</p>
          <h3 className="text-2xl font-bold mb-4 text-red-500">- 요리 정보</h3>
         <div className="pl-6">
          <p className="mb-2"><strong>탄수화물:</strong> {item?.INFO_CAR}</p>
          <p className="mb-2"><strong>단백질:</strong> {item?.INFO_PRO}</p>
          <p className="mb-2"><strong>지방:</strong> {item?.INFO_FAT}</p>
          <p className="mb-2"><strong>나트륨:</strong> {item?.INFO_NA}</p>
          <p className="mb-2"><strong>에너지:</strong> {item?.INFO_ENG}</p>
         </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}