import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import "../BJH/Main.css";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

{
  /*BJH 시작*/
}
// BJH 캐러셀
const StyledSlider = styled(Slider)` // 화살표 색상 변경해야함
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

const mainImg = [{ url: mainImg1 }, { url: mainImg2 }, { url: mainImg3 }];

const Main = () => {
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

    console.log(window.scrollY);
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
      const { data } = await axios.post(
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
      const { data } = await axios.post(
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
                  <Image src={item.url} />
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
                      <img src={"./Img/Bjh/han_out.jpg"} />
                    </Link>
                  </div>
                  {/* 첫번째줄 : 상품 4개 나오게*/}
                  <ul className={"C-Img"}>
                    {randomData4.map((item) => {
                      return (
                        <li className={"item"}>
                          <div className={"itemBox"}>
                            <div className={"box"}>
                              <div className={"prvImg"}>
                                <Link>
                                  <img
                                    className={"thumb"}
                                    src={item.productImg}
                                    style={{width:100}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className={"th-name"}>
                              <Link className={"th-title text-start"}>
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
                                <li className={"cash"}>
                                    <span className={"fs-10"}>
                                      KRW {item.productPrice}
                                    </span>
                                </li>
                              </ul>
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
                                  {/* 사진 크기가 안맞아서 억지로*/}
                                  <img
                                    style={{ height: 267 }}
                                    className={"thumb"}
                                    src={item.productImg}
                                  />
                                </Link>
                              </div>
                              {/* value?*/}
                              <div className={"th-name"}>
                                <Link className={"th-title text-start"}>
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
                  <Link className={"btnMore"}>
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
