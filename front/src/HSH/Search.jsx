import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";


const Search = () => {
    const location = useLocation();
    const [searchData, setSearchData] = useState([]);

    const {searchContent} = useParams();
    const [searchContents, setSearchContents] = useState(searchContent);

    useEffect(() => {
        return async () => {
            setSearchContents(searchContent);
            const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
                params: {searchContent: searchContents}
            });
            console.log(data);
            setSearchData(data);
        }
    }, [searchContents])

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