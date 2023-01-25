import React, {useState} from "react";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const Popup = (props) => {
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
            <button type='button' className={'my-2 btn btn-primary'} onClick={()=> {
                props.checkFunc();
                openPostCode();
            }}>주소 찾기</button>


            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode checkFunc={props.checkFunc} onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
        </div>
    )
}

export default Popup;