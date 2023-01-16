import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";
import Header from "./Header";
import Payment from "./Payment";


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