import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const SellerProductList = () => {
    const {productSellerBusinessName} = useParams();
    const [sellerInfo, setSellerInfo] = useState();
    const [sellerProductList, setSellerProductList] = useState([]);

    useEffect(() => {
        return async () => {
            const {data} = await axios.get('http://localhost:8080/getSellerProductList', {
                params: {
                    productSellerBusinessName: productSellerBusinessName
                }
            });
            console.log(data);
            setSellerInfo(data.sellerInfo);
            setSellerProductList(data.sellerProductList);
        }
    }, [])

    return (
        <div>
            <div className={'container-fluid shadow py-4'}>
                <div className={'d-flex justify-content-around'}>
                    <div>
                        <h2 className={'fw-bold'}>{productSellerBusinessName}</h2>
                    </div>
                    <div className={'d-flex align-content-center'}>
                        <img width={30} height={30} src={"../Img/Bjh/wish.png"}/>
                        <h3 className={"ms-2"}>{sellerInfo?.sellerInterestedCount}</h3>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={"row"}>
                    {sellerProductList.map((product, index) => {
                        return (
                            <div key={index} className={'mt-5 col-3'}>
                                <Link to={`/productDetail/${product.productNum}`}>
                                    <img  width={300} height={450} src={product.productImg}/>
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
    );
};

export default SellerProductList;