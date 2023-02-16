import React, {useEffect, useState} from "react";
import {default as Axios} from "axios";
import {Link} from "react-router-dom";

function ProductList(props) {

    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const getProductList = async () => {
            const {data} = await axios.get("/getProductList");
            setProductList(data);
        }
        getProductList();
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
                                        <h5 className={"my-3 text-center"}>{product.productSellerBusinessName}</h5>
                                    </Link>
                                    <Link to={`/productDetail/${product.productNum}`}>
                                        <h5 className={'mb-0 text-center'}>{product.productName}</h5>
                                        <h5 className={'mb-4 text-center'}>{product.productPrice}</h5>
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