import React, {Component, useState} from "react";
import './loginSearch.css';
import styled from "styled-components";
import $ from "jquery";
import axios from "axios";

async function checkMail() {
    var mail = $('#userId').val();
    let {data} = await axios.post("http://localhost:8080/emailCheck", null, {
        params: {
            email: mail
        }
    });

    if (mail === '') {
        $('.checkId_blank').css('display', 'inline-block');
        $('.checkId_exist_no').css('display', 'none');
        $('.checkId_exist_ok').css('display', 'none');
    } else {
        if (data !== "") { // data에 값이 있으면 = 중복일때
            $('.checkId_blank').css('display', 'none');
            $('.checkId_exist_no').css('display', 'none');
            $('.checkId_exist_ok').css('display', 'inline-block');
        } else if (data === "") { // data가 비어있으면 = 중복이 아닐때
            $('.checkId_blank').css('display', 'none');
            $('.checkId_exist_no').css('display', 'inline-block');
            $('.checkId_exist_ok').css('display', 'none');
        }
    }
};

// const [myInfo, SetMyinfo] = useState([]);


class PasswordSearch extends React.Component {
    constructor(props) {
        super();

        this.state = {
            menu: 1,
        };
    }

    render() {
        return (
            <div className={"tab-container"}>
                <div id={"tab2"}>
                    <h3 className={"aria-hidden"}>비밀번호 찾기</h3>
                    <div className={"find-id-pwd"}>
                        <label htmlFor={"inp-id"}>Email</label>
                        <input type={"text"} id={"userId"} name={"userId"} className={"userId"} onClick={checkMail}
                               onChange={checkMail}
                               placeholder={"가입하신 이메일(ID)을 입력해 주세요"}
                               title={"ID 입력"} maxLength={20}/>
                        <HiddenMessage style={noStyle} className="checkId_blank no">필수 입력 사항입니다.</HiddenMessage>
                        <HiddenMessage style={noStyle} className="checkId_exist_no no">등록된 이메일(ID)이
                            아닙니다.</HiddenMessage>
                        <HiddenMessage style={okStyle} className="checkId_exist_ok no">등록된 이메일(ID) 입니다.</HiddenMessage>
                    </div>
                    <div className={"find-id-pwd"}>
                        <label htmlFor={"inp-name01"}>Name</label>
                        <input type={"text"} id={"userName"} name={"userName"} className={"userName"}
                               placeholder={"성함을 입력해 주세요 "}/>
                        <HiddenMessage style={noStyle} className="checkName no">잘못된 이름 입니다.</HiddenMessage>
                    </div>
                    <div className={"find-id-pwd"}>
                        <label>Phone Number</label>
                        <input type={"text"} id={"userTel"} name={"userTel"} className={"userTel"}
                               placeholder={"가입시 등록한 전화번호를 입력해 주세요 "}/>
                        <HiddenMessage style={noStyle} className="checkTel no">잘못된 전화번호 입니다.</HiddenMessage>
                    </div>
                    <button id={"loginSubmit"} type={"submit"}>
                        비밀번호 찾기
                    </button>
                </div>
            </div>
        )
    }
}

const okStyle = {
    color: "#009000"
}
const noStyle = {
    color: "#ff0000"
}
const HiddenMessage = styled.span`
    font-size: smaller;
    display: none;
`

export default PasswordSearch;