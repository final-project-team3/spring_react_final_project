import React from "react";
import $ from "jquery";
import {Link} from "react-router-dom";
import '../BJH/Main.css';

const Main = () => {
    return (
        <div>
            <div className={'container'}>
                <div id="mainCarousel" className="d-flex justify-content-center carousel slide"
                     data-bs-ride="carousel">
                    <div style={{
                        width: 500,
                    }} className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="Img/up.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/down.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/up.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/down.png"/>
                        </div>
                    </div>
                    <button style={{
                        color: "black"
                    }} className="carousel-control-prev" type="button" data-bs-target="#mainCarousel"
                            data-bs-slide="prev">
                        <button className={'carousel-control-prev'}><img src={'Img/prev.png'}/></button>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel"
                            data-bs-slide="next">
                        <button className={'carousel-control-next'}><img src={'Img/next.png'}/></button>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/*BJH 시작*/}
                <div id={"section27"}>
                    <div className={"s-pick"}>
                        <h2>시옷 Pick</h2>
                    </div>
                    <div className={"pickWrap"}>
                        <ul className={"pickTab"}>
                            <li className={"pickTabList"}>
                                <span>#외투</span>
                            </li>
                            <li className={"pickTabList"}>
                                <span>#상의</span>
                            </li>
                            <li className={"pickTabList"}>
                                <span>#하의</span>
                            </li>
                        </ul>
                        <div className={"pickContainerWrap"}>
                            <div className={"pickContainer"}>
                                <div className={"pickList"}>
                                    <div className={"fl B-Img"}>
                                        <Link className={"ImgBox"}>
                                            <div className={"boxBlink"}></div>
                                            <div className={"pick-title-text"}>
                                                <h2>HOOD</h2>
                                                <p>쌀쌀한 날씨에는 포근한 #후드</p>
                                            </div>
                                            <img src={"./Img/Bjh/hoo.jpg"}/>
                                        </Link>
                                    </div>
                                    <ul className={"C-Img"}>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className={"best-product"}>*/}
                {/*    <div className={"bp-head"}>*/}
                {/*        <strong className={"bph-title"}>베스트 상품</strong>*/}
                {/*    </div>*/}
                {/*    <div className={"bp-list"}>*/}
                {/*        <div className={"grid-item"}>*/}
                {/*            <ul className={"gi-list"}>*/}
                {/*                <li className={"gil-item"}>*/}
                {/*                    <div className={"item-unit"}>*/}
                {/*                        <div className={"item-goods"}>*/}
                {/*                            <div className={"item-thumb"}>*/}
                {/*                                <Link to={""} className={"item-thumb-link"}>*/}
                {/*                                    <div className={"item-thumb-imgbx"}>*/}
                {/*                                        <img src={'./Img/test.png'} className={"item-thumb-img"}/>*/}
                {/*                                    </div>*/}
                {/*                                    <div className={"item-detailbx"}>*/}
                {/*                                        <div className={"item-detail-tx"}>*/}
                {/*                                            <Link to={""} className={"item-detail-tx-link"}>*/}

                {/*                                            </Link>*/}
                {/*                                        </div>*/}
                {/*                                    </div>*/}
                {/*                                </Link>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Main;