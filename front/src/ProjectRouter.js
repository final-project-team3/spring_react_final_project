import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import PaymentPage from "./GJY/PaymentPage";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Main from "./Main";
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

const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}>
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
                    <Route path={"/productR"} element={<ProductRegisterPage/>}/>
                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'login'} element={<NewLogin/>}/>

                    <Route path={'userMyPage'} element={<UserMyPage/>}/>
                    <Route path={'sellerMyPage'} element={<SellerMyPage/>}/>
                    <Route path={'masterPage'} element={<MasterPage/>}/>

                    <Route path={'loginPage'} element={<LoginPage/>}/>

                    <Route path={'cart'} element={<Cart/>}/>

                    <Route path={'searchId'} element={<SearchId/>}/>
                    <Route path={'sellerSearch'} element={<SellerSearch/>}/>
                    <Route path={'pwSearch'} element={<PwSearch/>}/>
                    {/*BJH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;