import React from "react";
import './LikeUserList.css';
import {Link} from "react-router-dom";

function LikeProduct(props) {
    return (
        <div className={"ViewMain"}>
            <div className={"container"} id={"ViewMain-sub"}>
                <h2 className={"blind"}>여긴 본문부분</h2>
                <div className={"l-sidebar"}>
                    <div className={"profile"}>
                        <Link className={"profile-set"}>
                            <img style={{
                                width: 94,
                                height: 94
                            }} src={"./Img/Bjh/kakao.png"}/>
                        </Link>
                        <h2 className={"blind"}>정보</h2>
                        <div className={"profile-name"}>
                            <span className={"profile-subName"}>
                                ~~~님
                            </span>
                            <em className={"secretId"}>아이디</em>
                            <div className={"page"}>
                                <Link to={"/sellerMyPage"} className={"pageClass"}>마이페이지</Link>
                            </div>
                        </div>
                    </div>
                    <ul className={"lookUp"}>
                        <li>
                            <span className={"listCheck"}>·</span>
                            결제 완료
                            <Link className={"listCheck2"}>
                                <em>0 </em>
                                건
                            </Link>
                        </li>
                        <li>
                            <span className={"listCheck"}>·</span>
                            주문, 배송 현황
                            <Link className={"listCheck2"}>
                                <em>0 </em>
                                건
                            </Link>
                        </li>
                        <li>
                            <span className={"listCheck"}>·</span>
                            신규 리뷰
                            <Link className={"listCheck2"}>
                                <em>2 </em>
                                건
                            </Link>
                        </li>
                    </ul>
                    <ul>

                    </ul>
                </div>
                <div className={"content"}>
                    <div className={"likeUser"}>
                        <h3 className={"usersList"}>찜한 상품 목록</h3>
                        <span className={"listLittle"}>내가 찜한 상품 목록입니다.</span>
                    </div>
                    <div className={"content-sub"}>
                        <div className={"userAll"}>
                            <div className={"userAll-sub"}>
                                <ul className={"userAll-ul"}>
                                    <li className={"userState"}>
                                        <Link className={"userState-title"}>
                                            <em style={{
                                                borderBottomColor: "green"
                                            }} className={"customerRole"}>전체</em>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table className={"table table-hover text-center align-middle"}>
                            <thead>
                            <tr className={"table-dark"}>
                                {/* 선택 체크박스? */}
                                <th>이미지</th>
                                <th>상품정보</th>
                                <th>옵션</th>
                                <th>가격</th>
                                <th>선택사항(?찜삭제/장바구니 담기/주문하기?)</th>
                            </tr>
                            </thead>
                            {/* 상세내용 */}
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LikeProduct;