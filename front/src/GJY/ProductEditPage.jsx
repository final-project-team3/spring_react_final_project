import React, {useEffect, useState} from "react";
import axios from "axios";
import $ from "jquery";
import FireBaseExample from "./FireBaseExample";
import {getSpaceUntilMaxLength} from "@testing-library/user-event/dist/utils";
import {useLocation, useNavigate} from "react-router-dom";

// const tableTest = (props) => {
//   return (
//     <tr>
//       <td>
//         <input type="text" id={`productOption1${index}`} value={props.option1Value} onChange={()=> {
//           props.setStateList.
//         }}/>
//       </td>
//       <td>
//         <input type="text" id={props.id} value={props.option1Value} />
//       </td>
//       <td>
//         <input type="text" id={`productOptionPrice${index}`} value={productOptionPrice[index]}/>
//       </td>
//       <td>
//         <input type="text" id={`productQuantity${index}`} value={productQuantity[index]}/>
//       </td>
//       <td>
//         <input type="text" id={`productCouponUseable${index}`} value={productCouponUseable[index]}/>
//       </td>
//     </tr>
//   )
// }

const ProductEditPage = () => {
  let sellerInfo = sessionStorage.getItem("sellerInfo");
  sellerInfo = JSON.parse(sellerInfo);
  const productSellerId = sellerInfo.sellerId;
  const location = useLocation();
  const {productPrevName} = location.state;
  const navi = useNavigate();


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
  const [productOptionNum, setProductOptionNum] = useState([]);

  useEffect(() => {
    return () => {
      // 제품 info 테이블 데이터 전부
      axios
        .post("http://localhost:8080/selectProductInfo", null, {
          params: {
            productSellerId: productSellerId,
            productName: productPrevName,
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

              const copyProductOption1 = [];
              const copyProductOption2 = [];
              const copyProductOptionPrice = [];
              const copyProductQuantity = [];
              const copyProductCouponUseable = [];
              const copyProductOptionNum = [];

              for (let i = 0; i < data3.data.length; i++) {
                copyProductOption1.push(data3.data[i].productOption1);
                copyProductOption2.push(data3.data[i].productOption2);
                copyProductOptionPrice.push(data3.data[i].productOptionPrice);
                copyProductQuantity.push(data3.data[i].productQuantity);
                copyProductCouponUseable.push(
                  data3.data[i].productCouponUseable
                );
                copyProductOptionNum.push(data3.data[i].productOptionNum);
              }
              console.log(copyProductOption1);
              setProductOption1(copyProductOption1);
              setProductOption2(copyProductOption2);
              setProductOptionPrice(copyProductOptionPrice);
              setProductQuantity(copyProductQuantity);
              setProductCouponUseable(copyProductCouponUseable);
              setProductOptionNum(copyProductOptionNum);
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
    for (let i = 0; i < optionData.length; i++) {
      console.log(i);
      $(`#productOptionPrice${i}`).on("blur keyup", function () {
        $(this).val(
          $(this)
            .val()
            .replace(/[^0-9]/g, "")
        );
      });

      $(`#productQuantity${i}`).on("blur keyup", function () {
        $(this).val(
          $(this)
            .val()
            .replace(/[^0-9]/g, "")
        );
      });
    }
  });

  // const textareaOnchange = () => {
  //   value.replace(/<br\s*\/?>/gm, "\n").length
  // }

  const editFnc = async () => {
    const productName = $("#productName").val();
    const productPrice = $("#productPrice").val();
    const productContent = $("#productContent").val();
    // const imageData = imageData;

    console.log(productName);
    console.log(productPrice);
    console.log(productContent);
    console.log(imageData);

    const productOption1 = [];
    const productOption2 = [];
    const productOptionPrice = [];
    const productQuantity = [];
    const productCouponUseable = [];

    for (let i = 0; i < optionData.length; i++) {
      productOption1.push($(`#productOption1${i}`).val());
      productOption2.push($(`#productOption2${i}`).val());
      productOptionPrice.push($(`#productOptionPrice${i}`).val());
      productQuantity.push($(`#productQuantity${i}`).val());
      productCouponUseable.push($(`#productCouponUseable${i}`).val());
    }
    const arrayAll = {
      productNum,
      // productCouponUseable,
      // productOption1,
      // productOption2,
      // productQuantity,
      // productOptionPrice,
      productSellerId: sellerInfo.sellerId,
      productName: productName,
      productPrice: productPrice,
      productContent: productContent,
      productImg: productImg,
    }

    await
      axios.post("http://localhost:8080/editDataUpdate", arrayAll, {
        params: {
          my: "info",
        }
      });
    productOption1.map(async (item, i) => {
      const arrayAll2 = {
        productCouponUseable: productCouponUseable[i],
        productOption1: productOption1[i],
        productOption2: productOption2[i],
        productQuantity: productQuantity[i],
        productOptionPrice: productOptionPrice[i],
        productOptionNum: productOptionNum[i],
      };
      await axios.post("http://localhost:8080/editDataUpdate", arrayAll2, {
        params: {
          my: "option",
        }
      })
      alert("수정되었습니다.");
      navi("/myProductList");
    })
  };

  return (
    <div className={"container mb-5"}>
      <h2 className={"text-center"}>제품 정보 수정</h2>
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
          <textarea name="" id="productContent" cols="100" rows="5"
                    // maxLength={500}
                    // onChange={textareaOnchange}
          >

          </textarea>
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
          <thead
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className={"border border-primary"}
          >
          <tr className={"text-center"}>
            <td>컬러</td>
            <td>사이즈</td>
            <td>옵션가</td>
            <td>재고수량</td>
            <td>쿠폰사용가능여부</td>
          </tr>
          </thead>
          <tbody
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className={"border border-primary"}
          >
          {optionData.map((item, index) => {
            return (
              <tr>
                <td>
                  <input
                    type="text"
                    id={`productOption1${index}`}
                    defaultValue={productOption1[index]}
                    className={"text-center"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`productOption2${index}`}
                    defaultValue={productOption2[index]}
                    className={"text-center"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`productOptionPrice${index}`}
                    defaultValue={productOptionPrice[index]}
                    className={"text-center"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`productQuantity${index}`}
                    defaultValue={productQuantity[index]}
                    className={"text-center"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id={`productCouponUseable${index}`}
                    defaultValue={productCouponUseable[index]}
                    className={"text-center"}
                  />
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <div className={"d-flex justify-content-end me-5 col-7 mt-5"}>
        <button className={"btn btn-primary me-5"} onClick={editFnc}>
        </button>
        <button className={"btn btn-warning me-5"} onClick={()=> {
          alert("취소되었습니다.");
          navi("/myProductList");
        }}>
          취소
        </button>
      </div>
    </div>
  );
};

export default ProductEditPage;
