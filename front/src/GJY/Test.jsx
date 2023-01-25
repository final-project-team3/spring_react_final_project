import React, {useEffect, useState} from "react";
import axios from "axios";

function Test(props) {
  // const [testData, setTestData] = useState([]);
  //
  // const BtnTest = () => {
  //   useEffect(() => {
  //     return async () => {
  //       const {data} = await axios.post("http://localhost:8080/testData", null, {params: {idx: 1},});
  //       setTestData(data);
  //       let url = URL.createObjectURL(data);
  //       let img = document.getElementById('image');
  //       img.src = url;
  //       console.log("-----------------------testData------------------------");
  //       console.log(testData);
  //       console.log("-----------------------data------------------------");
  //       console.log(data);
  //     };
  //   }, [testData]);
  // }
    const BtnTest = console.log('하이');



  return (
    <div>
      <h1 className={'test-style'}>테스트페이지</h1>
          <img
            id={"image"}
            className={"float-start"}
            alt={"First slide"}
          />
      <button className={"btn btn-primary"}>이미지 데이터 가져오기</button>
    </div>
  );
}

export default Test;
