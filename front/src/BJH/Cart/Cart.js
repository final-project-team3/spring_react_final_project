// import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import {useLocation} from "react-router-dom";
// // import Header from "../../components/Nav/Header";
// // import Footer from "../../components/Footer/Footer";
// import axios from "axios";
//
// // import CartList from "./CartList";
//
// function Cart() {
//     // if (localStorage.getItem("token") === null) {
//     //     alert("로그인 후 이용해 보세요! 🛒");
//     //     document.location.href = "/login";
//     // }
//
//     return (
//         <>
//             {/*<Header />*/}
//             <DimmedBackground/>
//             <ContentDiv>
//                 <CartPage>
//                     <CartPageHeader>
//                         <PageHeaderTitle>장바구니</PageHeaderTitle>
//                         <PageHeaderSteps>
//                             <PageHeaderStepsLi className="active">
//                                 <em>1.</em>
//                                 <span>장바구니</span>
//                                 <Icon className="fas fa-chevron-right"></Icon>
//                             </PageHeaderStepsLi>
//
//                             <PageHeaderStepsLi>
//                                 <em>2.</em>
//                                 <span>주문결제</span>
//                                 <Icon className="fas fa-chevron-right"></Icon>
//                             </PageHeaderStepsLi>
//
//                             <PageHeaderStepsLi>
//                                 <em>3.</em>
//                                 <span>주문완료</span>
//                             </PageHeaderStepsLi>
//                         </PageHeaderSteps>
//                     </CartPageHeader>
//                     <div className="b_order_cart_wrap">
//
//                         <div className="c_order_cart_list">
//                             <div className="empty_cart">
//                                 <p className="txt">장바구니에 담긴 상품이 없습니다.</p>
//
//                                 <p className="sub_txt">로그인하시면 상품을 확인할 수 있습니다.</p>
//                                 <div data-log-actionid-area="login" data-is-ab-send="1">
//                                     <a type="button" className="c_order_btn"
//                                        data-log-actionid-label="login" onClick="rakeLog.sendRakeLog(this);">로그인</a>
//                                 </div>
//
//                             </div>
//                         </div>
//
//                     </div>
//
//                     {/*<CartList />*/}
//
//                     {/* <CartEmpty /> */}
//                 </CartPage>
//             </ContentDiv>
//             {/*<Footer />*/}
//         </>
//     );
// }
//
// const Icon = styled.i`
//   margin: 0 8px;
//   display: inline-block;
//   font: normal normal normal 14px/1;
//   font-size: inherit;
//   text-rendering: auto;
//   -webkit-font-smoothing: antialiased;
// `;
//
// const PageHeaderStepsLi = styled.li`
//   &.active {
//     color: #333333;
//   }
//   display: inline-block;
//   font-size: 16px;
//   font-weight: bold;
//   color: #d9d9d9;
// `;
//
// const PageHeaderSteps = styled.ol`
//   flex: 1 auto;
//   text-align: right;
// `;
//
// const PageHeaderTitle = styled.h2`
//   flex: 1 auto;
//   text-align: left;
//   font-size: 24px;
//   font-weight: bold;
//   vertical-align: middle;
//   color: #333333;
// `;
//
// const CartPageHeader = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   padding-bottom: 4px;
//   margin-bottom: 32px;
//   padding-top: 40px;
//   vertical-align: middle;
// `;
//
// const CartPage = styled.div`
//   width: 800px;
//   margin: 0 auto;
// `;
//
// const ContentDiv = styled.div`
//   padding-bottom: 64px;
//   background: #fdfdfd;
// `;
//
// const DimmedBackground = styled.div`
//   display: none;
//   position: fixed;
//   width: 100%;
//   height: 100vh;
//   background-color: #333;
//   opacity: 0.5;
//   z-index: 150;
// `;
//
// export default Cart;


import React from "react";

function Cart(props) {
    return (
        <div className={"container"}>
            <h1>장바구니</h1>
        {/*    ~~~~   */}

        </div>
    )
}

export default Cart;