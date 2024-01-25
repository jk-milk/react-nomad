import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []); // 리액트가 지켜볼 것이 없으므로 한 번만 실행
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) // 키워드의 길이가 5 이상일때만 검사
      console.log("SEARCH FOR", keyword);
  }, [keyword]); // 두 번째 매개변수는 리액트가 감시할 것. keyword가 변화될 때만 안의 코드 실행
  
  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;