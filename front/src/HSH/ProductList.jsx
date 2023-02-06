import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function ProductList(props) {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getProductList");
            setProductList(data);
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={"row"}>
                        {productList.map((product, index) => {
                            return (
                                <div key={index} className={'mt-5 col-3'}>
                                    <Link to={`/productDetail/${product.productNum}`}>
                                        <img width={300} src={product.productImg}/>
                                    </Link>
                                    <Link to={`/productSellerPage/${product.productSellerBusinessName}`}>
                                        <h5 className={"my-3"}>{product.productSellerBusinessName}</h5>
                                    </Link>
                                    <Link to={`/productDetail/${product.productNum}`}>
                                        <h5 className={'mb-0'}>{product.productName}</h5>
                                        <h5 className={'mb-4'}>{product.productPrice}</h5>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;