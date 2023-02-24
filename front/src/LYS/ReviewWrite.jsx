import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import './MyReview.css';
import './ReviewWrite.css';
import $ from "jquery";
import swal from 'sweetalert';
import RegistRating from "./RegistRating";

function ReviewWrite() {
    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })
    const navi = useNavigate();
    const location = useLocation();
    const productInfo = location.state.productInfo;

    const [reviewContent, setReviewContent] = useState();
    const [score, setScore] = useState(0);
    console.log(productInfo);

    const writeReview = async () => {
        var content = $('#reviewContent').val();
        if (score == 0) {
            swal("별점을 입력해주세요");
        } else if (content.length < 10) {
            swal("리뷰를 10자 이상 입력해주세요");
        } else {
            await axios.post("/writeMyReview", {
                userId:$("#userId").val(),
                productNum:$("#productNum").val(),
                reviewContent:$("#reviewContent").val(),
                reviewStarPoint:$("reviewStarPoint").val(),
                orderNum:$("#orderNum").val()
            })
            alert("리뷰가 등록 되었습니다.");
            navi("/myReview")
            // $("#btn-write").attr("type", "submit");
            // $("#btn-write").onclick();
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
                        }} className="text-center grade">마이페이지
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center name">리뷰 작성페이지
                        </div>
                    </div>
                </div>
            </div>

            {/*<form action={"/writeMyReview"} method={'post'} style={{padding: 0, margin: 0}}>*/}
            <form style={{padding: 0, margin: 0}}>
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
                                                        <span className="review-intake-form__text">상품 리뷰</span>
                                                    </div>
                                                    <div className="review-intake-form__subtitle">
                                                        <span className="review-intake-form__sub-text">이 상품에 대해서 얼마나 만족하시나요?</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="review-intake-form__rating">
                                                    <div className="review-table row">
                                                        <div
                                                            className="review-table__cell review-intake-head title col-2">
                                                            <img src={productInfo.productImg} width="200"/>
                                                        </div>
                                                        <div className="review-table__cell col-10">
                                                            <div
                                                                className="review-intake-form__product-title"
                                                                style={{fontSize: 20}}>{`${productInfo.productName}, ${productInfo.productOrderQuantity}개`}</div>
                                                            <div
                                                                className="my-review__modify__star js_reviewModifyStarContainer">
                                                                <div className="my-review__modify__star__content">
                                                                    <RegistRating setScore={setScore}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="review-intake-form__detail-review">
                                                    <div className="my-review__modify__review">
                                                        <div className="my-review__modify__field__title">상세리뷰</div>
                                                        <div className="my-review__modify__review__content">
                                                            <div
                                                                className="my-review__modify__review__content__text-wrap">
                                                            <textarea name={'reviewContent'} id={'reviewContent'}
                                                                      style={{fontSize: 20}}
                                                                      value={reviewContent}
                                                                      className="my-review__modify__review__content__text-area"
                                                                      placeholder="다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 남겨주세요. (10자 이상)"></textarea>
                                                            </div>
                                                            <div className="my-review__flip-write-tooltip" style={{
                                                                perspective: 28,
                                                                position: "relative",
                                                                transformStyle: "preserve-3d"
                                                            }}>
                                                                상품 품질과 관계 없는 내용은 비공개 처리될 수 있습니다.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"text-md-start"}>
                                            <div className={"review_content"}>
                                                <input hidden={true} name={'userId'} id={'userId'}
                                                       value={productInfo.userId}/>
                                                <input hidden={true} name={'productNum'} id={'productNum'}
                                                       value={productInfo.productNum}/>
                                                <input hidden={true} name={'reviewStarPoint'} id={'reviewStarPoint'}
                                                       value={score}/>
                                                <input hidden={true} name={'orderNum'} id={'orderNum'}
                                                       value={productInfo.orderNum}/>
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
;

const WriteButton = styled.button`
width: 90px;
height: 35px;
padding: 0px;
margin: 0px;
`

// const ReviewText = styled.textarea`
// width: 50%;
// height: 6.25em;
// resize: none;
// `;

export default ReviewWrite;