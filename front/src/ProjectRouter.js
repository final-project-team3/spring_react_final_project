import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import Payment from "./Payment";
import UserSignUp from "./LYS/UserSignUp";
import SellerSignUp from "./LYS/SellerSignUp";
import Header from "./Header";

function Header() {
  return null;
}

const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    {/*HSH*/}
                    <Route path={'/productDetail'} element={<ProductDetail/>}/>
                    <Route path={'/productList'} element={<ProductList/>}/>
                    {/*HSH*/}

                    {/*LYS*/}
                    <Route path="/userSignUp" element={<UserSignUp/>}/>
                    <Route path="/sellerSignUp" element={<SellerSignUp/>}/>
                    {/*LYS*/}

                    {/*GJY*/}
                      <Route path={'/payment'} element={<Payment/>}/>
                    {/*GJY*/}

                    {/*BJH*/}

                    {/*BJH*/}

                    {/*LSH*/}

                    {/*LSH*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRouter;