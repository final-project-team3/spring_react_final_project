import React from "react";
import './MyPage.css';

function MasterPage(props) {
    return (
        <div className="wrap">
            <div className="skyContainer">
                <div style={{
                    width: 1500
                }}>
                    {/*<div className="grade">마이페이지</div>*/}
                    <div style={{
                        textAlign: "center"
                    }} className="name">관리자 페이지</div>
                </div>
            </div>
            {/*<div className="summaryContainer">*/}
            {/*    <div className="item">*/}
            {/*        <div className="number">102</div>*/}
            {/*        <div>결제 내역</div>*/}
            {/*    </div>*/}
            {/*    <div className="item">*/}
            {/*        <div className="number">80</div>*/}
            {/*        <div>작성한 리뷰</div>*/}
            {/*    </div>*/}
            {/*    <div className="item">*/}
            {/*        <div className="number">1027</div>*/}
            {/*        <div>포인트</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="shippingStatusContainer">*/}
            {/*    <div className="title">*/}
            {/*        주문/배송조회*/}
            {/*    </div>*/}
            {/*    <div className="status">*/}

            {/*        <div className="item">*/}
            {/*            <div>*/}
            {/*                <a style={{*/}
            {/*                    textDecoration: "none"*/}
            {/*                }} href={"#"}>*/}
            {/*                    <div className="green number">6</div>*/}
            {/*                </a>*/}
            {/*                <div className="text">장바구니</div>*/}
            {/*            </div>*/}
            {/*            <div className="icon"> ></div>*/}
            {/*        </div>*/}
            {/*        <div className="item">*/}
            {/*            <div>*/}
            {/*                <a style={{*/}
            {/*                    textDecoration: "none"*/}
            {/*                }} href={"#"}>*/}
            {/*                    <div className="number">0</div>*/}
            {/*                </a>*/}
            {/*                <div className="text">결제완료</div>*/}
            {/*            </div>*/}
            {/*            <div className="icon"> ></div>*/}
            {/*        </div>*/}
            {/*        <div className="item">*/}
            {/*            <div>*/}
            {/*                <div className="green number">1</div>*/}
            {/*                <div className="text">배송중</div>*/}
            {/*            </div>*/}
            {/*            <div className="icon"> ></div>*/}
            {/*        </div>*/}
            {/*        <div className="item">*/}
            {/*            <div>*/}
            {/*                <div className="green number">3</div>*/}
            {/*                <div className="text">구매확정</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}
            <div className="listContainer">
                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/coin.png"}/>
                    </div>
                    <div className="text">매출 관리</div>
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/></div>
                </a>
                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/sanction.png"}/>
                    </div>
                    <div className="text">제재 회원 목록</div>
                    {/* <span className="circle"></span> 붉은 점 */}
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/></div>
                </a>
                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/event.png"}/>
                    </div>
                    <div className="text">진행 이벤트 관리</div>
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/></div>
                </a>
                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/contact.png"}/>
                    </div>
                    <div className="text">문의/신고 내역</div>
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/></div>
                </a>

                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/users.png"}/>
                    </div>
                    <div className="text">회원 등급 관리</div>
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/> </div>
                </a>
                <a href="#" className="item">
                    <div className="icon"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/user.png"}/>
                    </div>
                    <div className="text">회원 관리</div>
                    <div className="right"><img style={{
                        width: 24,
                        height: 24
                    }} src={"./Img/Bjh/right.png"}/></div>
                </a>
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
                <a href="#" className="item">
                    <div><img style={{
                        width: 48,
                        height: 48
                    }} src={"./Img/Bjh/logout.png"}/>
                    </div>
                    <div>로그아웃</div>
                </a>
            </div>
        </div>
    );
}

export default MasterPage;