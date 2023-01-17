import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <body>
        <div>
            <h1 className={'text-center'}>헤더입니다.</h1>
            <Outlet/>
        </div>
        </body>
    )
}

export default Main;