import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ApexCharts from "react-apexcharts";
import "../../Fonts/Font.css";

function LikeUserListDetail(props) {
  const {productNum} = useParams(); // 넘어온 productNum
  const [getZzimDetail, setGetZzimDetail] = useState([]);
  const [gender13Count, setGender13Count] = useState(0);
  const [gender24Count, setGender24Count] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  let total = 0;
  const [apexArray, setApexArray] = useState([40, 60]);

  useEffect(() => {
    return async () => {
      const {data} = await axios.post(
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
      const {data} = await axios.post(
        "http://localhost:8080/genderCount",
        null,
        {
          params: {
            productNum: productNum,
          },
        }
      );
      console.log("data : ");
      console.log(data);
      setGender13Count(data[0]);
      setGender24Count(data[1]);
      console.log("totalUser : ");
      console.log(totalUser);
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

      <div>{totalUser !== 0 ?
        <ApexCharts
          // series={apexArray}
          series={[gender13Count, gender24Count]}
          type={"pie"}
          width={600}
          options={{
            chart: {height: 300, width: 300, type: "pie", sparkline: true},
            fill: {
              colors: ['#99CCFF', '#FFCCE5']
            },
            legend: {
              fontSize: 20,
              fontFamily: "MICEMyungjo",
              markers:{
                strokeColor: "#99CCFF",
                fillColors: "#99CCFF"
              }
            },
            plotOptions: {
              pie: {
                customScale: 0.6,
                dataLabels: {
                  offset: -45,
                }
              }
            },
            labels: ['남성', "여성"],
            dataLabels: {
              style: {
                fontSize: 40
                , colors: ['black', 'black']
                , fontWeight: "bold"
                , fontFamily: "MICEMyungjo",
              },
              textAnchor: "end"
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 30
                },
                legend: {
                  position: "middle",
                }
              }
            }]
          }}
        /> : null}

      </div>
    </div>
  );
}

export default LikeUserListDetail;
