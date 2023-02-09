import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";

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
                            <ListItem index={index} productNum={product.productNum} productName={product.productName}
                                      productImg={product.productImg}
                                      productSellerBusinessName={product.productSellerBusinessName}
                                      productPrice={product.productPrice}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SellerProductList;