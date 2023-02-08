import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import './ProductQna.css'

function QnaAnswerWrite(props) {
    const [productInfo, setProductInfo] = useState([]);
    const [qnaInfo, setQnaInfo] = useState([]);
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
            // console.log(data.productInfoList);
            // console.log(data.qnaDtoList);
        }
    }, [])

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

            <li className="product-qna tab-contents__content">
                <div id="prod-inquiry-list" className="prod-tab">
                    <div className="prod-inquiry-notice__container"></div>
                    <div className="prod-inquiry-list__container">
                        <div className="prod-inquiry-items">
                            <div className="prod-inquiry-item">
                                <div className="prod-inquiry-item__wrap">
                                    <strong className="prod-inquiry-item__author"></strong>
                                    <div
                                        className="prod-inquiry-item__selected-option">{`${qnaInfo?.productNum}`}
                                        &nbsp;&nbsp;{`${productInfo?.productSellerBusinessName}`}
                                    </div>
                                    <div className="prod-inquiry-item__userId">{props.userId}</div>
                                    <div className="prod-inquiry-item__content">{props.qnaContent}
                                    </div>
                                    <div className="prod-inquiry-item__time">{props.qnaRegistrationDate}</div>
                                </div>

                                <div className="prod-inquiry-item__reply">
                                    <i className="prod_inquiry-item__reply__icon"></i>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <div className={"row"}>
                                            <textarea name={'qnaContent'} id={'qnaContent'} style={{fontSize: 15}}
                                                      className="my-review__modify__review__content__text-area"
                                                      placeholder="위 문의에 대한 답변을 작성해주세요. (10자 이상)"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>

    );
}

export default QnaAnswerWrite;