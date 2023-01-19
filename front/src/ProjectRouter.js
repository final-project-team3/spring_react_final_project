import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import PaymentPage from "./GJY/PaymentPage";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Header from "./Header";
import LoginPage from "./BJH/LoginPage";
import TestLoginPage from "./BJH/TestLoginPage";
import NewLogin from "./BJH/NewLogin";
import UserMyPage from "./BJH/UserMyPage";
import SellerMyPage from "./BJH/SellerMyPage";
import MasterPage from "./BJH/MasterPage";
import OrderListPage from "./GJY/OrderListPage";
import Cart from "./BJH/Cart/Cart";
import ProductRegisterPage from "./GJY/ProductRegisterPage";

const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    {/*HSH*/}
                    <Route path={'productDetail'} element={<ProductDetail/>}/>
                    <Route path={'productList'} element={<ProductList/>}/>
                    {/*HSH*/}

                    {/*LYS*/}
                    <Route path="/userSignUp" element={<UserSignUp/>}/>
                    <Route path="/sellerSignUp" element={<SellerSignUp/>}/>
                    {/*LYS*/}

                    {/*GJY*/}
                    <Route path={'/payment'} element={<PaymentPage/>}/>
                    <Route path={'/orderList'} element={<OrderListPage/>}/>
                    <Route path={'/productR'} element={<ProductRegisterPage/>}/>
                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'/login'} element={<NewLogin/>}/>
                    <Route path={'usermypage'} element={<UserMyPage/>}/>
                    <Route path={'sellermypage'} element={<SellerMyPage/>}/>
                    <Route path={'masterpage'} element={<MasterPage/>}/>
                    {/*<Route path={'loginPage'} element={<LoginPage/>}/>*/}
                    <Route path={'cart'} element={<Cart/>}/>
                    {/*BJH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;