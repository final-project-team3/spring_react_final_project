import React, {useEffect, useState} from "react";
import axios from "axios";

function OrderListPage(props) {
  const [orderListData, setOrderListData] = useState([]);

  useEffect(() => {
    return async () => {
      const { data } = await axios.post("http://localhost:8080/order", null, {
        params: { id: "aaa" },
      });

      setOrderListData(data);
    };
  },[] );

  return (
    <div className={"container"}>
      <div className={"row"}>
        <h1 className={"mt-4 text-center"}>주문/배송 조회</h1>
        <h3 className={"text-start mt-5"}>주문내역</h3>
        <hr />
        <table className={"table table-striped table-hover"}>
          <thead>
          <tr className="table-secondary">
              <th>주문일자</th>
              <th>아이디</th>
              <th>제품정보</th>
              <th>주문금액</th>
              <th>주문수량</th>
              <th>주문상태</th>
            </tr>
          </thead>
          <tbody>
            {orderListData.map((item, index) => {
              return (
                <tr className="table-secondary">
                  <td>{item.userOrderDate}</td>
                  <td>{item.userId}</td>
                  <td>{item.productNum}</td>
                  <td>{item.productNum}</td>
                  <td>{item.productOrderQuantity}</td>
                  <td>{item.userOrderState}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <div className={"my-3 d-flex justify-content-end"}>
          {/*<button*/}
          {/*  className={"btn btn-outline-primary btn-sm"}*/}
          {/*  onClick={orderFnc}*/}
          {/*>*/}
          {/*  주문 목록 조회*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
}

export default OrderListPage;
