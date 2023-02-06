import React from "react";
import axios from "axios";

const ProductEditPage = () => {
  const { data } = axios.post("http://localhost:8080/selectProductInfo", null, {
    params: {
      productSellerId: productSellerId,
    },
  });

  return (
    <div className={"container mb-5"}>
      <h2 className={"text-center"}>제품 정보 수정 페이지</h2>
      <div className={"mt-3"}>
        <label htmlFor="productName">제품 이름</label>
        <input type="text" id={"productName"} />
      </div>
      <div className={"mt-3"}>
        <p>카테고리 : ... > ...</p>
      </div>
      <div className={"mt-3"}>
        <label htmlFor="productPrice">제품 가격</label>
        <input type="text" id={"productPrice"} />
      </div>
      <div className={"mt-3"}>
        <label htmlFor="testContent">제품 설명</label>
        <input type="text" id={"testContent"} />
      </div>
      <div className={"mt-3"}>
        <label htmlFor="testContent">제품 이미지</label>
        <img src="" alt="" />
        <button className={"btn btn-info"}>이미지 변경</button>
      </div>
    </div>
  );
};

export default ProductEditPage;
