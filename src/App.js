import { useQuery } from "react-query";
import { expressTest } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap"; // Bootstrap Carousel import
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
            <a href="#" className=" decoration-slate-50 text-black">
              <p className="hover:text-[#CD2032] duration-200">인기 레시피</p>
            </a>
          </div>
          <div className=" border-black w-[140px] hover:text-[#CD2032] duration-200">
            <a href="#" className=" decoration-slate-50 text-black">
              <p className="hover:text-[#CD2032] duration-200">신규 레시피</p>
            </a>
          </div>
          <div className="w-[100px] hover:text-[#CD2032] duration-200">
            <a href="#" className=" decoration-slate-50 text-black">
              <p className="hover:text-[#CD2032] duration-200">계량 팁</p>
            </a>
          </div>
        </div>
      </div>
      {/* 메인캐러셀 상단 */}

      <Carousel>
        <Carousel.Item>
          <div className="h-[710px] position-relative flex justify-center">
            <img
              className="position-absolute top-0 start-0 w-100 h-100 object-cover darken-image"
              src="https://ottogi.okitchen.co.kr/pds/upfile/2020-08-23_214060951[27].jpg"
              alt="First slide"
            />
            <div className="w-full h-full max-w-[1200px]">
              <div className="absolute top-50 left-10  text-white">
                <h3 className="text-5xl font-bold mb-3">맛있고 든든하게</h3>
                <h3 className="text-5xl font-bold mb-3">영양챙기기</h3>
                <p className="text-lg mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button className="btn btn-danger btn-lg">자세히 보기</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[710px] object-cover darken-image "
            src="https://ottogi.okitchen.co.kr/pds/upfile/2020-08-21_833988909[3].jpg"
            alt="Second slide"
          />

          <h3>맛있고 든든하게 영양챙기기</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[710px] object-cover darken-image"
            src="https://ottogi.okitchen.co.kr/pds/upfile/2021-09-03_177186357[29].jpg"
            alt="Third slide"
          />

          <h3>맛있고 든든하게 영양챙기기</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Item>
      </Carousel>

      {/* <section>
        <div id="container">Section</div>
      </section>
      <footer>Footer</footer> */}
    </div>
  );
}

export default App;
