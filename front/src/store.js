import React from 'react';

// 나중에 함수 사용할때 편하게 사용하기 위해서 미리 이렇게 만들어줌

// 유저 로그인
export const userLogin = (userInfo, role) => ({
    type: "USER_LOGIN",
    userInfo: userInfo,
    role: role
});
export const userLogout = () => ({type: "USER_LOGOUT"});

// 셀러 로그인
export const sellerLogin = (sellerInfo, role) => ({
    type: "SELLER_LOGIN",
    sellerInfo: sellerInfo,
    role: role
});
export const sellerLogout = () => ({type: "SELLER_LOGOUT"});


// 상태를 담고있음
const initState = {
    // 유저 정보를 담는 객체
    userInfo: {},

    // 셀러 정보를 담는 객체
    sellerInfo: {},
    role: "",
}

// 액션 결과를 걸러줌
const reducer = (state = initState, action) => {
    switch (action.type) {
        case"USER_LOGIN" :
            sessionStorage.setItem("role", action.role);
            sessionStorage.setItem("userInfo",JSON.stringify(action.userInfo));
            return {userInfo: action.userInfo, role: action.role};
        case"SELLER_LOGIN":
            sessionStorage.setItem("role", action.role);
            sessionStorage.setItem("sellerInfo",JSON.stringify(action.sellerInfo));
            return {sellerInfo: action.sellerInfo, role: action.role};
        default:
            return state;
    }
}

export default reducer;