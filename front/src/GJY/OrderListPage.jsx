import React, {useState} from "react";
import axios from "axios";

function OrderListPage(props) {
  const [orderListData, setOrderListData] = useState([]);

  const orderFnc = async () => {
    const {data} = await axios.post(("http://localhost:8080/order"), null, {params: {id: 'aaa'}});

    setOrderListData(data);
  }



  return (
    <div className={"container"}>
      <div className={"row"}>
          <table className={"table table-striped table-hover"}>
            <thead>
              <tr>
                <th>아이디</th>
                <th>주문 수량</th>
              </tr>
            </thead>
            <tbody>
            {orderListData.map((item, index) => {
              return (
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.productOrderQuantity}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
          <hr />
          <div className={"my-3 d-flex justify-content-end"}>
            <button
              className={"btn btn-outline-primary btn-sm"} onClick={orderFnc}
            >
              주문 목록 조회
            </button>
          </div>
        </div>
      </div>
  );
}

export default OrderListPage;
