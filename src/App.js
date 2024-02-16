import { useQuery } from "react-query";
import { expressTest } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Carousel } from "react-bootstrap"; // Bootstrap Carousel import
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

function App() {
  const { data } = useQuery("test", expressTest);
  console.log(data);
  return (
    <div>
      <header className="w-full h-[130px] bg-[#CD2032] flex justify-center">
        {/* Logo */}
        <div className="w-full max-w-[1200px] h-full p-5">
          <div className="h-full w-full flex justify-between items-center">
            <div className="flex items-center text-white font-bold text-[30px]">
              CcooK
            </div>
            <div className="w-[50%] h-[200%] flex items-center justify-center border-b-2">
              <input
                type="text"
                placeholder="다양한 레시피를 검색해보세요!"
                className="w-full h-full bg-[rgba(255,255,255,0.1)] placeholder-white text-white outline-none "
              />
            </div>
            <div className="flex space-x-4 h-full items-center text-white">
              <p>#맛집레시피</p>
              <p>#맛있는</p>
            </div>
          </div>
        </div>
      </header>
      {/* 헤더밑에있는 흰색바 */}
      <div className="w-full h-20 flex justify-center bg-slate-50 shadow-md">
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
      </div>
      {/* 메인캐러셀 상단 */}

      <Carousel>
        <Carousel.Item>
          <div className="h-[710px] flex justify-center">
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover darken-image"
              src="https://ottogi.okitchen.co.kr/pds/upfile/2020-08-23_214060951[27].jpg"
              alt="First slide"
            />
            <div className="w-full h-full max-w-[1200px] relative">
              <div className="absolute top-40 left-10  text-white">
                <h3 className="text-6xl font-semibold mb-3">맛있고 든든하게</h3>
                <h3 className="text-6xl font-bold mb-3">영양챙기기</h3>
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
                <h3 className="text-6xl font-semibold mb-3">맛있고 든든하게</h3>
                <h3 className="text-6xl font-bold mb-3">영양챙기기</h3>
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
                <h3 className="text-6xl font-semibold mb-3">맛있고 든든하게</h3>
                <h3 className="text-6xl font-bold mb-3">영양챙기기</h3>
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
      <section className="w-full h-[800px] flex justify-center">
        <div
          id="container"
          className="w-full h-full max-w-[1200px]  p-10 pt-24 flex justify-center"
        >
          {/* 왼쪽 자식 */}
          <div className="w-1/2 flex flex-col items-center bg-white shadow-lg rounded-l-lg p-6 pt-16 ">
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
          <div className="w-1/2 flex justify-center items-center shadow-lg rounded-r-lg overflow-hidden">
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
      <section className="w-full mt-16 h-[400px] bg-[url('https://ottogi.okitchen.co.kr/images/main/section02_bg.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="text-center pb-24">
          <h2 className="text-red-500 text-5xl font-bold mb-4">
            요리를 더 쉽게!
          </h2>
          <p className="text-black text-2xl font-semibold mb-6">
            CcooK의 각종 소스들로 모든 레시피를 보다
          </p>
          <p className="text-black text-3xl font-bold mb-6">
            쉽게, 빠르게, 맛있게
          </p>
          <Button variant="outline-dark">레시피 구경하기</Button>
        </div>
      </section>
      {/* 세번째 섹션 */}
      <section>
        <div className="w-full h-screen flex justify-center">
          <div className="w-full h-full max-w-[1200px] ">
            {/* 타이틀 */}
            <div className="w-full h-40  flex flex-col justify-center items-center">
              <h1 className="font-bold mb-2">추천 레시피</h1>
              <hr className="w-9 mb-6 border-t-4 border-black" />
            </div>
            {/* 아래 그리드 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4">그리드 아이템 1</div>
              <div className="bg-gray-300 p-4">그리드 아이템 2</div>
              <div className="bg-gray-400 p-4">그리드 아이템 3</div>
              <div className="bg-gray-500 p-4">그리드 아이템 4</div>
              <div className="bg-gray-600 p-4">그리드 아이템 5</div>
              <div className="bg-gray-700 p-4">그리드 아이템 6</div>
            </div>
          </div>
        </div>
      </section>
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
              <h7 className="font-bold">(주)CcooK</h7>
              <h7>대구광역시 동구 화랑로 525 </h7>
              <h7>Copyright ⓒ CcooK.,Ltd All Rights Reserved.</h7>
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
    </div>
  );
}

export default App;
