import { useQuery } from "react-query";
import { expressTest } from "./api";

function App() {
  const { data } = useQuery("test", expressTest);
  console.log(data);
  return (
    <div>
      <header className="w-full h-[80px] bg-slate-500 flex justify-center">
        {/* Logo */}
        <div className="w-full max-w-[1200px] h-full">
          <div className="h-full">
            <img
              className="h-full"
              src="https://img.freepik.com/premium-vector/cooking-logo_10250-512.jpg"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* <section>
        <div id="container">Section</div>
      </section>
      <footer>Footer</footer> */}
    </div>
  );
}

export default App;
