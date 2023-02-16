import styled from "styled-components";
import React, {useState} from "react";
import './MyReview.css';
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function MyReview(props) {

    function resize(obj) {
        obj.style.height = '1px';
        obj.style.height = (12 + obj.scrollHeight) + 'px';
    }

    const [btnCheck, setBtnCheck] = useState("");

    const reviewDelete = () => {
        setBtnCheck('/deleteMyReview');
        alert("삭제 되었습니다.");
    }

    const reviewUpdate = () => {
        setBtnCheck('/updateMyReview');
        alert("수정 되었습니다.");
    }

    // <MyQna key={index} reviewNum={item.qnaNum} id={item.userId}
    //        date={item.qnaRegistrationDate}
    //        content={item.qnaContent} productNum={item.productNum}
    //        state={item.qnaState} answer={item.qnaAnswer}
    //        AnswerRegistrationDate={item.qnaAnswerRegistrationDate}

    return (
        <form id={props.key} action={btnCheck} method={'post'} style={{padding: 0, margin: 0}}>
            <div className={'mt-5'}>
                <div className="reviewContainer" style={{paddingLeft: 30}}>
                    <ul>
                        <li>
                            <article>
                                <div className="text-md-start">
                                    <div className={"review_info"}>
                                        {/*<div className={"deleted_yn"}>삭제여부 : {props.deletedYn}</div>*/}
                                        <div className={"review_num"}>문의번호 : {props.reviewNum}</div>
                                        <input hidden={true} name={'reviewNum'} value={props.reviewNum}/>
                                        <div className={"reviewer_id"}>{props.id}</div>
                                        <div className={"product_num"}>제품번호 : {props.productNum}</div>
                                        {/*원래는 제품명이 나왔으면 하지만 테이블이 제품번호라...어떻게 해결??*/}
                                        <div className={"registration_date"}>{props.date}</div>
                                    </div>
                                </div>

                                {/*<div className={"review_img"}></div>*/}

                                <div className={"text-md-start"}>
                                    <div className={"review_content"}>
                                        <ReviewText onkeydown="resize(this)" onkeyup="resize(this)" name={'reviewContent'} value={props.content}></ReviewText>
                                    </div>
                                </div>

                                <div className={"text-md-start"}>
                                    <div className={"review_content"}>
                                        <div className={"review_num"}>답변 상태 : {props.state}</div>
                                        <div className={"review_num"}>{props.AnswerRegistrationDate}</div>
                                        <ReviewText onkeydown="resize(this)" onkeyup="resize(this)" name={'reviewContent'} value={props.answer}></ReviewText>
                                    </div>
                                </div>
                                <hr/>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    );
}


const ReviewText = styled.textarea`
    width: 50%;
    min-height: 5rem;
    resize: none;
    height: 120px;
    padding: 5px 0 0 5px; 
`;

export default MyReview;