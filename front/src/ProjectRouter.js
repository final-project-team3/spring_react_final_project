import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./HSH/ProductDetail";
import ProductList from "./HSH/ProductList";


const ProjectRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ProductDetail/>}>
                    {/*HSH*/}
                    <Route path={'/productDetail'} element={<ProductDetail/>}/>
                    <Route path={'/productList'} element={<ProductList/>}/>
                    {/*HSH*/}

                    {/*LYS*/}

                    {/*LYS*/}

                    {/*GJY*/}

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