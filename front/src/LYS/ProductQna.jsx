import React, {useEffect, useState} from "react";
import './ProductQna.css';

function ProductQna(props) {
    return (
        <li className="product-qna tab-contents__content">
            <div id="prod-inquiry-list" className="prod-tab">

                <div className="prod-inquiry-notice__container"></div>

                <div className="prod-inquiry-list__container">

                    <div className="prod-inquiry-items">

                        <div className="prod-inquiry-item">
                            <em className="prod-inquiry-item__label">질문</em>
                            <div className="prod-inquiry-item__wrap">
                                <strong className="prod-inquiry-item__author"></strong>
                                <div className="prod-inquiry-item__selected-option">그래파이트 | 코어i5 11세대 | 256GB | 16GB
                                    | WIN11 Home | 8PT-00030&nbsp;&nbsp;주식회사 스터프
                                </div>
                                <div className="prod-inquiry-item__content">{props.qnaContent}
                                </div>
                                <div className="prod-inquiry-item__time">{props.qnaRegistrationDate}</div>
                            </div>

                            <div className="prod-inquiry-item__reply">
                                <i className="prod_inquiry-item__reply__icon"></i>
                                {/*<em className="prod-inquiry-item__reply__label">답변</em>*/}
                                <div className="prod-inquiry-item__reply__wrap">
                                    <div className={"row"} style={{margin:0, padding:0}}>
                                        <strong className="prod-inquiry-item__reply__author col-6">주식회사 스터프</strong>
                                        <p className={"col-6"} style={{alignItems: "end", width: 70}}>답변완료</p>
                                    </div>
                                    <div className="prod-inquiry-item__reply__content">{props.qnaAnswer}</div>
                                    <div
                                        className="prod-inquiry-item__reply__time">{props.qnaAnswerRegistrationDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductQna;