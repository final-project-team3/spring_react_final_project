import React, {useEffect, useState} from "react";
import {default as Axios} from "axios";
import Pagination from "./Pagination";
import PaymentPage from "./PaymentPage";
import {Link} from "react-router-dom";
import $ from 'jquery';

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function OrderListPage(props) {

    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    const ReviewYesButton = (props) => {
        return (
            <Link to={'/reviewWrite'} state={{productInfo: props.item}}>
                <button className={"btn btn-secondary btn-sm"}
                >{props.state}
                </button>
            </Link>
        )
    }

    const ReviewNoButton = (props) => {
        return (
            <button className={"btn btn-secondary btn-sm"} disabled={true}
            >{props.state}
            </button>
        )
    }


    const [orderListData, setOrderListData] = useState([]);
    const [limit, setLimit] = useState(2);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        const orderList = async () => {
            const {data} = await axios.post("/order", null, {
                params: {id: userInfo.userId},
            });
            console.log(data);
            setOrderListData(data);
            console.log(orderListData);
        };

        orderList();

    }, []);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <h1 className={"mt-4 text-center"}>주문/배송 조회</h1>
                <h3 className={"text-start mt-5"}>주문내역</h3>
                <hr/>
                <br/>
                <label className={"mb-3 text-end"}>
                    페이지당 표시할 게시물 수 : &nbsp;
                    <select
                        type={"number"}
                        value={limit}
                        onChange={({target: {value}}) => setLimit(Number(value))}
                    >
                        <option value="2">2</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </label>
                <table className={"table table-hover text-center align-middle"}>
                    <thead>
                    <tr className="table-dark">
                        <th>주문일자</th>
                        <th>아이디</th>
                        <th>이미지</th>
                        <th>제품정보</th>
                        <th>주문금액(수량)</th>
                        <th>주문상태</th>
                        <th>최종 실결제금액</th>
                        <th>주문번호</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderListData.length == 0 ?
                        <h2 className={'text-center mt-3'}>현재 주문내역이
                            없습니다</h2> : orderListData.slice(offset, offset + limit).map((item, index) => {
                            return (
                                <tr className="table-light" key={index}>
                                    <td>{item.userOrderDate}</td>
                                    <td>{item.userId}</td>
                                    <td><img src={item.productImg} alt="" width={100}/></td>
                                    <td>{item.productName}</td>
                                    <td>
                                        {item.orderPrice} ({item.productOrderQuantity}개)
                                    </td>
                                    <td>
                                        {item.userOrderState}
                                        <div className={"mt-2"}>
                                            {item.reviewState == "리뷰 작성" ?
                                                <ReviewYesButton state={item.reviewState} item={item}/> :
                                                <ReviewNoButton state={item.reviewState}/>}
                                        </div>
                                    </td>

                                    <td>{item.orderPrice} 원</td>
                                    <td>{item.orderNum}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination
                total={orderListData.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default OrderListPage;
