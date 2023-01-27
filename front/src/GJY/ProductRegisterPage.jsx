import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadComponent from "./FileUploadComponent";
import Swal from "sweetalert2";
import Select from "react-select";

function ProductRegisterPage() {
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState([]);
  const [productName, setProductName] = useState("");
  const [productNameFlag, setProductNameFlag] = useState(false);
  const [productNameCheckFlag, setProductNameCheckFlag] = useState(false);
  const [sizeToggle, setSizeToggle] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);
  const [checkedSizeList, setCheckedSizeList] = useState([]);
  const [checkedColorList, setCheckedColorList] = useState([]);

  // 체크박스 데이터
  const SIZE_LIST = [
    { id: 0, data: "XS" },
    { id: 1, data: "S" },
    { id: 2, data: "M" },
    { id: 3, data: "L" },
    { id: 4, data: "XL" },
  ];

  // 색상 체크박스 데이터
  const COLOR_LIST = [
    { id: 0, data: "블랙" },
    { id: 1, data: "화이트" },
    { id: 2, data: "블루" },
    { id: 3, data: "핑크" },
    { id: 4, data: "옐로우" },
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
    const { data } = await axios.post(
      "http://localhost:8080/productNameCheck",
      null,
      {
        params: { productName: productName, productSellerId: productSellerId },
      }
    );
    if (data == 0) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "사용 가능한 제품명입니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(`data 값 : ${data}`);
      setProductNameFlag(false);
      console.log(`productNameFlag : ${productNameFlag}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "동일한 제품명이 존재합니다.",
      });
      // alert("기존에 등록하신 제품명과 동일합니다. 수정 후 중복확인 해주세요.");
      console.log(`data 값 : ${data}`);
      setProductNameFlag(true);
      console.log(`productNameFlag : ${productNameFlag}`);
    }
  };

  // 제품등록
  const productData = async (e) => {
    if (productNameCheckFlag === false) {
      alert("제품명 중복확인을 해주세요.");
    } else if (productNameFlag === true) {
      alert("제품명이 중복됩니다. 제품명 수정 후 다시 등록해주세요.");
    } else {
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

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "상품 등록이 완료되었습니다!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const sizeToggleHandler = () => {
    if (!sizeToggle) {
      setSizeToggle(true);
    } else {
      setSizeToggle(false);
    }
  };

  const colorToggleHandler = () => {
    if (!colorToggle) {
      setColorToggle(true);
    } else {
      setColorToggle(false);
    }
  }

  // Size 체크박스 값 배열로 받기
  const onCheckedSizeElement = (checked, item) => {
    if (checked) {
      setCheckedSizeList([...checkedSizeList, item]);
      console.log(`checkedSizeList : ${checkedSizeList}`);
    } else if (!checked) {
      setCheckedSizeList(checkedSizeList.filter(el => el !== item));
    }
  };

  // Color 체크박스 값 배열로 받기
  const onCheckedColorElement = (checked, item) => {
    if (checked) {
      setCheckedColorList([...checkedColorList, item]);
      console.log(`checkedColorList : ${checkedColorList}`);
    } else if (!checked) {
      setCheckedColorList(checkedSizeList.filter(el => el !== item));
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
                        typeof={"checkbox"}
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
                  <fieldset className="form-group">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input ms-3"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={sizeToggleHandler}
                      />
                      <label
                        className="form-check-label ms-3"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        사이즈 옵션 추가
                      </label>
                    </div>
                    {sizeToggle ? (
                      <div className={"row mt-3 ms-3"}>
                        {SIZE_LIST.map((item, index) => (
                          <div className={"d-flex col-1"}>
                            <input
                              id={"selectOpt"}
                              className={"form-control col-3 mt-1"}
                              type={"checkbox"}
                              key={item.id}
                              value={item.data}
                              onChange={e => {
                                onCheckedSizeElement(e.target.checked, e.target.value)
                              }}
                            />
                            <label htmlFor={"selectOpt"} className={"col-3 mb-3"}>
                              {item.data}
                            </label>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {/* -------------------- 색상 옵션 추가 -------------------- */}
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input ms-3"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onClick={colorToggleHandler}
                      />
                      <label
                        className="form-check-label ms-3"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        색상 옵션 추가
                      </label>
                    </div>
                    {colorToggle ? (
                      <div className={"row mt-3 ms-3"}>
                        {COLOR_LIST.map((item, index) => (
                          <div className={"d-flex col-1"}>
                            <input
                              id={"selectOpt"}
                              className={"form-control col-3 mt-1"}
                              type={"checkbox"}
                              key={item.id}
                              value={item.data}
                              onChange={e => {
                                onCheckedColorElement(e.target.checked, e.target.value)
                              }}
                            />
                            <label htmlFor={"selectOpt"} className={"col-7 mb-3 text"}>
                              {item.data}
                            </label>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </fieldset>

                  <div className={"row"}>
                    <div className={"col-4"}></div>
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
