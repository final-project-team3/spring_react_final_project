import React, {useEffect, useState} from "react";
import styled from "styled-components";
import jquery from 'jquery';
import $ from 'jquery';
import DetailRating from "./DetailRating";

const ReviewText = styled.textarea`
    width: 50%;
    height: 6.25em;
    resize: none;
`;



function Review(props) {
    return (
        <ul>
            <li>
                <article>
                    <div className="text-md-start">
                        <div className={"review_info"}>
                            <div className={"reviewer_id"}>{props.id}</div>
                            <DetailRating rating={props.starPoint}/>
                            <div className={"seller_id"}>외길물산(주)</div>
                            <div className={"registration_date"}>{props.date}</div>
                        </div>
                    </div>

                    {/*<div className={"review_img"}></div>*/}

                    <div className={"text-md-start"}>
                        <div className={"review_content"}>
                            <ReviewText disabled={true}>{props.content}</ReviewText>
                        </div>
                    </div>

                    <div className={"text-md-start"}>
                        <div className={"review_useful"}>
                            <p>이 상품평이 도움이 되었나요?</p>
                            <button className={"btn btn-primary"}>네</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className={"btn btn-primary"}>아니요</button>
                            <p className={"my-2"}>총 {props.helpful}명의 회원이 도움이 되었습니다.</p>
                        </div>
                    </div>
                    <hr/>
                </article>
            </li>
        </ul>
    );
}


export default Review;



















