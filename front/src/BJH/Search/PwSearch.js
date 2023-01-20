import React from 'react';
import './SearchId.css';
import {Link} from "react-router-dom";


function PwSearch(props) {

    return (
        <div className={"container"} style={{
            textAlign: "center"
        }}>
            <div className={"logBox"}>
                <div className={"logLogo"} style={{
                    fontSize: 20
                }}>아이디 / 비밀번호 찾기
                    <p style={{
                        clear: "both",
                        textAlign: "center"
                    }}>사업자 회원이신가요?
                        <Link to={"/sellerSearch"}><a className={"link-text"}>이동하기</a></Link>
                    </p>
                </div>
                <div className={"tabbtn khw"}>
                    <ul id={"idTab-ul"}>
                        <Link to={"/searchId"}><li className={"ctrTabLock"}>아이디 찾기</li></Link>
                        <li className={"ctrTabLock"}>비밀번호 찾기</li>
                    </ul>
                </div>
                <div id={"listHolder"}>
                    <div className={"tabInSection"}>
                        <div className={"logForm"}>
                            <input type={"text"} className={"logInput"} placeholder={"아이디를 입력하세요"}/>
                            <input type={"text"} className={"logInput"} placeholder={"이메일을 입력하세요"}/>
                            <Link to={"/newLogin"}><a className={"norBtn"}>취소</a></Link>
                            <button className={"logBtn"}>찾기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PwSearch;
