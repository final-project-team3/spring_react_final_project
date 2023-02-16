import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {default as Axios} from "axios";
import $ from "jquery";
import ListItem from "./ListItem";

const Category = () => {
    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })

    const {bigKind, smallKind} = useParams();

    const [categoryData, setCategoryData] = useState([]);

    // 주소 변화를 알기 위함
    const location = useLocation();
    const locationPath = location.pathname;

    useEffect(() => {
        const categoryProductList = async () => {

            const {data} = await axios.get("/categoryProductList", {
                params: {bigKind: bigKind, smallKind: smallKind}
            });
            console.log(data);

            setCategoryData(data);
        }
        categoryProductList();
    }, [locationPath])

    return (
        <div className={'container'}>
            <div className={"row"}>
                <h2 className={'text-center mb-4'}>{bigKind + " " + smallKind}</h2>
                {categoryData.length == 0 ?
                    <h2 className={'text-center'}>준비된 상품이 없습니다.</h2> : categoryData.map((product, index) => {
                        return (
                            <ListItem index={index} productNum={product.productNum} productName={product.productName}
                                      productImg={product.productImg}
                                      productSellerBusinessName={product.productSellerBusinessName}
                                      productPrice={product.productPrice}/>
                        )
                    })}
            </div>
        </div>
    );
};

export default Category;