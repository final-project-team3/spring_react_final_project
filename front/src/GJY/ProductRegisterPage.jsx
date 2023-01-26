import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadComponent from "./FileUploadComponent";

function ProductRegisterPage() {
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState([]);
  const [productName, setProductName] = useState("");

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

  const productData = async (e) => {
    const productName = $("#productName").val();
    const selectBigKind = $("#selectBigKind").val();
    const selectSmallKind = $("#selectSmallKind").val();
    // const productQty = $("#productQty").val();
    let kindNum;

    if (selectBigKind === "남자" && selectSmallKind === "외투") {
      kindNum = 1;
    } else if (selectBigKind === "남자" && selectSmallKind === "상의") {
      kindNum = 2;
    } else if (selectBigKind === "남자" && selectSmallKind === "하의") {
      kindNum = 3;
    }else if (selectBigKind === "여자" && selectSmallKind === "외투") {
      kindNum = 4;
    }else if (selectBigKind === "여자" && selectSmallKind === "상의") {
      kindNum = 5;
    }else if (selectBigKind === "여자" && selectSmallKind === "원피스") {
      kindNum = 6;
    }else if (selectBigKind === "여자" && selectSmallKind === "치마") {
      kindNum = 7;
    }else if (selectBigKind === "여자" && selectSmallKind === "바지") {
      kindNum = 8;
    }
    alert(kindNum);
    await axios.post("http://localhost:8080/productDataIntoDB", null, {
      params: {
        productName: productName,
        kindNum: kindNum,
        // productQty: productQty
      }
    })

    console.log(`selectBigKind : ${selectBigKind}`);
    console.log(`selectSmallKind : ${selectSmallKind}`);
    console.log(`productName : ${productName}`);
    // console.log(`productQty : ${productQty}`);


  };

  return (
    <div>
      <div className={"container"}>
        <div className={"row"}>
          <h1 className={"mt-4 text-center"}>제품 신규 등록</h1>
          <h3 className={"text-start mt-5"}>상품 등록</h3>
          <hr />
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
                  <div className={"col-6"}>
                    <input
                      id={"productName"}
                      type="text"
                      className={"col-6 ms-3"}
                      placeholder={"상품명을 입력하세요."}
                      style={{ height: 35 }}
                    />
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
                      id={"productName"}
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
                      id={"productName"}
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
