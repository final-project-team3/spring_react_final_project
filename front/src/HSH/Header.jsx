import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import styled from "styled-components";

const Header = () => {
    const[isClick, setIsClick] = useState("Img/down.png");

    const Modatl = styled.div`
    
    `
    return (
        <div style={{
            paddingTop:200
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
                            <li className={'nav-item'}>
                                <Link onClick={()=> isClick == "Img/down.png" ? setIsClick("Img/up.png") : setIsClick("Img/down.png")}><img width={30} src={isClick}/></Link>
                            </li>
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
                <div>
                    <p>asd</p>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Header;