import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {default as Axios} from "axios";
import ApexCharts from "react-apexcharts";
import "../../Fonts/Font.css";
const axios = Axios.create({
  baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
});

function LikeUserListDetail(props) {
  const { productNum } = useParams(); // 넘어온 productNum
  const [getZzimDetail, setGetZzimDetail] = useState([]);
  const [gender13Count, setGender13Count] = useState(0);
  const [gender24Count, setGender24Count] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  let total = 0;
  const [apexArray, setApexArray] = useState([40, 60]);
  const [wM, setWM] = useState("");
  const [gene, setGene] = useState([]);

  useEffect(() => {
    const getZzimDetailAll = async () => {
      const { data } = await axios.post(
        "/getZzimDetail",
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
    getZzimDetailAll();
  }, []);

  useEffect(() => {
    const genderCountAll = async () => {
      const { data } = await axios.post(
        "/genderCount",
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
      console.log("========Math.max(data)=========");

      const maxValue = Math.max(...data);
      const maxIndex = data.indexOf(maxValue);

      console.log(maxIndex);
      if (maxIndex == 0) {
        setWM("남성");
      } else {
        setWM("여성");
      }

      console.log("========Math.max(data)=========");
      console.log("totalUser : ");
      console.log(totalUser);
    };

    genderCountAll();
  }, []);

  const [generationData, setGenerationData] = useState([]);
  const [generationArray, setGenerationArray] = useState([]);
  const [humanCountArray, setHumanCountArray] = useState([]);
// 연령별 통계데이터받아오기
  useEffect(() => {
    const generationDataAll = async () => {
      const { data } = await axios.post(
        "/getGenerationData",
        null,
        {
          params: {
            productNum: productNum,
          },
        }
      );

      console.log(data[0].cnt);


      for (let i = 0; i < data.length; i++) {
        generationArray.push(`${Math.trunc(data[i].gen)}대`);
        humanCountArray.push(data[i].cnt);
        console.log("humanCountArray");
        console.log(humanCountArray);
        const maxValue = Math.max(...humanCountArray).toString();
        const maxIndex = humanCountArray.indexOf(maxValue);
        console.log("maxValue");
        console.log(maxValue);
        console.log("maxIndex");
        console.log(maxIndex);

        console.log(generationArray[maxIndex]);
        setGene(generationArray[maxIndex]);
      }
    };

    generationDataAll();
  }, []);

//
  return (
    <div className={"container text-center mt-5 mb-5"}>
      <h1 className={"mb-5"}>상품 통계</h1>
      <h2 className={"mt-5 mb-5"}>해당 상품은 {wM}, {gene}가 선호하는 상품입니다.</h2>
      <div className={"container"}>
        <div className={"d-flex"}>
          <div className={"me-5"}>
            {totalUser !== 0 ? (
              <ApexCharts
                series={[gender13Count, gender24Count]}
                type={"pie"}
                width={600}
                options={{
                  chart: {
                    height: 300,
                    width: 300,
                    type: "pie",
                    sparkline: true,
                  },
                  title: {
                    text: '성별 통계',
                    floating: false,
                    offsetY: 10,
                    align: 'top',
                    style: {
                      color: '#444',
                      fontSize: 30,
                      fontFamily: "MICEMyungjo"
                    }
                  },
                  colors: ["#99CCFF", "#FFCCE5"],
                  fill: {
                    colors: ["#99CCFF", "#FFCCE5"],
                  },
                  legend: {
                    fontSize: 20,
                    fontFamily: "MICEMyungjo",
                    markers: {
                      strokeColor: "#99CCFF",
                      fillColors: "#99CCFF",
                    },
                  },
                  plotOptions: {
                    pie: {
                      customScale: 0.7,
                      dataLabels: {
                        offset: -50,
                      },
                    },
                  },
                  labels: ["남성", "여성"],
                  dataLabels: {
                    style: {
                      fontSize: 40,
                      colors: ["black", "black"],
                      fontWeight: "bold",
                      fontFamily: "MICEMyungjo",
                    },
                    textAnchor: "end",
                  },
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 30,
                        },
                        legend: {
                          position: "middle",
                        },
                      },
                    },
                  ],
                }}
              />
            ) : null}
          </div>
          <div>

            {generationArray.length > 0 ? (
            <ApexCharts
              series={[
                {
                  data: humanCountArray,
                },
              ]}
              type={"bar"}
              width={600}
              options={{
                chart: {
                  height: 50,
                  type: "bar",
                  events: {
                    click: function (chart, w, e) {
                      // console.log(chart, w, e)
                    },
                  },
                },
                colors: [
                  "#674188",
                  "#698269",
                  "#59C1BD",
                  "#0D4C92",
                  "#ECA869",
                  "#B08BBB",
                ],
                plotOptions: {
                  bar: {
                    columnWidth: "40%",
                    distributed: true,
                    borderRadius: 20,
                  },
                },
                dataLabels: {
                  enabled: true,
                  formatter(val, opts) {
                    return val + "명";
                  },
                  style: {
                    fontSize: 20,
                    fontFamily: "MICEMyungjo",
                  },
                },
                legend: {
                  show: false,

                },
                title: {
                  text: '연령대별',
                  floating: false,
                  offsetY: 0,
                  align: 'top',
                  style: {
                    color: '#444',
                    fontSize: 30,
                    fontFamily: "MICEMyungjo"
                  }
                },
                yaxis: {
                  show: true,
                  labels: {
                    style: { fontSize: 20 },
                    formatter(val, opts) {
                      return val + "명";
                    },
                  },
                },
                xaxis: {
                  categories: generationArray,
                  labels: {
                    style: {
                      colors: [
                        "#674188",
                      ],
                      fontSize: "20px",
                      fontFamily: "MICEMyungjo",
                    },
                  },
                },
              }}
            />) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeUserListDetail;
