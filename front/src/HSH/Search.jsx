import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import $ from "jquery";


const Search = () => {
    const [searchData, setSearchData] = useState([]);
    const [prevSearchData, setPrevSearchData] = useState([]);
    const {searchContent} = useParams();

    // 주소 변화를 알기 위함
    const location = useLocation();
    let locationPath = location.pathname;

    $(function () {
        if (locationPath != locationPath) {
            window.location.reload();
        }
    });

    useEffect(() => {
        return async () => {

            const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
                params: {searchContent: searchContent}
            });
            console.log(data);

            setSearchData(data);
        }
    }, [locationPath])

    return (
        <div className={'container'}>
            <div className={"row"}>
                {searchData.length == 0 ? <h2>검색된 제품이 없습니다.</h2> : searchData.map((product, index) => {
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
                                <h5 className={'mb-4'}>{product.productPrice = product.productPrice.toString()
                                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h5>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;