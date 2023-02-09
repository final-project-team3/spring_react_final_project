import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApexCharts from "react-apexcharts";

function LikeUserListDetail(props) {
  const { productNum } = useParams(); // 넘어온 productNum
  const [getZzimDetail, setGetZzimDetail] = useState([]);
  const [gender13Count, setGender13Count] = useState(0);
  const [gender24Count, setGender24Count] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  let total = 0;

  useEffect(() => {
    return async () => {
      const { data } = await axios.post(
        "http://localhost:8080/getZzimDetail",
        null,
        {
          params: {
            productNum: productNum,
          },
        }
      );
      setGetZzimDetail(data);
      setTotalUser(data.length); // 총 인원수
    };
  }, []);

  useEffect(() => {
    return async () => {
      const { data } = await axios.post(
        "http://localhost:8080/gender13Count",
        null,
        {
          params: {
            productNum: productNum,
          },
        }
      );
      // 1과 3으로 시작하는 유저의 수 (남성)
      setGender13Count(data[0].countGender13);
      const total13 = data[0].countGender13;
      console.log(totalUser);
      setGender24Count(totalUser - total13); // 총 인원수에서 남성의 수 뺀것 == 여성의 수
    };
  }, []);

  const data1 = () => {
    console.log(getZzimDetail);
    console.log(totalUser);
    console.log(gender13Count);
  };

  return (
    <div className={"container text-center mt-5 mb-5"}>
      <button onClick={data1}>첫번째 데이터 length 확인</button>
      <h2>
        {productNum} 번 상품을 찜한 사람의 수 : {totalUser}{" "}
      </h2>
      <h2>
        총 인원 {totalUser} 중, 남성은 {gender13Count}{" "}
      </h2>
      <h2>여성은 : {gender24Count}</h2>
      <div>
      {/*  <ApexCharts*/}
      {/*    type="line"*/}
      {/*    series={[44, 55, 13, 43, 22]}*/}
      {/*    options: {{*/}
      {/*    chart: {*/}
      {/*    width: 380,*/}
      {/*    type: 'pie',*/}
      {/*    },*/}
      {/*  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],*/}
      {/*  responsive: [{*/}
      {/*  breakpoint: 480,*/}
      {/*  options: {*/}
      {/*  chart: {*/}
      {/*  width: 200*/}
      {/*},*/}
      {/*  legend: {*/}
      {/*  position: 'bottom'*/}
      {/*}}}]}}>*/}
      {/*  </ApexCharts>*/}

      </div>
    </div>
  );
}

export default LikeUserListDetail;
