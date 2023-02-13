import React, {useEffect, useState} from "react";
import './LikeUserList.css';
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function LikeProduct(props) {
    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    const [productLikeInfoList, setProductLikeInfoList] = useState([]);

    const deleteProductLikeItem = async (productNum) => {
        Swal.fire({
            position: "top-center",
            icon: "question",
            title: "찜한 상품 삭제",
            text: "선택하신 찜한 상품을 삭제하시겠습니까?",
            showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            confirmButtonText: '확인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소',
        }).then((req) => {
            if (req.isConfirmed) {
                axios.post("http://localhost:8080/deleteProductLikeItem", null, {
                    params: {
                        userId: userInfo.userId,
                        productNum: productNum
                    }
                });
                Swal.fire({
                    position: "top-center",
                    icon: "info",
                    title: "해당 찜한 상품을 삭제하였습니다.",
                    timer: 3000,
                }).then(() => {
                    window.location.reload();
                })
            }
        });
    }

    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getLikeProducts", {params: {userId: userInfo.userId}})
            setProductLikeInfoList(data);
        }
    }, [])

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
                                <th>제품번호</th>
                                <th>상품 이미지</th>
                                <th>상품명</th>
                                <th>상품 가격</th>
                                <th>삭제하기</th>
                                {/*<th>선택사항(?찜삭제/장바구니 담기/주문하기?)</th>*/}
                            </tr>
                            </thead>
                            {/* 상세내용 */}
                            <tbody>
                            {productLikeInfoList.length == 0 ? <h2 className={"text-center mt-3"}>찜한 상품이
                                없습니다.</h2> : productLikeInfoList.map((item, index) => {
                                return (
                                    <tr className="table-light" key={index}>
                                        <td>{item.productNum}</td>
                                        <td>
                                            <Link to={`/productDetail/${item.productNum}`}><img src={item.productImg}
                                                                                                alt=""
                                                                                                width={100}/></Link>
                                        </td>
                                        <td>
                                            <Link to={`/productDetail/${item.productNum}`}>{item.productName}</Link>
                                        </td>
                                        <td>{item.productPrice.toString()
                                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>
                                            <button className={'btn btn-primary'}
                                                    onClick={() => deleteProductLikeItem(item.productNum)}>삭제
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LikeProduct;