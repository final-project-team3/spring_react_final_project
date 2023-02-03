import React, {Component} from "react";
import $ from "jquery";
import {Link} from "react-router-dom";
import '../BJH/Main.css';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

{/*BJH 시작*/}
// BJH 캐러셀
const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }   
    .slick-list {
       margin-left:auto;
       margin-right:auto;
       display:block;
       width: 1350px;
       height: 100%
    }    
    .slick-prev {
        left: 10px;
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

const imgUrl = require('../BJH/230203.jpg');
const imgUrl2 = require('../BJH/idol_han.jpg');
const imgUrl3 = require('../BJH/image.png');

const items = [
    {id: 1, url: imgUrl},
    {id: 2, url: imgUrl2},
    {id: 3, url: imgUrl3},
    // {id: 2, url: imgUrl2},

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
    return (
        <div>
            <div className={'container'}>
                <h2 hidden={true}> 캐러셀</h2>
                <StyledSlider {...settings}>
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <ImageContainer>
                                    <Image src={item.url}/>
                                </ImageContainer>
                            </div>
                        );
                    })}
                </StyledSlider>

                {/* 사이에 다른것 하나 넣기?*/}
                <div id={"section27"}>
                    <div className={"s-pick"}>
                        <h2>Weekly 시옷's Pick</h2>
                    </div>
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
                        </div>
                    </div>
                    {/*    BJH*/}
                </div>
            </div>
        </div>
    )
}

export default Main;