import React, {Component} from "react";
import './loginSearch.css';

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
                            <label htmlFor={"inp-id"}>ID</label>
                            <input type={"text"} id={"inp-id"} className={"input"} placeholder={"8~20자의 영문, 숫자 조합"}
                                   title={"ID 입력"} maxLength={20}/>
                        </div>
                        <div className={"find-id-pwd"}>
                            <label htmlFor={"inp-name01"}>Name</label>
                            <input type={"text"} id={"inp-name01"} className={"input text-uppercase"}
                                   placeholder={"이름"} title={"성명(한글) 입력"}/>
                            <input type="hidden" id="inp-name02" className={"input text-uppercase"}
                                   placeholder="Last Name(성)" title="성명(한글) Last Name 입력"/>
                        </div>
                        <div className={"find-id-pwd"}>
                            <div className={"input-type-mail"} id={"mailContainer1"}>
                                <div>
                                    <label htmlFor={"inp-name01"}>Email</label>
                                </div>
                                <input type={"text"} id={"inp-id-mail01"} className={"input"}
                                       placeholder={"이메일"} title={"이메일 아이디 입력"}/>
                                <span className={"hyp"}>@</span>
                                <input type={"text"} className={"input email"} title={"이메일 주소 입력"}
                                       id={"inp-id-mail02"}/>
                                <select className={"inp-select"} id={"inp-id-mail03"} title={"이메일 주소 선택"}>
                                    {/* value값 필요*/}
                                    <option>직접입력</option>
                                    <option>naver.com</option>
                                </select>
                            </div>
                        </div>
                        <button id={"loginSubmit"} type={"submit"}>
                            비밀번호 찾기
                        </button>
                    </div>
                </div>
        )
    }
}

export default PasswordSearch;