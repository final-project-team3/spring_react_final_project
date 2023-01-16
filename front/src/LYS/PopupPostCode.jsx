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
        position: "center",
        left: '310px',
        top: "10%",
        width: "400px",
        height: "500px",
        padding: "7px",
        bodyClose: false,
        background: '#fff'
    };

    return (
        <div>
            <div className={'d-flex justify-content-end'}>
            <button type='button' onClick={() => {
                props.onClose()
            }} className='mb-2 btn btn-danger postCode_btn'>닫기
            </button>
            </div>
            <div className={'border border-dark border-end-1'}>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}/>
            </div>
        </div>
    )
}

export default PopupPostCode;