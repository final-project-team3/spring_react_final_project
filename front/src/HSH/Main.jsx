import React, {Component, useEffect, useState} from "react";
import $ from "jquery";
import {Link} from "react-router-dom";
import '../BJH/Main.css';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

{/*BJH 시작*/}
// BJH 캐러셀
const StyledSlider = styled(Slider)
    // 화살표 색상 변경해야함
    `.slick-slide div{
      outline: none;
    }   
    .slick-list {
       margin-left:auto;
       margin-right:auto;
       display:block;
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
width:100%;`;

const mainImg1 = require('../HSH/Img/main1.jpg');
const mainImg2 = require('../HSH/Img/main2.jpg');
const mainImg3 = require('../HSH/Img/main3.jpg');

const mainImg = [
    {url: mainImg1},
    {url: mainImg2},
    {url: mainImg3},
];

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
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])
    // top 버튼 코드 끝

    return (
        <div>
            <div className={'container'}>
                <h2 hidden={true}> 캐러셀</h2>
                <StyledSlider {...settings}>
                    {mainImg.map(item => {
                        return (
                            <div key={item.id}>
                                <ImageContainer>
                                    <Image src={item.url}/>
                                </ImageContainer>
                            </div>
                        );
                    })}
                </StyledSlider>
                <br/>
                <br/>
                <div className={"ad-card-wrap"}>
                    <div className={"ad-card1"}>
                        <div className={"ad-card-color"}>
                            <h2 className={"hiddenText"}>광고</h2>
                            <div className={"f-card"}>
                                <div className={"card-thumb"}>
                                    <img src={"./Img/Bjh/han_out.jpg"}/>
                                </div>
                                <div className={"card-info"}>
                                    {/* 광고이미지*/}
                                    <div className={"card-name"}>
                                        <strong style={{
                                            color: "black",
                                        }}>광고입니다</strong>
                                    </div>
                                    <div className={"card-subname"}>
                                        <dl className={"subexplain"}>
                                            <dt>설명</dt>
                                            <dd>
                                                <span className={"explain"}>
                                                    광고설명
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"ad-card2"}>
                        <div className={"ad-card-color"}>
                            <h2 className={"hiddenText"}>광고</h2>
                            <div className={"f-card"}>
                                {/* 광고이미지*/}
                                <div className={"card-thumb"}>
                                    <img src={"./Img/Bjh/cchod.jpg"}/>
                                </div>
                                <div className={"card-info"}>
                                    <div className={"card-name"}>
                                        <strong style={{
                                            color: "black"
                                        }}>광고입니다</strong>
                                    </div>
                                    <div className={"card-subname"}>
                                        <dl className={"subexplain"}>
                                            <dt>설명</dt>
                                            <dd>
                                                <span className={"explain"}>
                                                    광고설명
                                                </span>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"s-pick"}>
                    <h2>Weekly 시옷's Pick</h2>
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
                                            <img src={"./Img/Bjh/han_out.jpg"}/>
                                        </Link>
                                    </div>
                                    <ul className={"C-Img"}>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/m_han.jpg"}/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/m_han.jpg"}/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/m_han.jpg"}/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/m_han.jpg"}/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* 두번째줄*/}
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            {/* 사진 크기가 안맞아서 억지로*/}
                                                            <img style={{height: 267}} className={"thumb"}
                                                                 src={"./Img/Bjh/w_han.jpg"}/>
                                                        </Link>
                                                    </div>
                                                    {/* value?*/}
                                                    <div className={"th-name"}>
                                                        <Link className={"th-title"}>
                                                            <font color={"#007cd8"}>
                                                                <b></b>
                                                            </font>
                                                            대충 옷 이름
                                                        </Link>
                                                    </div>
                                                    {/* value?*/}
                                                    <div className={"th-listInfo"}>
                                                        <ul>
                                                            <li className={"cash"}>
                                                                {/* 할인율*/}
                                                                <span className={"sale"}>11% </span>
                                                                {/* 할인가격*/}
                                                                <span className={"price02"}>12,345원 </span>
                                                                {/* 원래가격*/}
                                                                <span className={"price01"}>67,899원 </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/w_bok.jpg"}/>
                                                        </Link>
                                                    </div>
                                                    <div className={"th-name"}>
                                                        <Link className={"th-title"}>
                                                            <font color={"#007cd8"}>
                                                                <b></b>
                                                            </font>
                                                            대충 옷 이름
                                                        </Link>
                                                    </div>
                                                    {/* value?*/}
                                                    <div className={"th-listInfo"}>
                                                        <ul>
                                                            <li className={"cash"}>
                                                                {/* 할인율*/}
                                                                <span className={"sale"}>11% </span>
                                                                {/* 할인가격*/}
                                                                <span className={"price02"}>12,345원 </span>
                                                                {/* 원래가격*/}
                                                                <span className={"price01"}>67,899원 </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={"item"}>
                                            <div className={"itemBox"}>
                                                <div className={"box"}>
                                                    <div className={"prvImg"}>
                                                        <Link>
                                                            <img className={"thumb"} src={"./Img/Bjh/m_dhan.jpg"}/>
                                                        </Link>
                                                    </div>
                                                    <div className={"th-name"}>
                                                        <Link className={"th-title"}>
                                                            <font color={"#007cd8"}>
                                                                <b></b>
                                                            </font>
                                                            대충 옷 이름
                                                        </Link>
                                                    </div>
                                                    {/* value?*/}
                                                    <div className={"th-listInfo"}>
                                                        <ul>
                                                            <li className={"cash"}>
                                                                {/* 할인율*/}
                                                                <span className={"sale"}>11% </span>
                                                                {/* 할인가격*/}
                                                                <span className={"price02"}>12,345원 </span>
                                                                {/* 원래가격*/}
                                                                <span className={"price01"}>67,899원 </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"NewArrival"}>
                                <div style={{
                                    marginTop: 250,
                                    margin: 0
                                }} className={"NewProduct"}>
                                    <div className={"NewProTitle"}>
                                        <h1>New Arrivals</h1>
                                        <h2>이번달의 신상품</h2>
                                    </div>
                                    <ul className={"prdList grid4"}>
                                        <li className={"PrdBox"}>
                                            <div className={"thumbnail"}>
                                                <Link><img className={"thumbImg"} src={"../Img/logo.png"}/></Link>
                                            </div>
                                            <div className={"description"}>
                                                <ul>
                                                    <li className={"named"}>
                                                        <Link className={"nameLink"}>
                                                            <span>잘 나오는지 테스트</span>
                                                        </Link>
                                                    </li>
                                                    <li className={"price"}>KRW 12,345</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={"PrdBox"}>
                                            <div className={"thumbnail"}>
                                                <Link><img className={"thumbImg"} src={"../Img/logo.png"}/></Link>
                                            </div>
                                            <div className={"description"}>
                                                <ul>
                                                    <li className={"named"}>
                                                        <Link className={"nameLink"}>
                                                            <span> 잘 나오는지 테스트</span>
                                                        </Link>
                                                    </li>
                                                    <li className={"price"}>KRW 12,345</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={"PrdBox"}>
                                            <div className={"thumbnail"}>
                                                <Link><img className={"thumbImg"} src={"../Img/logo.png"}/></Link>
                                            </div>
                                            <div className={"description"}>
                                                <ul>
                                                    <li className={"named"}>
                                                        <Link className={"nameLink"}>
                                                            <span> 잘 나오는지 테스트</span>
                                                        </Link>
                                                    </li>
                                                    <li className={"price"}>KRW 12,345</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={"PrdBox"}>
                                            <div className={"thumbnail"}>
                                                <Link><img className={"thumbImg"} src={"../Img/logo.png"}/></Link>
                                            </div>
                                            <div className={"description"}>
                                                <ul>
                                                    <li className={"named"}>
                                                        <Link className={"nameLink"}>
                                                            <span> 잘 나오는지 테스트</span>
                                                        </Link>
                                                    </li>
                                                    <li className={"price"}>KRW 12,345</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"moreBtn"}>
                                    <Link className={"btnMore"}>
                                        <span>상품 더 보러 가기</span>
                                        {/* 이미지 색이 안바뀜 왜지...*/}
                                        <span className={"arrow_lb"}>
                                            <img style={{
                                                border: "none",
                                                verticalAlign: "top"
                                            }} src={"../Img/Bjh/arrow.svg"}/>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*    BJH*/}
                </div>
                <div className="scroll__container">
                    <button id="top" onClick={scrollToTop} type="button" > Top</button>
                </div>
            </div>
        </div>
    )
}

export default Main;