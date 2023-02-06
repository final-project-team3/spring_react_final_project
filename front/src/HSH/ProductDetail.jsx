import logo from '../logo.svg';
import '../App.css';
import Review from "../LYS/Review";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Pagination from "../GJY/Pagination";
import $ from 'jquery';
import ProductQna from "../LYS/ProductQna";
import './ProductDetail.css'

function ProductDetail(props) {
    const {productNum} = useParams();
    console.log(productNum);
    const [optionValue, setOptionValue] = useState();

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
                    <select onClick={(e) => {
                        setOptionValue($(e.target).val());
                    }} onChange={(e) => {
                        setOptionValue($(e.target).val());
                    }} id={"selectOption"} className={'my-2 form-select'}>
                        <option className={'option'} value={'옵션'}>옵션</option>
                        {productOption.map((option) => {
                            return (
                                <option
                                    value={option.productOption1 + option.productOption2}>{option.productOption1 + option.productOption2}</option>
                            )
                        })}
                    </select>
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

            <ul className="tab-titles row">
                <li onClick={() => setReviewCheck(true)} className="review col-6">제품 리뷰</li>
                <li onClick={() => setReviewCheck(false)} className="qna col-6">문의 / 답변</li>
            </ul>
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
    );
}


export default ProductDetail;
