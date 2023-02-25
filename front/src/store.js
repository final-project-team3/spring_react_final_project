// import React from 'react';
// import {useNavigate} from "react-router-dom";
//
// // 나중에 함수 사용할때 편하게 사용하기 위해서 미리 이렇게 만들어줌
// // 유저 로그인
// export const userLogin = (userInfo, role) => ({
//     type: "USER_LOGIN",
//     userInfo: userInfo,
//     role: role
// })
// // 유저 로그아웃
// export const userLogout = () => ({type: "USER_LOGOUT"});
//
// // 셀러 로그인
// export const sellerLogin = (sellerInfo, role) => ({
//     type: "SELLER_LOGIN",
//     sellerInfo: sellerInfo,
//     role: role
// });
// // 셀러 로그아웃
// export const sellerLogout = () => ({type: "SELLER_LOGOUT"});
//
//
// // 상태를 담고있음
// const initState = {
//     // 유저 정보를 담는 객체
//     userInfo: {},
//
//     // 셀러 정보를 담는 객체
//     sellerInfo: {},
//     role: "",
// }
//
// // 액션 결과를 걸러줌
// const reducer = (state = initState, action) => {
//     const navi = useNavigate();
//     switch (action.type) {
//         case"USER_LOGIN" :
//             sessionStorage.setItem("role", action.role);
//             sessionStorage.setItem("userInfo", JSON.stringify(action.userInfo));
//             return {userInfo: action.userInfo, role: action.role};
//         case"SELLER_LOGIN":
//             sessionStorage.setItem("role", action.role);
//             sessionStorage.setItem("sellerInfo", JSON.stringify(action.sellerInfo));
//             return {sellerInfo: action.sellerInfo, role: action.role};
//         case"USER_LOGOUT":
//             sessionStorage.removeItem("role");
//             sessionStorage.removeItem("userInfo");
//             // window.location.reload();
//             navi("/");
//         case"SELLER_LOGOUT":
//             sessionStorage.removeItem("role");
//             sessionStorage.removeItem("sellerInfo");
//             // window.location.reload();
//             navi("/");
//         default:
//             return state;
//     }
// }
//
// export default reducer;


import React from 'react';

// 액션 타입 정의
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SELLER_LOGIN = 'SELLER_LOGIN';
export const SELLER_LOGOUT = 'SELLER_LOGOUT';

// 액션 생성 함수
export const userLogin = (userInfo, role) => ({
    type: USER_LOGIN,
    userInfo,
    role,
});

export const userLogout = () => ({
    type: USER_LOGOUT,
});

export const sellerLogin = (sellerInfo, role) => ({
    type: SELLER_LOGIN,
    sellerInfo,
    role,
});

export const sellerLogout = () => ({
    type: SELLER_LOGOUT,
});

// 상태를 담고있음
const initState = {
    userInfo: {},
    sellerInfo: {},
    role: '',
};

// 리듀서 함수
const reducer = (state = initState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            sessionStorage.setItem('role', action.role);
            sessionStorage.setItem('userInfo', JSON.stringify(action.userInfo));
            return { ...state, userInfo: action.userInfo, role: action.role };
        case USER_LOGOUT:
            sessionStorage.removeItem('role');
            sessionStorage.removeItem('userInfo');
            return { ...state, userInfo: {}, role: '' };
        case SELLER_LOGIN:
            sessionStorage.setItem('role', action.role);
            sessionStorage.setItem('sellerInfo', JSON.stringify(action.sellerInfo));
            return { ...state, sellerInfo: action.sellerInfo, role: action.role };
        case SELLER_LOGOUT:
            sessionStorage.removeItem('role');
            sessionStorage.removeItem('sellerInfo');
            return { ...state, sellerInfo: {}, role: '' };
        default:
            return state;
    }
};

export default reducer;
