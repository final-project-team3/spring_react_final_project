import React, {useCallback, useEffect, useState} from "react";
import Popup from "./Popup";
import styled from "styled-components";
import $ from "jquery";
import {default as Axios} from "axios";
import {useNavigate} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";
import user from "../BJH/User";

const axios = Axios.create({
    baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
})

function UserInfoUpdate() {
    // 유효성 검사 true false 리스트 회원가입과 다르게 true를 4개 준 다음에 유효성 다 통과하면 업데이트
    let checkList = [];
    for (let i = 1; i <= 4; i++) {
        checkList.push(true);
    }

    //[React] input 엘리먼트에 value 속성만 지정했을때 값이 입력불가한 현상 해결방법
    const [userPass, setUserPass] = useState('');
    const [userPass2, setUserPass2] = useState('');
    const [userTel, setUserTel] = useState('');
    const [userAddrNum, setUserAddrNum] = useState('');
    const [userAddrJibun, setUserAddrJibun] = useState('');
    const [userAddrRoad, setUserAddrRoad] = useState('');
    const [userAddrDetail, setUserAddrDetail] = useState('');
    const addrChangeList = {
        setAddrNum: setUserAddrNum,
        setAddrRoad: setUserAddrRoad,
        setAddrJibun: setUserAddrJibun
    };

    const onChangeUserPass = useCallback(e => {
        setUserPass(e.target.value);
    }, []);

    const onChangeUserPass2 = useCallback(e => {
        setUserPass2(e.target.value);
    }, []);

    const onChangeUserTel = useCallback(e => {
        setUserTel(e.target.value);
    }, []);

    const onChangeUserAddrDetail = useCallback(e => {
        setUserAddrDetail(e.target.value);
    }, []);

    //메인으로
    const navigate = useNavigate();
    const toMain = () => {
        navigate(`/`);
    };

    // 유저 정보
    const [userInfo, setUserInfo] = useState();

    let sessionUserInfo = sessionStorage.getItem("userInfo");
    sessionUserInfo = JSON.parse(sessionUserInfo);
    console.log(sessionUserInfo);

    useEffect(() => {
        const getUserInfo = async () => {
            const {data} = await axios.post("/getUserInfo", null, {
                params: {userId: sessionUserInfo.userId}
            })
            console.log(data);
            setUserInfo(data);
            setUserPass(data.userPass);
            setUserPass2(data.userPass2);
            setUserTel(data.userTel);
            setUserAddrNum(data.userAddrNum);
            setUserAddrJibun(data.userAddrJibun);
            setUserAddrRoad(data.userAddrRoad);
            setUserAddrDetail(data.userAddrDetail);
        }
        getUserInfo();
    }, [])


    //  변경할 비밀번호 체크
    function checkPw() {
        console.log("11")
        var pw = $("#userPass").val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (pw == '') { // 빈값일때
            checkList[0] = false;
            console.log(checkList[0]);
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
        console.log("22")
        var pw1 = $('#userPass').val();
        var pw2 = $('#userPass2').val();


        if (pw2 != '') { // pw2가 비었을때는 실행을 막기 위해 사용(pw1이 바꼈을때 바로 반영하기 위함.)
            if (pw1 == pw2) { // 비밀번호가 같은 경우
                checkList[0] = true;
                $('.checkPw2').css("display", "none");
                $('.pwd2_ok').css("display", "inline-block");
                $('.pwd2_not').css("display", "none");

            } else { // 비밀번호가 다를 경우
                checkList[0] = false;
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

    // 전화번호 '-'방지
    $(function () {
        $("#userTel").on("blur keyup", function () {
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        });
    });


    // 전화번호 유효성
    async function checkTel() {
        var ph = $('#userTel').val(); // ph 저장
        var regExp = /^(010)[0-9]{3,4}[0-9]{4}$/;
        let {data} = await axios.post("/telCheck", null, {
            params: {
                telData: ph
            }
        });
        console.log(data);

        if (ph == '') { // 값이 비어있을때
            checkList[2] = false;
            $('.checkPh').css("display", "inline-block");
            $('.ph_not').css("display", "none");
            $('.ph_already').css("display", "none");
            $('.ph_ok').css("display", "none");
            $('#userPh').focus();
        } else if (!regExp.test(ph)) { // 유효성 체크
            checkList[2] = false;
            $('.checkPh').css("display", "none");
            $('.ph_not').css("display", "inline-block");
            $('.ph_already').css("display", "none");
            $('.ph_ok').css("display", "none");
            $('#userPh').focus();
        } else if (data != "") { // cnt가 1일 경우 -> 이미 존재하는 전화번호
            checkList[2] = false;
            $('.checkPh').css("display", "none");
            $('.ph_already').css("display", "inline-block");
            $('.ph_ok').css("display", "none");
            $('.ph_not').css("display", "none");
            $('#userPh').focus();
        } else if (data == "") { //cnt가 1이 아니면(=0일 경우) -> 사용 가능한 전화번호
            checkList[2] = true;
            $('.checkPh').css("display", "none");
            $('.ph_ok').css("display", "inline-block");
            $('.ph_already').css("display", "none");
            $('.ph_not').css("display", "none");
        }
    };

    // 주소 체크
    function checkAddress() {
        var addr1 = $('#sigunguCode').val();
        var addr2 = $('#jibunAddress').val();
        var addr3 = $('#roadAddress').val();

        if (addr1 == '' || addr2 == '' || addr3 == '') {
            checkList[3] = false;
            $('.checkAddr').css('display', 'inline-block');
        } else {
            checkList[3] = true;
            $('.checkAddr').css('display', 'none');
        }
    }

    const checkAll = () => {
        console.log(checkList);
        let update = $('#btn-update');
        // 확인
        let checkVal = [$("#userPass").val(), $("#userPass2").val(), $("#userTel").val(), $("#sigunguCode").val()];
        // 출력(span)
        let checkSpan = [$('.checkPw'), $('.checkPw2'), $('.checkPh'), $('.checkAddr')];

        let true_cnt = 0;

        for (let i = 0; i < checkVal.length; i++) {
            if (i == 1) {
                if (checkList[i] == true) {
                    true_cnt++;
                }
            } else if (checkList[i] == false || checkVal[i] == '') {
                checkSpan[i].css('display', 'inline-block')
            } else if (checkList[i] == true) {
                true_cnt++
            }
        }

        const AllChecked = (val) => val == true;

        if (checkList.every(AllChecked) && true_cnt == checkVal.length) {
            alert("회원정보 수정이 완료 되었습니다.");
            $("#btn-update").attr("type", "submit");
            $("#btn-update").onclick();
            console.log(true_cnt);
            console.log(checkList);
        } else {
            alert("잘못된 입력을 확인해 주세요");
            console.log(true_cnt);
            console.log(checkList);
        }
    };


    return (
        <WrapLogin>
            <HeadBannerGroup/>
            <ReauthPhone>
                <LoginWrap>
                    <LoginSection>
                        <LoginTitle>회원정보수정 (일반회원용)</LoginTitle>
                        <SignupStep className="wrap">
                            <Title>환영합니다. 개인 정보를 수정해주세요</Title>
                        </SignupStep>
                        <form action={'/userInfoUpdate'} method={'post'}>
                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 이메일
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type="email" name={'userId'} id={'userId'}
                                               value={userInfo?.userId ? userInfo.userId : null} readOnly={true}
                                               style={{backgroundColor: "#c8c8c8"}}/>
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>
                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 비밀번호
                                </FormBlockHead>
                                <FormBlockBody>
                                    <InputTextSizeW>
                                        <Input type={'string'} name={"userPass"} id={"userPass"} onClick={() => {
                                            checkPw();
                                            checkDoublePw();
                                            checkList[1] = false;
                                        }}
                                               value={userPass}
                                               onChange={(e) => {
                                                   onChangeUserPass(e);
                                                   checkPw();
                                                   checkDoublePw();
                                                   checkList[1] = false;
                                                   console.log(checkList[1]);
                                               }}
                                               placeholder="변경할 비밀번호 (영문+숫자+특수문자 8자 이상)"/>
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
                                        <Input type={'string'} placeholder="변경할 비밀번호 확인" id={"userPass2"}
                                               onChange={(e) => {
                                                   onChangeUserPass2(e);
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
                                        <Input type="text" name={"userName"} id={"userName"} readOnly={true}
                                               style={{backgroundColor: "#c8c8c8"}}
                                               value={userInfo?.userName ? userInfo.userName : null}/>
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
                                        <Input type="tel" name={"userTel"}
                                               value={userTel}
                                               onClick={checkTel} onChange={(e) => {
                                            onChangeUserTel(e);
                                            checkTel();
                                        }}
                                               id={"userTel"}
                                               data-auth="cell_phone"
                                               maxLength={11}/>
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
                                        <Input name={"userBirth"} style={{width: 241, backgroundColor: "#c8c8c8"}}
                                               maxLength={6} id={"userBirth"} readOnly={true}
                                               value={userInfo?.userBirth ? userInfo.userBirth : null}
                                               className={"col-6"}/>
                                        &nbsp;-&nbsp;
                                        {/* 성별 */}
                                        <Input name={"userGender"} style={{width: 50, backgroundColor: "#c8c8c8"}}
                                               maxLength={1} id={"userGender"} readOnly={true}
                                               value={userInfo?.userGender ? userInfo.userGender : null}
                                               className={"col-6"}/>
                                        &nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*&nbsp;*
                                    </InputTextSizeW>
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlock>
                                <FormBlockHead>
                                    <AsteriskRed>*</AsteriskRed> 주소
                                </FormBlockHead>
                                <FormBlockBody>
                                    <Popup addrChangeFunc={addrChangeList} checkFunc={checkAddress}/>
                                    <Input name={"userAddrNum"} className={'my-1'} id={"sigunguCode"}
                                           value={userAddrNum}
                                           readOnly={true}
                                    />
                                    <Input name={"userAddrJibun"} className={'my-1'} id={"jibunAddress"}
                                           value={userAddrJibun}
                                           readOnly={true}
                                    />
                                    <Input name={"userAddrRoad"} className={'my-1'} id={"roadAddress"}
                                           value={userAddrRoad}
                                           readOnly={true}
                                    />
                                    <Input name={"userAddrDetail"} className={'my-1'} id={"addressDetail"}
                                           onChange={(e) => onChangeUserAddrDetail(e)}
                                           value={userAddrDetail}
                                    />
                                </FormBlockBody>
                            </FormBlock>

                            <FormBlockSubmit>
                                <FormBlockBody>
                                    <BtnLogin onClick={checkAll} type="button" id={"btn-update"}>수정 완료</BtnLogin>
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

const InputTextSizeWTypeL = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  height: 48px;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
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


export default UserInfoUpdate;