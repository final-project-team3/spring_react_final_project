import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";


const Search = () => {
    const location = useLocation();
    const [searchData, setSearchData] = useState([]);
    const [prevSearchData, setPrevSearchData] = useState([]);
    const aa = location.state.searchContent;
    const [searchs, setSearchs] = useState(location.state.searchContent);
    // if (location.state.searchContent != null) {
    //     setSearchs(location.state.searchContent);
    // }
    const [aaa, setaaa] = useState(1);
    const aafunc = () => {
        setaaa(2);
        console.log("122222222222222222223");
    }

    useEffect(() => {
        return async () => {
            const {data} = await axios.post("http://localhost:8080/getSearchProductList", null, {
                params: {searchContent: location.state.searchContent}
            });
            console.log(data);
            // setPrevSearchData(data);
            // if (prevSearchData != searchData) {
            setSearchData(data);
            // }
        }
    }, [searchData])
    // useEffect(()=> {
    //     console.log('aaa');
    //     console.log('1231')
    //     // setaaa(1);
    // },[aaa])


    return (
        // <div><button onClick={aafunc}>ㅁㄴ아먼ㅇ;ㅁㅇ너ㅣ</button></div>
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