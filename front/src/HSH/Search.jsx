import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {default as Axios} from "axios";
import $ from "jquery";
import ListItem from "./ListItem";


const Search = () => {
    const axios = Axios.create({
        baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
    })

    const navi = useNavigate();


    // 검색 결과가 있는지 체크(실시간 검색을 위함)
    const [searchCheck, setSearchCheck] = useState(false);

    const [searchData, setSearchData] = useState([]);
    const [prevSearchData, setPrevSearchData] = useState([]);
    const {searchContent} = useParams();

    // 주소 변화를 알기 위함
    const location = useLocation();
    let locationPath = location.pathname;

    $(function () {
        if (locationPath != locationPath) {
            // window.location.reload();
            navi(locationPath);
        }
    });

    useEffect(() => {
        const getSearchProductList = async () => {

            const {data} = await axios.post("/getSearchProductList", null, {
                params: {searchContent: searchContent}
            });
            // console.log(data);
            if (data.length != 0) {
                setSearchCheck(true);
            } else {
                setSearchCheck(false);
            }
            setSearchData(data);
        }
        getSearchProductList();
    }, [locationPath])

    useEffect(() => {
        // console.log(searchContent);
        // console.log(searchCheck);
        if (searchCheck == true) {
            // console.log('테스트');
            const searchContentTotalInsert = async () => {
                await axios.post('/searchContentTotalInsert', null, {
                    params: {
                        searchContent: searchContent
                    }
                })
            }
            searchContentTotalInsert();
        }
        setSearchCheck(false);
    }, [searchCheck])

    return (
        <div className={'container'}>
            <div className={"row"}>
                {searchData.length == 0 ? <h2>검색된 제품이 없습니다.</h2> : searchData.map((product, index) => {
                    return (
                        <ListItem index={index} productNum={product.productNum} productName={product.productName}
                                  productImg={product.productImg}
                                  productSellerBusinessName={product.productSellerBusinessName}
                                  productPrice={product.productPrice}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;