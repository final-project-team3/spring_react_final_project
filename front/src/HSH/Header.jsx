import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {hover} from "@testing-library/user-event/dist/hover";
import axios from "axios";
import $ from 'jquery';
import Footer from "../BJH/Footer";
import {useDispatch, useSelector} from "react-redux";
import {sellerLogout, userLogout} from "../store";


// 카테고리
const Kind = (props) => {
    const [bigKind, setBigKind] = useState();
    const [smallKind, setSmallKind] = useState();
    const location = useLocation();
    const navi = useNavigate();
    let checkNum;
    let linkId;
    let ulId;

    let smallKindList = [];

    if (props.smallKind != null) {
        smallKindList = [props.smallKind];
        smallKindList = smallKindList[0];
    }
    // 마우스 올리면 내려오게 함
    $(function () {
        $(".h2-bigCategory").hover(function () {
            let parent = $(this).parent();
            // console.log($(this).parent());
            // parent = parent.parent();
            // console.log(parent.parent().parent());
            // parent = parent.parent().parent();
            // console.log(parent.children());
            // linkId = parent.children().id;

            $(linkId).prop("className", "dropdown-toggle show");
        }, function () {
            // $(linkId).prop("className", "dropdown-toggle");
        });
    })
    return (
        <div>
            <Link className={'dropdown-toggle'} id={`dropdown${props.index}`} data-bs-toggle="dropdown" style={{
                textDecoration: "none",
                color: '#ffffff'
            }}><h2 className={'h2-bigCategory'} onClick={(event) => {
                $(event.target).text();
                console.log($(event.target).text());
                setBigKind($(event.target).text());
            }} style={{
                color: "black"
            }}>{props.bigKind}</h2></Link>
            <ul style={{
                marginTop: 0
            }} id={`ul-dropdown${props.index}`} className={'dropdown-menu'} aria-labelledby={`dropdown${props.index}`}>
                {[smallKindList][0].map((item, index) =>
                    <Link style={{
                        textDecoration: "none"
                    }} s key={index} to={`/category/${bigKind}/${item.productSmallKind}`} onClick={() => {
                        console.log(location.pathname.includes("/category"));
                        if (location.pathname.includes("/category")) {
                            navi(`/category/${bigKind}/${item.productSmallKind}`);
                            window.location.reload();
                        }
                    }}>
                        <li className={'dropdown-item'}>{item.productSmallKind}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

const Header = () => {
    // 실시간 검색
    const getNowTime = () => {
        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);

        var dateString = year + '-' + month + '-' + day;

        var today = new Date();

        var hours = ('0' + today.getHours()).slice(-2);
        var minutes = ('0' + today.getMinutes()).slice(-2);
        var seconds = ('0' + today.getSeconds()).slice(-2);

        var timeString = hours + ':' + minutes + ':' + seconds;

        let time = dateString + " " + timeString;
        return time;
    }


    const [nowTime, setNowTime] = useState(getNowTime);

    const [searchTop10, setSearchTop10] = useState([]);

    useEffect(() => {
        return async () => {
            const {data} = await axios.get("http://localhost:8080/getSearchTotal10");
            // console.log(data);
            setSearchTop10(data);
        }
    }, [])

    const minute = 60000;
    const timer = setInterval(async () => {
        const {data} = await axios.get("http://localhost:8080/getSearchTotal10");
        setSearchTop10(data);
        setNowTime(getNowTime);
        clearInterval(timer);

    }, minute * 30)

    // 실시간 검색

    // 검색 무한반복을 없애기 위함
    const navi = useNavigate();
    const location = useLocation();
    // 로그아웃 하기 위해서 디스패치 가져옴
    const dispatch = useDispatch();

    const role = sessionStorage.getItem("role");

    // 검색 내용
    const [searchContent, setSearchContent] = useState();

    const [isClick, setIsClick] = useState(false);
    const [rankClick, setRankClick] = useState(true);
    // 큰 카테고리, 남자/여자
    const [bigKind, setBigKind] = useState([]);
    // 작은 카테고리,
    const [smallKind, setSmallKind] = useState([]);
    let smallList = [];

    // 검색 가능
    const YesSearch = () => {
        return (
            <Link to={`/search/${searchContent}`} onClick={() => {
                console.log(location.pathname.includes("/search"))
                if (location.pathname.includes("/search")) {
                    navi(`/search/${searchContent}`);
                    window.location.reload();
                }
            }}>
                <button style={{
                    width: 100
                }} className={'text-center btn btn-outline-primary'}>검색
                </button>
            </Link>
        )
    }
    // 검색 불가능
    const NoSearch = () => {
        return (
            <button style={{
                width: 100
            }} className={'text-center btn btn-outline-primary'} onClick={() => {
                alert('검색어를 입력해주세요');
            }}>검색
            </button>
        )
    }


    useEffect(() => {
        axios.post("http://localhost:8080/getKind")
            .then((req) => {
                const {data} = req;
                setBigKind(data);

                data.map((item, index, dataList) => {
                    axios.post("http://localhost:8080/getSmallKind", null, {
                        params: {bigKind: item.productGender}
                    })
                        .then((req2) => {
                            const data2 = req2.data;
                            smallList.push(data2);

                            if (smallList.length == dataList.length) {
                                setSmallKind(smallList);
                            }
                        })
                })

            })
    }, []);


    return (
        <div style={{
            paddingTop: 200,
        }}>
            <nav className="bg-white navbar navbar-expand navbar-dark fixed-top">
                <div className={'container'}>
                    <div>
                        {/*<Link onClick={() => {*/}
                        {/*    alert("하이");*/}
                        {/*}}><img width={60}*/}
                        {/*        src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fmenu.png?alt=media&token=b569d405-c761-471c-a93d-637bf238258a"}/></Link>*/}
                        <Link className={'navbar-brand'} to={"/"}><img width={150}
                                                                       src={'https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Flogo.png?alt=media&token=32eb4e27-caf0-4016-9c7e-5b932c5d451b'}/></Link>
                    </div>
                    <div style={{
                        marginTop:20
                    }} className="px-5 ms-3 collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className={'navbar-nav my-auto'}>
                            <li className={'nav-item'}>
                                <div className={'d-flex'}>
                                    <input id={"searchContent"} onClick={() => {
                                        setSearchContent($("#searchContent").val());
                                    }} onChange={() => {
                                        setSearchContent($("#searchContent").val());
                                    }} style={{
                                        width: 500
                                    }} className={'form-control'} placeholder={'검색'}/>
                                    {searchContent != "" && searchContent != null && searchContent != " " ?
                                        <YesSearch/> : <NoSearch/>}
                                </div>
                            </li>
                            <div className={'nav-item dropdown'}>
                                <Link id={'headerDropDown'}
                                      onClick={() => isClick == false ? setIsClick(true) : setIsClick(false)}
                                      className={"nav-link dropdown-toggle"} data-bs-toggle={'dropdown'}
                                      aria-expanded={'false'}><img
                                    width={30}
                                    src={isClick == false ? "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fdown.png?alt=media&token=bf2133ad-360d-4d8c-a362-fba49afa532f" : "https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fup.png?alt=media&token=75b73105-5d8f-4db9-a605-8dd49e415ae8"}/></Link>
                                <div style={{
                                    padding: 15,
                                }} className={'dropdown-menu'} aria-labelledby={'headerDropDown'}>
                                    <div><h3 className={'text-center'}>실시간
                                        쇼핑 검색어</h3><p className={'text-center'}>{nowTime} 기준</p></div>
                                    {searchTop10.map((item, index) => {
                                        return (
                                            <li key={index}><Link className={'dropdown-item d-flex'}
                                                                  to={`/search/${item?.searchContent}`} onClick={() => {
                                                console.log(location.pathname.includes("/search"))
                                                if (location.pathname.includes("/search")) {
                                                    navi(`/search/${item?.searchContent}`);
                                                    window.location.reload();
                                                }
                                            }}><p
                                                className={'me-2'}>{index + 1}</p>{item?.searchContent}</Link></li>
                                        )
                                    })}
                                </div>
                            </div>
                            {/*<li className={'nav-item'}>*/}
                            {/*    <Link to={'/login'}><img className={'ms-2'}*/}
                            {/*                             src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Flogin.png?alt=media&token=1d00f7f1-47b0-4c6a-8ed3-21877afa66a1"}/></Link>*/}
                            {/*</li>*/}
                        </ul>
                        {role == null ? <Link to={'/login'}><img style={{
                            marginTop:8
                        }} className={'ms-4'}
                                                                 src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Flogin.png?alt=media&token=1d00f7f1-47b0-4c6a-8ed3-21877afa66a1"}/></Link> : role == "USER" ?
                            <Link onClick={() => dispatch(userLogout())}><img style={{
                                marginTop:3
                            }} width={40}
                                                                              src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Flogout.png?alt=media&token=35a56d27-ca79-40dc-b0ec-caa389e81d6f"}
                                                                              className={'ms-4'}/></Link> :
                            <Link onClick={() => dispatch(sellerLogout())}><img style={{
                                marginTop:3
                            }} width={40}
                                                                                src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Flogout.png?alt=media&token=35a56d27-ca79-40dc-b0ec-caa389e81d6f"}
                                                                                className={'ms-4'}/></Link>}
                        <li className={'nav-item'}>
                            <Link to={'/cart'}><img className={'ms-4'} width={40}
                                                    src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2FshoppingCart.png?alt=media&token=2fadaa13-7ea2-4507-a7a7-000412a2a91f"}/></Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/mypage'}><img className={'ms-4'} width={40}
                                                      src={"https://firebasestorage.googleapis.com/v0/b/react-20f81.appspot.com/o/fileImages%2Fmypage.png?alt=media&token=e436e13f-c5cd-4573-b632-3b342a703802"}/></Link>
                        </li>
                    </div>
                </div>
            </nav>

            {/* 카테고리 영역 */}
            <div className={'container'}>
                <ul className={'d-flex justify-content-around'}>
                    <li></li>
                    {
                        bigKind.map((kinds, index, bigKindList) => {
                            return (
                                <Kind key={index} smallKind={smallKind[index]} index={index}
                                      bigKind={kinds.productGender}/>
                            )
                        })
                    }
                    <li></li>
                </ul>
            </div>
            <hr/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Header;