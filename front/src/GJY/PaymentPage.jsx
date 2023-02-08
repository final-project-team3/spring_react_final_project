import React, {useEffect, useState} from "react";
import Popup from "../LYS/Popup";
import styled from "styled-components";
import Pay from "./pay";
import {useLocation} from "react-router-dom";

const styles = {
    vertical: {
        borderLeft: "solid lightgray",
        borderWidth: 0.5,
        height: 260,
        position: "absolute",
        left: "50%",
    },
    btnDiscount: {
        color: "red",
    },
};
const FormBlockHead = styled.label`
  font-size: 14px;
`;

const FormBlock = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const AsteriskRed = styled.em`
  color: #ff4b50;
  font-size: 18px;
  display: inline-block;
`;

const FormBlockBody = styled.div`
  text-align: left;
`;

function PaymentPage(props) {
    const location = useLocation();
    const {productName, productOption} = location.state;

    const [order, setOrder] = useState(0);
    const [delivery, setDelivery] = useState(3000);

    useEffect(() => {
        if (order >= 30000) {
            setDelivery(0);
        }
    }, [order]);

    const discount = 1200;
    const cost = order + delivery - discount;
    // productName = "productName";
    // const productOpt = "productOpt";
    const productCnt = "productCnt";

    return (
        <div className={"container"}>
            <script
                type="text/javascript"
                src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
            <h1 className={"mt-4 text-center"}>결제 페이지</h1>
            <h3 className={"text-start mt-5"}>회원 주문 정보</h3>
            <hr/>
            <div className={"col-6"}>
                <AsteriskRed>*</AsteriskRed>
                <label htmlFor={"name"} className={"ms-1"}>
                    이름
                </label>
                <input
                    type="text"
                    id={"name"}
                    className={"form-control mt-2 "}
                    placeholder={"이름을 입력해주세요."}
                />
            </div>
            <div className={"col-6"}>
                <AsteriskRed>*</AsteriskRed>
                <label htmlFor={"phone"} className={"mt-3 ms-1"}>
                    휴대폰
                </label>
                <input
                    type="tel"
                    id={"phone"}
                    className={"form-control mt-2"}
                    placeholder={"휴대폰번호를 입력해주세요. 하이픈(-) 제외"}
                />
            </div>
            <div className={"col-6"}>
                <FormBlock>
                    <FormBlockHead>
                        <AsteriskRed>*</AsteriskRed> 주소
                    </FormBlockHead>
                    <FormBlockBody>
                        <Popup/>
                        <div className={"row ms-1"}>
                            <input
                                className={"my-1"}
                                id={"sigunguCode"}
                                placeholder={"우편번호"}
                                readOnly={true}
                            />
                        </div>
                        <div className={"row ms-1"}>
                            <input
                                className={"my-1"}
                                id={"jibunAddress"}
                                placeholder={"지번 주소"}
                                readOnly={true}
                            />
                        </div>
                        <div className={"row ms-1"}>
                            <input
                                className={"my-1"}
                                id={"roadAddress"}
                                placeholder={"도로명 주소"}
                                readOnly={true}
                            />
                        </div>
                        <div className={"row ms-1"}>
                            <input
                                className={"my-1"}
                                id={"addressDetail"}
                                placeholder={"상세주소를 입력해주세요."}
                            />
                        </div>
                    </FormBlockBody>
                </FormBlock>
            </div>
            <div className={"col-6"}>
                <label htmlFor={"request"} className={"mt-3"}>
                    배송 메모
                </label>
                <select name={"request"} id={"request"} className={"form-select mt-2"}>
                    <option value="request-1">배송 메모를 선택해 주세요.</option>
                    <option value="request-2">요청사항을 직접 입력합니다.</option>
                    <option value="request-3">배송 전에 미리 연락 바랍니다.</option>
                    <option value="request-4">부재시 경비실에 맡겨 주세요.</option>
                </select>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className={"col-12"}>
                <div className={"row"}>
                    <img src="/logo192.png" alt="제품 사진" className={"col-3"}/>
                    <div className={"col-3 ms-5"}>
                        <div className={"row mb-3"}>
                            <label className={"float-start col-3"} htmlFor={"productName"}>
                                제품명
                            </label>
                            <p id={"productName"} className={"col-3"}>
                                {productName}
                            </p>
                        </div>
                        <div className={"row mb-3"}>
                            <label className={"float-start col-3"} htmlFor={"productOpt"}>
                                옵션
                            </label>
                            <p id={"productOpt"} className={"col-3"}>
                                {productOption}
                            </p>
                        </div>
                        <div className={"row"}>
                            <label className={"float-start col-3"} htmlFor={"productCnt"}>
                                수량
                            </label>
                            <p id={"productCnt"} className={"col-3"}>
                                {productCnt}
                            </p>
                        </div>
                    </div>
                    <div className={"col-6"} style={styles.vertical}>
                        <div className={"row"}>
                            <label className={"float-start col-3"} htmlFor={"order"}>
                                주문금액
                            </label>
                            <p id={"order"} className={"col-3"}>
                                {order} 원
                            </p>
                        </div>
                        <div className={"row mt-3"}>
                            <label className={"float-start col-3"} htmlFor={"delivery"}>
                                배송비
                            </label>
                            <p id={"delivery"} className={"col-5"}>
                                {delivery} 원
                            </p>
                            <p style={styles.btnDiscount}>
                                {delivery !== 0 &&
                                    `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a03만원이상 주문 시 배송비 무료!`}
                            </p>
                        </div>
                        <div className={"row"}>
                            <label htmlFor={"discount"} className={"float-start col-3"}>
                                할인 적용
                            </label>
                            <p id={"discount"} className={"col"}>
                                {discount}원
                                {`\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0`}
                                <button className={"btn btn-success col-2"}>포인트/쿠폰</button>
                            </p>
                        </div>
                        <div className={"row"}>
                            <label className={"float-start col-3"} htmlFor={"cost"}>
                                결제 금액
                            </label>
                            <p id={"cost"} className={"col-3"}>
                                {cost}원
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"d-flex justify-content-end me-5"}>
                    <img src="" alt=""/>

                    <Pay/>
                    <button className={"btn btn-dark fs-3"}>취소</button>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default PaymentPage;
