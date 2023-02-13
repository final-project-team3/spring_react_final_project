import React, {Component, useState} from "react";
import './loginSearch.css';
import styled from "styled-components";
import $ from "jquery";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


function PasswordSearch() {

    let checkList = [false, false];

    const [userName, setUserName] = useState();
    const [mail, setMail] = useState();
    const navi = useNavigate();

    async function checkMail() {
        var mail = $('#userId').val();
        setMail(mail);
        let {data} = await axios.post("http://localhost:8080/getEmailUserInfo", null, {
            params: {
                email: mail
            }
        });
        await setUserName(data?.userInfo?.userName);

        if (mail === '') {
            $('.checkId_blank').css('display', 'inline-block');
            $('.checkId_exist_no').css('display', 'none');
            $('.checkId_exist_ok').css('display', 'none');
        } else {
            if (data.checkNum == 1) { // data에 값이 있으면 = 중복일때
                $('.checkId_blank').css('display', 'none');
                $('.checkId_exist_no').css('display', 'none');
                $('.checkId_exist_ok').css('display', 'inline-block');
                checkList[0] = true;
                console.log(checkList);
            } else { // data가 비어있으면 = 중복이 아닐때
                $('.checkId_blank').css('display', 'none');
                $('.checkId_exist_no').css('display', 'inline-block');
                $('.checkId_exist_ok').css('display', 'none');
                checkList[0] = false;
            }
        }
    };

    function checkName() {
        var name = $('#userName').val();
        console.log(name);
        console.log(userName);

        if (name === userName) {
            $('.checkName_no').hide();
            $('.checkName_ok').show();
            checkList[1] = true;
        } else {
            $('.checkName_no').show();
            $('.checkName_ok').hide();
            checkList[1] = false;
        }
    };

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
                           onClick={checkName}
                           onChange={checkName}
                           placeholder={"성함을 입력해 주세요 "}/>
                    <HiddenMessage style={noStyle} className="checkName_no no">이메일 정보와 일치하지 않는 이름
                        입니다.</HiddenMessage>
                    <HiddenMessage style={okStyle} className="checkName_ok ok">이메일 정보와 일치하는 이름 입니다.</HiddenMessage>
                </div>
                <button className={'btn btn-primary form-control my-3'} id={"loginSubmit"} type={"button"} onClick={async () => {
                    console.log(checkList);
                    let trueCnt = 0;
                    for (let i = 0; i < checkList.length; i++) {
                        if (checkList[i] == true) {
                            trueCnt++;
                        }
                    }
                    console.log(trueCnt);
                    if (trueCnt == 2) {
                        await axios.post("http://localhost:8080/postPassMail", null, {
                            params: {
                                mail: mail
                            }
                        })
                        Swal.fire({
                            position: "top-center",
                            icon: "info",
                            title: "등록하신 이메일로 임시 비밀번호가 발급되었습니다.",
                            timer: 3000,
                        }).then((req) => {
                            if (req.isConfirmed) {
                                navi('/login');
                            }
                        })
                    } else {
                        Swal.fire({
                            position: "top-center",
                            icon: "error",
                            title: "정보가 잘못됐습니다.",
                            text: "다시입력해주세요.",
                            timer: 3000,
                        })
                    }
                }}>
                    비밀번호 찾기
                </button>
            </div>
        </div>
    )
}

const okStyle = {
    color: "#009000"
}
const noStyle = {
    color: "#ff0000"
}
const HiddenMessage = styled.span
    `
                font-size: smaller;
                display: none;
                `

export default PasswordSearch;