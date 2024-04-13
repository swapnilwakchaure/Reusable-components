// import { useEffect, useState } from "react";

const Product = () => {
  // const [originalData, setOriginalData] = useState([]);
  // const [arrData, setArrData] = useState([]);
  // const [select, setSelect] = useState("All");

  // useEffect(() => {
  //   document.cookie = "auth_cookie=1";

  //   fetch("http://localhost:8080/data", {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Cookie': document.cookie
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setOriginalData(res);
  //       setArrData(res);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   let filterData;
  //   if (select === "Hindi") {
  //     filterData = originalData.filter((el) => !isEnglishTitle(el.title));
  //   } else if (select === "English") {
  //     filterData = originalData.filter((el) => isEnglishTitle(el.title));
  //   } else {
  //     filterData = originalData;
  //   }

  //   setArrData(filterData);
  // }, [select]);

  // function isEnglishTitle(title) {
  //   return /[a-zA-Z]/.test(title);
  // }

  return (
    <div>
      <h1>Product Page using functional component</h1>

      {/* <select onChange={(e) => setSelect(e.target.value)}> */}
      <select>
        <option value="All">Select Language</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
      </select>

      {/* {arrData.length > 0 &&
        arrData.map((el) => <div key={el.audio_id}>{el.title}</div>)} */}
    </div>
  );
};

export default Product;
