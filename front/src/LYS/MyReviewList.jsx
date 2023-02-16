import React, {useEffect, useState} from "react";
import DetailRating from "./DetailRating";
import styled from "styled-components";
import {default as Axios} from "axios";
import './MyReview.css';
import MyReview from "./MyReview";
import Pagination from "../GJY/Pagination";

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function MyReviewList() {

    const [myReviewList, setMyReviewList] = useState([]);

    // 페이지네이션
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;


    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    useEffect(() => {
        const getMyReview = async () => {
            axios.post('/getMyReview', null, {params: {userId: userInfo.userId}})
                .then((req) => {
                    const {data} = req;
                    setMyReviewList(data);
                    console.log(data);
                })
        };

        getMyReview();

    }, []);

    return (
        <div className={"container"}>
            <div className="wrap">
                <div className="skyContainer">
                    <div style={{
                        width: 1500
                    }}>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center grade">마이페이지
                        </div>
                        <div style={{
                            textAlign: "center"
                        }} className="text-center name">리뷰 페이지
                        </div>
                    </div>
                </div>
                {
                    myReviewList.slice(offset, offset + limit).map((item, index) => {

                        return <MyReview key={index} reviewNum={item.reviewNum} id={item.userId}
                                         date={item.reviewRegistrationDate}
                                         content={item.reviewContent} productNum={item.productNum}
                                         helpful={item.reviewHelpful} starPoint={item.reviewStarPoint}
                                         deletedYn={item.reviewDeletedYn}/>
                    })
                }
            </div>
            <Pagination
                total={myReviewList.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}

export default MyReviewList;