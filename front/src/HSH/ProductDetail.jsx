import logo from '../logo.svg';
import '../App.css';
import Review from "../LYS/Review";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Pagination from "../GJY/Pagination";
import $ from 'jquery';
import ProductQna from "../LYS/ProductQna";
import './ProductDetail.css'
import Swal from "sweetalert2";
import './ProductDetail.css';

function ProductDetail(props) {
    const {productNum} = useParams();
    const [optionValue, setOptionValue] = useState();
    const [buyList, setBuyList] = useState([]);
    const navi = useNavigate();

    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    /**
     * buyList push 하는 함수
     * @param state : *[]
     * @param addValue : Object
     * */
    const buyListPushFunc = (state, addValue) => {
        let prevState = [];
        prevState = state;
        prevState?.push(addValue);
        setBuyList(prevState);
    }

    const showMoney = value => {
        value = parseInt(value).toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        return value;
    }

    // 페이지네이션
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const [reviewList, setReviewList] = useState([]);
    const [productInfo, setProductInfo] = useState();
    const [productOption, setProductOption] = useState([]);
    const [qnaList, setQnaList] = useState([]);
    const [optionCount, setOptionCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [selectOptionTotal, setSelectOptionTotal] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    const [reviewCheck, setReviewCheck] = useState(true);

    useEffect(() => {
        axios.post('http://localhost:8080/getReview', null, {params: {productNum: productNum}})
            .then((req) => {
                const {data} = req;
                setReviewList(data);
            });
    }, []);

    useEffect(() => {
        axios.post('http://localhost:8080/getQna', null, {params: {productNum: productNum}})
            .then((req) => {
                const {data} = req;
                setQnaList(data);
            });
    }, [])

    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getProductInfoFromDetail", {
                params: {
                    productNum: productNum
                }
            })
            // 구조분해 할당
            const {productInfo, productOption} = data

            setProductInfo(productInfo)
            setProductOption(productOption);
        }
    }, [])

    const pathname = useLocation();

    return (
        <div className="mt-5 container">
            <h1 className={"text-center"}>제품 상세</h1>
            <div className={'row mt-5'}>
                <div className={'col-6'}>
                    <img width={500} src={productInfo?.productImg}/>
                </div>
                <div className={'col-4 border-1'}>
                    <h2>{productInfo?.productName}</h2>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <h2>판매자 정보</h2>
                        </div>
                        <div className={'col-5'}>
                            <h2>{productInfo?.productSellerId}</h2>
                        </div>
                    </div>
                    {/* 셀렉트 */}
                    <select onChange={(e) => {
                        let selectOptionList = $(e.target).val().split(",");
                        let selectOptionValue = selectOptionList[0];

                        if (selectOptionValue == "옵션") {
                            Swal.fire({
                                position: "top-center",
                                icon: "error",
                                title: "옵션을 선택해주세요.",
                                showConfirmButton: true,
                                timer: 1500
                            });
                        } else {
                            let doubleCheck = true;
                            let selectOptionPrice = selectOptionList[1];
                            for (let i = 0; i < buyList.length; i++) {
                                if (selectOptionValue == buyList[i]?.optionValue) {
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "warning",
                                        title: "이미 추가한 옵션입니다.",
                                        showConfirmButton: true,
                                        timer: 1500
                                    })
                                    doubleCheck = false;
                                    break;
                                }
                            }

                            // doubleCheck 가 true일 때
                            if (doubleCheck) {
                                let prevBuyList = buyList;
                                prevBuyList.push({
                                    optionValue: selectOptionValue,
                                    optionPrice: parseInt(productInfo.productPrice) + parseInt(selectOptionPrice),
                                    optionTotal: 1,
                                });
                                setBuyList(prevBuyList);
                                let price = 0;
                                prevBuyList.map((item) => {
                                    price += parseInt(item.optionPrice) * item.optionTotal;
                                })
                                setTotalPrice(price);
                                setOptionCount(optionCount + 1);
                                $('#selectOption').val('옵션').prop("selected", true);
                            }
                        }
                    }} id={"selectOption"} className={'my-2 form-select'}>
                        {/* 옵션 div */}
                        <option value={'옵션'}>[필수] 옵션을 선택해주세요.</option>
                        {productOption.map((option, index) => {
                            // 옵션 Array
                            console.log(option.productOptionPrice);
                            let optionArray = [`${option.productOption1}${option.productOption2}`, option.productOptionPrice != null || option.productOptionPrice != "" ? option.productOptionPrice = 0 : option.productOptionPrice = 0]
                            return (
                                <option key={index} value={optionArray}>
                                    <p>{option.productOption1 + option.productOption2} + </p>
                                    <p>{option.productOptionPrice}</p>
                                </option>
                            )
                        })}
                    </select>
                    {/* 옵션 넣으면 값 뜨는 데*/}
                    <div id={'div-buyList'}>
                        {buyList.map((buyItem, index) => {
                            return (
                                <ul key={index}>
                                    <li className="">
                                        <h3>{buyItem.optionValue}</h3>
                                    </li>
                                    <li>
                                        <button onClick={() => {
                                            if ($("#optionInput" + index).val() == 1) {
                                                return;
                                            }
                                            $(`#optionInput${index}`).val(parseInt($("#optionInput" + index).val()) - 1);
                                            let prev = buyList;
                                            prev[index].optionTotal = $(`#optionInput${index}`).val();
                                            let price = 0;
                                            prev.map((item) => {
                                                price += item.optionPrice * item.optionTotal;
                                            })
                                            setTotalPrice(price);
                                        }} className="btn btn-primary"><h3>-</h3></button>
                                        <input id={`optionInput${index}`} style={{
                                            width: 60,
                                            height: 60
                                        }} className="text-center" onChange={(e) => {

                                            if (e.target.value > productOption[index].productQuantity) {
                                                alert("재고수량보다 작게 입력해주세요.\n재고수량 : " + productOption[index].productQuantity);
                                                e.target.value = productOption[index].productQuantity;
                                                return;
                                            }
                                            let prev = buyList;
                                            prev[index].optionTotal = e.target.value;
                                            let price = 0;
                                            prev.map((item) => {
                                                price += item.optionPrice * item.optionTotal;
                                            })
                                            setTotalPrice(price);
                                        }} defaultValue={1}/>
                                        <button onClick={() => {
                                            if ($(`#optionInput${index}`).val() >= productOption[index].productQuantity) {
                                                alert("재고수량보다 작게 입력해주세요.\n재고수량 : " + productOption[index].productQuantity);
                                                $(`#optionInput${index}`).val(productOption[index].productQuantity);
                                                return;
                                            }
                                            $(`#optionInput${index}`).val(parseInt($("#optionInput" + index).val()) + 1);
                                            let prev = buyList;
                                            prev[index].optionTotal = $(`#optionInput${index}`).val();
                                            let price = 0;
                                            prev.map((item) => {
                                                price += item.optionPrice * item.optionTotal;
                                            })
                                            setTotalPrice(price);
                                        }} className="btn btn-primary"><h3>+</h3></button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className={'row'}>
                        <hr/>
                        <div className={'col-6'}>
                            <h2>가격</h2>
                        </div>
                        <div className={'col-5'}>
                            <h2>{showMoney(totalPrice)}원</h2>
                        </div>
                    </div>
                    <div className={'col-10'}>
                        <div className={'mt-3 d-flex justify-content-between'}>
                            <button className={'btn btn-warning'}>장바구니</button>
                            <button onClick={() => {
                                // 로그인 하지 않았을 시
                                if (userInfo == null) {
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "error",
                                        title: "로그인 후 이용할 수 있습니다.",
                                        text: "로그인창으로 이동할까요?",
                                        showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
                                        confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
                                        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                                        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                                        cancelButtonText: '취소',
                                    }).then((req) => {
                                        if (req.isConfirmed) {
                                            navi("/login", {
                                                state: {
                                                    pathname: pathname.pathname
                                                }
                                            })
                                            return;
                                        }
                                    });
                                } else {
                                    if (optionCount == 0) {
                                        alert("옵션을 선택 또는 입력 후 구매하기를 선택해 주세요.");
                                        return;
                                    }
                                    navi("/payment", {
                                        state: {
                                            productName: productInfo?.productName,
                                            productOption: optionValue,
                                            buyList: buyList,
                                            totalPrice: totalPrice,
                                            productNum: productNum,
                                            productImg: productInfo.productImg,
                                            productInfo: productInfo
                                        }
                                    });
                                }
                            }} className={'btn btn-primary ms-2'} to={'/payment'} state={{
                                productName: productInfo?.productName,
                                productOption: optionValue,
                                //    수량 넣어야함
                            }}>바로구매
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'mt-3 border border-dark'}>
                <h4>{productInfo?.productContent}</h4>
            </div>

            <div className="ec-base-tab grid2">
                <ul className="menu">
                    <li onClick={() => setReviewCheck(true)}
                        className={reviewCheck == true ? "selected" : null}><a
                    >제품 리뷰</a></li>
                    <li onClick={() => setReviewCheck(false)}
                        className={reviewCheck == false ? "selected" : null}><a
                    >문의 / 답변</a></li>
                </ul>
            </div>

            {/* 리뷰 들어감 */
            }
            <div hidden={!reviewCheck} className="mt-5 container">
                <h2 className={"text-start"}>제품 리뷰</h2>
                <div className={"row mt-5"}>
                    {
                        reviewList.slice(offset, offset + limit).map((item, index) => {
                            return <Review key={index} id={item.userId}
                                           date={item.reviewRegistrationDate}
                                           content={item.reviewContent} helpful={item.reviewHelpful}
                                           starPoint={item.reviewStarPoint}/>
                        })
                    }
                </div>
                <br/>
                <Pagination
                    total={reviewList.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </div>

            <div hidden={reviewCheck} className="mt-5 container">
                <h2 className={"text-start"}>문의 / 답변</h2>
                <div className={"row mt-5"}>
                    <div className="prod-inquiry-list">
                        <div className="clearFix">
                            <Link to={`/qnaWrite/${productNum}`} state={{pathname: pathname}}
                                  className="prod-inquiry-list__write-btn" type={"button"}>문의하기</Link>
                        </div>

                        <div className="prod-inquiry-list__emphasis">
                            <ul>
                                <li>구매한 상품의 <em>취소/반품은 마이페이지 구매내역에서 신청</em> 가능합니다.</li>
                                <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
                                <li><em>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</em>를
                                    이용해주세요.
                                </li>
                                <li><em>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제
                                    등의 조치가 취해질 수
                                    있습니다.</em></li>
                                <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
                            </ul>
                            {
                                qnaList.map((item, index) => {
                                    return <ProductQna key={index} qnaNum={item.qnaNum}
                                                       productNum={item.productNum}
                                                       userId={item.userId} qnaTitle={item.qnaTitle}
                                                       qnaContent={item.qnaContent}
                                                       qnaRegistrationDate={item.qnaRegistrationDate}
                                                       qnaState={item.qnaState}
                                                       qnaAnswer={item.qnaAnswer}
                                                       qnaAnswerRegistrationDate={item.qnaAnswerRegistrationDate}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}


export default ProductDetail;
