import React, {Component, useState} from "react";
import './loginSearch.css';
import IdSearch from "./IdSearch";
import PasswordSearch from "./PasswordSearch";
import {Link} from "react-router-dom";

const menuList = {
    0: <IdSearch/>,
    1: <PasswordSearch/>,
};


class SearchMain extends React.Component {

    constructor(props) {
        super();

        this.state = {
            menu: 0,
            btnClick: true
        };
    }

    changeMenu = (menuIndex) => {
        this.setState({menu: menuIndex});
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"login-wrap"}>
                    <h2>아이디, 비밀번호 찾기</h2>
                    <fieldset>
                        <legend hidden>아이디, 비밀번호 찾기</legend>
                        <div className={"tab-wrapper"}>
                            <ul className={"tab-list tablist col2"}>
                                <li data-tab-header={"0"} data-tab-content={"#tab1"}>
                                    <Link className={`${this.state.menu === 0 ? 'active' : ''}`} style={{
                                        backgroundColor: this.state.btnClick == true ? "brown" : "#F2F2F3",
                                        textDecoration: "none",
                                        color: this.state.btnClick == true ? "white" : "black"
                                    }} onClick={() => {
                                        this.changeMenu(0);
                                        this.setState({btnClick: true});
                                    }}>
                                        아이디찾기
                                    </Link>
                                </li>
                                <li data-tab-header={"1"} data-tab-content={"#tab2"}>
                                    <Link style={{
                                        backgroundColor: this.state.btnClick == false ? "brown" : "#F2F2F3",
                                        textDecoration: "none",
                                        color: this.state.btnClick == false ? "white" : "black"
                                    }} className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => {
                                        this.changeMenu(1);
                                        this.setState({btnClick: false});
                                    }}>
                                        비밀번호 찾기
                                    </Link>
                                </li>
                            </ul>
                            {menuList[this.state.menu]}
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default SearchMain;