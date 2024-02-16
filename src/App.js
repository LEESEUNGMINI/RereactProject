import { useQuery } from "react-query";
import { expressTest } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Carousel } from "react-bootstrap"; // Bootstrap Carousel import

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
            <p className="hover:text-[#CD2032] duration-200">인기 레시피</p>
          </div>
          <div className=" border-black w-[140px] hover:text-[#CD2032] duration-200">
            <p className="hover:text-[#CD2032] duration-200">신규 레시피</p>
          </div>
          <div className="w-[100px] hover:text-[#CD2032] duration-200">
            <p className="hover:text-[#CD2032] duration-200">계량 팁</p>
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
      <section className="w-full h-[800px] flex justify-center ">
        <div
          id="container"
          className="w-full h-full max-w-[1200px] bg-slate-200 p-10"
        >
          {/* 왼쪽 자식 */}
          <div className="w-1/2">
            <h1>이건 어떠세요?</h1>
            <h1>인기 검색어</h1>
            <hr className="w-9" />
            <p>고민을 덜어주는 추천 검색어 </p>
            <Button variant="light"># 카레</Button> <br />
            <br />
            <Button variant="light"># 햄버거</Button> <br />
            <br />
            <Button variant="light"># 피자</Button> <br />
            <br />
            <Button variant="light">Light</Button> <br />
            <br />
            <Button variant="light">Light</Button> <br />
            <br />
          </div>
          {/* 오른쪽 자식 */}
          <div className="w-1/2"></div>
        </div>
      </section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
