import React, {Component} from "react";
import './style.css';

class User extends React.Component {
    constructor(props) {
        super();

        this.state = {
            menu: 0,
        };
    }

    render() {
        return (
            <div>
                <form className={"text-center"}>
                    <input type={"text"} name={"id"} className={"login-input-text"}
                           placeholder={"판매자용 아이디"}/>
                    <br/>
                    <input type={"password"} name={"password"} className={"login-input-text"}
                           placeholder={"비밀번호"}/>
                    <br/>
                    <button style={{
                        width: 330,
                        height: 40,
                        border: 0
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
                            <label className="form-check-label" htmlFor="loginCheckbox">
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
        )
    }
}


export default User;