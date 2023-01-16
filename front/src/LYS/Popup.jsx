import React, {useState} from "react";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const Popup = () => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    return(
        <div>
            <button type='button' onClick={openPostCode}>우편번호 검색</button>
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
        </div>
    )
}

export default Popup;