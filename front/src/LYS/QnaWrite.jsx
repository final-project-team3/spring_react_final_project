import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate} from "react-router-dom";
import RegistRating from "./RegistRating";
import styled from "styled-components";
import {default as Axios} from "axios";
import swal from "sweetalert";
import $ from "jquery";
import data from "bootstrap/js/src/dom/data";

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function QnaWrite(props) {
    const {productNum} = useParams();
    const [productInfo, setProductInfo] = useState();
    const [qnaContent, setQnaContent] = useState();

    const navigate = useNavigate();

    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    const location = useLocation();
    const {pathname} = location.state.pathname;

    useEffect(() => {
        const getProductInfoFromDetail = async () => {
            const {data} = await axios.get("/getProductInfoFromDetail", {
                params: {
                    productNum: productNum,
                }
            })
            setProductInfo(data.productInfo);
        }
        getProductInfoFromDetail();
    }, [])

    const writeQna = async () => {
        var content = $('#qnaContent').val();
        if (content.length < 10) {
            swal("문의를 10자 이상 입력해주세요");
        } else {
            alert("문의가 등록 되었습니다.");
            await axios.post("/writeQna", {
                qnaContent: $("#qnaContent").val(),
                productNum: $("#productNum").val(),
                userId: $("#userId").val(),
                qnaTitle: $("#qnaTitle").val(),
            })
            navigate("/" + pathname)
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
                        }} className="text-center name">상품 문의 페이지
                        </div>
                    </div>
                </div>
            </div>

            <form style={{padding: 0, margin: 0}}>
                <input value={pathname} name={"pathname"} hidden={true}/>
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
                                                        <span className="review-intake-form__text">상품 문의</span>
                                                    </div>
                                                    <div className="review-intake-form__subtitle">
                                                        <span
                                                            className="review-intake-form__sub-text">문의 사항을 작성해주세요.</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="review-intake-form__rating">
                                                    <div className="review-table row">
                                                        <div
                                                            className="review-table__cell review-intake-head title col-2">
                                                            <img src={productInfo?.productImg} width="200"/>
                                                        </div>
                                                        <div className="review-table__cell col-10">
                                                            <div
                                                                className="review-intake-form__product-title"
                                                                style={{fontSize: 20}}>{`${productInfo?.productName}`}</div>
                                                            <div
                                                                className="my-review__modify__star js_reviewModifyStarContainer">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="review-intake-form__detail-review">
                                                    <div className="my-review__modify__review">
                                                        <div className="my-review__modify__field__title">문의 내용</div>
                                                        <div className="my-review__modify__review__content">
                                                            <div
                                                                className="my-review__modify__review__content__text-wrap">
                                                            <textarea name={'qnaContent'} id={'qnaContent'}
                                                                      value={qnaContent} style={{fontSize: 20}}
                                                                      className="my-review__modify__review__content__text-area"
                                                                      placeholder="상품에 대한 궁금한 점을 작성해주세요. (10자 이상)"></textarea>
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
                                            <div className={"review_content"}>
                                                <input hidden={true} name={'userId'} id={'userId'}
                                                       value={userInfo.userId}/>
                                                <input hidden={true} name={'productNum'} id={'productNum'}
                                                       value={productNum}/>
                                            </div>
                                        </div>
                                        <div className={"text-md-start"}>
                                            <div className={"ui-button col-6 my-2"}>
                                                <WriteButton id={"btn-write"} className={"btn btn-primary"}
                                                             onClick={writeQna} type="button">문의 등록</WriteButton>
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

export default QnaWrite;