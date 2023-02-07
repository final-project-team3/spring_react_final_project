import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";

const ProductEditPage = () => {
  let sellerInfo = sessionStorage.getItem("sellerInfo");
  sellerInfo = JSON.parse(sellerInfo);
  const productSellerId = sellerInfo.sellerId;

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productContent, setProductContent] = useState("");
  const [productImg, setProductImg] = useState("");
  const [infoData, setInfoData] = useState({});
  const [productNum, setProductNum] = useState(0);
  const [productKindNum, setProductKindNum] = useState(0);

  useEffect(() => {
    return () => {
      // 제품 info 테이블 데이터 전부
      axios
        .post("http://localhost:8080/selectProductInfo", null, {
          params: {
            productSellerId: productSellerId,
            productName: "테스터2수정할상품",
          },
        })
        .then((req) => {
          const { data } = req;

          setInfoData(data);

          console.log("data : ");
          console.log(data);
          console.log("infoData : ");
          console.log(infoData);
          setProductName(data.productName);
          setProductPrice(data.productPrice);
          setProductContent(infoData.productContent);
          setProductImg(data.productImg);
          setProductNum(data.productNum);
          setProductKindNum(data.productKindNum);

          $("#productName").prop("value", data.productName);
          $("#productPrice").prop("value", data.productPrice);
          $("#productContent").prop("value", data.productContent);
          $("#productImg").prop(
            "src",
            "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/Images%2F%ED%96%84%EB%B2%84%EA%B1%B07.png1675666175833?alt=media&token=44ce5dd9-2e14-4f93-8c98-40373fcf73ac"
          );
        });
      axios.post("http://localhost:8080/selectCategory", null, {params:{productKindNum: productKindNum}})
    };
  }, []);

  $(function () {
    $("#productPrice").on("blur keyup", function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
    });
  });

  const data2 = () => {
    console.log(productPrice);
    console.log(infoData);
    console.log(infoData.productContent);
  };

  const data3 = () => {
    $("#productName").prop("value", "11");
    const a = $("#productName").val();
    // $("#selectBigKind").val();
    console.log(a);
  };

  return (
    <div className={"container mb-5"}>
      <button className={"btn btn-secondary"} onClick={data2}>
        data2
      </button>
      <button className={"btn btn-secondary"} onClick={data3}>
        data3
      </button>

      <h2 className={"text-center"}>제품 정보 수정 페이지</h2>
      <div className={"mt-3"}>
        <label htmlFor="productName">제품 이름</label>
        <input type="text" id={"productName"} placeholder={productName} />
      </div>
      <div className={"mt-3"}>
        <p>카테고리 : ... > ...</p>
      </div>
      <div className={"mt-3"}>
        <label htmlFor="productPrice">제품 가격</label>
        <input type="text" id={"productPrice"} />
      </div>
      <div className={"mt-3"}>
        <label htmlFor="productContent">제품 설명</label>
        <div>
          <textarea name="" id="productContent" cols="100" rows="5"></textarea>
        </div>
      </div>
      <div className={"mt-3"}>
        <label htmlFor="">제품 이미지</label>
        <div>
          <img
            src={""}
            alt={"사진없음..."}
            id={"productImg"}
            style={{ width: 200, height: 200 }}
          />
        </div>
        <button className={"btn btn-danger"}>이미지 변경</button>
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
