import React, {useEffect, useState} from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadComponent from "./FileUploadComponent";
import Swal from "sweetalert2";
import Select from "react-select";
import user from "../BJH/User";
import {element} from "prop-types";

function ProductRegisterPage2() {
    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);

    // 추가
    let copyOptionList;
    const [productList, setProductList] = useState();
    const [productKindNum, setProductKindNum] = useState();
    // 추가 끝
    const [bigKind, setBigKind] = useState([]);
    const [smallKind, setSmallKind] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productNameFlag, setProductNameFlag] = useState(false);
    const [productNameCheckFlag, setProductNameCheckFlag] = useState(false);
    const [checkedSizeList, setCheckedSizeList] = useState([]);
    const [checkedColorList, setCheckedColorList] = useState([]);
    const [optionListLength, setOptionListLength] = useState(0);
    const [tblDataUseState, setTblDataUseState] = useState([]);

    // 옵션 설정 여부
    const [optionChecked, setOptionChecked] = useState(false);
    const [optionTotal, setOptionTotal] = useState(1);
    const [optionInputList, setOptionInputList] = useState([]);

    // 옵션 리스트 데이터
    const [optionName, setOptionName] = useState([]);
    const [optionValue, setOptionValue] = useState([]);
    const [optionList, setOptionList] = useState([]);

    // 체크박스 전체선택 기능
    const [checkItems, setCheckItems] = useState([]);

    const OptionReg = () => {
        let optionNameList = [];
        let optionValueList = [];
        let ii = 0;

        for (let i = 0; i < optionTotal; i++) {
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
                // console.log(`${optionValueList[0][i]}` + `, ${optionValueList[1][j]}`);
                let valueObj = {
                    index: ii,
                    // value1: `${optionValueList[0][i]}`,
                    // value2: `${optionValueList[1][j]}`,
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

    /**
     * 옵션명 개수 가져와서 그만큼 옵션명 설정할 수 있게 하기 위한 함수
     * */
    const optionTyped = () => {
        let optionCount = optionTotal;
        let returnDiv = [];
        // console.log(optionTotal);
        for (let i = 0; i < optionCount; i++) {
            switch (i) {
                case 0:
                    returnDiv.push(
                        <div className={"row my-2"}>
                            <div className={"col-3 mb-2"}>옵션명</div>
                            <div className={"col-6 mb-2"}>옵션값</div>
                            <div className={"col-3"}></div>
                            <div className={"col-3"}>
                                <input
                                    type={"text"}
                                    id={`option${i}`}
                                    className={"col-3"}
                                    placeholder={"예시 : 컬러"}
                                />
                            </div>
                            <div className={"col-6"}>
                                <input
                                    type={"text"}
                                    id={`option${i}-${i}`}
                                    className={"col-6"}
                                    placeholder={"예시 : 빨강,노랑 (,로 구분)"}
                                />
                            </div>
                            <div className={"col-2"}>
                                <button
                                    hidden={optionTotal >= 2 ? true : false}
                                    className={"btn btn-outline-primary"}
                                    onClick={() => {
                                        setOptionTotal(2);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                    break;
                case 1:
                    returnDiv.push(
                        <div className={"row my-2"}>
                            <div className={"col-3"}>
                                <input
                                    type={"text"}
                                    id={`option${i}`}
                                    className={"col-3"}
                                    placeholder={"예시 : 컬러"}
                                />
                            </div>
                            <div className={"col-6"}>
                                <input
                                    type={"text"}
                                    id={`option${i}-${i}`}
                                    className={"col-6"}
                                    placeholder={"예시 : 빨강,노랑 (,로 구분)"}
                                />
                            </div>
                            <div className={"col-1"}>
                                <button
                                    hidden={optionTotal == 3 ? true : false}
                                    className={"btn btn-outline-primary"}
                                    onClick={() => {
                                        setOptionTotal(1);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                            <div className={"col-1"}>
                                <button
                                    hidden={optionTotal == 3 ? true : false}
                                    className={"btn btn-outline-primary"}
                                    onClick={() => {
                                        setOptionTotal(3);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                    break;
                case 2:
                    returnDiv.push(
                        <div className={"row my-2"}>
                            <div className={"col-3"}>
                                <input
                                    type={"text"}
                                    id={`option${i}`}
                                    className={"col-3"}
                                    placeholder={"예시 : 컬러"}
                                />
                            </div>
                            <div className={"col-6"}>
                                <input
                                    type={"text"}
                                    id={`option${i}-${i}`}
                                    className={"col-6"}
                                    placeholder={"예시 : 빨강,노랑 (,로 구분)"}
                                />
                            </div>
                            <div className={"col-1"}>
                                <button
                                    className={"btn btn-outline-primary"}
                                    onClick={() => {
                                        setOptionTotal(2);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    );
            }
            $("#option-total").val(optionTotal).prop("selected", true);
            setOptionInputList(returnDiv);
        }
    };

    // 이걸 해야 처음에 옵션명 입력하는 인풋태그가 1개 들어감
    useEffect(() => {
        optionTyped();
    }, [optionTotal]);

    // 대분류, 소분류
    useEffect(() => {
        return async () => {
            const {data} = await axios.post("http://localhost:8080/selectList");
            setBigKind(data);
        };
    }, []);

    const getSmallKinds = async (e) => {
        $("#selectBigKind").val(e.target.value).prop("selected", true);

        const {data} = await axios.post(
            "http://localhost:8080/selectSmallList",
            null,
            {params: {productKind: e.target.value}}
        );
        // console.log(data);
        setSmallKind(data);
    };

    // 제품명 중복확인 함수
    const productNameCheck = async () => {
        const productName = $("#productName").val(); // 제품명
        // const productSellerId = $("#productSellerId").val(); // 판매자 ID
        const productSellerId = sellerInfo.sellerId; // 판매자 ID
        console.log(productSellerId);

        setProductNameCheckFlag(true);
        const {data} = await axios.post(
            "http://localhost:8080/productNameCheck",
            null,
            {
                params: {productName: productName, productSellerId: productSellerId},
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
            // console.log(`data 값 : ${data}`);
            setProductNameFlag(false);
            // console.log(`productNameFlag : ${productNameFlag}`);
        } else {
            Swal.fire({
                icon: "error",
                title: "동일한 제품명이 존재합니다.",
            });
            // alert("기존에 등록하신 제품명과 동일합니다. 수정 후 중복확인 해주세요.");
            // console.log(`data 값 : ${data}`);
            setProductNameFlag(true);
            // console.log(`productNameFlag : ${productNameFlag}`);
        }
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
            // console.log((JSON.stringify(productList)));

            const {data} = await axios.post("http://localhost:8080/productInfoInsert", null, {
                params: {
                    productSellerId: sellerInfo.sellerId,
                    // productKindNum: productKindNum,
                    productKindNum: kindNum,
                    productName: productName,
                    productPrice: productPrice,
                    productContent: "테스트",
                    productImg: "테스트이미지",
                    productStarPoint: 2,
                    productDeliveryDay: 2
                }
            });

            for (let i = 0; i < copyOptionList.length; i++) {
                copyOptionList[i]["productNum"] = data;
            }
            setOptionList(copyOptionList);
                console.log(optionList);
            // 옵션 등록
            // optionList.map((item)=> {
            //     console.log(item);
            //     console.log(data);
            //     axios.post("http://localhost:8080/productOptionInsert", null, {
            //         params: {
            //             productNum: data,
            //             productCouponUseable: "N",
            //             productOption1:item.productOption1,
            //             productOption2:item.productOption2,
            //             productQuantity:300,
            //             // 값 디폴트로 0 줘야함
            //             productOptionPrice:0
            //         }
            //     })
            //         .then(()=> {
            //             console.log('성공');
            //         })
            //         .catch((error)=> {
            //             console.log('실패');
            //             console.log(error);
            //         })
            // })

            axios.post("http://localhost:8080/productOptionInsert", optionList)
                .then(() => {
                    console.log('성공');
                })
                .catch((error) => {
                    console.log('실패');
                    console.log(error);
                })

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "상품 등록이 완료되었습니다!",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    // Size 체크박스 값 배열로 받기 --- 사용 X
    // const onCheckedSizeElement = (checked, item) => {
    //   if (checked) {
    //     setCheckedSizeList([...checkedSizeList, item]);
    //   } else if (!checked) {
    //     setCheckedSizeList(checkedSizeList.filter((el) => el !== item));
    //   }
    // };

    const onRemove = (index) => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        // = user.id 가 id 인 것을 제거함
        // setUsers(users.filter((user) => user.id !== id));
        setOptionList(
            optionList.filter((optionList) => optionList.index !== index)
        );
        // console.log(users.length);
        // console.log(users[1].id);
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

    const tblData = () => {
        // 고정값 : productName, productPrice
        // 변동값 : optionValue, optionPrice, stockQty, sailsStatusOption
        copyOptionList = optionList;

        setProductName($("#productName").val()); // 제품명
        setProductPrice($("#productPrice").val()); // 제품명

        console.log("======================");
        console.log(copyOptionList);

        for (let i = 0; i < optionList.length; i++) {
            let iValue = optionList[i].index;
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
            /*
          index: 0
          optionPrice: "2"
          optionValue: "빨강,  큰"
          productName: "상품명123"
          productPrice: "125533"
          sailsStatusOption: "판매중"
          stockQty:"55"
          value1: "빨강"
          value2: "큰"
       */
        }
        console.log(copyOptionList);
        setOptionList(copyOptionList);

    };

    //-------------------------------------------------- RETURN -------------------------------------------------- //
    //-------------------------------------------------- RETURN -------------------------------------------------- //
    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <h1 className={"mt-4 text-center"}>제품 신규 등록</h1>
                    <h3 className={"text-start mt-5"}>상품 등록</h3>
                    <hr/>
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
                    <table className={"border"} style={{height: 200}}>
                        <tbody className={"border"}>
                        <tr className={"border"}>
                            <td
                                className={"border text-center"}
                                style={{height: 60, width: 200}}
                            >
                                제품 분류
                            </td>
                            <td>
                                <select
                                    className={"ms-3"}
                                    id={"selectBigKind"}
                                    onChange={getSmallKinds}
                                    style={{height: 30}}
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
                                    style={{height: 30}}
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
                            <td className={"border text-center"} style={{height: 60}}>
                                상품명
                            </td>
                            <td>
                                <div className={"col-10"}>
                                    <div className={"row"}>
                                        <div className={"col-7 ms-3"} style={{width: 565}}>
                                            <input
                                                id={"productName"}
                                                type="text"
                                                placeholder={"상품명을 입력하세요."}
                                                style={{height: 35}}
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
                            <td className={"border text-center"} style={{height: 60}}>
                                상품가격
                            </td>
                            <td>
                                <div className={"col-6"}>
                                    <input
                                        id={"productPrice"}
                                        type="text"
                                        className={"col-6 ms-3"}
                                        placeholder={"상품가격을 입력하세요."}
                                        style={{height: 35}}
                                    />
                                </div>
                            </td>
                        </tr>

                        {/*시작 */}
                        <tr className={"border"}>
                            {/* 옵션 등록*/}
                            <td className={"border text-center"} style={{height: 60}}>
                                옵션등록
                            </td>
                            <td>
                                <fieldset className="form-group">
                                    {/* 옵션 설정 함*/}
                                    <div className={"d-flex"}>
                                        <div className="form-check form-switch">
                                            <input
                                                className="radio ms-3 mb-3"
                                                type="radio"
                                                name={"option"}
                                                id={"option-check"}
                                                onClick={() => {
                                                    setOptionChecked(true);
                                                }}
                                                checked={optionChecked}
                                            />
                                            <label className="form-check-label ms-4">
                                                옵션 설정함
                                            </label>
                                        </div>

                                        {/* 옵션 설정 안함 */}
                                        <div className="form-check form-switch">
                                            <input
                                                className="radio ms-3 mb-3"
                                                type="radio"
                                                name={"option"}
                                                id={"option-notCheck"}
                                                onClick={() => {
                                                    setOptionChecked(false);
                                                }}
                                                checked={optionChecked == false ? true : false}
                                            />
                                            <label className="form-check-label ms-4">
                                                옵션 설정안함
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className={"row"}>
                                    <div className={"col-4"}></div>
                                </div>
                            </td>
                        </tr>
                        {/* 끝 */}

                        {/* 옵션 추가시 시작 */}

                        {/* 옵션 개수 */}
                        <tr
                            className={"border"}
                            hidden={optionChecked == true ? false : true}
                        >
                            <td className={"border text-center"} style={{height: 60}}>
                                옵션명 개수
                            </td>
                            <td>
                                <fieldset className="form-group">
                                    <div className={"ms-3"}>
                                        {/* 옵션 개수 설정*/}
                                        <div className={"mt-3 d-flex row"}>
                                            <div className={"col-2"}>
                                                <select
                                                    className={"form-select mb-3"}
                                                    id={"option-total"}
                                                    onClick={() => {
                                                        setOptionTotal($("#option-total").val());
                                                        optionTyped();
                                                    }}
                                                    onChange={() => {
                                                        setOptionTotal($("#option-total").val());
                                                        optionTyped();
                                                    }}
                                                >
                                                    <option value={1}>1개</option>
                                                    <option value={2}>2개</option>
                                                    <option value={3}>3개</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className={"row"}>
                                    <div className={"col-4"}></div>
                                </div>
                            </td>
                        </tr>

                        {/* 옵션 입력 */}
                        <tr
                            className={"border"}
                            hidden={optionChecked == true ? false : true}
                        >
                            <td className={"border text-center"} style={{height: 60}}>
                                옵션입력
                            </td>
                            <td>
                                <fieldset className="form-group">
                                    <div className={"ms-3"}>
                                        {/* 옵션명 개수에 따라서 인풋태그 증가*/}
                                        {optionInputList.map((item) => {
                                            return item;
                                        })}
                                        <button
                                            className={"btn btn-outline-primary mb-2"}
                                            onClick={OptionReg}
                                        >
                                            옵션 목록으로 적용
                                        </button>
                                    </div>
                                </fieldset>

                                <div className={"row"}>
                                    <div className={"col-4"}></div>
                                </div>
                            </td>
                        </tr>

                        {/* 옵션 목록 */}
                        <tr
                            className={"border"}
                            hidden={optionChecked == true ? false : true}
                        >
                            <td className={"border text-center"} style={{height: 60}}>
                                옵션 목록
                            </td>
                            <td>
                                <div>
                                    <div className={"ms-3 me-3"}>
                                        <table
                                            style={{
                                                textAlign: "center",
                                            }}
                                            className={"table table-bordered"}
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
                                                        <p>옵션명</p>
                                                    </div>
                                                    <div
                                                        className={
                                                            "border-top border-dark d-flex justify-content-center"
                                                        }
                                                    >
                                                        {optionName.map((item, index) => {
                                                            return <p className={"col"}>{item}</p>;
                                                        })}
                                                    </div>
                                                </th>
                                                <th className={"col"}>옵션가</th>
                                                <th className={"col"}>재고수량</th>
                                                <th className={"col"}>판매상태</th>
                                                <th className={"col"}>
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
                            <td className={"border text-center"} style={{height: 60}}>
                                상품 이미지 등록
                            </td>
                            <td>
                                <p className={"ms-2 mt-3"}>파일첨부기능 준비중 . . .</p>
                                {/*<FileUploadComponent />*/}
                            </td>
                        </tr>
                        </tbody>
                        <button
                            className={"btn btn-danger"}
                            onClick={tblData}
                            id={"tblDatabtn"}
                        >
                            테이블데이터 확인
                        </button>
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
