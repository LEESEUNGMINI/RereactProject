import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useQuery } from "react-query";
import { expressTest } from "../api";
import { Pagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


export default function Cucun({props}) {
  // 네비게이션


  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const { data } = useQuery("test", expressTest);
  const Data = data?.COOKRCP01.row;
  console.log(Data);

  const itemsPerPage = 16; // 페이지 당 아이템 수
  const startIndex = 140;
  const endIndex = 190;
  const limitedData = Data?.slice(startIndex, endIndex);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = limitedData?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const navigate = useNavigate();

  const onClickCucunItem = () => {
    navigate(`/cucun/${props.RCP_NM}`, {
      state: props
    });
  };
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <h1 className=" text-center font-bold mt-16 mb-12">신규 레시피</h1>
          <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-3 p-4">
            {currentItems?.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* 이미지 */}
                <Link to={`/cucun/${item?.RCP_NM}`} state={{ item }} className="w-full">
  <img
    src={item?.ATT_FILE_NO_MAIN}
    alt={item?.RCP_NM}
    className="w-full h-[240px] rounded-lg object-cover object-center"
  />
</Link>
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
      <div className="flex justify-center mb-4 text-[32px]">
        <Pagination
          count={Math.ceil(limitedData?.length / itemsPerPage)} // 전체 페이지 수 계산
          shape="rounded"
          onChange={handlePageChange} // 페이지 변경 핸들러
        />
      </div>
      <Footer />
    </div>
  );
}