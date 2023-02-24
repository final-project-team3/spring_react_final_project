import DetailRating from "./DetailRating";
import styled from "styled-components";
import React, {useState} from "react";
import './MyReview.css';
import {useNavigate} from "react-router-dom";
import myReviewList from "./MyReviewList";
import $ from 'jquery';

function MyReview(props) {
    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })
    const navi = useNavigate();

    const [btnCheck, setBtnCheck] = useState("");

    const reviewDelete = async () => {
        await axios.post("/deleteMyReview", {
            reviewNum: $("#reviewNum").val()
        })
        // setBtnCheck('/deleteMyReview');
        alert("삭제 되었습니다.");
        navi("/myReview");
    }



    const reviewUpdate = async () => {
        await axios.post("/updateMyReview", {
            reviewNum: $("#reviewNum").val(),
            reviewContent: $("#reviewContent").val()
        })
        // setBtnCheck('/updateMyReview');
        alert("수정 되었습니다.");
        navi("/myReview");

    }

    return (
        // <form id={props.key} action={btnCheck} method={'post'} style={{padding: 0, margin: 0}}>
        <form id={props.key} style={{padding: 0, margin: 0}}>
            <div className={'mt-5'}>
                <div className="reviewContainer" style={{paddingLeft: 30}}>
                    <ul>
                        <li>
                            <article>
                                <div className="text-md-start">
                                    <div className={"review_info"}>
                                        {/*<div className={"deleted_yn"}>삭제여부 : {props.deletedYn}</div>*/}
                                        <div className={"review_num"}>리뷰번호 : {props.reviewNum}</div>
                                        <input hidden={true} id={"reviewNum"} name={'reviewNum'}
                                               value={props.reviewNum}/>
                                        <div className={"reviewer_id"}>{props.id}</div>
                                        <DetailRating rating={props.starPoint}/>
                                        <div className={"product_num"}>제품번호 : {props.productNum}</div>
                                        {/*원래는 제품명이 나왔으면 하지만 테이블이 제품번호라...어떻게 해결??*/}
                                        <div className={"registration_date"}>{props.date}</div>
                                    </div>
                                </div>

                                {/*<div className={"review_img"}></div>*/}

                                <div className={"text-md-start"}>
                                    <div className={"review_content"}>
                                        <ReviewText name={'reviewContent'} id={"reviewContent"}
                                                    defaultValue={props.content}></ReviewText>
                                    </div>
                                </div>

                                <div className={"text-md-start"}>
                                    <div className={"review_useful"}>
                                        <div className={"div1 col-6"}>
                                            <p className={"col-6 my-2"}>총 {props.helpful}명의 회원이 도움이 되었습니다.</p>
                                            <div className={"ui-button col-6 my-2"}>
                                                <UpdateButton onClick={reviewUpdate} className={"btn btn-primary"}
                                                              type={"button"}>리뷰
                                                    수정</UpdateButton>&nbsp;&nbsp;
                                                <DeleteButton onClick={reviewDelete} className={"btn btn-danger"}
                                                              type={"button"}>리뷰
                                                    삭제</DeleteButton>
                                            </div>
                                        </div>
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

const UpdateButton = styled.button`
    width: 90px;
    height: 35px;
    padding: 0px;
    margin: 0px;
`

const DeleteButton = styled.button`
    width: 90px;
    height: 35px;
`

const ReviewText = styled.textarea`
    width: 50%;
    height: 6.25em;
    resize: none;
`;

export default MyReview;