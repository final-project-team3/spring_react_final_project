import React, { useEffect, useState } from "react";
import "./LikeUserList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import Pagination from "../../GJY/Pagination";

function MyProductList(props) {
    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);
    const sellerId = sellerInfo.sellerId;

    const [productList, setProductList] = useState([]);

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const deleteProduct = async (productNum) => {

        if (window.confirm("정말 삭제하시겠습니까?")) {
            await axios.post("http://localhost:8080/deleteProduct", null, {params:{productNum:productNum}});
            window.location.reload();
        } else {
            alert("삭제가 취소되었습니다.");
        }
    }

    useEffect(() => {
        return async () => {
            const { data } = await axios.get(
                "http://localhost:8080/getSellerIdProductList",
                {
                    params: { sellerId: sellerInfo.sellerId },
                }
            );
            console.log(data);
            setProductList(data);
        };
    }, []);

    return (
        <div className={"ViewMain"}>
            <div className={"container"} id={"ViewMain-sub"}>
                <h2 className={"blind"}>여긴 본문부분</h2>
                <div className={"l-sidebar"}>
                    <div className={"profile"}>
                        <Link className={"profile-set"}>
                            <img
                                style={{
                                    width: 94,
                                    height: 94,
                                }}
                                src={"./Img/Bjh/kakao.png"}
                            />
                        </Link>
                        <h2 className={"blind"}>정보</h2>
                        <div className={"profile-name"}>
              <span className={"profile-subName"}>
                <p>{sellerInfo.sellerBusinessName} 님</p>
              </span>
                            <em className={"secretId"}>{sellerId}</em>
                            <div className={"page"}>
                                <Link to={"/myPage"} className={"pageClass"}>
                                    마이페이지
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className={"lookUp"}>
                        <li>
                            <span className={"listCheck"}>·</span>
                            결제 완료
                            <Link className={"listCheck2"}>
                                <em>0 </em>건
                            </Link>
                        </li>
                        <li>
                            <span className={"listCheck"}>·</span>
                            주문, 배송 현황
                            <Link className={"listCheck2"}>
                                <em>0 </em>건
                            </Link>
                        </li>
                        <li>
                            <span className={"listCheck"}>·</span>
                            신규 리뷰
                            <Link className={"listCheck2"}>
                                <em>2 </em>건
                            </Link>
                        </li>
                    </ul>
                    <ul></ul>
                </div>
                <div className={"content"}>
                    <div className={"likeUser"}>
                        <h3 className={"usersList"}>등록 상품 목록</h3>
                        <span className={"listLittle"}>
              {sellerInfo.sellerBusinessName}님이 등록한 상품 목록입니다.
            </span>
                    </div>
                    <div className={"content-sub"}>
                        <div className={"userAll"}>
                            <div className={"userAll-sub"}>
                                <ul className={"userAll-ul"}>
                                    <li className={"userState"}>
                                        <Link className={"userState-title"}>
                                            <em
                                                style={{
                                                    borderBottomColor: "green",
                                                }}
                                                className={"customerRole"}
                                            >
                                                전체
                                            </em>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <table className={"table table-hover text-center align-middle"}>
                            <thead>
                            <tr className="table-dark">
                                <th>제품번호</th>
                                <th>상품 이미지</th>
                                <th>상품명</th>
                                <th>상품 가격</th>
                                <th>상세보기</th>
                            </tr>
                            </thead>
                            <tbody>
                            {productList.length == 0 ? (
                                <h2 className={"text-center mt-3"}>찜한 상품이 없습니다.</h2>
                            ) : (
                                productList
                                    .slice(offset, offset + limit)
                                    .map((item, index) => {
                                        return (
                                            <tr className="table-light" key={index}>
                                                <td>{item.productNum}</td>
                                                <td>
                                                    <img src={item.productImg} alt="" width={100} />
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>{item.productPrice}</td>
                                                <td>
                                                    <Link to={`/ProductEditPage`} state={{productPrevName:item.productName}}>
                                                        <button className={"btn btn-primary"}>
                                                            수정
                                                        </button>
                                                    </Link>
                                                    <button onClick={()=> {deleteProduct(item.productNum)}} className={"btn btn-danger"}>
                                                        삭제
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                            )}
                            </tbody>
                        </table>
                        <Pagination
                            total={productList.length}
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

export default MyProductList;
