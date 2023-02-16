import React, { useEffect, useState } from "react";
import axios, {default as Axios} from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadComponent from "./FileUploadComponent";
import Swal from "sweetalert2";
import Select from "react-select";
import user from "../BJH/User";
import { element } from "prop-types";
import FireBaseExample from "./FireBaseExample";

const axios = Axios.create({
  baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
});

function ProductRegisterPage2() {
  let sellerInfo = sessionStorage.getItem("sellerInfo");
  sellerInfo = JSON.parse(sellerInfo);

  // 추가
  let copyOptionList;
  // const [productList, setProductList] = useState();
  let productList;
  const [productKindNum, setProductKindNum] = useState();
  // 추가 끝
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameFlag, setProductNameFlag] = useState(false);
  const [productNameCheckFlag, setProductNameCheckFlag] = useState(false);
  const [optionListLength, setOptionListLength] = useState(0);
  const [tblDataUseState, setTblDataUseState] = useState([]);

  // 옵션 설정 여부
  const [optionChecked, setOptionChecked] = useState(false);
  const [optionInputList, setOptionInputList] = useState([]);

  // 옵션 리스트 데이터
  const [optionName, setOptionName] = useState([]);
  const [optionValue, setOptionValue] = useState([]);
  const [optionList, setOptionList] = useState([]);

  // 체크박스 전체선택 기능
  const [checkItems, setCheckItems] = useState([]);

  // 자식 -> 부모 (이미지 파일명 전달)
  const [imageData, setImageData] = useState("");


  // 옵션 목록으로 적용 버튼
  const OptionReg = () => {
    let optionNameList = [];
    let optionValueList = [];
    let ii = 0;

    setOptionChecked(true);

    for (let i = 0; i < 2; i++) {
      optionNameList.push($(`#option${i}`).val());
      optionValueList.push($(`#option${i}-${i}`).val().split(","));
    }

    setOptionName(optionNameList);
    setOptionValue(optionValueList);

    let index = 0;
    let arr1 = [];
    let valueList = [];

    for (let i = 0; i < optionValueList[0].length; i++) {
      for (let j = 0; j < optionValueList[1].length; j++) {
        let valueObj = {
          index: ii,
          productOption1: `${optionValueList[0][i]}`,
          productOption2: `${optionValueList[1][j]}`,
        };
        valueList.push(valueObj);

        arr1[index++] = {
          index: ii,
          color: optionValueList[0][i],
          option: optionValueList[1][j],
        };
        ii++;
      }
    }
    setOptionList(valueList);
    let length = optionList.length;
    setOptionListLength(length);

    console.log(optionList);

    for (let i = 0; i < optionList.length; i++) {
      let iValue = optionList[i].index;
      $(`#optionPrice${iValue}`).prop("disabled", false);
      $(`#stockQty${iValue}`).prop("disabled", false);
      $(`#sailsStatusOption${iValue}`).prop("disabled", false);
      $(`#btnRemove${iValue}`).prop("disabled", false);
      $("#selectAll").prop("disabled", false);
      $(`#checkboxes${iValue}`).prop("disabled", false);
    }
  };

  // 대분류, 소분류
  useEffect(() => {
    const BigAndSmall = async () => {
      const { data } = await axios.post("/selectList");
      setBigKind(data);
    };
    BigAndSmall();
  }, []);

  const getSmallKinds = async (e) => {
    $("#selectBigKind").val(e.target.value).prop("selected", true);

    const { data } = await axios.post(
      "/selectSmallList",
      null,
      { params: { productKind: e.target.value } }
    );
    // console.log(data);
    setSmallKind(data);
  };

  // 제품명 중복확인 함수
  const productNameCheck = async () => {
    // const productName = $("#productName").val(); // 제품명
    setProductName($("#productName").val()); // 제품명
    // const productSellerId = $("#productSellerId").val(); // 판매자 ID
    const productSellerId = sellerInfo.sellerId; // 판매자 ID
    console.log(productSellerId);

    setProductNameCheckFlag(true);
    const { data } = await axios.post(
      "/productNameCheck",
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

      setProductNameFlag(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "동일한 제품명이 존재합니다.",
      });

      setProductNameFlag(true);
    }
  };

  const setProductNameFlagOnChange = (e) => {
    setProductName(e.target.value);
    setProductNameCheckFlag(false);
  };

  // 제품등록
  const productData = async (e) => {
    if (productNameCheckFlag === false) {
      alert("제품명 중복확인을 해주세요.");
    } else if (productNameFlag === true) {
      alert("제품명이 중복됩니다. 제품명 수정 후 다시 등록해주세요.");
    } else {
      const selectBigKind = $("#selectBigKind").val(); // 대분류
      const selectSmallKind = $("#selectSmallKind").val(); // 소분류

      console.log(selectBigKind);
      console.log(selectSmallKind);
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

      productList = {
        productSellerId: sellerInfo.sellerId,
        productSellerBusinessName: sellerInfo.sellerBusinessName,
        productKindNum: kindNum,
        productName: productName,
        productPrice: productPrice,
        productContent: "테스트",
        productImg: imageData,
        productStarPoint: 2,
        productDeliveryDay: 2,
      };

      setImageData(imageData);

      const { data } = await axios.post(
        "/productInfoInsert",
        productList
      );

      for (let i = 0; i < optionList.length; i++) {
        optionList[i]["productNum"] = data;
      }
      setOptionList(optionList);
      console.log(optionList);

      axios
        .post("/productOptionInsert", optionList)
        .then(() => {
          console.log("성공");
        })
        .catch((error) => {
          console.log("실패");
          console.log(error);
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

  const onRemove = (index) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거함
    // setUsers(users.filter((user) => user.id !== id));
    setOptionList(
      optionList.filter((optionList) => optionList.index !== index)
    );
  };

  const handleSingleCheck = (checked, index) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, index]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== index));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id) 를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      optionList.forEach((el) => idArray.push(el.index));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  // 선택 항목 삭제
  const deleteSelected = () => {
    let filterList = optionList;
    for (let i = 0; i < checkItems.length; i++) {
      filterList = filterList.filter(
        (filterList) => filterList.index !== checkItems[i]
      );
    }
    setOptionList(filterList);
  };

  // 옵션 데이터 확정 버튼
  const tblData = () => {
    // 고정값 : productName, productPrice
    // 변동값 : optionValue, optionPrice, stockQty, sailsStatusOption

    setProductName($("#productName").val()); // 제품명
    setProductPrice($("#productPrice").val()); // 제품명


    for (let i = 0; i < optionList.length; i++) {
      copyOptionList = optionList;
      console.log(i);
      console.log(optionList.length);
      let iValue = optionList[i]?.index;
      console.log(iValue);
      const optionValueN = $(`#optionValue${iValue}`).text(); // 옵션명(컬러,사이즈)
      const optionPriceN = $(`#optionPrice${iValue}`).val(); // 옵션가격
      $(`#optionPrice${iValue}`).prop("disabled", true);

      const stockQtyN = $(`#stockQty${iValue}`).val(); // 재고수량
      $(`#stockQty${iValue}`).prop("disabled", true);

      const sailsStatusOptionN = $(`#sailsStatusOption${iValue}`).val(); // 선택옵션
      $(`#sailsStatusOption${iValue}`).prop("disabled", true);

      $(`#btnRemove${iValue}`).prop("disabled", true);
      $(`#checkboxes${iValue}`).prop("disabled", true);
      $(`#checkboxes${iValue}`).prop("checked", false);
      $("#selectAll").prop("disabled", true);
      $("#selectAll").prop("checked", false);

      copyOptionList[i]["productName"] = productName;
      copyOptionList[i]["productPrice"] = productPrice;
      copyOptionList[i]["optionValue"] = optionValueN;
      copyOptionList[i]["productOptionPrice"] = optionPriceN;
      copyOptionList[i]["productQuantity"] = stockQtyN;
      copyOptionList[i]["productCouponUseable"] = sailsStatusOptionN;
    }
    setOptionList(copyOptionList);
    console.log("gggggggggggggggggggggggggggggggggggggg");
    console.log(copyOptionList);
    console.log(optionList);
    console.log("gggggggggggggggggggggggggggggggggggggg");
  };

  $(function () {
    $("#productPrice").on("blur keyup", function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
    });

    for (let i = 0; i < optionList.length; i++) {
      $(`#optionPrice${i}`).on("blur keyup", function () {
        $(this).val(
          $(this)
            .val()
            .replace(/[^0-9]/g, "")
        );
      });

      $(`#stockQty${i}`).on("blur keyup", function () {
        $(this).val(
          $(this)
            .val()
            .replace(/[^0-9]/g, "")
        );
      });
    }
  });

  //-------------------------------------------------- RETURN -------------------------------------------------- //
  //-------------------------------------------------- RETURN -------------------------------------------------- //
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
            placeholder={"판매자명"}
            value={sellerInfo.sellerBusinessName}
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
                          onChange={setProductNameFlagOnChange}
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

              <tr className={"border text-center"}>
                <td>옵션 등록</td>
                <td className={"border text-center"} style={{ height: 60 }}>
                  <div className={"row my-2 ms-3"}>
                    <div className={"col-3"}>
                      <input
                        type={"text"}
                        id={"option0"}
                        className={"col-3"}
                        placeholder={"컬러를 입력하세요"}
                        defaultValue={"컬러"}
                        readOnly={true}
                      />
                    </div>
                    <div className={"col-6"}>
                      <input
                        type={"text"}
                        id={"option0-0"}
                        className={"col-6"}
                        placeholder={"예시 : 빨강,노랑 (,로 구분)"}
                      />
                    </div>
                  </div>
                  <div className={"row my-2 ms-3"}>
                    <div className={"col-3"}>
                      <input
                        type={"text"}
                        id={"option1"}
                        className={"col-3"}
                        placeholder={"사이즈를 입력하세요"}
                        defaultValue={"사이즈"}
                        readOnly={true}
                      />
                    </div>
                    <div className={"col-6"}>
                      <input
                        type={"text"}
                        id={"option1-1"}
                        className={"col-6"}
                        placeholder={"예시 : S,M,L ( , 로 구분)"}
                      />
                    </div>
                    <div className={"d-flex mt-3"}>
                      <button
                        className={"btn btn-outline-primary mb-2"}
                        onClick={OptionReg}
                        checked={optionChecked}
                      >
                        옵션 목록으로 적용
                      </button>
                    </div>
                  </div>
                </td>
              </tr>

              {/* 옵션 목록 */}
              <tr
                className={"border"}
                hidden={optionChecked == true ? false : true}
              >
                <td className={"border text-center"} style={{ height: 60 }}>
                  옵션 목록
                </td>
                <td>
                  <div>
                    <div className={"ms-3 me-3"}>
                      <table
                        style={{
                          textAlign: "center",
                        }}
                        className={"table table-bordered mt-3"}
                      >
                        <thead>
                          <tr className={"row"}>
                            <th className={"col-1"}>
                              {/*체크박스 첫번째*/}
                              <input
                                type={"checkbox"}
                                id={"selectAll"}
                                onChange={(e) =>
                                  handleAllCheck(e.target.checked)
                                }
                              />
                            </th>
                            <th rowSpan={2} className={"col-3"}>
                              <div>
                                <p className={"fs-4"}>옵션명</p>
                              </div>
                              <div
                                className={
                                  "border-top border-dark d-flex justify-content-center"
                                }
                              >
                                {optionName.map((item, index) => {
                                  return (
                                    <p className={"col fs-5 mt-2"}>{item}</p>
                                  );
                                })}
                              </div>
                            </th>
                            <th className={"col align-self-center align"}>
                              옵션가
                            </th>
                            <th className={"col align-self-center align"}>
                              재고수량
                            </th>
                            <th className={"col align-self-center align"}>
                              판매상태
                            </th>
                            <th className={"col align-self-center align"}>
                              삭제{" "}
                              <div>
                                <button
                                  className={"btn btn-sm btn-outline-info mt-2"}
                                  onClick={deleteSelected}
                                >
                                  선택삭제
                                </button>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {optionList.map((item) => {
                            return (
                              <tr key={item.index} className={"row"}>
                                <td className={"col-1"}>
                                  <input
                                    type={"checkbox"}
                                    className={"mb-3"}
                                    id={`checkboxes${item.index}`}
                                    onChange={(e) =>
                                      handleSingleCheck(
                                        e.target.checked,
                                        item.index
                                      )
                                    }
                                    checked={checkItems.includes(item.index)}
                                  />
                                </td>
                                <td
                                  id={`optionValue${item.index}`}
                                  className={"col-3"}
                                >{`${item.productOption1},  ${item.productOption2}`}</td>
                                <td className={"col"}>
                                  <input
                                    type="text"
                                    id={`optionPrice${item.index}`}
                                  />
                                </td>
                                <td className={"col"}>
                                  <input
                                    type="text"
                                    id={`stockQty${item.index}`}
                                  />
                                </td>
                                <td className={"col"} id={"sailsStatus"}>
                                  <select
                                    name={"sailsStatusOption"}
                                    id={`sailsStatusOption${item.index}`}
                                  >
                                    <option name="00" id="00" value="">
                                      ---상태선택--
                                    </option>
                                    <option
                                      name="sailOption1"
                                      id="sailOption1"
                                      value={"판매중"}
                                    >
                                      판매중
                                    </option>
                                    <option
                                      name="sailOption1"
                                      id="sailOption2"
                                      value={"세일"}
                                    >
                                      세일
                                    </option>
                                  </select>
                                </td>
                                <td className={"col"}>
                                  <button
                                    className={"btn btn-primary"}
                                    onClick={() => onRemove(item.index)}
                                    id={`btnRemove${item.index}`}
                                  >
                                    삭제
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                          <button
                            className={"btn btn-danger d-flex mt-3"}
                            onClick={tblData}
                            id={"tblDatabtn"}
                          >
                            옵션 데이터 확정
                          </button>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className={"row"}>
                    <div className={"col-4"}></div>
                  </div>
                </td>
              </tr>
              {/* 옵션 추가시 끝 */}
              <tr className={"border"}>
                <td className={"border text-center"} style={{ height: 60 }}>
                  상품 이미지 등록
                </td>
                <td>
                  <FireBaseExample setImageData={setImageData} btnTitle1="이미지 등록" btnTitle2={"등록한 사진 삭제"}/>
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

export default ProductRegisterPage2;
