import React from 'react';

export const increase = () => ({type:"INCREMENT"});
export const decrease = () => ({type:"DECREMENT"});

// 상태를 담고있음
const initstate = {
    number: 0,
}

// 액션 결과를 걸러줌
const reducer = (state = initstate, action)=> {
    switch (action.type) {
        case "INCREMENT":
            return{number: state.number + 1}; // return 되면 호출한 쪽에서 받는게 아니라 return되는 순간 ui 변경
        case "DECREMENT":
            return {number: state.number -1};
        default:
            return state;
    }
}

export default reducer;