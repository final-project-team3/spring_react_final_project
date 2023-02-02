import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import $ from "jquery";


const Search = () => {
    const [searchData, setSearchData] = useState([]);
    const [prevSearchData, setPrevSearchData] = useState([]);
    const {searchContent} = useParams();
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
            console.log("data 문자열로 변환한 값 : "+JSON.stringify(data));
            console.log("--------------------------------------------------");
            console.log("searchData 문자열로 변환한 값 : "+JSON.stringify(searchData));
            setPrevSearchData(data);
            console.log("prevSearchData 문자열로 변환한 값 : "+JSON.stringify(prevSearchData));

            console.log(JSON.stringify(data) !== JSON.stringify(searchData));
            if (JSON.stringify(data) !== JSON.stringify(searchData)) {
                setSearchData(data);
            };
        }
    }, [locationPath])

    return (
        <div>
            {searchData.length == 0 ? <h2>검색된 제품이 없습니다.</h2> : searchData.map((item, index) => {
                return (
                    <h2 key={index} className={'text-center'}>{item.productName}</h2>
                )
            })}
        </div>
    )
}

export default Search;