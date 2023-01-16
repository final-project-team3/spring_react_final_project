import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data);
        console.log(fullAddress);
        console.log(data.zonecode);
        document.querySelector("#jibunAddress").value = data.jibunAddress;
        document.querySelector("#roadAddress").value = data.roadAddress;
        document.querySelector("#sigunguCode").value = data.sigunguCode;
        props.onClose()
    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        left: '310px',
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px",
        bodyClose: false,
        background: '#fff',
    };

    return (
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}/>
            <button type='button' onClick={() => {
                props.onClose()
            }} className='postCode_btn'>팝업창 닫기
            </button>
        </div>
    )
}

export default PopupPostCode;