import React, {useEffect, useState} from "react";
import axios from "axios";
import $ from "jquery";
import FireBaseExample from "./FireBaseExample";

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
  const [productGender, setProductGender] = useState("");
  const [productSmallKind, setProductSmallKind] = useState("");
  const [imageData, setImageData] = useState("");
  const [optionData, setOptionData] = useState([]);
  const [productOption1, setProductOption1] = useState([]);
  const [productOption2, setProductOption2] = useState([]);
  const [productOptionPrice, setProductOptionPrice] = useState([]);
  const [productQuantity, setProductQuantity] = useState([]);
  const [productCouponUseable, setProductCouponUseable] = useState([]);

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
          const {data} = req;

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
          // $("#productImg").prop("src", data.productImg);

          const {data2} = axios
            .post("http://localhost:8080/selectProductKindInfo", null, {
              params: {productKindNum: data.productKindNum},
            })
            .then((data2) => {
              const kindData = data2.data;
              console.log(kindData);
              console.log("성공");
              setProductGender(kindData.productGender);
              setProductSmallKind(kindData.productSmallKind);

              $("#productGender").prop("value", kindData.productGender);
              $("#productSmallKind").prop("value", kindData.productSmallKind);

              $("#p").text(kindData.productGender);
              $("#p2").text(kindData.productSmallKind);
            });

          const {data3} = axios
            .post("http://localhost:8080/selectOptionData", null, {
              params: {productNum: data.productNum},
            })
            .then((data3) => {
              setOptionData(data3.data);
              console.log(optionData);

              // const OptionDataSample = req.data;
              // for (let i = 0; i < OptionDataSample.length; i++) {
              //   console.log("OptionDataSample.length");
              //   // console.log(OptionDataSample.length);
              //   $(`#productOption1${i}`).prop("value", optionData[i].productOption1);
              //   $(`#productOption2${i}`).prop("value", optionData[i].productOption2);
              //   $(`#productOptionPrice${i}`).prop("value", optionData[i].productOptionPrice);
              //   $(`#productQuantity${i}`).prop("value", optionData[i].productQuantity);
              //   $(`#productCouponUseable${i}`).prop("value", optionData[i].productCouponUseable);
              // }

              const copyProductOption1 = [];
              const copyProductOption2 = [];
              const copyProductOptionPrice = [];
              const copyProductQuantity = [];
              const copyProductCouponUseable = [];
              for (let i = 0; i < data3.data.length; i++) {
                copyProductOption1.push(data3.data[i].productOption1);
                copyProductOption2.push(data3.data[i].productOption2);
                copyProductOptionPrice.push(data3.data[i].productOptionPrice);
                copyProductQuantity.push(data3.data[i].productQuantity);
                copyProductCouponUseable.push(data3.data[i].productCouponUseable);
              }
              console.log(copyProductOption1);
              setProductOption1(copyProductOption1);
              setProductOption2(copyProductOption2);
              setProductOptionPrice(copyProductOptionPrice);
              setProductQuantity(copyProductQuantity);
              setProductCouponUseable(copyProductCouponUseable);


            });
        });
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

  return (
    <div className={"container mb-5"}>
      <h2 className={"text-center"}>제품 정보 수정</h2>
      {/*<h2>{optionData[0]?.productOptionNum}</h2>*/}
      <div className={"mt-3"}>
        <label htmlFor="productName">제품 이름</label>
        <input type="text" id={"productName"} placeholder={productName}/>
      </div>
      <div className={"mt-3 d-flex"}>
        <p className={"me-2"}>카테고리 :</p>
        <p id={"p"}></p> <p className={"mx-2"}>></p> <p id={"p2"}></p>
      </div>
      <div className={"mt-3"}>
        <label htmlFor="productPrice">제품 가격</label>
        <input type="text" id={"productPrice"}/>
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
          {imageData == "" ? (
            <img
              src={productImg}
              alt={"사진없음..."}
              id={"productImg"}
              style={{width: 200, height: 200}}
            />
          ) : null}
        </div>
        <div>
          <FireBaseExample
            setImageData={setImageData}
            btnTitle1="이미지 변경"
            btnTitle2={"등록된 사진 삭제"}
          />
        </div>
      </div>
      <div>
        옵션 변경
        <table className={"border border-primary"}>
          <thead className={"border border-primary"}>
          <tr>
            <td>컬러</td>
            <td>사이즈</td>
            <td>옵션가</td>
            <td>재고수량</td>
            <td>쿠폰사용가능여부</td>
          </tr>
          </thead>
          <tbody className={"border border-primary"}>
          {optionData.map((item, index) => {
            let productOption1Value = productOption1[index];
            let productOption2Value = productOption1[index];
            let productOptionPriceValue = productOptionPrice[index];
            let productQuantityValue = productQuantity[index];
            let productCouponUseableValue = productOption1[index];
            return (
              <tr>
                <td>
                  <input type="text" id={`productOption1${index}`} value={productOption1Value} onChange={(e) => {
                    console.log($(e.target).val());
                    $(`#productOption1${index}`).prop("value", $(e.target).val());
                  }}/>
                </td>
                <td>
                  <input type="text" id={`productOption2${index}`} value={productOption2[index]}/>
                </td>
                <td>
                  <input type="text" id={`productOptionPrice${index}`} value={productOptionPrice[index]}/>
                </td>
                <td>
                  <input type="text" id={`productQuantity${index}`} value={productQuantity[index]}/>
                </td>
                <td>
                  <input type="text" id={`productCouponUseable${index}`} value={productCouponUseable[index]}/>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductEditPage;
