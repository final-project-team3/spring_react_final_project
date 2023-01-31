import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import $ from "jquery";
import {sellerLogin, userLogin} from "../store";

function NewLogin() {

    const dispatch = useDispatch();



    const sellerLoginCheck = async () => {
        const id = $("#id").val();
        const pass = $("#pass").val();

        const {data} = await axios.post("http://localhost:8080/sellerLogin", null, {
            params: {
                id: id, pass: pass
            }
        })
        if (data == "") {
            alert('아이디와 비밀번호를 다시 확인해주세요.');
        } else {
            alert('로그인 성공');
            console.log(data);
            dispatch(sellerLogin(data, "SELLER"));
        }
    }
    return (
        <>
            <LoginWrap>
                <LoginContainer>
                    <LoginHeadLogo>
                        <h1>
                            <a>{/* <IconLogo /> */}</a>
                        </h1>
                    </LoginHeadLogo>
                    <LoginHeadText>

                        <NeedLogin>
                            로그인이 필요한 서비스 입니다.
                        </NeedLogin>

                    </LoginHeadText>
                    <BorderAndText>
                        <Link to={"/login"}><span>일반회원 로그인</span></Link>
                    </BorderAndText>

                    <EmailLoginContainer>

                        <div>

                            <EmailLoginInput
                                id="id"
                                type="email"
                                placeholder="이메일"
                            />

                            <EmailLoginInput
                                id="pass"
                                type="password"
                                placeholder="비밀번호"
                            />
                        </div>

                        <EmailLoginOption>
                            <div>
                                <InputCheckbox>
                                    <Bp type="checkbox"></Bp>
                                </InputCheckbox>
                                <label>이메일 저장하기</label>
                            </div>
                            <Link to={"/SearchMain"}>이메일 / 비밀번호 찾기</Link>
                        </EmailLoginOption>
                    </EmailLoginContainer>
                    <CommonButton
                        type="button"
                        onClick={() => {
                            sellerLoginCheck();
                        }}
                    >
                        로그인
                    </CommonButton>
                    <Link to={"/userSignup"}><CommonButtons type="button">
                        회원가입
                    </CommonButtons></Link>
                    <Link to={"/sellerSignup"}><CommonButtons2 type="button">
                        사업자 회원가입
                    </CommonButtons2></Link>
                </LoginContainer>

            </LoginWrap>
        </>
    );


}

const CommonButton = styled.button`
  margin-top: 6px;
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: none;
  background: #f1c333;
  color: #ffffff;
  font-size: 16px;
  line-height: 30px;
  padding: 0 16px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const CommonButtons = styled.button`
  margin-right: 10px;
  margin-top: 8px;
  width: 47.3%;
  height: 44px;
  border-radius: 2px;
  border: none;
  background: #f1c333;
  color: #ffffff;
  font-size: 16px;
  line-height: 30px;
  padding: 0 16px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const CommonButtons2 = styled.button`
  margin-left: 10px;
  margin-top: 8px;
  width: 47.3%;
  height: 44px;
  border-radius: 2px;
  border: none;
  background: #f1c333;
  color: #ffffff;
  font-size: 16px;
  line-height: 30px;
  padding: 0 16px;
  display: inline-block;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;

const Bp = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    cursor: pointer;
    content: "";
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

const InputCheckbox = styled.div`
  display: inline-block;
`;

const EmailLoginOption = styled.div`
  padding: 13px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  font-size: 11px;
`;

const EmailLoginInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 2px;
  border: 1px solid #b4b4b4;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 14px;
  outline: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EmailLoginContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CouponImg = styled.img``;
const NeedLogin = styled.p``;
const BackgroundText = styled.span``;
const Text = styled.strong``;
const Background = styled.span``;

const LoginHeadText = styled.div`
  margin-bottom: 30px;

  p {
    color: #333333;
    text-align: center;
  }

  ${NeedLogin} {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    font-size: 16px;
  }

  ${BackgroundText} {
    width: 50px;
    height: 19px;
    position: relative;

    > ${Text} {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    > ${Background} {
      width: 100%;
      height: 15px;
      background: #fbd3bc;
      position: absolute;
      top: 7px;
      left: 0;
    }
  }

  ${CouponImg} {
    width: 100%;
    margin-top: 5px;
  }
`;

// const IconLogo = styled.span`
//   background-position: -91px -488px;
//   width: 100px;
//   padding-top: 40px;
//   background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
//   height: 0;
//   overflow: hidden;
//   display: inline-block;
//   vertical-align: middle;
//   font-size: 0;
//   line-height: 0;
//   letter-spacing: 0;

//   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//     background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
//     -webkit-background-size: 787px 736px;
//     -moz-background-size: 787px 736px;
//     -o-background-size: 787px 736px;
//     background-size: 787px 736px;
//   }
// `;

const LoginHeadLogo = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 10px;
`;

const LoginSignupContent = styled.div``;

const BorderAndText = styled.div`

  color: #999999;
  display: flex;

  span {
    font-size: 12px;
    margin-top: -8px;
    background: #ffffff;
    width: 130px;
    text-align: center;
  }
`;

const LoginContainer = styled.div`
  background: #ffffff;

  @media (min-width: 720px) {
    padding: 1px 0 50px;
    width: 384px;
    display: block;
    margin: 0 auto;
  }
`;

const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
  background: #fff;
`;
export default NewLogin;