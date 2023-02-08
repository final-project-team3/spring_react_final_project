import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import $ from "jquery";

const Category = () => {
    const {bigKind, smallKind} = useParams();

    const [categoryData, setCategoryData] = useState([]);

    // 주소 변화를 알기 위함
    const location = useLocation();
    const locationPath = location.pathname;
    const [isFirst, setIsFirst] = useState(true);

    // $(function () {
    //     if (locationPath.includes("/category") && isFirst) {
    //         setIsFirst(false);
    //         window.location.reload();
    //     }
    // });

    // $(function () {
    //     if (locationPath.includes("/category")) {
    //         if (locationPath != locationPath && isFirst) {
    //             window.location.reload();
    //             setIsFirst(false);
    //         }
    //     }
    // });

    useEffect(() => {
        return async () => {

            const {data} = await axios.get("http://localhost:8080/categoryProductList", {
                params: {bigKind: bigKind, smallKind: smallKind}
            });
            console.log(data);

            setCategoryData(data);
        }
    }, [locationPath])

    return (
        <div className={'container'}>
            <div className={"row"}>
                <h2 className={'text-center mb-4'}>{bigKind + " " + smallKind}</h2>
                {categoryData.length == 0 ?
                    <h2 className={'text-center'}>준비된 상품이 없습니다.</h2> : categoryData.map((product, index) => {
                        return (
                            <div key={index} className={'mt-5 col-3'}>
                                <Link to={`/productDetail/${product?.productNum}`}>
                                    <img width={300} src={product?.productImg}/>
                                </Link>
                                <Link to={`/productSellerPage/${product?.productSellerBusinessName}`}>
                                    <h5 className={"my-3"}>{product?.productSellerBusinessName}</h5>
                                </Link>
                                <Link to={`/productDetail/${product?.productNum}`}>
                                    <h5 className={'mb-0'}>{product?.productName}</h5>
                                    <h5 className={'mb-4'}>{product.productPrice = product.productPrice.toString()
                                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h5>
                                </Link>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Category;