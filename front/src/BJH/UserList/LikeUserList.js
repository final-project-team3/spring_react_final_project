import React, {useEffect} from "react";
import './LikeUserList.css';
import {Link} from "react-router-dom";
import axios from "axios";
import $ from "jquery";

function LikeUserList(props) {
    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);
    const productSellerId = sellerInfo.sellerId;

    // useEffect(() => {
    //     return () => {
    //         axios
    //           .post("http://localhost:8080/selectLikeUserList", null, {
    //               params: {
    //                   productSellerId: productSellerId,
    //                   productName: "테스터2수정할상품",
    //               },
    //           })}
    //     }, []);



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
                        <h3 className={"usersList"}>찜한 고객 목록</h3>
                        <span className={"listLittle"}>내 가게를 찜한 고객 내역입니다.</span>
                    </div>
                    <div className={"content-sub"}>
                        {/*<div className={"customers"}>*/}
                        {/*    <div className={"cus-list"}>*/}
                        {/*        <ul className={"cus-group"} role={"radiogroup"}>*/}
                        {/*            <li className={"cus-radio1"}>*/}
                        {/*                <Link className={"userRole"}>회원 고객</Link>*/}
                        {/*            </li>*/}
                        {/*            <li className={"cus-radio1"}>*/}
                        {/*                <Link className={"userRole"}>비회원 고객</Link>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                    {/*<li className={"userState"}>*/}
                                    {/*    <Link className={"userState-title"}>*/}
                                    {/*        <em className={"customerRole"}>비로그인 회원</em>*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                        <div className={"management"}>
                            <div className={"select"}>

                            </div>
                            <button type={"button"} className={"manageSetting"}>
                                목록 관리
                            </button>
                        </div>
                        {/*<div className={"likeUserList"}>*/}
                        {/*    <img style={{*/}
                        {/*        width: 64,*/}
                        {/*        height: 64,*/}
                        {/*        display: "inline-block",*/}
                        {/*        verticalAlign: "top",*/}
                        {/*        marginBottom: 20*/}
                        {/*    }} src={"./Img/Bjh/heart.png"}/>*/}
                        {/*    <strong>*/}
                        {/*        <em>찜한 고객이 </em>*/}
                        {/*        아직 없습니다.*/}
                        {/*    </strong>*/}
                        {/*    <p className={"likeGuide"}>*/}
                        {/*        고객이 찜하면*/}
                        {/*        <br/>*/}
                        {/*        이곳에서 볼 수 있습니다.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <ul className={"zzim-list"}>
                            <li className={"zzim-user"}>
                                <label className={"setting"}>

                                </label>
                                <div className={"view-list"}>
                                    <Link><img width={120} height={120} src={"Img/logo.png"}/></Link>
                                </div>
                                <div className={"zzim-content"}>
                                    <div className={"content-title"}>
                                        2023.01.30.
                                    </div>
                                    <span className={"nameDetail"}>이름
                                        <Link target={"_blank"} className={"n-strong"}>홍길동</Link>
                                    </span>
                                    <br/>
                                    <div className={"c-name"}>
                                        <span className={"nameDetail"}>아이디
                                            <strong className={"n-strong"}>gildong</strong>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={"c-number"}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LikeUserList;