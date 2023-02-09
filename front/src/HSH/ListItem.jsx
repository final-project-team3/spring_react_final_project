import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ListItem = ({
                      index,
                      productNum,
                      productImg,
                      productSellerBusinessName,
                      productPrice,
                      productName,
                  }) => {
    let userInfo = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);

    const navi = useNavigate();
    const {pathname} = useLocation();

    /**
     * 찜 하는 함수
     */
    const productInterestedFunc = async (productNum = productNum) => {
        // 로그인 하지 않았을 시
        if (userInfo == null) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "로그인 후 이용할 수 있습니다.",
                text: "로그인창으로 이동할까요?",
                showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
                confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
                cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                cancelButtonText: '취소',
            }).then((req) => {
                if (req.isConfirmed) {

                }
            });
        }
        // 이미 찜한 상품인지 비교 함
        await axios.get("http://localhost:8080/productInterestedInsert", {
            params: {
                productNum: productNum,
                userId: userInfo.userId
            }
        }).then((req) => {
            // 이미 찜한 상품일 경우
            if (req == 1) {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "이미 찜한 상품입니다",
                    text: "찜한 상품목록으로 가시겠습니까?",
                    showCancelButton: true, // cancel 버튼 보이기. 기본은 원래 없음
                    confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
                    cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                    confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                    cancelButtonText: '취소',
                }).then((req) => {
                    if (req.isConfirmed) {
                        navi("/login");
                    }
                });
            } else {

            }
        })


    }

    return (
        <div key={index} className={'mt-5 col-3'}>
            <Link to={`/productDetail/${productNum}`}>
                <img width={300} src={productImg}/>
            </Link>
            <Link to={`/productSellerPage/${productSellerBusinessName}`}>
                <h5 className={"my-3"}>{productSellerBusinessName}</h5>
            </Link>
            <div className={'d-flex justify-content-between'}>
                <Link to={`/productDetail/${productNum}`}>
                    <h5 className={'mb-0'}>{productName}</h5>
                    <h5 className={'mb-4'}>{productPrice.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h5>
                </Link>
                <Link onClick={productInterestedFunc}>
                    <img className={'me-3'} width={30} src={"../Img/Bjh/wish.png"}/>
                </Link>
            </div>
        </div>
    );
};

export default ListItem;