import { useQuery } from "react-query";
import { expressTest } from "./api";

function App() {
  const { data } = useQuery("test", expressTest);
  console.log(data);
  return (
    <div>
      <h1>직업 목록</h1>
    </div>
  );
}

export default App;
