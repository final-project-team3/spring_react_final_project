import logo from '../logo.svg';
import '../App.css';
import Review from "../LYS/Review";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";
import Pagination from "../GJY/Pagination";
import $ from 'jquery';
import ProductQna from "../LYS/ProductQna";
import './ProductDetail.css'
import Swal from "sweetalert2";
import './ProductDetail.css';

function ProductDetail(props) {
    const {productNum} = useParams();
    console.log(productNum);
    const [optionValue, setOptionValue] = useState();
    const [buyList, setBuyList] = useState([]);

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

    // /**
    //  * buyList 하는 함수
    //  * @param state : 넣을state
    //  * @param addValue : 넣을value
    //  * */
    // const buyListAddFunc = (state, addValue) => {
    //     let prevState = state;
    //     prevState.add(addValue);
    //     setBuyList(prevState);
    // }

    // 페이지네이션
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    const [reviewList, setReviewList] = useState([]);
    const [productInfo, setProductInfo] = useState();
    const [productOption, setProductOption] = useState([]);
    const [qnaList, setQnaList] = useState([]);

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
                    <select onChange={(e) => {
                        let selectOptionValue = $(e.target).val();
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
                            for (let i = 0; i < buyList.length; i++) {
                                if (selectOptionValue == buyList[i]?.optionValue) {
                                    doubleCheck = false;
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "warning",
                                        title: "이미 추가한 옵션입니다.",
                                        showConfirmButton: true,
                                        timer: 1500
                                    })
                                    break;
                                }
                            }
                            if (doubleCheck) {
                                buyListPushFunc(buyList, {optionValue: selectOptionValue})
                            }
                            // doubleCheck ? buyListPushFunc(buyList, [{optionValue: selectOptionValue}]) : null
                            // doubleCheck == true ? buyListAddFunc(buyList, {optionValue : selectOptionValue}) : null
                        }
                    }} id={"selectOption"} className={'my-2 form-select'}>
                        <option className={'option'} value={'옵션'}>[필수] 옵션을 선택해주세요.</option>
                        {productOption.map((option) => {
                            return (
                                <option className={'d-flex justify-content-around'}
                                        value={option.productOption1 + option.productOption2}>{option.productOption1 + option.productOption2}</option>
                            )
                        })}
                    </select>
                    {/* 옵션 넣으면 값 뜨는 데*/}
                    <div hidden={true} className={'div-option'}>

                    </div>
                    <div className={'row'}>
                        <hr/>
                        <div className={'col-6'}>
                            <h2>가격</h2>
                        </div>
                        <div className={'col-5'}>
                            <h2>{productInfo?.productPrice}원</h2>
                        </div>
                    </div>
                    <div className={'col-7'}>
                        <div className={'d-flex justify-content-between'}>
                            <button className={'btn btn-warning'}>장바구니</button>
                            <Link className={'btn btn-primary'} to={'/payment'} state={{
                                productName: productInfo?.productName,
                                productOption: optionValue,
                                //    수량 넣어야함
                            }}>바로구매</Link>
                            <button className={'btn btn-danger'}>찜</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'mt-3 border border-dark'}>
                <h4>{productInfo?.productContent}</h4>
            </div>

            <div className="ec-base-tab grid2">
                <ul className="menu">
                    <li onClick={() => setReviewCheck(true)} className={reviewCheck == true ? "selected" : null}><a
                        >제품 리뷰</a></li>
                    <li onClick={() => setReviewCheck(false)} className={reviewCheck == false ? "selected" : null}><a
                        >문의 / 답변</a></li>
                </ul>
            </div>

            {/* 리뷰 들어감 */}
            <div hidden={!reviewCheck} className="mt-5 container">
                <h2 className={"text-start"}>제품 리뷰</h2>
                <div className={"row mt-5"}>
                    {
                        reviewList.slice(offset, offset + limit).map((item, index) => {
                            return <Review key={index} id={item.userId} date={item.reviewRegistrationDate}
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
                            <Link to={`/qnaWrite/${productNum}`} state={{pathname:pathname}} className="prod-inquiry-list__write-btn" type={"button"}>문의하기</Link>
                        </div>

                        <div className="prod-inquiry-list__emphasis">
                            <ul>
                                <li>구매한 상품의 <em>취소/반품은 마이페이지 구매내역에서 신청</em> 가능합니다.</li>
                                <li>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</li>
                                <li><em>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의하기</em>를 이용해주세요.</li>
                                <li><em>"해당 상품 자체"와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
                                    있습니다.</em></li>
                                <li>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</li>
                            </ul>
                            {
                                qnaList.map((item, index) => {
                                    return <ProductQna key={index} qnaNum={item.qnaNum} productNum={item.productNum}
                                                       userId={item.userId} qnaTitle={item.qnaTitle}
                                                       qnaContent={item.qnaContent}
                                                       qnaRegistrationDate={item.qnaRegistrationDate} qnaState={item.qnaState}
                                                       qnaAnswer={item.qnaAnswer}
                                                       qnaAnswerRegistrationDate={item.qnaAnswerRegistrationDate}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetail;
