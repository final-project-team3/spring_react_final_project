import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {
    Link, Switch, Route, BrowserRouter
} from 'react-router-dom';
import Rating from "./Rating";

const ReviewText = styled.textarea`
    width: 50%;
    height: 6.25em;
    resize: none;
`;

function Review() {
    return (
        <div className="mt-5 container">
            <h2 className={"text-start"}>제품 리뷰</h2>
            <div className={"row mt-5"}>
                <ul>
                    <li>
                        <article>
                            <div className="text-md-start">
                                <div className={"review_info"}>
                                    <div className={"reviewer_id"}>tmvmfld1234</div>
                                    <Rating/>
                                    <div className={"seller_id"}>외길물산(주)</div>
                                    <div className={"registration_date"}>2023.01.18</div>
                                </div>
                            </div>

                            {/*<div className={"review_img"}></div>*/}

                            <div className={"text-md-start"}>
                                <div className={"review_content"}>
                                    <ReviewText disabled={true}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. A animi, assumenda at autem blanditiis consectetur </ReviewText>
                                </div>
                            </div>

                            <div className={"text-md-start"}>
                                <div className={"review_useful"}>
                                    <p>이 상품평이 도움이 되었나요?</p>
                                    <button className={"btn btn-primary"}>네</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className={"btn btn-primary"}>아니요</button>
                                    <p className={"my-2"}>총 {}명의 회원이 도움이 되었습니다.</p>
                                </div>
                            </div>
                            <hr/>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Review;



















