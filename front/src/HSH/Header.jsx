import {Link, Outlet} from "react-router-dom";
import React, {useState} from "react";
import styled from "styled-components";

const Header = () => {
    const [isClick, setIsClick] = useState(false);
    const [rankClick, setRankClick] = useState(true);

    return (
        <div style={{
            paddingTop: 200
        }}>
            <nav className="navbar navbar-expand navbar-dark fixed-top">
                <div className={'container'}>
                    <div>
                        <Link onClick={() => {
                            alert("하이");
                        }}><img width={60} src={"Img/menu.png"}/></Link>
                        <Link className={'navbar-brand'} to={"/"}><img width={150} src={'../Img/logo.png'}/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className={'navbar-nav my-auto'}>
                            <li className={'nav-item'}>
                                <div className={'d-flex'}>
                                    <input style={{
                                        width: 500
                                    }} className={'form-control'} placeholder={'검색'}/>
                                    <button style={{
                                        width: 100
                                    }} className={'text-center btn btn-outline-primary'}>검색
                                    </button>
                                </div>
                            </li>
                            <div className={'nav-item dropdown'}>
                                <Link id={'headerDropDown'}
                                      onClick={() => isClick == false ? setIsClick(true) : setIsClick(false)}
                                      className={"nav-link dropdown-toggle"} data-bs-toggle={'dropdown'}
                                      aria-expanded={'false'}><img
                                    width={30} src={isClick == false ? "Img/down.png" : "Img/up.png"}/></Link>
                                <div style={{
                                    padding: 15,
                                }} className={'dropdown-menu'} aria-labelledby={'headerDropDown'}>
                                    <div><h3 className={'text-center'}>실시간 쇼핑 검색어</h3></div>
                                    <ul className={'mx-auto text-center row justify-content-around d-flex'}>
                                        <li onClick={() => setRankClick(true)} style={{
                                            backgroundColor: rankClick == true ? "white" : "lightgray"
                                        }} className={'col-6 border border-dark'}><h5>1 ~ 10위</h5></li>

                                        <li style={{
                                            backgroundColor: rankClick == false ? "white" : "lightgray"
                                        }} className={'col-6 border border-dark'}><Link
                                            onClick={() => setRankClick(false)} style={{
                                            textDecoration: "none"
                                        }}><h5>11 ~ 20위</h5></Link></li>
                                    </ul>
                                    <li><Link className={'dropdown-item'} to={'#'}>테스트</Link></li>
                                    <li><Link className={'dropdown-item'} to={'#'}>테스트</Link></li>
                                    <li><Link className={'dropdown-item'} to={'#'}>테스트</Link></li>
                                    <li><Link className={'dropdown-item'} to={'#'}>테스트</Link></li>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                    aria-selected="true">Home
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                    data-bs-target="#profile" type="button" role="tab"
                                                    aria-controls="profile" aria-selected="false">Profile
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                    data-bs-target="#contact" type="button" role="tab"
                                                    aria-controls="contact" aria-selected="false">Contact
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel"
                                             aria-labelledby="home-tab">...
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel"
                                             aria-labelledby="profile-tab">...
                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel"
                                             aria-labelledby="contact-tab">...
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <li className={'nav-item'}>
                                <Link to={'/login'}><img className={'ms-2'} src={"Img/login.png"}/></Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={'/cart'}><img className={'ms-2 mt-2'} width={40}
                                                        src={"Img/shoppingCart.png"}/></Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={'/login'}><img className={'ms-2'} src={"Img/login.png"}/></Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={'/login'}><img className={'ms-2'} src={"Img/login.png"}/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Header;