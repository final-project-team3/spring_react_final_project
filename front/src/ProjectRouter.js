import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import PaymentPage from "./GJY/PaymentPage";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Header from "./HSH/Header";
import NewLogin from "./BJH/NewLogin";
import UserMyPage from "./BJH/UserMyPage";
import SellerMyPage from "./BJH/SellerMyPage";
import MasterPage from "./BJH/MasterPage";
import OrderListPage from "./GJY/OrderListPage";
import Cart from "./BJH/Cart/Cart";
import Main from "./HSH/Main";
import SearchMain from "./BJH/Search/SearchMain";
import Test from "./GJY/Test";
import UserJoinResult from "./BJH/UserJoinResult";
import SellerJoinResult from "./BJH/SellerJoinResult";
import Search from "./HSH/Search";
import FileUpload from "./GJY/FileUpload";
import Footer from "./BJH/Footer";
import ProductRegisterPage2 from "./GJY/ProductRegisterPage2";
import OptionTable from "./GJY/OptionTable";
import InputSample from "./GJY/InputSample";
import OptionList from "./GJY/OptionList";
import GwakApp from "./GJY/GwakApp";
import LikeUserList from "./BJH/UserList/LikeUserList";
import UserInfoUpdate from "./LYS/UserInfoUpdate";
import SellerInfoUpdate from "./LYS/SellerInfoUpdate";
import OrderUserList from "./BJH/UserList/OrderUserList";
import PayUserList from "./BJH/UserList/PayUserList";
import MyReviewList from "./LYS/MyReviewList";
import ReviewWrite from "./LYS/ReviewWrite";
import Login from "./HSH/Login";
import Category from "./HSH/Category";
import FireBaseExample from "./GJY/FireBaseExample";
import SellerProductList from "./HSH/SellerProductList";
import ProductEditPage from "./GJY/ProductEditPage";
import QnaWrite from "./LYS/QnaWrite";
import QnaAnswerWrite from "./LYS/QnaAnswerWrite";
import AnswerWritePage from "./LYS/AnswerWritePage";
import "./Fonts/Font.css";
import "./App.css";
import LikeUserListDetail from "./BJH/UserList/LikeUserListDetail";
import LikeProduct from "./BJH/UserList/LikeProduct";
import UserLikeStore from "./BJH/UserList/UserLikeStore";
import MyQnaList from "./LYS/MyQnaList";
import NotExist from "./LYS/NotExist";
import MyProductList from "./BJH/UserList/MyProductList";
import ProductSelect from "./HSH/ProductSelect";


const ProjectRouter = () => {

    let role = sessionStorage.getItem("role");
    console.log(role);
    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    let sellerInfo = sessionStorage.getItem("sellerInfo");
    sellerInfo = JSON.parse(sellerInfo);

    console.log(userInfo);
    console.log(sellerInfo);

    return (
        <BrowserRouter>
            {/* 셀러 */}
            <Routes>{role == "SELLER" ? <Route path={'/'} element={<Header/>}>
                    <Route index path={"/"} element={<SellerMyPage/>}/>
                    <Route path={"/mypage"} element={<SellerMyPage/>}/>
                    <Route path="/infoUpdate"
                           element={role == null ? <Login/> : role == "USER" ? <UserInfoUpdate/> : <SellerInfoUpdate/>}/>
                    <Route path={"/OptionList"} element={<OptionList/>}/>
                    <Route path={"/GwakApp"} element={<GwakApp/>}/>
                    <Route path={"/FireBaseExample"} element={<FireBaseExample/>}/>
                    <Route path={"/ProductEditPage"} element={<ProductEditPage/>}/>
                    <Route path={'/likeUserListDetail/:productNum'} element={<LikeUserListDetail/>}/>
                    <Route path={'/likeUserList'} element={<LikeUserList/>}/>
                    <Route path={'/orderUserList'} element={<OrderUserList/>}/>
                    <Route path={'/payUserList'} element={<PayUserList/>}/>
                    <Route path={"/productR2"} element={<ProductRegisterPage2/>}/>
                    <Route path={'/footer'} element={<Footer/>}/>
                    <Route path="/qnaAnswerWrite" element={<QnaAnswerWrite/>}/>
                    <Route path={"/answerWritePage"} element={<AnswerWritePage/>}/>
                    <Route path={'*'} element={<NotExist/>}/>
                    <Route path={'/myProductList'} element={<MyProductList/>}/>
                    <Route path={'/productSelect'} element={<ProductSelect/>}/>
                </Route> :

                // 유저, 비로그인
                <Route path={'/'} element={<Header/>}>
                    {/*HSH*/}
                    <Route index element={<Main/>}/>
                    <Route path={'/productSellerPage/:productSellerBusinessName'} element={<SellerProductList/>}/>
                    <Route path={'/productDetail/:productNum'} element={<ProductDetail/>}/>
                    <Route path={'/productList'} element={<ProductList/>}/>
                    <Route path={'/search/:searchContent'} element={<Search/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/category/:bigKind/:smallKind'} element={<Category/>}/>
                    <Route path={'/LikeProduct'} element={<LikeProduct/>}/>
                    <Route path={"myQna"} element={<MyQnaList/>}/>
                    {/*HSH*/}

                    {/*LYS*/}
                    <Route path="/userSignUp" element={<UserSignUp/>}/>
                    <Route path="/sellerSignUp" element={<SellerSignUp/>}/>
                    <Route path="/infoUpdate"
                           element={role == null ? <Login/> : role == "USER" ? <UserInfoUpdate/> :
                               <SellerInfoUpdate/>}/>
                    <Route path="/myReview" element={<MyReviewList/>}/>
                    <Route path="/reviewWrite" element={<ReviewWrite/>}/>
                    <Route path={"/qnaWrite/:productNum"} element={<QnaWrite/>}/>
                    {/*LYS*/}

                    {/*GJY*/}
                    <Route path={'/payment'} element={<PaymentPage/>}/>
                    <Route path={'/orderList'} element={<OrderListPage/>}/>
                    <Route path={"/OptionTable"} element={<OptionTable/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path={"/fu"} element={<FileUpload/>}/>
                    <Route path={"/InputSample"} element={<InputSample/>}/>


                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'/myPage'}
                           element={role == null ? <Login/> : role == "USER" ? <UserMyPage/> : < SellerMyPage/>}/>
                    {/*<Route path={'masterPage'} element={<MasterPage/>}/>*/}

                    <Route path={'/cart'} element={<Cart/>}/>

                    <Route path={'/searchMain'} element={<SearchMain/>}/>
                    <Route path={'/UserJoinResult'} element={<UserJoinResult/>}/>
                    <Route path={'/SellerJoinResult'} element={<SellerJoinResult/>}/>
                    <Route path={'/footer'} element={<Footer/>}/>

                    <Route path={'/UserLikeStore'} element={<UserLikeStore/>}/>
                    {/*BJH*/}
                    <Route path={'*'} element={<NotExist/>}/>
                </Route>
            }
            </Routes>
        </BrowserRouter>

    );
}

export default ProjectRouter;