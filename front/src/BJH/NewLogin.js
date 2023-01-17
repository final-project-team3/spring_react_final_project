import React, {Component} from "react";
import './style.css';
import User from "./User";
import Seller from "./Seller";

const menuList = {
    0: <User/>,
    1: <Seller/>,
};

class NewLogin extends React.Component {
    constructor(props) {
        super();

        this.state = {
            menu: 0,
        };
    }

    changeMenu = (menuIndex) => {
        this.setState({menu: menuIndex});
    }

    render() {
        return (
            <div className="wrap">
                <h2 className={"text-center"}>로그인</h2>
                <br/>
                <div className="contentArea">
                    <ul style={{
                        paddingLeft: 80,
                        paddingTop: 40
                    }} className="tabs">
                        <li className="us-tab">
                            <button className={`${this.state.menu === 0 ? 'active' : ''}`}
                                    onClick={() => this.changeMenu(0)}>일반회원
                            </button>
                        </li>
                        <li className="us-tab">
                            <button className={`${this.state.menu === 1 ? 'active' : ''}`}
                                    onClick={() => this.changeMenu(1)}>판매자
                            </button>
                        </li>
                    </ul>
                    {menuList[this.state.menu]}
                </div>

            </div>

        )
    }
}


export default NewLogin;