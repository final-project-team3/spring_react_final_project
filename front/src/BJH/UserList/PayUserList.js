import React, {useEffect, useState} from "react";
import './LikeUserList.css';
import {Link} from "react-router-dom";
import axios from "axios";
import Pagination from "../../GJY/Pagination";
// import Pagination from "./Pagination";

function PayUserList(props) {
    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);
    const sellerId = sellerInfo.sellerId;
    // console.log(sellerInfo);

    const [orderListData, setOrderListData] = useState([]);

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        return async () => {
            const {data} = await axios.post("http://localhost:8080/getPayUserList", null, {
                params: {sellerBusinessName: sellerInfo.sellerBusinessName},
            });

            console.log(data);
            setOrderListData(data);
        };
    }, []);

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
                                <p>{sellerInfo.sellerBusinessName} 님</p>
                            </span>
                            <em className={"secretId"}>{sellerId}</em>
                            <div className={"page"}>
                                <Link to={"/myPage"} className={"pageClass"}>마이페이지</Link>
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
                        <h3 className={"usersList"}>결제한 고객 목록</h3>
                        <span className={"listLittle"}>결제한 고객 내역입니다.</span>
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
                                    {/*<li className={"userState"}>*/}
                                    {/*    <Link className={"userState-title"}>*/}
                                    {/*        <em className={"customerRole"}>비로그인 회원</em>*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                        <table className={"table table-hover text-center align-middle"}>
                            <thead>
                            <tr className="table-dark">
                                <th>주문일자</th>
                                <th>고객 ID</th>
                                <th>상품 이미지</th>
                                <th>제품정보</th>
                                <th>주문금액(수량)</th>
                                <th>주문상태</th>
                                <th>최종 실결제금액</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderListData.length == 0 ?
                              <h2 className={'text-center mt-3'}>현재 주문내역이 없습니다</h2> : orderListData.slice(offset, offset + limit).map((item, index) => {
                                  return (
                                    <tr className="table-light" key={index}>
                                        <td>{item.userOrderDate}</td>
                                        <td>{item.userId}</td>
                                        <td><img src={item.productImg} alt="" width={100}/></td>
                                        <td>{item.productName}</td>
                                        <td>
                                            {item.productPrice * item.productOrderQuantity} ({item.productOrderQuantity}개)
                                        </td>
                                        <td>
                                            {(item.userOrderState) === "배송 중" ? <p style={{color: "olive"}}>배송 중</p> : <p style={{color: "blueviolet"}}>배송 완료</p>}
                                            {/*{item.userOrderState}*/}
                                        </td>
                                        <td>{item.productPrice * item.productOrderQuantity} 원</td>
                                    </tr>
                                  );
                              })}
                            </tbody>
                        </table>
                        <Pagination
                          total={orderListData.length}
                          limit={limit}
                          page={page}
                          setPage={setPage}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PayUserList;