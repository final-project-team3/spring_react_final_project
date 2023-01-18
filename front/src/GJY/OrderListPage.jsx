import React from "react";

function OrderListPage() {
  return (
    <div className={'container'}>
      <h1 className={"mt-4 text-center"}>주문 / 배송조회</h1>
      <h3 className={"text-start mt-5"}>주문내역</h3>
      <hr/>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">no</th>
          <th scope="col">주문일자</th>
          <th scope="col">주문 상품 정보</th>
          <th scope="col">상품금액</th>
          <th scope="col">수량</th>
          <th scope="col">배송비</th>
          <th scope="col">주문 상태</th>
          <th scope="col">확인/취소/리뷰</th>
        </tr>
        </thead>
        <tbody>
        <tr className="table-light">
          <th scope="row">Light</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderListPage;