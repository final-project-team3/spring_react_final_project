import React from "react";
import '../LoginPage.css'

function LoginPage(props) {
    return (
        <div>
            <h2 className={"text-center"}>로그인 페이지</h2>
            <div id={"content"}>
                <img className={"logo"} alt={""} src={""}/>

                <ul className="list-tab mx-auto" id="login-tab">
                    <li className="list-item-tab">
                        <button style={{
                            borderBottomWidth: 0
                        }} className="button-tab" id="login-tab-member">일반회원 로그인
                        </button>
                    </li>
                    <li className="list-item-tab">
                        <button style={{
                            borderBottomWidth: 0
                        }} className="button-tab" id="login-tab-non-member">판매자 로그인
                        </button>
                    </li>
                </ul>


                            <form>
                                <input type={"text"} name={"id"} className={"login-input-text"}
                                       placeholder={"아이디를 입력하세요"}/>
                                <input type={"password"} name={"password"} className={"login-input-text"}
                                       placeholder={"비밀번호를 입력하세요"}/>

                                <button style={{
                                    width: 330,
                                    height: 40
                                }} type="button" className="btn-log">로그인
                                </button>
                                <br/>
                                <div className={"logAndFind"}>
                                    <div className="login-find">
                                        <a href="" data-log-actionid-label="id_find">아이디찾기 </a>
                                        <a href="" data-log-actionid-label="password_find"> 비밀번호찾기</a>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="loginCheckbox"/>
                                        <label style={{
                                            marginLeft: 5
                                        }} className="form-check-label" htmlFor="loginCheckbox">
                                            자동 로그인
                                        </label>
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <input className="form-check-input" type="checkbox" value="" id="idCheckbox"/>*/}
                                {/*    <label className="form-check-label" htmlFor="idCheckbox">*/}
                                {/*        아이디 저장*/}
                                {/*    </label>*/}
                                {/*</div>*/}

                                <br/>

                                <p className="member-join"><a href="#"> 회원가입</a></p>
                            </form>
                </div>
            </div>
            );
            }

            export default LoginPage;