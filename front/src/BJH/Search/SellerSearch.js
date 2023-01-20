import React from 'react';
import './SearchId.css';
import {Link} from "react-router-dom";


function SearchId(props) {

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
                    }}>일반 회원이신가요?
                        <Link to={"/searchId"}><a className={"link-text"}>이동하기</a></Link>
                    </p>
                </div>

                <div id={"listHolder"}>
                    <div className={"tabInSection"}>
                        <div className={"logForm"}>
                            <input type={"text"} className={"logInput"} placeholder={"아이디를 입력하세요"}/>
                            <input type={"text"} className={"logInput"} placeholder={"사업자명을 입력하세요"}/>
                            <input type={"text"} className={"logInput"} placeholder={"사업자번호를 입력하세요"}/>
                            <Link to={"/newLogin"}><a className={"norBtn"}>취소</a></Link>
                            <button className={"logBtn"}>찾기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchId;