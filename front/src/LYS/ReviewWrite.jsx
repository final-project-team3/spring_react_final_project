import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import './MyReview.css';
import $ from "jquery";
import Swal from "sweetalert2";
import axios from "axios";

function ReviewWrite() {
    const location = useLocation();
    const productInfo = location.state.productInfo;

    const [reviewContent, setReviewContent] = useState();
    const [star, setStar] = useState(5);

    const writeReview = () => {
        var content = $('#reviewContent').val();

        // if (content == '') {
        //     alert("리뷰를 10자 이상 입력해주세요");
        //     $("#btn-write").attr("type", "button");
        // } else {
        //     if (content.length < 10) {
        //         alert("리뷰를 10자 이상 입력해주세요");
        //         $("#btn-write").attr("type", "button");
        //     } else {
        //         alert("리뷰가 등록 되었습니다.");
        //         $("#btn-write").attr("type", "submit");
        //         $("#btn-write").onclick();
        //     }
        // }
        if (content !== '') {
            Swal('success')
                .then(function (){
                    location.href="${pageContext.request.contextPath}/myReview";
                })
        } else {
            Swal('로그인 실패!',"아이디와 비밀번호를 확인해 주세요",'warning');
        };
    }

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
                    <h3 className={"text-start mt-5"}>다음 상품의 리뷰를 작성해 주세요</h3>
                    <hr/>
                    <div>
                        <img src={productInfo.productImg} alt="" width={150}/>
                    </div>
                    <div>
                        <p>{productInfo.productName}</p>
                    </div>
                </div>
            </div>

            <form action={"/writeMyReview"} method={'post'} style={{padding: 0, margin: 0}}>
                <div className={'mt-5'}>
                    <div className="reviewContainer" style={{paddingLeft: 30}}>
                        <ul>
                            <li>
                                <article>
                                    <div className={"text-md-start"}>
                                        <div className={"review_starPoint"}>
                                            <p style={{marginBottom: 0}}>만족도를 평가해 주세요</p>
                                            <label className={"mb-3 text-end"}>
                                                <select
                                                    type={"number"}
                                                    value={star}
                                                    onChange={({target: {value}}) => setStar(Number(value))}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={"text-md-start"}>
                                        <div className={"review_content"}>
                                            <input hidden={true} name={'userId'} id={'userId'}
                                                   value={productInfo.userId}/>
                                            <input hidden={true} name={'productNum'} id={'productNum'}
                                                   value={productInfo.productNum}/>
                                            <input hidden={true} name={'reviewStarPoint'} id={'reviewStarPoint'}
                                                   value={star}/>
                                            <ReviewText name={'reviewContent'} id={'reviewContent'} placeholder={"리뷰를 입력해주세요 (10자 이상)"}
                                                        style={{marginTop: 10, paddingInline: 10}}
                                                        value={reviewContent}>
                                            </ReviewText>
                                        </div>
                                    </div>
                                    <div className={"text-md-start"}>
                                        <div className={"ui-button col-6 my-2"}>
                                            <WriteButton id={"btn-write"} onClick={writeReview}
                                                         className={"btn btn-primary"} type="button">리뷰
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