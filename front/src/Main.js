import {Link, Outlet} from "react-router-dom";

const Main = () => {
    return (
        // <body width={'100%'} background={'../Img/bg-1.jpg'}>
        // <div style={{
        //     width: '100%',
        //     height: 1000
        // }} className={'text-center'}>
        <div>
            <div className={'d-flex justify-content-start'}>
                <Link to={"/"}><img className={'ms-3'} width={200} src={'../Img/logo.png'}/></Link>
            </div>
            <Outlet/>
        </div>
        // </div>
        // </body>
    )
}

export default Main;