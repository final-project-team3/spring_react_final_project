import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import PaymentPage from "./GJY/PaymentPage";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Header from "./HSH/Header";
import LoginPage from "./BJH/LoginPage";
import TestLoginPage from "./BJH/TestLoginPage";
import NewLogin from "./BJH/NewLogin";
import UserMyPage from "./BJH/UserMyPage";
import SellerMyPage from "./BJH/SellerMyPage";
import MasterPage from "./BJH/MasterPage";
import OrderListPage from "./GJY/OrderListPage";
import Cart from "./BJH/Cart/Cart";
import SearchId from "./BJH/Search/SearchId";
import SellerSearch from "./BJH/Search/SellerSearch";
import PwSearch from "./BJH/Search/PwSearch";
import ProductRegisterPage from "./GJY/ProductRegisterPage";
import Main from "./HSH/Main";
import IdSearch from "./BJH/Search/IdSearch";
import SearchMain from "./BJH/Search/SearchMain";
import SellerLogin from "./BJH/SellerLogin";
import Test from "./GJY/Test";
import UserJoinResult from "./BJH/UserJoinResult";
import SellerJoinResult from "./BJH/SellerJoinResult";
import Search from "./HSH/Search";
import FileUpload from "./GJY/FileUpload";

const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    {/*HSH*/}
                    <Route index element={<Main/>}/>
                    <Route path={'productDetail'} element={<ProductDetail/>}/>
                    <Route path={'productList'} element={<ProductList/>}/>
                    <Route path={'search'} element={<Search/>}/>
                    {/*HSH*/}

                    {/*LYS*/}
                    <Route path="/userSignUp" element={<UserSignUp/>}/>
                    <Route path="/sellerSignUp" element={<SellerSignUp/>}/>
                    {/*LYS*/}

                    {/*GJY*/}
                    <Route path={'/payment'} element={<PaymentPage/>}/>
                    <Route path={'/orderList'} element={<OrderListPage/>}/>
                    <Route path={"/productR"} element={<ProductRegisterPage/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path={"/fu"} element={<FileUpload/>}/>

                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'login'} element={<NewLogin/>}/>
                    <Route path={'sellerLogin'} element={<SellerLogin/>}/>

                    <Route path={'userMyPage'} element={<UserMyPage/>}/>
                    <Route path={'sellerMyPage'} element={<SellerMyPage/>}/>
                    <Route path={'masterPage'} element={<MasterPage/>}/>

                    <Route path={'cart'} element={<Cart/>}/>

                    <Route path={'searchMain'} element={<SearchMain/>}/>

                    <Route path={'UserJoinResult'} element={<UserJoinResult/>}/>
                    <Route path={'SellerJoinResult'} element={<SellerJoinResult/>}/>
                    {/*BJH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;