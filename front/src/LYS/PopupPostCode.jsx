import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {


    var extraRoadAddr ='';

    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addrRoad = ''; // 도로명 변수
        var addrJibun = ''; // 지번 변수
        var extraAddr = ''; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R' || data.userSelectedType == 'J') { // 사용자가 도로명 주소나 지번주소 선택시
            addrRoad = data.roadAddress;
            addrJibun = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === 'R' || data.userSelectedType === 'J') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== '') {
                extraAddr = ' (' + extraAddr + ')';
            }

            // 값이 여러개일때
            if (data.autoRoadAddress) {
                var addrRoad = data.autoRoadAddress + extraRoadAddr;
            } else if (data.autoJibunAddress) {
                var addrJibun = data.autoJibunAddress;
            }


            addrJibun = addrJibun;
            addrRoad += extraAddr;
            // 주소 변수 문자열 + 참고항목 문자열을 합친다.


            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sigunguCode').value = data.zonecode;
            document.getElementById("jibunAddress").value = addrJibun;
            document.getElementById("roadAddress").value = addrRoad;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("addressDetail").focus();
            props.onClose()
        }
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