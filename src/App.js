import { useQuery } from "react-query";
import { expressTest } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Carousel } from "react-bootstrap"; // Bootstrap Carousel import

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Link, useNavigate } from "react-router-dom";

function App({ props }) {
  const navigate = useNavigate();

  const onClickCucunItem = () => {
    navigate(`/cucun/${props.RCP_NM}`, {
      state: props,
    });
  };

  const { data } = useQuery("test", expressTest);
  const Data = data?.COOKRCP01.row;
  console.log(Data);

  // 데이터를 4개씩 묶어 배열로 반환하는 함수
  const chunkArray = (arr, chunkSize) => {
    return Array.from(
      { length: Math.ceil(arr?.length / chunkSize) },
      (_, index) => arr.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  };

  // 데이터를 4개씩 묶어서 배열로 만듭니다.
  const chunkedData = chunkArray(Data, 5);
  return (
    <div>
      {/* 메인캐러셀 상단 */}
      <Header />
      <Carousel>
        <Carousel.Item>
          <div className="h-[710px] flex justify-center">
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover darken-image"
              src="https://pixabay.com/get/gd064b1de09584fde885c4aa8ea0db6de5036133b091b68f2cf8c37a75d585be5029fcb801d0b509001e0dee951833a0f.jpg"
              alt="First slide"
            />

            <div className="w-full h-full max-w-[1200px] relative">
              <div className="absolute top-40 left-10  text-white">
                <h3 className="xl:text-6xl text-5xl font-semibold mb-3">
                  맛있고 든든하게
                </h3>
                <h3 className="xl:text-6xl text-5xl font-bold mb-3">
                  영양챙기기
                </h3>
                <p className="text-lg mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button className="btn btn-danger btn-lg">레시피 보기</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-[710px] flex justify-center">
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover darken-image"
              src=" https://ottogi.okitchen.co.kr/pds/upfile/2020-08-21_833988909[3].jpg"
              alt="First slide"
            />
            <div className="w-full h-full max-w-[1200px] relative">
              <div className="absolute top-40 left-10  text-white">
                <h3 className="xl:text-6xl text-5xl font-semibold mb-3">
                  맛있고 든든하게
                </h3>
                <h3 className="xl:text-6xl text-5xl font-bold mb-3">
                  영양챙기기
                </h3>
                <p className="text-lg mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button className="btn btn-danger btn-lg">레시피 보기</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-[710px] flex justify-center">
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover darken-image"
              src="https://ottogi.okitchen.co.kr/pds/upfile/2021-09-03_177186357[29].jpg"
              alt="First slide"
            />
            <div className="w-full h-full max-w-[1200px] relative">
              <div className="absolute top-40 left-10  text-white">
                <h3 className="xl:text-6xl text-5xl font-semibold mb-3">
                  맛있고 든든하게
                </h3>
                <h3 className="xl:text-6xl text-5xl font-bold mb-3">
                  영양챙기기
                </h3>
                <p className="text-lg mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button className="btn btn-danger btn-lg">레시피 보기</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* 첫번쨰 섹션 */}
      <section className="w-full h-[1000px] flex justify-center">
        <div
          id="container"
          className="w-full h-full max-w-[1200px]  p-10 pt-48 justify-center xl:flex"
        >
          {/* 왼쪽 자식 */}
          <div className="w-full flex flex-col items-center bg-white shadow-lg rounded-l-lg p-6 pt-16 xl:1/2 ">
            <h1 className="font-bold mb-2">이건 어때요?</h1>
            <h1 className="font-bold mb-2">인기 검색어</h1>
            <hr className="w-9 mb-6 border-t-4 border-black" />
            <p className="mb-6 font-semibold text-gray-500">
              고민을 덜어주는 추천 검색어
            </p>
            <div className="pl-8 space-x-2">
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 파스타
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 스테이크
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 피자
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 샐러드
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 떡볶이
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 카레
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 초밥
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 햄버거
              </Button>
              <Button
                variant="outline-danger"
                className="mb-2 hover:bg-red-500 hover:text-white transition duration-300 p-2 rounded-lg"
              >
                # 라면
              </Button>
            </div>
          </div>
          {/* 오른쪽 자식 */}
          <div className="w-full flex justify-center items-center shadow-lg rounded-r-lg overflow-hidden xl:1/2 ">
            <div className="w-full h-full bg-[url('https://cdn.pixabay.com/photo/2019/01/25/21/36/spaghetti-3955377_1280.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
              <div className="text-white p-4  ">
                <div className="border-8 border-white p-4 relative rounded-xl">
                  <div className="flex flex-col items-start ">
                    <h2 className="font-bold z-10">CcooK의 </h2>
                    <h2 className="font-bold z-10">쉽고 간단한 </h2>
                    <h2 className="font-bold z-10">계량 꿀팁 !</h2>
                    <p className="z-10 mt-8 font-semibold">
                      반숟가락,종이컵으로
                      <br />
                      쉽고 간단하게 알려드립니다!
                    </p>
                  </div>
                  <div className=" w-full h-full  absolute bg-[rgba(0,0,0,0.5)] top-0 left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 두번쨰 섹션 */}
      <section className="w-full mt-32 h-[250px] bg-[url('./Belner.jpg')] bg-cover bg-center flex justify-center items-center xl:h-[400px]">
        <div className="text-center pb-10">
          <h2 className="text-red-500 text-3xl font-bold mb-3 xl:5xl ">
            요리를 더 쉽게!
          </h2>
          <span className="text-black text-xl xl:text-2xl font-semibold  ">
            CcooK의 각종 소스들로 모든 레시피를 보다
          </span>
          <br />
          <span className="text-black text-2xl xl:text-3xl font-bold mb-4 xl:mb-10 inline-block">
            쉽게, 빠르게, 맛있게
          </span>
          <br />
          <Button variant="outline-dark" style={{ fontWeight: "bold" }}>
            레시피 구경하기
          </Button>
        </div>
      </section>
      {/* 세번째 섹션 */}
      <section id="third_section">
        <div className="w-full h-auto flex justify-center mb-[40px] mt-16">
          <div className="w-full h-full max-w-[1200px] ">
            {/* 타이틀 */}
            <div className="w-full h-40  flex flex-col justify-center items-center">
              <h1 className="font-bold mb-6">추천레시피</h1>
              <hr className="w-9  border-t-4 border-black" />
              <p className="mb-8 font-semibold text-orange-400">
                Ccook이 소개하는 레시피로 최고의 요리를 만들어보세요
              </p>
            </div>
            {/* 아래 그리드 */}

            <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-2 p-4">
              {Data?.slice(40, 48).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative overflow-hidden"
                >
                  {/* 이미지 */}
                  <Link to="/cucun" className="w-full">
                    <img
                      src={item?.ATT_FILE_NO_MAIN} // 이미지 소스
                      alt={item?.RCP_NM} // 대체 텍스트
                      className="w-full h-[240px] rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300 "
                    />
                  </Link>

                  <div className="w-[55px] h-[55px] rounded-[50%] absolute bottom-8 right-14 bg-[#CD2032] flex justify-center font-semibold items-center text-white text-[14px]">
                    인기
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
      </section>
      {/* 네번째 섹션 */}
      <section
        id="four_section"
        className="mb-20 mt-32 h-[900px] bg-[url('./Belner2.jpg')] bg-cover bg-center hidden xl:block"
      >
        {/* 타이틀 */}
        <div className="w-full h-56  flex flex-col justify-center items-center bg-white">
          <h1 className="font-bold mb-6">Ccook 추천 간편식</h1>
          <hr className="w-9  border-t-4 border-black" />
          <p className=" font-semibold text-orange-400">
            Ccook만의 간편식이 근사한 요리가 되는 팁을 공개합니다.
          </p>
        </div>
        {/* Carousel 컴포넌트 */}
        <Carousel id="Menu_carousel" className="">
          {chunkedData.map((chunk, index) => (
            <Carousel.Item key={index}>
              {/* 한 번에 4개씩 이미지를 보여줄 수 있도록 각각의 아이템에서 4개의 이미지를 보여줍니다. */}
              <div className="flex justify-center space-x-8 p-4 ">
                {chunk.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-center relative"
                  >
                    {/* 이미지 */}
                    <Link
                      to={`/cucun/${item?.RCP_NM}`}
                      state={{ item }}
                      className="w-full cursor-pointer z-10"
                    >
                      <img
                        src={item?.ATT_FILE_NO_MAIN} // 이미지 소스
                        alt={item?.RCP_NM} // 대체 텍스트
                        className="w-[500px] h-[400px] rounded-lg object-cover object-center shadow-md shadow-gray-400 hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    {/* 소개 */}
                    <div className="flex space-x-4 mt-10 font-semibold text-gray-500">
                      <span>#{item?.RCP_PAT2}</span>
                      <span>#{item?.RCP_WAY2}</span>
                      <span>#인기상품</span>
                    </div>
                    <div className="font-bold text-[30px]">{item?.RCP_NM}</div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      {/* 다섯번째 섹션 */}
      <section id="five_section">
        <div className="w-full h-auto flex justify-center mb-[40px] mt-32 p-4">
          <div className="w-full h-full max-w-[1200px] ">
            {/* 타이틀 */}
            <div className="w-full h-40  flex flex-col justify-center items-center">
              <h1 className="font-bold mb-6">이색 추천 레시피</h1>
              <hr className="w-9  border-t-4 border-black" />
              <p className="mb-8 font-semibold text-orange-400">
                Ccook이 소개하는 이색적인 레시피로 또 다른 요리에 도전해보세요
              </p>
            </div>
            {/* 아래 그리드 */}

            <div id="Grid_div">
              {Data?.slice(58, 64).map((item, index) => (
                <div
                  key={index}
                  className={`divs div-${
                    index + 1
                  } flex flex-col items-center relative overflow-hidden`}
                >
                  {/* 이미지 */}
                  <div className="w-full overflow-hidden">
                    <Link
                      to={`/cucun/${item?.RCP_NM}`}
                      state={{ item }}
                      className="w-full cursor-pointer z-10"
                    >
                      <img
                        src={item?.ATT_FILE_NO_MAIN} // 이미지 소스
                        alt={item?.RCP_NM} // 대체 텍스트
                        className="w-full h-[auto] object-cover object-center hover:scale-105 transition-transform duration-300 cursor-pointer "
                      />
                    </Link>
                  </div>

                  {/* 소개 */}
                  <div className={`w-full texts text-${index + 1}`}>
                    <div className="font-bold xl:text-[24px]w-full">
                      <div className="space-x-3 text-gray-500 font-semibold flex">
                        <span className="xl:text-[16px] text-[14px]">
                          #{item.RCP_PAT2}
                        </span>
                        <span className="xl:text-[16px] text-[14px]">
                          #{item.RCP_WAY2}
                        </span>
                      </div>
                      <span className="text-[16px] xl:text-[24px]">
                        {item?.RCP_NM}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-48 xl:h-[300px] h-[200px] bg-[url('https://ottogi.okitchen.co.kr/images/main/book_banner.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-red-500 xl:text-4xl text-2xl font-bold mb-3 ">
            CcooK만의 각종 레시피들로 더 재미있게!
          </h2>
          <span className=" xl:text-2xl text-[#aaaaaa]">
            모든 레시피와 각종 요리 재료소개
          </span>
          <br />
          <span className="text-black xl:text-3xl text-xl font-bold mb-10 inline-block">
            바로 구경하러 가시겠어요?
          </span>
          <br />
          <Button variant="outline-dark" style={{ fontWeight: "bold" }}>
            쇼핑몰 구경하기
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default App;
