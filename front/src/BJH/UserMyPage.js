import React from "react";
import './MyPage.css';
import {Link} from "react-router-dom";

function UserMyPage(props) {
    return (
        <div className={"container"}>
            <div className="wrap">
                <div className="skyContainer">
                    <div style={{
                        width: 1500
                    }}>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center grade">마이페이지
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center name">유저 페이지
                        </div>
                    </div>
                </div>
                <div className="summaryContainer text-center">
                    <div className="item">
                        <div className="number">102</div>
                        <div>결제 내역</div>
                    </div>
                    <div className="item">
                        <div className="number">80</div>
                        <div>작성한 리뷰</div>
                    </div>
                    <div className="item">
                        <div className="number">1027</div>
                        <div>포인트</div>
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
                                <div className="text">장바구니</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <a style={{
                                    textDecoration: "none"
                                }} href={"#"}>
                                    <div className="number">0</div>
                                </a>
                                <div className="text">결제완료</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <div className="green number">1</div>
                                <div className="text">배송중</div>
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div className="item">
                            <div>
                                <div className="green number">3</div>
                                <div className="text">구매확정</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={'row'}>
                    <div className="border-end border-opacity-10 listContainer col-6">
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/jang.png"}/>
                            </div>
                            <div className="text">장바구니</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/order.png"}/>
                            </div>
                            <div className="text">주문 내역</div>
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
                            <div className="text">결제 내역</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/contact.png"}/>
                            </div>
                            <div className="text">상품 문의</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>


                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/wish.png"}/>
                            </div>
                            <div className="text">찜한 상품</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                    </div>
                    <div className="listContainer col-6">
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/wallet.png"}/>
                            </div>
                            <div className="text">
                                <span>내 지갑</span>
                                <span className="smallLight">
            <span>|</span>
            <span>보유 포인트</span>
          </span>
                            </div>
                            <div className="pe-5 right">
                                <span className="point">1027 포인트</span>
                            </div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/reviewWrite.png"}/>
                            </div>
                            <div className="text">리뷰 작성</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/review.png"}/>
                            </div>
                            <div className="text">작성한 리뷰</div>
                            <div className="pe-5 right"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/right.png"}/></div>
                        </a>
                        <a href="#" className="item">
                            <div className="ps-5 icon"><img style={{
                                width: 24,
                                height: 24
                            }} src={"./Img/Bjh/coupon.png"}/>
                            </div>
                            <div className="text">쿠폰 목록</div>
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
                            <div className="text">개인정보 수정</div>
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

export default UserMyPage;