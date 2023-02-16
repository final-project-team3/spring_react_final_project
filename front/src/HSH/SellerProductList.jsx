import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {default as Axios} from "axios";
import ListItem from "./ListItem";

const SellerProductList = () => {

    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })
    const {productSellerBusinessName} = useParams();
    const [sellerInfo, setSellerInfo] = useState();
    const [sellerProductList, setSellerProductList] = useState([]);

    useEffect(() => {
        const getSellerProductList = async () => {
            const {data} = await axios.get('/getSellerProductList', {
                params: {
                    productSellerBusinessName: productSellerBusinessName
                }
            });
            console.log(data);
            setSellerInfo(data.sellerInfo);
            setSellerProductList(data.sellerProductList);
        }
        getSellerProductList();
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