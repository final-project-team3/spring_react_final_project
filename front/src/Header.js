import {Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className={'text-center'}>헤더입니다.</h1>
            <Outlet/>
        </div>
    )
}

export default Header;