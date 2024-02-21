import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function GeaTip() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col">
          <h1 className=" text-center font-bold mt-16 mb-12">계량 팁</h1>
          {/* 큰 내용 */}
          <div className="w-full flex flex-col items-center text-gray-500">
            <span>한 눈으로 살펴보는 간단한 계량팁을 준비했어요~</span>

            <span>요리를 하려는데 계량 기구가 없다면</span>

            <span className="mb-32">
              다른 도구를 사용하거나 사진 속 분량을 보고 눈대중으로 헤아려서 할
              수 있어요!
            </span>
          </div>
          {/* 작은 이미지 */}
          <div className="w-full flex justify-center text-center">
            <img
              src="https://ottogi.okitchen.co.kr/images/category/tip_icon01.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className=" text-red-500 font-bold mb-10">밥숟가락 계량</h2>
            <h3>테이블스푼(T)과 티스푼(t)은 어느 정도일까요?</h3>
            <span className="mb-10 text-gray-500">
              - 성인용 밥숟가락으로 계량해 볼 수 있어요.
            </span>
          </div>
          {/* 숟가락 이미지 */}
          <div className="flex space-x-32">
            {/* 왼쪽이미지 */}
            <div>
              <img
                src="https://ottogi.okitchen.co.kr/images/category/tip01.jpg"
                alt=""
              />
              <h4 className="font-bold">1 테이블스푼 (1T) = 15ml</h4>
              <p>밥숟가락 1 큰술 정도의 양</p>
            </div>
            {/* 오른쪽이미지 */}
            <div>
              <img
                src="https://ottogi.okitchen.co.kr/images/category/tip02.jpg"
                alt=""
              />
              <h4 className="font-bold">1 티스푼 (1t) = 5ml</h4>
              <p>밥숟가락 1/3 큰술 정도의 양</p>
            </div>
          </div>
          {/* Section 구분 */}
          <hr className="mt-32 mb-32" />
          <div className="w-full flex justify-center text-center">
            <img
              src="https://ottogi.okitchen.co.kr/images/category/tip_icon02.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className=" text-red-500 font-bold mb-10">종이컵 계량</h2>
            <h3>밥숟가락 단위보다 더 많은 양은 어떻게 계량해야 할까요?</h3>
            <span className="mb-10 text-gray-500">
              - 소형 종이컵에 한 컵 가득 담은 양을 참고하여 가늠해볼 수 있어요.
            </span>
            <div className="flex space-x-32">
              {/* 왼쪽이미지 */}
              <div>
                <img
                  src="https://ottogi.okitchen.co.kr/images/category/tip03.jpg"
                  alt=""
                />
                <h4 className="font-bold">액체 가득 1 컵 = 약 180ml</h4>
              </div>
              {/* 오른쪽이미지 */}
              <div>
                <img
                  src="https://ottogi.okitchen.co.kr/images/category/tip04.jpg"
                  alt=""
                />
                <h4 className="font-bold">
                  윗면을 깎아낸 밀가루 1 컵 = 약 100g
                </h4>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-2 p-4">
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
