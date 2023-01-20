import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import PaymentPage from "./PaymentPage";

function OrderListPage(props) {
  const [orderListData, setOrderListData] = useState([]);
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    return async () => {
      const { data } = await axios.post("http://localhost:8080/order", null, {
        params: { id: "aaa" },
      });
      setOrderListData(data);
    };
  }, []);

  return (
    <div className={"container"}>
      <div className={"row"}>
        <h1 className={"mt-4 text-center"}>주문/배송 조회</h1>
        <h3 className={"text-start mt-5"}>주문내역</h3>
        <hr />
        <br />
        <label className={"mb-3 text-end"}>
          페이지당 표시할 게시물 수 : &nbsp;
          <select
            type={"number"}
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
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
            </tr>
          </thead>
          <tbody>
            {orderListData.slice(offset, offset + limit).map((item, index) => {
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
                    {item.userOrderState}
                    <div className={"mt-2"}>
                      <button className={"btn btn-secondary btn-sm"}>리뷰작성</button>
                    </div>
                  </td>

                  <td>{item.productPrice * item.productOrderQuantity} 원</td>
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
