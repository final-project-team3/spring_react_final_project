import React, {Component, useEffect, useState} from "react";
import $ from "jquery";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "../BJH/Main.css";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Swal from "sweetalert2";

{
  /*BJH 시작*/
}

// BJH 캐러셀
const StyledSlider = styled(Slider)`
  // 화살표 색상 변경해야함
  .slick-slide div {
    outline: none;
  }
  .slick-list {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 50%;
    height: 50%;
  }
  .slick-prev {
    left: 6px;
    z-index: 999;
  }
  .slick-next {
    right: 6px;
    z-index: 999;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
  width: 100%;
`;

const mainImg1 = require("../HSH/Img/main1.jpg");
const mainImg2 = require("../HSH/Img/main2.jpg");
const mainImg3 = require("../HSH/Img/main3.jpg");

const mainImg = [{url: mainImg1}, {url: mainImg2}, {url: mainImg3}];

const Main = () => {
  let userInfo = sessionStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);

  const navi = useNavigate();
  const {pathname} = useLocation();

  const productInterestedFunc = async (productNum) => {
    // 로그인 하지 않았을 시
    if (userInfo == null) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "로그인 후 이용할 수 있습니다.",
        text: "로그인창으로 이동할까요?",
        showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
        confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
        cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
        confirmButtonText: "확인", // confirm 버튼 텍스트 지정
        cancelButtonText: "취소",
      }).then((req) => {
        if (req.isConfirmed) {
          navi("/login", {
            state: {
              pathname: pathname,
            },
          });
        }
      });
    } else {
      // 이미 찜한 상품인지 비교해서 있으면 1 반환 시킴 없으면 insert
      await axios
        .get("http://localhost:8080/productInterestedInsert", {
          params: {
            productNum: productNum,
            userId: userInfo?.userId,
          },
        })
        .then((req) => {
          // 이미 찜한 상품일 경우
          if (req.data == 1) {
            Swal.fire({
              position: "top-center",
              icon: "warning",
              title: "이미 찜한 상품입니다",
              text: "찜한 상품목록으로 가시겠습니까?",
              showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
              confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
              cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
              confirmButtonText: "확인", // confirm 버튼 텍스트 지정
              cancelButtonText: "취소",
            }).then((req) => {
              if (req.isConfirmed) {
                navi("/LikeProduct");
              }
            });
          } else {
            Swal.fire({
              position: "top-center",
              icon: "info",
              title: "찜 상품에 등록되었습니다!!",
              text: "찜한 상품목록으로 가시겠습니까?",
              showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
              confirmButtonColor: "#3085d6", // confirm 버튼 색깔 지정
              cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
              confirmButtonText: "확인", // confirm 버튼 텍스트 지정
              cancelButtonText: "취소",
            }).then((req) => {
              if (req.isConfirmed) {
                navi("/LikeProduct");
              }
            });
          }
        });
    }
  };

  const deleteProductLikeItem = async (productNum, imgSrc) => {
    Swal.fire({
      position: "top-center",
      icon: "question",
      title: "찜한 상품 삭제",
      text: "선택하신 찜한 상품을 삭제하시겠습니까?",
      showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
      confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
      cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
      confirmButtonText: '확인', // confirm 버튼 텍스트 지정
      cancelButtonText: '취소',
    }).then((req) => {
      if (req.isConfirmed) {
        axios.post("http://localhost:8080/deleteProductLikeItem", null, {
          params: {
            userId: userInfo.userId,
            productNum: productNum
          }
        });
        Swal.fire({
          position: "top-center",
          icon: "info",
          title: "해당 찜한 상품을 삭제하였습니다.",
          timer: 3000,
        }).then(() => {
          console.log(imgSrc);
          window.location.reload();
          imgSrc.prop("src", "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
          );
        })
      }
    });
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
  };

  // top 버튼 코드
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  // top 버튼 코드 끝

  // GJY 시작

  // 이번달에 등록된 상품 최근순으로 4개 가져오기
  const [thisMonthData, setThisMonthData] = useState([]);

  useEffect(() => {
    return async () => {
      const {data} = await axios.post(
        "http://localhost:8080/thisMonthData",
        null,
        null
      );
      console.log(data);
      setThisMonthData(data);
    };
  }, []);

  const [randomData4, setRandomData4] = useState([]);
  const [randomData3, setRandomData3] = useState([]);
  // weekly 시옷's pick : 랜덤 7개 가져와서 순서대로 4개, 3개 할당 ( + 이번주로 date 한정?)
  useEffect(() => {
    return async () => {
      const {data} = await axios.post(
        "http://localhost:8080/randomData",
        null,
        null
      );
      console.log(data);
      const slice3 = data.slice(0, 3);
      console.log(slice3);
      setRandomData3(slice3);
      const slice4 = data.slice(3, 7);
      console.log(slice4);
      setRandomData4(slice4);
    };
  }, []);

  const [interestedIndex, setInterestedIndex] = useState([]);
  // 좋아요 리스트
  useEffect(() => {
    if (userInfo !== null) {
      return async () => {
        const {data} = await axios.post(
          "http://localhost:8080/selectLikeData",
          null,
          {
            params: {
              userId: userInfo?.userId,
            },
          }
        );
        console.log("좋아요 리스트");
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          console.log("데이터확인");
          console.log(data[i].productNum);
          interestedIndex.push(data[i].productNum);
        }
      };
    }
  }, []);


  // GJY 끝
  return (
    <div>
      <div className={"container"}>
        <h2 hidden={true}> 캐러셀</h2>
        <StyledSlider {...settings}>
          {mainImg.map((item) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url}/>
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
        <div className={"container text-center mt-5"}>
          <h1>Weekly 시옷's Pick</h1>
        </div>
        {/* 사이에 다른것 하나 넣기?*/}

        <div id={"section27"}>
          <div className={"pickWrap"}>
            <div className={"pickContainerWrap"}>
              <div className={"pickContainer"}>
                <div className={"pickList"}>
                  <div className={"fl B-Img"}>
                    <Link className={"ImgBox"}>
                      <div className={"boxBlink"}></div>
                      <div className={"pick-title-text"}>
                        <h2>OVERCOAT</h2>
                        <p>쌀쌀한 날씨에는 포근한 #외투</p>
                      </div>
                      <img
                        src={"./Img/Bjh/han_out.jpg"}
                        style={{height: "auto"}}
                      />
                    </Link>
                  </div>
                  {/* 첫번째줄 : 상품 4개 나오게*/}
                  <ul className={"C-Img"}>
                    {randomData4.map((item, index) => {
                      return (
                        <li className={"item"}>
                          <div className={"itemBox"}>
                            <div className={"box"}>
                              <div className={"prvImg row"}>
                                <Link>
                                  <div
                                    className={"pick-title-textGG"}
                                    style={{
                                      height: 73,
                                      marginTop: -38,
                                      paddingRight: 20,
                                      position: "absolute",
                                      textAlign: "end",
                                      top: "18%",
                                      width: "90%",
                                    }}
                                  >
                                    <img
                                      id={"zzimImg4" + item.productNum}
                                      src={
                                        userInfo == null || userInfo === ""
                                          ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                          : interestedIndex.indexOf(
                                            item.productNum
                                          ) < 0
                                            ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                            : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                      }
                                      alt="이미지 없음"
                                      style={{height: 30, width: 30}}
                                      onClick={userInfo == null ? null : async () => {
                                        if (
                                          $("#zzimImg4" + item?.productNum).prop("src") ===
                                          "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                        ) {
                                          await productInterestedFunc(item.productNum);
                                          $("#zzimImg4" + item?.productNum).prop("src",
                                            "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                          );
                                        } else {
                                          await deleteProductLikeItem(item.productNum, $("#zzimImg4") + item?.productNum)
                                          // $("#zzimImg4" + item?.productNum).prop("src", "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                          // );
                                        }
                                      }}
                                    />
                                  </div>
                                  {/* 사진 크기가 안맞아서 억지로*/}
                                  <img
                                    style={{height: 267, width: 200}}
                                    className={"thumb"}
                                    src={item.productImg}
                                  />
                                </Link>
                                {/* value?*/}
                                <Link
                                  className={"th-title text-start fs-6 mt-1"}
                                  style={{textDecoration: "none"}}
                                >
                                  <font color={"#FF6666"}>
                                    <b>pick! </b>
                                  </font>
                                  <span className={"text-start"}>
                                    {item.productName}
                                  </span>
                                </Link>
                              </div>
                              {/* value?*/}
                              <div className={"th-listInfo"}>
                                <ul>
                                  <li className={"cash mt-2"}>
                                    <span className={"fs-5"}>
                                      KRW {item.productPrice}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}

                    {/* 두번째줄 : 상품 3개 나오게*/}
                    {randomData3.map((item) => {
                      return (
                        <li className={"item"}>
                          <div className={"itemBox"}>
                            <div className={"box"}>
                              <div className={"prvImg"}>
                                <Link>
                                  <div
                                    className={"pick-title-textGG"}
                                    style={{
                                      height: 73,
                                      marginTop: -38,
                                      paddingRight: 20,
                                      position: "absolute",
                                      textAlign: "end",
                                      top: "18%",
                                      width: "90%",
                                    }}
                                  >
                                    <img
                                      id={"zzimImg3" + item.productNum}
                                      src={
                                        userInfo == null || userInfo === ""
                                          ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                          : interestedIndex.indexOf(
                                            item.productNum
                                          ) < 0
                                            ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                            : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                      }
                                      alt="이미지 없음"
                                      style={{height: 30, width: 30}}
                                      onClick={userInfo == null ? null : async () => {
                                        if (
                                          $("#zzimImg3" + item?.productNum).prop("src") ===
                                          "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                        ) {
                                          await productInterestedFunc(item.productNum);
                                          $("#zzimImg3" + item?.productNum).prop("src",
                                            "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                          );
                                        } else {
                                          await deleteProductLikeItem(item.productNum, $("#zzimImg3") + item?.productNum);
                                        }

                                      }}
                                    />
                                  </div>
                                  {/* 사진 크기가 안맞아서 억지로*/}
                                  <img
                                    style={{height: 267, width: 260}}
                                    className={"thumb"}
                                    src={item.productImg}
                                  />
                                </Link>
                              </div>
                              {/* value?*/}
                              <div className={"th-name"}>
                                <Link className={"th-title text-start fs-5"}>
                                  <font color={"#007cd8"}>
                                    <b>pick! </b>
                                  </font>
                                  <span className={"text-start"}>
                                    {item.productName}
                                  </span>
                                </Link>
                              </div>
                              {/* value?*/}
                              <div className={"th-listInfo"}>
                                <ul>
                                  <li className={"cash"}>
                                    <span className={"fs-5"}>
                                      KRW {item.productPrice}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={"NewArrival"}>
                <div
                  style={{
                    marginTop: 250,
                    margin: 0,
                  }}
                  className={"NewProduct"}
                >
                  <div className={"NewProTitle"}>
                    <h1>New Arrivals</h1>
                    <h2>이번달의 신상품</h2>
                  </div>

                  <ul className={"prdList grid4"}>
                    {thisMonthData.map((item) => {
                      return (
                        <li className={"PrdBox"}>
                          <div className={"thumbnail"}>
                            <Link>
                              <div
                                className={"pick-title-textGG"}
                                style={{
                                  height: 73,
                                  marginTop: -38,
                                  paddingRight: 20,
                                  position: "absolute",
                                  textAlign: "end",
                                  top: "15%",
                                  width: "95%",
                                }}
                              >
                                <img
                                  id={"zzimImgNew" + item.productNum}
                                  src={
                                    userInfo == null || userInfo === ""
                                      ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                      : interestedIndex.indexOf(
                                        item.productNum
                                      ) < 0
                                        ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                        : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                  }
                                  alt="이미지 없음"
                                  style={{height: 30, width: 30}}
                                  onClick={userInfo == null ? null : async () => {
                                    if (
                                      $("#zzimImgNew" + item?.productNum).prop("src") ===
                                      "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%ED%95%98%ED%8A%B8.png?alt=media&token=292bcb42-8d8e-4f7e-adfb-0d552e1c43d1"
                                    ) {
                                      $("#zzimImgNew" + item?.productNum).prop("src",
                                        "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/lee%2F%EB%B9%A8%EA%B0%84%ED%95%98%ED%8A%B8.png?alt=media&token=45bead7a-ee77-4f63-b39b-92731dc91d19"
                                      );
                                      await productInterestedFunc(item.productNum);

                                    } else {
                                      await deleteProductLikeItem(item.productNum, $("#zzimImgNew") + item?.productNum);
                                    }

                                  }}
                                />
                              </div>
                              <img
                                className={"thumbImg"}
                                src={item.productImg}
                              />
                            </Link>
                          </div>
                          <div className={"description"}>
                            <ul>
                              <li className={"named"}>
                                <Link className={"nameLink"}>
                                  <span>{item.productName}</span>
                                </Link>
                              </li>
                              <li className={"price"}>
                                KRW {item.productPrice}
                              </li>
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={"moreBtn"}>
                  <Link to={'/productList'} className={"btnMore"}>
                    <span>상품 더 보러 가기</span>
                    {/* 화살표는 걍 냅두자...*/}
                    <span className={"arrow_lb"}>
                      <img
                        style={{
                          border: "none",
                          verticalAlign: "top",
                        }}
                        src={"../Img/Bjh/arrow.svg"}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*    BJH*/}
        </div>
        <div className="scroll__container">
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
