import React from "react";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      // console.log(result);
      return result;
    };
    fetchData().then((res) => setData(res));
  }, []);
  console.log(data);

  return (
    <div>
      {data.map((d) => (
        <div key={d.id} to={`${d.id}`}>
          {d.id}.{d.title}
        </div>
      ))}
    </div>
  );
}

// export default function App() {
//   const [number, setNumber] = React.useState(0);

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>+1</button>
//       <button onClick={() => setNumber(number - 1)}>-1</button>
//     </div>
//   );
// }

/////API 호출
// function App() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//   return <div className="App"></div>;
// }

// export default App;

//// 카운트 코드
// export default function App() {
//   const [count, setCount] = useState(1000);

//   useEffect(() => {
//     console.log("useEffect");
//     const interval = setInterval(() => console.log(count), count);

//     return () => {
//       clearInterval(interval);
//       console.log("clearInterval");
//     };
//   }, [count]);

//   const countHander = (e) => {
//     setCount((c) => c + 1000);
//   };

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={countHander}>카운트 증가</button>
//     </div>
//   );
// }
