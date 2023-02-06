import React from "react";

function ProductQna() {
    return (
        <li className="product-qna tab-contents__content">
            <div id="prod-inquiry-list" className="prod-tab">
                <div className="prod-inquiry-list">
                    <div className="clearFix">
                        <h4 className="prod-inquiry-list__title">상품문의</h4>

                        <a className="prod-inquiry-list__write-btn">문의하기</a>
                    </div>

                    <div className="prod-inquiry-list__emphasis">
                        <ul>
                            <li>구매한 상품의 <em>취소/반품은 마이쿠팡 구매내역에서 신청</em> 가능합니다.</li>
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
                                    <div className="prod-inquiry-item__content">서피스 프로8을 삼성 모니터 s43am702에 연결시 서피스에서는
                                        잡히는데 모니터 연결은 안되네요 불량인가요? 이전 노트북 사용시에는 모니터가 잘 나왔거든요...
                                    </div>
                                    <div className="prod-inquiry-item__time">2023/01/31 15:37:05</div>
                                </div>

                                <div className="prod-inquiry-item__reply">
                                    <i className="prod_inquiry-item__reply__icon"></i>
                                    <em className="prod-inquiry-item__reply__label">답변</em>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <strong className="prod-inquiry-item__reply__author">주식회사 스터프</strong>
                                        <div className="prod-inquiry-item__reply__content">쿠팡 측으로 문의 바랍니다</div>
                                        <div className="prod-inquiry-item__reply__time">2023/02/01 11:31:17</div>
                                    </div>
                                </div>
                            </div>


                            <div className="prod-inquiry-item">
                                <em className="prod-inquiry-item__label">질문</em>
                                <div className="prod-inquiry-item__wrap">
                                    <strong className="prod-inquiry-item__author">wns***@na</strong>
                                    <div className="prod-inquiry-item__selected-option">그래파이트 | 코어i7 | 512GB | 16GB |
                                        WIN11 Home | 8PX-00030&nbsp;&nbsp;쿠팡
                                    </div>
                                    <div className="prod-inquiry-item__content">220만원에 25프로 할인돼있는 상품 이름에는 타입커버 펜 포함
                                        되어있는데 다 포함 해서 150만원대 맞는거죠??
                                    </div>

                                    <div className="prod-inquiry-item__time">2023/01/20 08:12:37</div>
                                </div>

                                <div className="prod-inquiry-item__reply">
                                    <i className="prod_inquiry-item__reply__icon"></i>
                                    <em className="prod-inquiry-item__reply__label">답변</em>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <strong className="prod-inquiry-item__reply__author">[COUPANG]</strong>
                                        <div className="prod-inquiry-item__reply__content">마이크로소프트 2022 서피스 프로 8 13 + 블랙
                                            타입커버 + 슬림펜2, 그래파이트, 코어i7, 512GB, 16GB, WIN11 Home, 8PX-00030 상품은 블랙 타입 커버와
                                            슬림펜2가 포함되어 있는 점 제품명에서 안내드리고 있으니 참고하여 이용 부탁드립니다.
                                        </div>
                                        <div className="prod-inquiry-item__reply__time">2023/01/20 09:38:15</div>
                                    </div>
                                </div>
                            </div>


                            <div className="prod-inquiry-item">
                                <em className="prod-inquiry-item__label">질문</em>
                                <div className="prod-inquiry-item__wrap">
                                    <strong className="prod-inquiry-item__author">eji***@ha</strong>
                                    <div className="prod-inquiry-item__selected-option">그래파이트 | 코어i7 | 512GB | 16GB |
                                        WIN11 Home | 8PX-00030&nbsp;&nbsp;쿠팡
                                    </div>
                                    <div className="prod-inquiry-item__content">이 제품의 경우 코어 i7 몇세대인가요? 기재가 안되어 있어서요~~
                                    </div>
                                    <div className="prod-inquiry-item__time">2023/01/20 01:08:22</div>
                                </div>

                                <div className="prod-inquiry-item__reply">
                                    <i className="prod_inquiry-item__reply__icon"></i>
                                    <em className="prod-inquiry-item__reply__label">답변</em>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <strong className="prod-inquiry-item__reply__author">[COUPANG]</strong>
                                        <div className="prod-inquiry-item__reply__content">정정 안내 드립니다. 마이크로소프트 2022 서피스
                                            프로 8 13 + 블랙 타입커버 + 슬림펜2, 그래파이트, 코어i7, 512GB, 16GB, WIN11 Home, 8PX-00030
                                            상품은 코어 i7 11세대 제품인 점 참고 부탁드립니다.
                                        </div>
                                        <div className="prod-inquiry-item__reply__time">2023/01/25 09:26:03</div>
                                    </div>
                                </div>
                            </div>


                            <div className="prod-inquiry-item">
                                <em className="prod-inquiry-item__label">질문</em>
                                <div className="prod-inquiry-item__wrap">
                                    <strong className="prod-inquiry-item__author">cla***@na</strong>
                                    <div className="prod-inquiry-item__selected-option">그래파이트 | 코어i5 11세대 | 256GB | 16GB
                                        | WIN11 Home | 8PT-00030&nbsp;&nbsp;주식회사 스터프
                                    </div>
                                    <div className="prod-inquiry-item__content">교환신청했는데 품절이라고 뜨네요 불안해서 문의드립니다 정상적으로 교환
                                        받을 수 있겠죠?
                                    </div>

                                    <div className="prod-inquiry-item__time">2023/01/10 16:48:13</div>
                                </div>

                                <div className="prod-inquiry-item__reply">
                                    <i className="prod_inquiry-item__reply__icon"></i>
                                    <em className="prod-inquiry-item__reply__label">답변</em>
                                    <div className="prod-inquiry-item__reply__wrap">
                                        <strong className="prod-inquiry-item__reply__author">주식회사 스터프</strong>
                                        <div className="prod-inquiry-item__reply__content">쿠팡으로 문의<br/>
                                            바랍니다
                                        </div>
                                        <div className="prod-inquiry-item__reply__time">2023/01/10 23:56:22</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="prod-inquiry-list__expand">
                            <button className="prod-inquiry-list__expand__btn" type="button">
                                전체보기 <i className="icon-prod-inquiry-more"></i>
                            </button>
                        </div>
                    </div>

                    <div className="prod-report">
                        <p className="prod-report__text">판매 부적격 상품 또는 허위과장광고 및 지식재산권을 침해하는 상품의 경우 신고하여 주시기 바랍니다.</p>
                        <a href="javascript:;" className="prod-report__button" id="productReport" title="신고하기">신고하기</a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductQna;