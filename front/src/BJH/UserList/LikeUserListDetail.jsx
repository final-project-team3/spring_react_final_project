import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApexCharts from "react-apexcharts";
import "../../Fonts/Font.css";

function LikeUserListDetail(props) {
  const { productNum } = useParams(); // 넘어온 productNum
  const [getZzimDetail, setGetZzimDetail] = useState([]);
  const [gender13Count, setGender13Count] = useState(0);
  const [gender24Count, setGender24Count] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  let total = 0;
  const [apexArray, setApexArray] = useState([40, 60]);

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

// 연령별 통계데이터받아오기
  useEffect(() => {
    return async () => {
      const { data } = await axios.post(
        "http://localhost:8080/getGenerationData",
        null,
        null
      );
      console.log(data);
    };
  }, []);



  const data1 = () => {
    console.log(getZzimDetail);
    console.log(totalUser);
    console.log(gender13Count);
  };

  return (
    <div className={"container text-center mt-5 mb-5"}>
      <h1 className={"mb-5"}>상품 통계</h1>

      <div className={"container"}>
        <div className={"d-flex"}>
          <div className={"me-5"}>
            {totalUser !== 0 ? (
              <ApexCharts
                // series={apexArray}
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
            <ApexCharts
              series={[
                {
                  data: [21, 22, 10, 28, 16, 21],
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
                    columnWidth: "60%",
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
                  categories: [
                    "10대",
                    "20대",
                    "30대",
                    "40대",
                    "50대",
                    "60대 이상",
                  ],
                  labels: {
                    style: {
                      colors: [
                        "#674188",
                        "#698269",
                        "#59C1BD",
                        "#0D4C92",
                        "#ECA869",
                        "#B08BBB",
                      ],
                      fontSize: "20px",
                      fontFamily: "MICEMyungjo",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeUserListDetail;
