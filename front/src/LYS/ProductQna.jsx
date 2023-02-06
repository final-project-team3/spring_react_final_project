import React, {useEffect, useState} from "react";
import './ProductQna.css';

function ProductQna(props) {
    return (
        <li className="product-qna tab-contents__content">
            <div id="prod-inquiry-list" className="prod-tab">
                <div className="prod-inquiry-list">
                    <div className="clearFix">
                        <a className="prod-inquiry-list__write-btn" type={"button"}>문의하기</a>
                    </div>

                    <div className="prod-inquiry-list__emphasis">
                        <ul>
                            <li>구매한 상품의 <em>취소/반품은 마이페이지 구매내역에서 신청</em> 가능합니다.</li>
                            <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
                            <li><em>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</em>를 이용해주세요.</li>
                            <li><em>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
                                있습니다.</em></li>
                            <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
                        </ul>
                    </div>

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
                                    <em className="prod-inquiry-item__reply__label">답변</em>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <strong className="prod-inquiry-item__reply__author">주식회사 스터프</strong>
                                        <div className="prod-inquiry-item__reply__content">{props.qnaAnswer}</div>
                                        <div className="prod-inquiry-item__reply__time">{props.qnaAnswerRegistrationDate}</div>
                                    </div>
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