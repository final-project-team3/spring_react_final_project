import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";


const Search = () => {
    const [searchData, setSearchData] = useState([]);

    const {searchContent} = useParams();

    const search = async () => {
        const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
            params: {searchContent: searchContent}
        });
        console.log(data);
        console.log(JSON.stringify(data));
        console.log(JSON.stringify(searchData));
        if (JSON.stringify(data) !== JSON.stringify(searchData)) {
            console.log('테스트');
            setSearchData(data);
        };
    }

    useEffect(() => {
        search();
        // console.log('test')
        // return async () => {
        //
        //     const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
        //         params: {searchContent: searchContent}
        //     });
        //     console.log(data);
        //     console.log(JSON.stringify(data));
        //     console.log(JSON.stringify(searchData));
        //     if (JSON.stringify(data) !== JSON.stringify(searchData)) {
        //         setSearchData(data);
        //     };
        // }
    }, [searchData])

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