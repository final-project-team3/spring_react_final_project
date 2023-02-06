import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const SellerProductList = () => {
    const {productSellerBusinessName} = useParams();
    useEffect(() => {
        return async () => {
            const data = axios.get('http://localhost:8080/getSellerProductList', {
                params: {
                    productSellerBusinessName: productSellerBusinessName
                }
            });
            console.log(data);
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
                        <h3 className={"ms-2"}>0</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerProductList;