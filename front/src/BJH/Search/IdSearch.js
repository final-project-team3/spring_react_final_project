import React, {Component} from "react";
import './loginSearch.css';

class IdSearch extends React.Component {
    constructor(props) {
        super();

        this.state = {
            menu: 0,
        };
    }

    render() {
        return (
                <div className={"tab-container"}>
                    <div id={"tab1"}>
                        <h3 className={"aria-hidden"}>아이디 찾기</h3>
                        <div className={"find-id-pwd"}>
                            <label htmlFor={"inp-name01"}>Name</label>
                            <input type={"text"} id={"inp-name01"} className={"input text-uppercase"}
                                   placeholder={"이름"} title={"성명(한글) 입력"}/>
                            <input type="hidden" id="inp-name02"
                                   className={"input text-uppercase"}
                                   placeholder="Last Name(성)"
                                   title="성명(한글) Last Name 입력"/>
                            <div className={"input-type-mail"} id={"mailContainer1"}>
                                <div>
                                    <label htmlFor={"inp-name01"}>Email</label>
                                </div>
                                <input type={"text"} id={"inp-id-mail01"}
                                       className={"input"}
                                       placeholder={"이메일"} title={"이메일 아이디 입력"}/>
                                <span className={"hyp"}>@</span>
                                <input type={"text"} className={"input email"}
                                       title={"이메일 주소 입력"}
                                       id={"inp-id-mail02"}/>
                                <select className={"inp-select"} id={"inp-id-mail03"}
                                        title={"이메일 주소 선택"}>
                                    {/* value값 필요*/}
                                    <option>직접입력</option>
                                    <option>naver.com</option>
                                </select>
                            </div>
                            <div className={"radio-wrap1"}>
                                <label className={"form-div1"}>
                                    <input type={"radio"} className={"radio"}
                                           name={"chkCertifyType1"}
                                           value={"phone"} defaultChecked hidden/>
                                    <span>휴대폰인증</span>
                                </label>
                                {/*<label className={"form-div1"}>*/}
                                {/*    <input type="radio" className={"radio"}*/}
                                {/*           name={"chkCertifyType1"}*/}
                                {/*           value={"mail"} hidden/>*/}
                                {/*    <span>E-mail (E-mail수신)</span>*/}
                                {/*</label>*/}
                            </div>
                            <div className={"input-type-phone"} id={"phoneContainer1"}>
                                <select className={"inp-select"} id={"sel-phone01"}
                                        title={"국제 번호 선택"}>
                                    {/* value값 필요*/}
                                    <option value={"010"} selected>010</option>
                                    <option value={"051"}>051</option>
                                </select>
                                <input type={"text"} id={"inp-phone01"}
                                       className={"input"} placeholder={"숫자 입력"}
                                       title={"국제번호 선택(숫자 입력)"} style={{
                                    imeMode: "disabled"
                                }}/>
                            </div>
                            <button id={"loginSubmit"} type={"submit"}>
                                아이디 찾기
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default IdSearch;