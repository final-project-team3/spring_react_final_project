import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadComponent from "./FileUploadComponent";
import Swal from "sweetalert2";
import { MultiSelect } from "react-multi-select-component";

function ProductRegisterPage() {
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState([]);
  const [productName, setProductName] = useState("");
  const [productNameFlag, setProductNameFlag] = useState(false);
  const [productNameCheckFlag, setProductNameCheckFlag] = useState(false);

  // 옵션 선택
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];


  useEffect(() => {
    return async () => {
      const { data } = await axios.post("http://localhost:8080/selectList");
      setBigKind(data);
    };
  }, []);

  const getSmallKinds = async (e) => {
    $("#selectBigKind").val(e.target.value).prop("selected", true);

    const { data } = await axios.post(
      "http://localhost:8080/selectSmallList",
      null,
      { params: { productKind: e.target.value } }
    );
    console.log(data);
    setSmallKind(data);
  };

  // 제품명 중복확인 함수
  const productNameCheck = async () => {
    const productName = $("#productName").val(); // 제품명
    const productSellerId = $("#productSellerId").val(); // 판매자 ID
    setProductNameCheckFlag(true);
    // alert(productName);
    const {data} = await axios.post("http://localhost:8080/productNameCheck", null, {
      params: {productName: productName, productSellerId: productSellerId},
    });
    if (data == 0) {

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: '사용 가능한 제품명입니다.',
        showConfirmButton: false,
        timer: 1500
      });
      console.log(`data 값 : ${data}`);
      setProductNameFlag(false);
      console.log(`productNameFlag : ${productNameFlag}`);
    } else {
      Swal.fire({
        icon: 'error',
        title: '동일한 제품명이 존재합니다.',
      })
      // alert("기존에 등록하신 제품명과 동일합니다. 수정 후 중복확인 해주세요.");
      console.log(`data 값 : ${data}`);
      setProductNameFlag(true);
      console.log(`productNameFlag : ${productNameFlag}`);
    }
  }

  // 제품등록
  const productData = async (e) => {
    if (productNameCheckFlag === false) {
      alert("제품명 중복확인을 해주세요.");
    } else if (productNameFlag === true) {
      alert("제품명이 중복됩니다. 제품명 수정 후 다시 등록해주세요.");
    }
    else {
      const productName = $("#productName").val(); // 제품명
      const selectBigKind = $("#selectBigKind").val(); // 대분류
      const selectSmallKind = $("#selectSmallKind").val(); // 소분류
      const productQty = $("#productQty").val(); // 재고수량
      const productPrice = $("#productPrice").val(); // 상품가격
      const productSellerId = $("#productSellerId").val(); // 판매자 ID

      let kindNum;

      if (selectBigKind === "남자" && selectSmallKind === "외투") {
        kindNum = 1;
      } else if (selectBigKind === "남자" && selectSmallKind === "상의") {
        kindNum = 2;
      } else if (selectBigKind === "남자" && selectSmallKind === "하의") {
        kindNum = 3;
      } else if (selectBigKind === "여자" && selectSmallKind === "외투") {
        kindNum = 4;
      } else if (selectBigKind === "여자" && selectSmallKind === "상의") {
        kindNum = 5;
      } else if (selectBigKind === "여자" && selectSmallKind === "원피스") {
        kindNum = 6;
      } else if (selectBigKind === "여자" && selectSmallKind === "치마") {
        kindNum = 7;
      } else if (selectBigKind === "여자" && selectSmallKind === "바지") {
        kindNum = 8;
      }
      // alert(kindNum);
      await axios.post("http://localhost:8080/productDataIntoDB", null, {
        params: {
          productName: productName,
          productKindNum: kindNum,
          productQty: productQty,
          productSellerId: productSellerId,
          productPrice: productPrice,
        },
      });

      console.log(`selectBigKind : ${selectBigKind}`);
      console.log(`selectSmallKind : ${selectSmallKind}`);
      console.log(`productName : ${productName}`);
      console.log(`productQty : ${productQty}`);
    }
  };

  return (
    <div>
      <div className={"container"}>
        <div className={"row"}>
          <h1 className={"mt-4 text-center"}>제품 신규 등록</h1>
          <h3 className={"text-start mt-5"}>상품 등록</h3>
          <hr />
          <label htmlFor="productSellerId" className={"label-control"}>
            판매자명
          </label>
          <input
            type="text"
            id={"productSellerId"}
            className={"form-control mb-5"}
            placeholder={
              "판매자명을 입력하세요 (나중에 로그인기능구현 → 자동입력 될 부분)"
            }
          />
          <table className={"border"} style={{ height: 200 }}>
            <tbody className={"border"}>
              <tr className={"border"}>
                <td
                  className={"border text-center"}
                  style={{ height: 60, width: 200 }}
                >
                  제품 분류
                </td>
                <td>
                  <select
                    className={"ms-3"}
                    id={"selectBigKind"}
                    onChange={getSmallKinds}
                    style={{ height: 30 }}
                  >
                    <option value="대분류" key={"a"}>
                      ----대분류----
                    </option>
                    {bigKind.map((item) => (
                      <option
                        value={item.productGender}
                        key={item.product_kind_num}
                      >
                        {item.productGender}
                      </option>
                    ))}
                  </select>
                  <select
                    name={"selectSmallKind"}
                    id={"selectSmallKind"}
                    className={"ms-3"}
                    style={{ height: 30 }}
                  >
                    <option value="하위분류" key={"b"}>
                      ----하위분류---
                    </option>
                    {smallKind.map((item, index) => (
                      <option
                        value={item.productSmallKind}
                        key={item.product_kind_num}
                      >
                        {item.productSmallKind}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  상품명
                </td>
                <td>
                  <div className={"col-10"}>
                    <div className={"row"}>
                      <div className={"col-7 ms-3"} style={{ width: 565 }}>
                        <input
                          id={"productName"}
                          type="text"
                          placeholder={"상품명을 입력하세요."}
                          style={{ height: 35 }}
                        />
                      </div>
                      <div className={"col-3"}>
                        <button
                          className={"btn btn-outline-secondary"}
                          id={"btnProductNameCheck"}
                          onClick={productNameCheck}
                        >
                          중복확인
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  상품가격
                </td>
                <td>
                  <div className={"col-6"}>
                    <input
                      id={"productPrice"}
                      type="text"
                      className={"col-6 ms-3"}
                      placeholder={"상품가격을 입력하세요."}
                      style={{ height: 35 }}
                    />
                  </div>
                </td>
              </tr>
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  상품재고
                </td>
                <td>
                  <div className={"col-6"}>
                    <input
                      id={"productQty"}
                      type="text"
                      className={"col-6 ms-3"}
                      placeholder={"상품 재고수량을 입력하세요."}
                      style={{ height: 35 }}
                    />
                  </div>
                </td>
              </tr>
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  옵션등록
                </td>
                <td>


                </td>
              </tr>
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  상품 이미지 등록
                </td>
                <td>
                  <p className={"ms-2 mt-3"}>파일첨부기능 준비중 . . .</p>
                  {/*<FileUploadComponent />*/}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={"container mt-5"}>
          <div className={"row justify-content-center"}>
            <button
              className={"btn btn-primary fs-5 col-4"}
              id={"btnProductR"}
              onClick={productData}
            >
              상품등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRegisterPage;
