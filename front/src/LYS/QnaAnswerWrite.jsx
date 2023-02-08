import React, {useEffect, useState} from 'react';
import axios from "axios";
import './ProductQna.css'
import {Link} from "react-router-dom";
import styled from "styled-components";
import $ from "jquery";

function QnaAnswerWrite(props) {
    const [productInfo, setProductInfo] = useState([]);
    const [qnaInfo, setQnaInfo] = useState([]);
    const [cleanList, setCleanList] = useState([]);
    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);

    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getReadyToAnswer", {
                params: {
                    sellerId: sellerInfo.sellerId,
                }
            })
            setProductInfo(data.productInfoList);
            setQnaInfo(data.qnaDtoList);
            // console.log(data);
            const copyList = data.qnaDtoList;
            for (let i = 0; i < data.qnaDtoList.length; i++) {
                let productNum = data.qnaDtoList[i].productNum;
                for (let j = 0; j < data.productInfoList.length; j++) {
                    // console.log('sad');
                    if (productNum == data.productInfoList[j].productNum) {
                        copyList[i]["productName"] = data.productInfoList[j].productName;
                        copyList[i]["productImg"] = data.productInfoList[j].productImg;
                        break;
                    }
                }
            }
            setCleanList(copyList);
            console.log(copyList);

        }
    }, [])

    // function whatState(){
    //     var state = $('#qnaState').val();
    //     console.log(state);
    //     if (state == "답변완료"){
    //         console.log(state);
    //         $('.qnaState').attr("disabled", "true");
    //     }
    // }

    return (
        <div className={"container"}>
            <div className="wrap">
                <div className="skyContainer">
                    <div style={{
                        width: 1500
                    }}>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center grade">마이페이지 (판매자용)
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center name">문의 답변 페이지
                        </div>
                    </div>
                </div>
            </div>

            <form>
                <div className={'mt-5'}>
                    <div>
                        {cleanList.map((item, index) => {
                            return (
                                <ul>
                                    <li className="product-qna tab-contents__content">
                                        <div id="prod-inquiry-list" className="prod-tab">

                                            <div className="prod-inquiry-notice__container"></div>

                                            <div className="prod-inquiry-list__container">

                                                <div className="prod-inquiry-items">
                                                    <div className="prod-inquiry-item row">
                                                        <div className="prod-inquiry-item__wrap col-6">
                                                            <strong className="prod-inquiry-item__author"></strong>
                                                            <div
                                                                className="prod-inquiry-item__selected-option">{`${item.productName}`}</div>
                                                            <div
                                                                className="prod-inquiry-item__userId">{`${item.userId}`}</div>
                                                            <div
                                                                className="prod-inquiry-item__content">{`${item.qnaContent}`}</div>
                                                            <div
                                                                className="prod-inquiry-item__time">{`${item.qnaRegistrationDate}`}</div>
                                                        </div>
                                                        <div className={"col-6"}>
                                                            <Link to={`/answerWritePage`} state={{qnaInfo: item}}
                                                                  style={{
                                                                      display: "flex",
                                                                      flexDirection: "row-reverse"
                                                                  }}>
                                                                <button id={"qnaState"} name={"qnaState"} hidden={false}
                                                                        className={"btn btn-primary"}>{item.qnaState}
                                                                </button>
                                                                <button id={"qnaState2"} name={"qnaState2"} hidden={true}
                                                                        className={"btn btn-primary"}>{item.qnaState}
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </form>
        </div>
    );
}


export default QnaAnswerWrite;