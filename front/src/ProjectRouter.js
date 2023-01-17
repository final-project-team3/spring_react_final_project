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
                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'newlogin'} element={<NewLogin/>}/>
                    <Route path={'testloginpage'} element={<TestLoginPage/>}/>
                    <Route path={'loginPage'} element={<LoginPage/>}/>
                    {/*BJH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRouter;