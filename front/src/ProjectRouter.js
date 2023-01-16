import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import Payment from "./GJY/Payment";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Header from "./Header";
import LoginPage from "./BJH/LoginPage";

function Header() {
  return null;
}

const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ProductDetail/>}>
                <Route path={'/'} element={<Header/>}>
                <Route path={'/'} element={<LoginPage/>}>
                    {/*HSH*/}
                    <Route path={'productDetail'} element={<ProductDetail/>}/>
                    <Route path={'productList'} element={<ProductList/>}/>
                    {/*HSH*/}

                    {/*LYS*/}
                    <Route path="/userSignUp" element={<UserSignUp/>}/>
                    <Route path="/sellerSignUp" element={<SellerSignUp/>}/>
                    {/*LYS*/}

                    {/*GJY*/}
                      <Route path={'/payment'} element={<Payment/>}/>
                    {/*GJY*/}

                    {/*BJH*/}
                    <Route path={'loginPage'} element={<LoginPage/>}/>
                    {/*BJH*/}

                    {/*LSH*/}

                    {/*LSH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRouter;