import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useLocation, useParams} from "react-router-dom";
import $ from "jquery";
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function AnswerWritePage(props) {
    const location = useLocation();
    const qnaInfo = location.state.qnaInfo;
    console.log(qnaInfo?.qnaContent);

    const answerWrite = () => {
        var qnaAnswer = $('#qnaAnswer').val();

        if (qnaAnswer == '') {
            alert("답변을 입력해 주세요.");
            $("#btn-write").attr("type", "button");
            $("#btn-write").onclick();
        } else {
            alert("답변 완료 되었습니다.");
            $("#btn-write").attr("type", "submit");
            $("#btn-write").onclick();
        }
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
                        }} className="text-center name">문의 답변 페이지
                        </div>
                    </div>
                </div>
            </div>

            <form action={"/answerWrite"} method={'post'} style={{padding: 0, margin: 0}}>
                <input hidden value={qnaInfo.qnaNum} name={"qnaNum"}/>
                <div className={'mt-5'}>
                    <div className="reviewContainer">
                        <ul>
                            <li>
                                <article>
                                    <div className={"product-review _product-review-container"}>
                                        <div className={"my-review__modify js_registerContainer"}>
                                            <div className={"review-intake-form"}>
                                                <div className="review-intake-form__head">
                                                    <div className="review-intake-form__title">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/768/768821.png"
                                                             style={{width: 50, margin: 10}}
                                                             className="review-intake-form__logo"/>
                                                        <span className="review-intake-form__text">문의 답변</span>
                                                    </div>
                                                    <div className="review-intake-form__subtitle">
                                                        <span
                                                            className="review-intake-form__sub-text">아래의 문의 사항에 대한 답변을 작성해주세요.</span>
                                                    </div>
                                                </div>

                                                <li className="product-qna tab-contents__content">
                                                    <div id="prod-inquiry-list" className="prod-tab">
                                                        <div className="prod-inquiry-items">
                                                            <div className="prod-inquiry-item row">
                                                                <img className="prod-inquiry-item__img col-2"
                                                                     src={`${qnaInfo?.productImg}`}></img>
                                                                <div className="prod-inquiry-item__wrap col-10">
                                                                    <strong
                                                                        className="prod-inquiry-item__author"></strong>
                                                                    <div
                                                                        className="prod-inquiry-item__selected-option">{`${qnaInfo?.productName}`}</div>
                                                                    <div
                                                                        className="prod-inquiry-item__userId">{`${qnaInfo?.userId}`}</div>
                                                                    <div
                                                                        className="prod-inquiry-item__content">{`${qnaInfo?.qnaContent}`}</div>
                                                                    <div
                                                                        className="prod-inquiry-item__time">{`${qnaInfo?.qnaRegistrationDate}`}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <br/>
                                                <div className="review-intake-form__detail-review">
                                                    <div className="my-review__modify__review">
                                                        <div className="my-review__modify__field__title">답변 내용</div>
                                                        <div className="my-review__modify__review__content">
                                                            <div
                                                                className="my-review__modify__review__content__text-wrap">
                                                            <textarea name={'qnaAnswer'} id={'qnaAnswer'}
                                                                      style={{fontSize: 20}}
                                                                      className="my-review__modify__review__content__text-area"
                                                                      placeholder="문의 사항에 대한 답변을 작성해주세요."></textarea>
                                                            </div>
                                                            <div className="my-review__flip-write-tooltip" style={{
                                                                perspective: 28,
                                                                position: "relative",
                                                                transformStyle: "preserve-3d"
                                                            }}>
                                                                상품과 관계 없는 내용은 비공개 처리될 수 있습니다.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"text-md-start"}>
                                            <div className={"ui-button col-6 my-2"}>
                                                <WriteButton onClick={answerWrite} id={"btn-write"}
                                                             className={"btn btn-primary"} type="button">답변
                                                    등록</WriteButton>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}

const WriteButton = styled.button`
width: 90px;
height: 35px;
padding: 0px;
margin: 0px;
`

export default AnswerWritePage;