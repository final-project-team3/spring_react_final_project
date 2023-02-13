import React from "react";
import './MyPage.css';
import {Link} from "react-router-dom";

function SellerMyPage(props) {
    return (
        <div className={"container"}>
            <div className="wrap">
                <div className="skyContainer">
                    <div style={{
                        width: 1500
                    }}>
                        <div style={{
                            textAlign: "center"
                        }} className="grade">마이페이지
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="name">사업자 페이지
                        </div>
                    </div>
                </div>
                <div className="summaryContainer text-center">
                    <div className="item">
                        <div className="number">102</div>
                        <div>총 주문받은 상품</div>
                    </div>
                    <div className="item">
                        <div className="number">80</div>
                        <div>결제 완료된 상품</div>
                    </div>
                    <div className="item">
                        <div className="number">75</div>
                        <div>배송 완료된 상품</div>
                    </div>
                </div>
                <div className="shippingStatusContainer">
                    <div className="title">
                        주문/배송조회
                    </div>
                    <div className="status d-flex justify-content-around">
                        <div className="item">
                            <div>
                                <a style={{
                                    textDecoration: "none"
                                }} href={"#"}>
                                    <div className="green number">6</div>
                                </a>
                                <div className="text">현재 주문받은 상품</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <div className="number">0</div>
                                <div className="text">결제 완료된 상품</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <div className="green number">1</div>
                                <div className="text">배송중인 상품</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <div className="green number">3</div>
                                <div className="text">구매확정된 상품</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={"row"}>
                    <div className="border-end border-opacity-10 listContainer col-6">
                        {/*<a href="#" className="item">*/}
                        {/*    <div className="ps-5 icon"><img style={{*/}
                        {/*        width: 24,*/}
                        {/*        height: 24*/}
                        {/*    }} src={"./Img/Bjh/delivery.png"}/>*/}
                        {/*    </div>*/}
                        {/*    /!*<div className="text">발송한 상품 내역(삭제예정)</div>*!/*/}
                        {/*    <div className="pe-5 right"><img style={{*/}
                        {/*        width: 24,*/}
                        {/*        height: 24*/}
                        {/*    }} src={"./Img/Bjh/right.png"}/></div>*/}
                        {/*</a>*/}
                        <a href="/productR2" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/order.png"}/>
                            </div>
                            <div className="text">상품 등록/관리</div>
                            {/* <span className="circle"></span> 붉은 점 */}
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/payment.png"}/>
                            </div>
                            <div className="text">판매된 상품 내역</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <Link to="/qnaAnswerWrite" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/contact.png"}/>
                            </div>
                            <div className="text">고객 문의 내역</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </Link>
                    </div>
                    <div className="listContainer col-6">
                        <a href="/likeUserList" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/wish.png"}/>
                            </div>
                            <div className="text">찜한 고객 목록</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        {/*<a href="/orderUserList" className="item">*/}
                        {/*    <div className="ps-5 icon"><img style={{*/}
                        {/*        width: 24,*/}
                        {/*        height: 24*/}
                        {/*    }} src={"./Img/Bjh/wallet.png"}/>*/}
                        {/*    </div>*/}
                        {/*    <div className="text">*/}
                        {/*        <span>주문한 고객 목록(삭제 예정)</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="pe-5 right"><img style={{*/}
                        {/*        width: 24,*/}
                        {/*        height: 24*/}
                        {/*    }} src={"./Img/Bjh/right.png"}/>*/}
                        {/*    </div>*/}
                        {/*</a>*/}
                        <a href="/payUserList" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/coupon.png"}/>
                            </div>
                            <div className="text">결제한 고객 목록</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/user.png"}/>
                            </div>
                            <div className="text">사업자 정보 수정</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                    </div>
                </div>
                <div className="infoContainer">
                    <a href="#" className="item">
                        <div><img style={{
                            width: 48,
                            height: 48
                        }} src={"./Img/Bjh/notice.png"}/>
                        </div>
                        <div>공지사항</div>
                    </a>
                    <a href="#" className="item">
                        <div><img style={{
                            width: 48,
                            height: 48
                        }} src={"./Img/Bjh/bell.png"}/>
                        </div>
                        <div>이용안내</div>
                    </a>
                    <Link to={"/"} className="item">
                        <div><img style={{
                            width: 48,
                            height: 48
                        }} src={"./Img/Bjh/logout.png"}/>
                        </div>
                        <div>로그아웃</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SellerMyPage;