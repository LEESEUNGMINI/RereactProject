import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useQuery } from "react-query";
import { expressTest } from "../api";

export default function Cucun() {
  const { data } = useQuery("test", expressTest);
  const Data = data?.COOKRCP01.row;
  console.log(Data);
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <h1 className=" text-center font-bold mt-16 mb-12">신규 레시피</h1>
          <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 p-4">
            {Data?.slice(150, 166).map((item, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* 이미지 */}
                <img
                  src={item?.ATT_FILE_NO_MAIN} // 이미지 소스
                  alt={item?.RCP_NM} // 대체 텍스트
                  className="w-full h-[240px] rounded-lg object-cover object-center "
                />
                <div className="w-[55px] h-[55px] rounded-[50%] absolute bottom-8 right-14 bg-[#CD2032] flex justify-center font-semibold items-center text-white text-[14px]">
                  신규
                </div>
                <div className="w-[55px] h-[55px] rounded-[50%] absolute bottom-8 -right-0 bg-[#f49700] flex justify-center font-semibold items-center text-white text-[14px]">
                  {item?.RCP_WAY2}
                </div>
                {/* 소개 */}
                <div className="w-full">
                  <div className="mt-3 font-bold text-[20px]">
                    {item?.RCP_NM}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
