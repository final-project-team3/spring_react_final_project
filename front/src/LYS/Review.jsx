import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {
    Link, Switch, Route, BrowserRouter
} from 'react-router-dom';

function Review() {
    return (
        <div className="mt-5 container">
            <h1 className={"text-start"}>제품 리뷰</h1>
            <div className={"row mt-5"}>
                <ul>
                    <li>
                        <article>
                            <div className={"review_info"}>
                                <div className={"reviewer_id"}></div>
                                <div className={"star_point"}></div>
                                <div className={"seller_id"}></div>
                                <div className={"registration_date"}></div>
                            </div>

                            {/*<div className={"review_img"}></div>*/}

                            <div className={"review_content"}>
                                <div className={'mt-3 border border-dark'}>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid
                                        assumenda commodi culpa, eos esse est eum excepturi expedita ipsa laudantium
                                        natus numquam praesentium quibusdam, quisquam repellat totam voluptatem!</h4>
                                </div>
                            </div>

                            <div className={"review_useful"}>
                                <div>이 상품평이 도움이 되었나요?</div>
                                <button>네</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className={"btn"}>아니요</button>
                                <p>총 {}명의 회원이 도움이 되었습니다.</p>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Review;



















