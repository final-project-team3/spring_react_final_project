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
    var checkList = [false, false, false, false, false, false, false, false, false, false, false];

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
            checkList[1] = false;
            $('.checkPw').css("display", "inline-block");
            $('.pwd_not').css("display", "none");
            $('.pwd_ok').css("display", "none");
            $('.pwd_space').css("display", "none");
            $('#userPw').focus();
        } else if (pw.length < 8 || pw.length > 16 || (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) { // 8 ~ 16자리이고, 영문, 숫자, 특수문자 조합
            checkList[1] = false;
            $('.checkPw').css("display", "none");
            $('.pwd_not').css("display", "inline-block");
            $('.pwd_ok').css("display", "none");
            $('.pwd_space').css("display", "none");
            $('#userPw').focus();
        } else if (pw.search(/\s/) != -1) { // 공백이 있을때
            checkList[1] = false;
            $('.checkPw').css("display", "none");
            $('.pwd_space').css("display", "inline-block");
            $('.pwd_ok').css("display", "none");
            $('.pwd_not').css("display", "none");
            $('#userPw').focus();
        } else { // 사용 가능한 비밀번호
            checkList[1] = true;
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
                checkList[2] = true;
                $('.checkPw2').css("display", "none");
                $('.pwd2_ok').css("display", "inline-block");
                $('.pwd2_not').css("display", "none");

            } else { // 비밀번호가 다를 경우
                checkList[2] = false;
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
            checkList[2] = false;
            $('.checkPw2').css("display", "inline-block");
            $('.pwd2_ok').css("display", "none");
            $('.pwd2_not').css("display", "none");
        }
    }

// 이름 체크 (비어있는지만 확인)
    function checkName() { // 간단한 체크
        var name = $('#userName').val();
        if (name == '') {
            checkList[3] = false;
            $('.checkName').css("display", "inline-block");
        } else {
            checkList[3] = true;
            $('.checkName').css("display", "none");
        }
    }




    let confirmNum = '';
    /**
     * 이메일 인증 보내는 함수
     * */
    const sendEmail = async () => {
        $("#emailCheck").attr('hidden', false);
        const {data} = await axios.post('http://localhost:8080/emailConfirm', null, {params: {email: $("#email").val()}});
        confirmNum = data;
        console.log(confirmNum);
    }
    /**
     * 인증번호 체크하는 함수
     * */
    const confirmNumCheck = () => $("#confirmNum").val() == confirmNum ? alert("인증되었습니다.") : alert("인증번호가 일치하지 않습니다.");

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
                                        <Input style={{width: 400}} type="email"  name={'userId'} id={'userId'}
                                               placeholder="이메일을 입력해주세요."/>
                                        <button className={"btn btn-primary ms-1"} type={'button'} disabled={true} id={sendCode}
                                                style={{width: 90}}>
                                            <p className={"p-0 m-0"} onClick={sendEmail}>인증코드전송</p></button>
                                        <HiddenMessage>위의 공백란을 입력해주세요</HiddenMessage>
                                    </InputTextSizeW>
                                    <InputTextSizeW id={'emailCheck'} hidden={true}>
                                        <Input id={'confirmNum'} style={{width: 400}} type="text"
                                               placeholder="인증번호를 입력해주세요"></Input>
                                        <button className={"btn btn-primary ms-1"} type={'button'}
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
                                        <Input type={'password'} name={"userPass"} id={"userPass"} onClick={checkPw} onChange={() => {
                                            checkPw();
                                            checkDoublePw();
                                        }}
                                               placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"/>
                                        <HiddenMessage style={okStyle} className="pwd_ok ok">사용 가능한 비밀번호입니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd_not no">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd_space no">비밀번호는 공백 없이 입력해주세요.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkPw no">필수 항목입니다.</HiddenMessage>
                                    </InputTextSizeW>
                                </FormBlockBody>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'password'} placeholder="비밀번호 확인" id={"userPass2"} onClick={checkPw2} onChange={() => {
                                            checkPw2();
                                            checkDoublePw();
                                        }}/>
                                        <HiddenMessage style={okStyle} className="pwd2_ok ok">두 비밀번호가 일치합니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="pwd2_not no">두 비밀번호가 다릅니다.</HiddenMessage>
                                        <HiddenMessage style={noStyle} className="checkPw2 no">필수 항목입니다.</HiddenMessage>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 이름
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeWTypeL>
                                        <Input type="text" name={"userName"} id={"userName"} onChange={checkName} onClick={checkName}
                                               placeholder="이름을 입력해 주세요"/>
                                        <HiddenMessage style={noStyle} className="checkName no">필수 항목입니다.</HiddenMessage>
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
                                        <Input type="tel" name={"userTel"} placeholder="'-'를 제외한 번호를 입력해주세요" id={"userTel"}
                                               data-auth="cell_phone"/>
                                        <HiddenMessage>위 공백란을 입력해주세요</HiddenMessage>
                                    </InputTextSizeWTypeL>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 생년월일 / 성별
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input name={"userBirth"} style={{width: 241}} maxLength={6} id={"userBirth"}
                                               className={"col-6"}
                                               placeholder="* * * * * *"/>
                                        &nbsp;-&nbsp;
                                        <Input name={"userGender"} style={{width: 50}} maxLength={1} id={"userGender"}
                                               className={"col-6"}
                                               placeholder="*"/>
                                        &nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*
                                    </InputTextSizeW>
                                    <HiddenMessage>위 공백란을 입력해주세요</HiddenMessage>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 주소
                                </FormBlockHead>
                                <FormBlockBody>
                                    <Popup/>
                                    <Input name={"userAddrNum"} className={'my-1'} id={"sigunguCode"}
                                           placeholder={'우편번호'} readOnly={true}/>
                                    <Input name={"userAddrJibun"} className={'my-1'} id={"jibunAddress"}
                                           placeholder={'지번 주소'} readOnly={true}/>
                                    <Input name={"userAddrRoad"} className={'my-1'} id={"roadAddress"}
                                           placeholder={'도로명 주소'} readOnly={true}/>
                                    <Input name={"userAddrDetail"} className={'my-1'} id={"addressDetail"}
                                           placeholder={'상세주소를 입력해주세요.'}/>
                                    <HiddenMessage>주소란을 모두 정확히 입력해주세요</HiddenMessage>
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
                                    <BtnLogin type="submit" id={"btn-signUp"}>회원가입하기</BtnLogin>
                                </FormBlockBody>
                            </FormBlockSubmit>
                        </form>
                        <FormBlockSubmit>
                            <FormBlockBody>
                                <BtnBack id={"btn-back"} type="submit" onClick={toMain}>메인페이지로 이동</BtnBack>
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

// const BpCheckAll = styled.input`
//   -webkit-appearance: none;
//   background: transparent;
//   display: inline-block;
//   position: relative;
//   height: 18px;
//   width: 18px;
//   vertical-align: middle;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   border: 0;
//   margin: 0;

//   &:before {
//     font-size: 16px;
//     font-style: normal;
//     content: "✓";
//     border: 1px solid #f1c333	;
//     background: #f1c333	;
//     color: #fff;
//     cursor: pointer;
//     display: inline-block;
//     line-height: 16px;
//     width: 16px;
//     height: 16px;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     border-radius: 2px;
//     text-align: center;
//   }
// `;

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