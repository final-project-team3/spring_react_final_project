import axios from "axios";
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Popup from "./Popup";
import jquery from 'jquery';
import $ from 'jquery';


function UserSignUp() {
    const navigate = useNavigate();
    const toMain = () => {
        navigate(`/`);
    };

    // 유효성 검사 true false 리스트
    let checkList = [];
    for (let i = 1; i <= 9; i++) {
        checkList.push(false);
    }

    // 전화번호 '-'방지
    $(function () {
        $("#userTel").on("blur keyup", function () {
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        });
    });

    // 비밀번호 체크
    function checkPw() {
        var pw = $("#userPass").val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (pw == '') { // 빈값일때
            checkList[0] = false;
            $('.checkPw').css("display", "inline-block");
            $('.pwd_not').css("display", "none");
            $('.pwd_ok').css("display", "none");
            $('.pwd_space').css("display", "none");
            $('#userPw').focus();
        } else if (pw.length < 8 || pw.length > 16 || (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) { // 8 ~ 16자리이고, 영문, 숫자, 특수문자 조합
            checkList[0] = false;
            $('.checkPw').css("display", "none");
            $('.pwd_not').css("display", "inline-block");
            $('.pwd_ok').css("display", "none");
            $('.pwd_space').css("display", "none");
            $('#userPw').focus();
        } else if (pw.search(/\s/) != -1) { // 공백이 있을때
            checkList[0] = false;
            $('.checkPw').css("display", "none");
            $('.pwd_space').css("display", "inline-block");
            $('.pwd_ok').css("display", "none");
            $('.pwd_not').css("display", "none");
            $('#userPw').focus();
        } else { // 사용 가능한 비밀번호
            checkList[0] = true;
            $('.checkPw').css("display", "none");
            $('.pwd_ok').css("display", "inline-block");
            $('.pwd_space').css("display", "none");
            $('.pwd_not').css("display", "none");
        }
    }

// 비밀번호의 두 값 체크
    function checkDoublePw() {
        var pw1 = $('#userPass').val();
        var pw2 = $('#userPass2').val();


        if (pw2 != '') { // pw2가 비었을때는 실행을 막기 위해 사용(pw1이 바꼈을때 바로 반영하기 위함.)
            if (pw1 == pw2) { // 비밀번호가 같은 경우
                checkList[1] = true;
                $('.checkPw2').css("display", "none");
                $('.pwd2_ok').css("display", "inline-block");
                $('.pwd2_not').css("display", "none");

            } else { // 비밀번호가 다를 경우
                checkList[1] = false;
                $('.checkPw2').css("display", "none");
                $('.pwd2_not').css("display", "inline-block");
                $('.pwd2_ok').css("display", "none");
                $('#userPw2').focus();
            }
        }
    }

// 비밀번호 확인이 비어있을때
    function checkPw2() {
        var pw2 = $('#userPass2').val();

        if (pw2 == '') { // 값이 비어있을 때
            checkList[1] = false;
            $('.checkPw2').css("display", "inline-block");
            $('.pwd2_ok').css("display", "none");
            $('.pwd2_not').css("display", "none");
        }
    }

// 이름 체크 (비어있는지만 확인)
    function checkName() { // 간단한 체크
        var name = $('#userName').val();
        if (name == '') {
            checkList[2] = false;
            $('.checkName').css("display", "inline-block");
        } else {
            checkList[2] = true;
            $('.checkName').css("display", "none");
        }
    }

    // 전화번호 유효성
    async function checkTel() {
        var ph = $('#userTel').val(); // ph 저장
        var regExp = /^(010)[0-9]{3,4}[0-9]{4}$/;
        let {data} = await axios.post("http://localhost:8080/telCheck", null, {
            params: {
                telData: ph
            }
        });
        console.log(data);

        if (ph == '') { // 값이 비어있을때
            checkList[3] = false;
            $('.checkPh').css("display", "inline-block");
            $('.ph_not').css("display", "none");
            $('.ph_already').css("display", "none");
            $('.ph_ok').css("display", "none");
            $('#userPh').focus();
        } else if (!regExp.test(ph)) { // 유효성 체크
            checkList[3] = false;
            $('.checkPh').css("display", "none");
            $('.ph_not').css("display", "inline-block");
            $('.ph_already').css("display", "none");
            $('.ph_ok').css("display", "none");
            $('#userPh').focus();
        } else if (data != "") { // cnt가 1일 경우 -> 이미 존재하는 전화번호
            checkList[3] = false;
            $('.checkPh').css("display", "none");
            $('.ph_already').css("display", "inline-block");
            $('.ph_ok').css("display", "none");
            $('.ph_not').css("display", "none");
            $('#userPh').focus();
        } else if (data == "") { //cnt가 1이 아니면(=0일 경우) -> 사용 가능한 전화번호
            checkList[3] = true;
            $('.checkPh').css("display", "none");
            $('.ph_ok').css("display", "inline-block");
            $('.ph_already').css("display", "none");
            $('.ph_not').css("display", "none");
        }
    };

    //이메일 유효성
    async function checkMail() {
        var mail = $('#userId').val();
        var regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        let {data} = await axios.post("http://localhost:8080/emailCheck", null, {
            params: {
                email: mail
            }
        });

        if (mail == '') { // 값이 비어있을때
            checkList[4] = false;
            $("#btn-send").attr("disabled", true);
            $('.checkMail').css("display", "inline-block");
            $('.mail_not').css("display", "none");
            $('.mail_already').css("display", "none");
            $('.mail_ok').css("display", "none");
            $('#userMail').focus();
        } else if (regExp.test(mail) == false) { // 유효성 체크
            checkList[4] = false;
            $("#btn-send").attr("disabled", true);
            $('.checkMail').css("display", "none");
            $('.mail_not').css("display", "inline-block");
            $('.mail_already').css("display", "none");
            $('.mail_ok').css("display", "none");
            $('#userMail').focus();
        } else if (data != "") { // data에 값이 있으면 = 중복일때
            checkList[4] = false;
            $("#btn-send").attr("disabled", true);
            $('.checkMail').css("display", "none");
            $('.mail_already').css("display", "inline-block");
            $('.mail_ok').css("display", "none");
            $('.mail_not').css("display", "none");
            $('#userMail').focus();
        } else if (data == "") { // data가 비어있으면 = 중복이 아닐때
            checkList[4] = true;
            $("#btn-send").attr("disabled", false);
            $('.checkMail').css("display", "none");
            $('.mail_ok').css("display", "inline-block");
            $('.mail_already').css("display", "none");
            $('.mail_not').css("display", "none");
        }
    }
    ;

    $(function () { // 주민 번호 숫자만 입력 가능하게
        $("#userBirth").on("blur keyup", function () {
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        });
    });

    $(function () { // 주민 번호 숫자만 입력 가능하게
        $("#userGender").on("blur keyup", function () {
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        });
    });

    // 생년월일, 성별 빈칸이나 6자리 체크
    function checkBirthGender() {
        let bir = $('#userBirth').val();
        let gen = $('#userGender').val();

        if (bir == '' || gen == '') { //빈값
            $('.checkBG').css('display', 'inline-block');
            checkList[5] = false;
        } else {
            $('.checkBG').css('display', 'none');
            checkList[5] = true;
        }

        if (bir.length != 6) { //6자리가 아니라면 6자리 입력하라 표시
            $('.checkBirth').css('display', 'inline-block');
            checkList[5] = false;
        } else {
            $('.checkBirth').css('display', 'none');
            checkList[5] = true;
        }
    }

    const monthList = [
        {month: "01", firstDay: 1, lastDay: 31},
        {month: "02", firstDay: 1, lastDay: 29},
        {month: "03", firstDay: 1, lastDay: 31},
        {month: "04", firstDay: 1, lastDay: 30},
        {month: "05", firstDay: 1, lastDay: 31},
        {month: "06", firstDay: 1, lastDay: 30},
        {month: "07", firstDay: 1, lastDay: 31},
        {month: "08", firstDay: 1, lastDay: 31},
        {month: "09", firstDay: 1, lastDay: 30},
        {month: "10", firstDay: 1, lastDay: 31},
        {month: "11", firstDay: 1, lastDay: 30},
        {month: "12", firstDay: 1, lastDay: 31},
    ]

    function checkGender() {
        let bir = $("#userBirth").val();
        let gen = $("#userGender").val();
        let birFirst = parseInt(bir.charAt(0));


        if (bir.length == 6) {
            bir = $("#userBirth").val();
            let birthCheck = false;

            let birth2 = bir.charAt(2);
            let birth3 = bir.charAt(3);
            let monthBirth = birth2 + birth3;
            console.log(monthBirth);
            monthList.map((months) => {
                if (months.month == monthBirth) {
                    let birthDay = bir.charAt(4) + bir.charAt(5);
                    birthDay = parseInt(birthDay);
                    for (let i = months.firstDay; i <= months.lastDay; i++) {
                        if (i == birthDay) {
                            birthCheck = true;
                            if (birFirst === 0 || birFirst === 1 || birFirst === 2) {
                                if (gen != 3 && gen != 4) {
                                    console.log(birFirst);
                                    $('.checkOld').css('display', 'none');
                                    $('.checkYoung').css('display', 'inline-block');
                                    checkList[6] = false;
                                } else {
                                    $('.checkYoung').css('display', 'none');
                                    checkList[6] = true;
                                }

                            } else {
                                if (gen != 1 && gen != 2) {
                                    $('.checkYoung').css('display', 'none');
                                    console.log(birFirst);
                                    $('.checkOld').css('display', 'inline-block');
                                    checkList[6] = false;
                                } else {
                                    $('.checkOld').css('display', 'none');
                                    checkList[6] = true;
                                }
                            }
                        }
                    }
                }
            })
            if (birthCheck == false) {
                $('.checkBirth').css('display', 'inline-block');
                checkList[6] = false;
            }
        }
    }


    // 주소 체크
    function checkAddress() {
        var addr1 = $('#sigunguCode').val();
        var addr2 = $('#jibunAddress').val();
        var addr3 = $('#roadAddress').val();

        if (addr1 == '' || addr2 == '' || addr3 == '') {
            $('.checkAddr').css('display', 'inline-block');
            checkList[7] = false;
        } else {
            $('.checkAddr').css('display', 'none');
            checkList[7] = true;
        }

    }

    let confirmNum = '';
    /**
     * 이메일 인증 보내는 함수
     * */
    const sendEmail = async () => {
        $("#emailCheck").attr('hidden', false);
        const {data} = await axios.post('http://localhost:8080/emailConfirm', null, {params: {email: $("#userId").val()}});
        confirmNum = data;
        console.log(confirmNum);
    }
    /**
     * 인증번호 체크하는 함수
     * */
    const confirmNumCheck = () => {
        if ($("#confirmNum").val() == confirmNum) {
            alert('인증되었습니다.');
            checkList[8] = true;
        } else {
            alert("인증번호를 다시 확인해주세요");
            checkList[8] = false;
        }
    };

    //마지막으로 모든배열 true확인
    const checkAll = () => {
        const AllChecked = (val) => val == true;

        if (checkList.every(AllChecked)) {
            alert("회원 가입을 축하합니다");
            $("#btn-signUp").attr("type", "submit");
            $("#btn-signUp").onclick();
            console.log(checkList);
        } else {
            alert("공백란이나 잘못된 입력을 확인해 주세요");
            console.log(checkList);
        }
    };

    return (
        <WrapLogin>
            <HeadBannerGroup/>
            <ReauthPhone>
                <LoginWrap>
                    <LoginSection>
                        <LoginTitle>회원가입하기 (일반회원용)</LoginTitle>
                        <SignupStep className="wrap">
                            <Title>환영합니다. 가입 정보를 입력해주세요</Title>
                        </SignupStep>
                        <form action={'/signUpUser'} method={'post'}>
                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 이메일
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input style={{width: 400}} type="email" name={'userId'} id={'userId'}
                                               onClick={checkMail} onChange={checkMail} placeholder="이메일을 입력해주세요."/>
                                        <button id={'btn-send'} className={"btn btn-primary ms-1"} type={'button'}
                                                disabled={true}
                                                style={{width: 90}}>
                                            <p className={"p-0 m-0"} onClick={sendEmail}>인증코드전송</p></button>
                                        <HiddenMessage style={okStyle} className="mail_ok ok">사용 가능한
                                            이메일입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="mail_already no">이미 사용중인
                                            이메일입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="mail_not no">잘못된
                                            이메일입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkMail no">필수
                                            항목입니다.</HiddenMessage>
                                    </InputTextSizeW>
                                    <InputTextSizeW id={'emailCheck'} hidden={true}>
                                        <Input id={'confirmNum'} style={{width: 400}} type="text"
                                               placeholder="인증번호를 입력해주세요"></Input>
                                        <button className={"btn btn-primary ms-1"} type={'button'}
                                                onClick={confirmNumCheck}
                                                style={{width: 90}}>
                                            <p className={"p-0 m-0"}>인증하기</p></button>
                                        <HiddenMessage>인증번호를 입력해주세요</HiddenMessage>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>
                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 비밀번호
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'password'} name={"userPass"} id={"userPass"} onClick={checkPw}
                                               onChange={() => {
                                                   checkPw();
                                                   checkDoublePw();
                                               }}
                                               placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"/>
                                        <HiddenMessage style={okStyle} className="pwd_ok ok">사용 가능한
                                            비밀번호입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd_not no">8~16자 영문 대 소문자, 숫자,
                                            특수문자를 사용하세요.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd_space no">비밀번호는 공백 없이
                                            입력해주세요.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkPw no">필수
                                            항목입니다.</HiddenMessage>
                                    </InputTextSizeW>
                                </FormBlockBody>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'password'} placeholder="비밀번호 확인" id={"userPass2"}
                                               onClick={checkPw2} onChange={() => {
                                            checkPw2();
                                            checkDoublePw();
                                        }}/>
                                        <HiddenMessage style={okStyle} className="pwd2_ok ok">두 비밀번호가
                                            일치합니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd2_not no">두 비밀번호가
                                            다릅니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkPw2 no">필수
                                            항목입니다.</HiddenMessage>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 이름
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeWTypeL>
                                        <Input type="text" name={"userName"} id={"userName"} onChange={checkName}
                                               onClick={checkName}
                                               placeholder="이름을 입력해 주세요"/>
                                        <HiddenMessage style={noStyle} className="checkName no">필수
                                            항목입니다.</HiddenMessage>
                                    </InputTextSizeWTypeL>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 전화번호
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeWTypeL>
                                        <Input type="hidden" required/>
                                        <Input type="tel" name={"userTel"} placeholder="'-'를 제외한 번호를 입력해주세요"
                                               onClick={checkTel} onChange={checkTel}
                                               id={"userTel"}
                                               data-auth="cell_phone"/>
                                        <HiddenMessage style={okStyle} className="ph_ok ok">사용 가능한
                                            전화번호입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="ph_already no">이미 사용중인
                                            전화번호입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="ph_not no">잘못된
                                            전화번호입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkPh no">필수 항목입니다.</HiddenMessage>
                                    </InputTextSizeWTypeL>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 생년월일 / 성별
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        {/* 생일 */}
                                        <Input name={"userBirth"} style={{width: 241}} maxLength={6}
                                               onClick={() => {
                                                   checkBirthGender();
                                                   checkGender();
                                               }} onChange={() => {
                                            checkBirthGender();
                                            checkGender();
                                        }}
                                               id={"userBirth"}
                                               className={"col-6"}
                                               placeholder="* * * * * *"/>
                                        &nbsp;-&nbsp;
                                        {/* 성별 */}
                                        <Input name={"userGender"} style={{width: 50}} maxLength={1}
                                               onChange={() => {
                                                   checkBirthGender();
                                                   checkGender();
                                               }} onClick={() => {
                                            checkBirthGender();
                                            checkGender();
                                        }}
                                               id={"userGender"}
                                               className={"col-6"}
                                               placeholder="*"/>
                                        &nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*
                                    </InputTextSizeW>
                                    <HiddenMessage style={noStyle} className="checkBG no">필수 항목입니다.</HiddenMessage>
                                    <br/>
                                    <HiddenMessage style={noStyle} className="checkBirth no">생년월일 6자리를 정확히
                                        입력해주세요</HiddenMessage>
                                    <HiddenMessage style={noStyle} className="checkOld">1 또는 2만 입력 가능합니다</HiddenMessage>
                                    <HiddenMessage style={noStyle} className="checkYoung">3 또는 4만 입력
                                        가능합니다</HiddenMessage>
                                    <HiddenMessage style={noStyle} className="checkBirth">올바른 입력이 아닙니다</HiddenMessage>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 주소
                                </FormBlockHead>
                                <FormBlockBody>
                                    <Popup checkFunc={checkAddress}/>
                                    <Input name={"userAddrNum"} className={'my-1'} id={"sigunguCode"}
                                           placeholder={'우편번호'} readOnly={true}/>
                                    <Input name={"userAddrJibun"} className={'my-1'} id={"jibunAddress"}
                                           placeholder={'지번 주소'} readOnly={true}/>
                                    <Input name={"userAddrRoad"} className={'my-1'} id={"roadAddress"}
                                           placeholder={'도로명 주소'} readOnly={true}/>
                                    <Input name={"userAddrDetail"} className={'my-1'} id={"addressDetail"}
                                           placeholder={'상세주소를 입력해주세요.'}/>
                                    <HiddenMessage style={noStyle} className="checkAddr no">필수 항목입니다.</HiddenMessage>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlockCheckAllWrap>
                                <Terms>
                                    <TermsHead>
                                        <InputCheckBox>
                                            <input type="checkbox"/>
                                        </InputCheckBox>
                                        <TermsLabel>모두 동의합니다.</TermsLabel>
                                    </TermsHead>

                                    <TermsBody>
                                        <TermsItem>
                                            <InputCheckBox>
                                                <input type="checkbox"/>
                                            </InputCheckBox>
                                        </TermsItem>
                                        <TermsItem>
                                            <InputCheckBox>
                                                <input type="checkbox"/>
                                            </InputCheckBox>
                                            <Terms2A>이용약관 필수 동의</Terms2A>
                                        </TermsItem>
                                    </TermsBody>
                                </Terms>
                                <Terms1Error/>
                                <TermsError/>
                            </FormBlockCheckAllWrap>
                            <FormBlockSubmit>
                                <FormBlockBody>
                                    <BtnLogin onClick={checkAll} type="button" id={"btn-signUp"}>회원가입하기</BtnLogin>
                                </FormBlockBody>
                            </FormBlockSubmit>
                        </form>
                        <FormBlockSubmit>
                            <FormBlockBody>
                                <BtnBack id={"btn-back"} type={"button"} onClick={toMain}>메인페이지로 이동</BtnBack>
                            </FormBlockBody>
                        </FormBlockSubmit>
                    </LoginSection>
                </LoginWrap>
            </ReauthPhone>
        </WrapLogin>
    );
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

const AuthBtn = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  background: #eee !important;
  color: #aaa !important;
  border: 1px solid #ddd !important;
  cursor: default !important;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  position: absolute;
  width: 100px;
`;

const BtnLogin = styled.button`
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  background: #f1c333;
  border: 1px solid #f1c333;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
`;

const BtnBack = styled.button`
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  background: #808080;
  border: 1px solid #808080;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
`;

const FormBlockSubmit = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const TermsError = styled.span`
  display: none;
  cursor: default !important;
  color: #ff4b50;
  margin: 10px 0 0;
`;

const Terms1Error = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block !important;
  cursor: default !important;
`;
const Terms2A = styled.a`
  text-decoration: underline;
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const Terms1Label = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const Terms1 = styled.input`
  // -webkit-appearance: none;
  background: #f1c333;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
    cursor: pointer;
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
  }
`;

const TermsItem = styled.div`
  margin-top: 5px;
`;

const TermsLabel = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
`;

const InputCheckBox = styled.div`
  float: left;
  margin-right: 10px;
  display: inline-block;
`;

const TermsBody = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const TermsHead = styled.div`
  border-bottom: 1px solid #333;
  padding: 5px 0;
`;

const Terms = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const FormBlockCheckAllWrap = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const UiInputBtnCombo = styled.div`
  position: relative;
  padding-right: 105px;
`;

const Input = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const RegistrationNumberInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 50%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
`;

const InputTextSizeWTypeL = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  height: 48px;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
`;

const FormError = styled.span`
  color: #ff4b50;
  margin: 10px 0 0;
  display: block;
  cursor: default !important;
`;

const InputTextSizeW = styled.div`
  &.formError {
    cursor: default !important;
  }
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
`;

const FormBlockBody = styled.div`
  text-align: left;
`;

const AsteriskRed = styled.em`
  color: #ff4b50;
  font-size: 18px;
  display: inline-block;
`;

const FormBlockHead = styled.label`
  font-size: 14px;
`;

const FormBlock = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;
const Title = styled.h3``;
const IsActive = styled.li``;

const SignupStep = styled.div`
  text-align: center;
  margin: 45px 0 20px;

  ${Title} {
    font-size: 18px;
    font-weight: normal;
  }

  &.wrap {
    text-align: center;
    margin: 45px 0 20px;

    ${IsActive} {
      color: #fff;
      border-color: #f1c333;
      background: #f1c333;
    }

    ul {
      display: inline-block;
      position: relative;
      border-top: 1px solid #aaa;
    }

    li {
      position: relative;
      top: -15px;
      z-index: 10;
      background: #fff;
      color: #999;
      border: 1px solid #999;
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
    }

    li + li {
      margin-left: 50px;
    }
  }
`;

const LoginTitle = styled.h2`
  font-size: 14px;
  color: #333;
  text-align: center;
  position: relative;
  top: -10px;
  background: #fff;
  display: inline-block;
  padding: 0 10px;
`;

const LoginSection = styled.section`
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #333;
  padding-bottom: 100px;
`;

const SpIcon = styled.span`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);

  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -91px -488px;
  width: 100px;
  padding-top: 40px;
`;

const LogoA = styled.div`
  display: block;
`;

const LoginLogo = styled.div`
  padding-top: 40px;
  text-align: center;
  padding: 40px 0 0;
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

const ReauthPhone = styled.form`
  width: 500px;
  display: block;
  margin: 0 auto;
`;

const HeadBannerGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const WrapLogin = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;

export default UserSignUp;