import React, {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../GJY/Pagination";
import {useLocation} from "react-router-dom";
import MyReview from "./MyReview";
import DetailRating from "./DetailRating";
import styled from "styled-components";
import './MyReview.css';


function ReviewWrite() {

    const location = useLocation();
    const productInfo = location.state.productInfo;
    console.log(productInfo);

    return (
        <div className={"container"}>
            <div className="wrap">
                <div className="skyContainer">
                    <div style={{
                        width: 1500
                    }}>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center grade">마이페이지
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center name">리뷰 작성페이지
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mt-5"}>
                <div>
                    <h5>다음 상품의 리뷰를 작성해 주세요</h5>
                    <div>
                        <img src={productInfo.productImg} alt="" width={100}/>
                    </div>
                    <div>
                        <p>{productInfo.productName}</p>
                    </div>
                </div>
            </div>

            <form method={'post'} style={{padding: 0, margin: 0}}>
                <div className={'mt-5'}>
                    <div className="reviewContainer" style={{paddingLeft: 30}}>
                        <ul>
                            <li>
                                <article>
                                    <div className="text-md-start">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                만족도
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">1</a></li>
                                                <li><a className="dropdown-item" href="#">2</a></li>
                                                <li><a className="dropdown-item" href="#">3</a></li>
                                                <li><a className="dropdown-item" href="#">4</a></li>
                                                <li><a className="dropdown-item" href="#">5</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"text-md-start"}>
                                        <div className={"review_content"}>
                                            <ReviewText name={'reviewContent'}
                                                        style={{marginTop: 10, paddingInline: 10}}></ReviewText>
                                        </div>
                                    </div>
                                    <div className={"text-md-start"}>
                                        <div className={"ui-button col-6 my-2"}>
                                            <WriteButton className={"btn btn-primary"} type={"submit"}>리뷰
                                                등록</WriteButton>
                                        </div>
                                    </div>
                                    <hr/>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

const WriteButton = styled.button`
    width: 90px;
    height: 35px;
    padding: 0px;
    margin: 0px;
`

const ReviewText = styled.textarea`
    width: 50%;
    height: 6.25em;
    resize: none;
`;

export default ReviewWrite;