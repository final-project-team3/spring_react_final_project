import React, {useEffect, useState} from "react";
import DetailRating from "./DetailRating";
import styled from "styled-components";
import axios from "axios";
import './MyReview.css';
import MyReview from "./MyReview";
import Pagination from "../GJY/Pagination";
import MyQna from "./MyQna";

function MyQnaList() {

    const [myQnaList, setMyQnaList] = useState([]);

    // 페이지네이션
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;


    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    useEffect(() => {
        axios.get('http://localhost:8080/getMyQna', {params: {userId: userInfo.userId}})
            .then((req) => {
                const {data} = req;
                setMyQnaList(data);
                console.log(data);
            })
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
                        }} className="text-center name">문의내역 페이지
                        </div>
                    </div>
                </div>
                {
                    myQnaList.slice(offset, offset + limit).map((item, index) => {
                        return <MyQna key={index} reviewNum={item.qnaNum} id={item.userId}
                                         date={item.qnaRegistrationDate}
                                         content={item.qnaContent} productNum={item.productNum}
                                         state={item.qnaState} answer={item.qnaAnswer}
                                         AnswerRegistrationDate={item.qnaAnswerRegistrationDate}
                        />
                    })
                }
            </div>
            <Pagination
                total={myQnaList.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}

export default MyQnaList;