import React, {useEffect, useState} from "react";
import axios from "axios";

const ProductEditPage = () => {

  let sellerInfo = sessionStorage.getItem("sellerInfo");
  sellerInfo = JSON.parse(sellerInfo);
  const productSellerId = sellerInfo.sellerId;


  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productContent, setProductContent] = useState("");
  const [productImg, setProductImg] = useState("");
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    return async () => {
      const {data} = await axios.post("http://localhost:8080/selectProductInfo", null, {
        params: {
          productSellerId: productSellerId,
          productName: "테스터2수정할상품",
        },
      });
      console.log(data);
      setInfoData(data);
      // console.log("infodata");
      // console.log(infoData);
      // console.log("infodata");
      setProductName(infoData.productName);
      setProductPrice(infoData.productPrice);
    }    }, [])



  const data2 = () => {
    console.log(productPrice);
    console.log(infoData.productPrice);
  }


  return (
    <div className={"container mb-5"}>
      <button className={"btn btn-secondary"} onClick={data2}>data2 확인 버튼</button>
      <h2 className={"text-center"}>제품 정보 수정 페이지</h2>
      <div className={"mt-3"}>
        <label htmlFor="productName">제품 이름</label>
        <input type="text" id={"productName"} value={productPrice ? productPrice : null}/>
      </div>

      <p>{productName}</p>
      <p>{infoData.productName}</p>

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
        <label htmlFor="">제품 이미지</label>
        <img src="" alt="" />
        <button className={"btn btn-info"}>이미지 변경</button>
      </div>
      <div>
        옵션 변경
        <label htmlFor="">색상</label>
        map
        <label htmlFor="">사이즈</label>
        map
      </div>

    </div>
  );
};

export default ProductEditPage;
