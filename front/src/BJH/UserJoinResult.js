import React from "react";
import './JoinResult.css';
import {Link} from "react-router-dom";

function UserJoinResult(props) {
    return (
        <div className={"layout_contents"}>
            <div className={"comp-title"}>
                <strong>SUCCESS</strong>
            </div>
            <div className={"joincomplete comp-width"}>
                <hr className={"sp--hr"}/>
                <div className={"comp-ment"}>
                    회원가입이 완료되었습니다
                </div>
                <hr className={"sp--hr"}/>
                <div className={"comp-width"} scope={"card"}>
                    <div className={"comp-box"}>
                        <ul>
                            <li>
                                <div className={"comp-box"}>
                                    <ul>
                                        <li>
                                            <div className={"comp-font"}>
                                                저희 쇼핑몰을 이용해 주셔서 감사합니다.<br/>
                                                가입하신 정보를 꼼꼼히 확인해주세요.
                                            </div>
                                            <hr className={"sp--hr"}/>
                                            <div className={"comp-box"}>
                                                <ul>
                                                    <li>
                                                        <table className={"comp-table"}>
                                                            <colgroup>
                                                                <col style={{
                                                                    width: 100
                                                                }}/>
                                                                <col/>
                                                            </colgroup>
                                                            <tbody>
                                                            <tr>
                                                                <td>아이디</td>
                                                                <td>회원아이디</td>
                                                            </tr>
                                                            <tr>
                                                                <td>이름</td>
                                                                <td>회원이름</td>
                                                            </tr>
                                                            <tr>
                                                                <td>이메일</td>
                                                                <td>회원이메일</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <p className={"comp-empty"}></p>
                                                        <div className={"wel-member"}>
                                                            <p>
                                                                <strong>
                                                                    <span>~~~</span>
                                                                    님
                                                                </strong>
                                                                은 [일반회원] 입니다.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr className={"sp--hr"}/>
                                            <div className={"comp-btn-group"}>
                                                <div className={"comp-btn-gap"}>
                                                    <Link to={"/"} className={"comp-btn"}>
                                                        완료
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserJoinResult;