import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import DaumPostcode from 'react-daum-postcode';
import Popup from "./Popup";

function UserSignUp() {

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
                                        <Input type="email" name={'userId'} placeholder="이메일을 입력해주세요."/>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>
                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 비밀번호
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'password'} name={"userPass"} placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"/>
                                    </InputTextSizeW>
                                </FormBlockBody>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'password'} placeholder="비밀번호 확인"/>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 이름
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeWTypeL>
                                        <Input type="text" name={"userName"} placeholder="이름을 입력해 주세요"/>
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
                                        <Input type="tel" name={"userTel"} placeholder="ex) 010-1234-5678" data-auth="cell_phone"/>
                                    </InputTextSizeWTypeL>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 주민등록번호
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input name={"userBirth"} style={{width: 241}} maxLength={6} className={"col-6"}
                                               placeholder="* * * * * *"/>
                                        &nbsp;-&nbsp;
                                        <Input name={"userGender"} style={{width: 50}} maxLength={1} className={"col-6"} placeholder="*"/>
                                        &nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 주소
                                </FormBlockHead>
                                <FormBlockBody>
                                    <Popup/>
                                    <Input name={"userAddrNum"} className={'my-1'} id={"sigunguCode"} placeholder={'우편번호'} readOnly={true}/>
                                    <Input name={"userAddrJibun"} className={'my-1'} id={"jibunAddress"} placeholder={'지번 주소'}
                                           readOnly={true}/>
                                    <Input name={"userAddrRoad"} className={'my-1'} id={"roadAddress"} placeholder={'도로명 주소'}
                                           readOnly={true}/>
                                    <Input name={"userAddrDetail"} className={'my-1'} id={"addressDetail"} placeholder={'상세주소를 입력해주세요.'}/>
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
                                    <BtnLogin type="submit">회원가입하기</BtnLogin>
                                </FormBlockBody>
                            </FormBlockSubmit>
                        </form>
                    </LoginSection>
                </LoginWrap>
            </ReauthPhone>
        </WrapLogin>
    )
        ;
}

//
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