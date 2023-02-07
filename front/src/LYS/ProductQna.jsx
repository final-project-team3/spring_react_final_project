import React, {useEffect, useState} from "react";
import './ProductQna.css';
import axios from "axios";
import {useParams} from "react-router-dom";

function ProductQna(props) {
    const {productNum} = useParams();
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getProductInfoFromDetail", {
                params: {
                    productNum: productNum,
                }
            })
            setProductInfo(data.productInfo);
        }
    }, [])

    return (
        <li className="product-qna tab-contents__content">
            <div id="prod-inquiry-list" className="prod-tab">

                <div className="prod-inquiry-notice__container"></div>

                <div className="prod-inquiry-list__container">

                    <div className="prod-inquiry-items">

                        <div className="prod-inquiry-item">
                            <em className="prod-inquiry-item__label">질문</em>
                            <div className="prod-inquiry-item__wrap">
                                <strong className="prod-inquiry-item__author"></strong>
                                <div
                                    className="prod-inquiry-item__selected-option">{`${productInfo?.productName}`}
                                    &nbsp;&nbsp;{`${productInfo?.productSellerBusinessName}`}
                                </div>
                                <div className="prod-inquiry-item__userId">{props.userId}</div>
                                <div className="prod-inquiry-item__content">{props.qnaContent}
                                </div>
                                <div className="prod-inquiry-item__time">{props.qnaRegistrationDate}</div>
                            </div>

                            <div className="prod-inquiry-item__reply">
                                <i className="prod_inquiry-item__reply__icon"></i>
                                <div className="prod-inquiry-item__reply__wrap">
                                    <div className={"row"}>
                                        <strong className="prod-inquiry-item__reply__author col-6">{`${productInfo?.productSellerBusinessName}`}</strong>
                                        <p className={"col-6"}
                                           style={{alignItems: "end", margin: 0, padding: 0}}>{props.qnaState}</p>
                                    </div>
                                    <div className="prod-inquiry-item__reply__content">{props.qnaAnswer}</div>
                                    <div
                                        className="prod-inquiry-item__reply__time">{props.qnaAnswerRegistrationDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductQna;