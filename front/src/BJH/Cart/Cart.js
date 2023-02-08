import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
// import Header from "../../components/Nav/Header";
// import Footer from "../../components/Footer/Footer";
import axios from "axios";

// import CartList from "./CartList";

function Cart() {

    return (
        <>
            {/*<Header />*/}
            <DimmedBackground/>
            <ContentDiv>
                <CartPage>
                    <CartPageHeader>
                        <PageHeaderTitle>장바구니</PageHeaderTitle>
                        <PageHeaderSteps>
                            <PageHeaderStepsLi className="active border ps-2 pt-2 pe-0 pb-2 rounded-3">
                                <em>1.</em>
                                <span className={'pe-0'}>장바구니</span>
                                <Icon className="fas fa-chevron-right"></Icon>
                            </PageHeaderStepsLi>

                            <PageHeaderStepsLi className="active border ps-2 pe-0 pt-2 pb-2 rounded-3">
                                <em>2.</em>
                                <span>주문결제</span>
                                <Icon className="fas fa-chevron-right"></Icon>
                            </PageHeaderStepsLi>

                            <PageHeaderStepsLi className="active border p-2 pe-3 rounded-3">
                                <em>3.</em>
                                <span>주문완료</span>
                            </PageHeaderStepsLi>
                        </PageHeaderSteps>
                    </CartPageHeader>
                    <hr/>
                    <CartPageBody>
                        <div className="b_order_cart_wrap">
                            <div className="c_order_cart_list row">
                                <div className="empty_cart col-8">
                                    <h2>씨게이트 공식총판</h2>
                                    <hr/>
                                    <div className={'row'}>
                                        <div className={'col-2'}>
                                            <img width={120} height={120} src={"Img/logo.png"}/>
                                        </div>
                                        <div className={'col-6 border-end border-dark border-opacity-25'}>
                                            <div>
                                            <p>공식수입사 우체국특송 바라쿠다 4TB HDD 데스크탑용 ST4000DM004 하드디스크</p>
                                            </div>
                                            <div>
                                                <p className={'fw-bold me-2'}>옵션 [한정수량]애니데이 군용핫팩(150g)40개</p>
                                            </div>
                                            <div>
                                                <p style={{
                                                    fontSize:20
                                                }}>1/28(토) 이내 도착예정</p>
                                            </div>
                                        </div>
                                        <div className={'col-2 border-end border-dark border-opacity-25'}>
                                            <p className={'text-center'}>11,200,000원</p>
                                        </div>
                                        <div className={'col-2 '}>
                                            <div className={'d-flex justify-content-around'}>
                                                <p className={'text-center'}>3,500원</p>
                                                <button className={'btn btn-outline-primary'}>x</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*    <p className="txt">장바구니에 담긴 상품이 없습니다.</p>*/}

                                    {/*    <p className="sub_txt">로그인하시면 상품을 확인할 수 있습니다.</p>*/}
                                    {/*    <div data-log-actionid-area="login" data-is-ab-send="1">*/}
                                    {/*        <a type="button" className="c_order_btn"*/}
                                    {/*           data-log-actionid-label="login" onClick="rakeLog.sendRakeLog(this);">로그인</a>*/}
                                    {/*    </div>*/}
                                </div>
                                <div className={'col-4 border-start border-dark border-opacity-25'}>
                                    <div>
                                        <h3 style={{
                                            fontSize: 30
                                        }} className={'ms-2'}>결제 예정금액</h3>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <h5>상품금액</h5>
                                        <h5>1,000,000원</h5>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <h5>배송비(선결제)</h5>
                                        <h5>1,000,000원</h5>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <h5>할인금액</h5>
                                        <h5>1,000,000원</h5>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <h5>즉시할인</h5>
                                        <h5>1,000,000원</h5>
                                    </div>
                                    <hr/>
                                    <div className={'d-flex justify-content-between'}>
                                        <h5>합계</h5>
                                        <h5>4,000,000원</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CartPageBody>

                    {/*<CartList />*/}

                    {/* <CartEmpty /> */}
                </CartPage>
            </ContentDiv>
            {/*<Footer />*/}
        </>
    );
}

const Icon = styled.i`
  margin: 0 8px;
  display: inline-block;
  font: normal normal normal 14px/1;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const PageHeaderStepsLi = styled.li`
  &.active {
    color: #333333;
  }
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #d9d9d9;
`;

const PageHeaderSteps = styled.ol`
  flex: 1 auto;
  text-align: right;
`;

const PageHeaderTitle = styled.h2`
  flex: 1 auto;
  text-align: left;
  font-size: 50px;
  font-weight: bold;
  vertical-align: middle;
  color: #333333;
`;

const CartPageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  margin-bottom: 32px;
  padding-top: 40px;
  vertical-align: middle;
`;

const CartPageBody = styled.div`
  position: relative;
  align-items: center;
  padding-bottom: 4px;
  margin-bottom: 32px;
  padding-top: 40px;
  vertical-align: middle;
`;

const CartPage = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const ContentDiv = styled.div`
  padding-bottom: 64px;
  background: #fdfdfd;
`;

const DimmedBackground = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 150;
`;

export default Cart;