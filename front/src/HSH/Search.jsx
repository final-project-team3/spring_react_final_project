import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Search = () => {
    const location = useLocation();
    const searchContent = location.state.searchContent;
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        return async () => {
            const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
                params: {searchContent: searchContent}
            });
            console.log(data);
            setSearchData(data);
        }
    }, [searchData])

    return (
        <div>
            <h1>검색이유</h1>
            {searchData.map((item, index) => {
                return (
                    <h2 className={'text-center'}>{item.productName}</h2>
                )
            })}
        </div>
    )
}

export default Search;