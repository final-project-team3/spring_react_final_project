import {Link, Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className={"d-flex container"}>
                <div className={'d-flex align-content-end'}>
                    <div className={'my-auto'}>
                        <div className={'me-4'}><Link onClick={()=> {
                            alert("하이");
                        }}><img className={'p-2'} width={60} src={"Img/menu.png"}/></Link></div>
                    </div>
                </div>
                <Link to={"/"}><img width={150} src={'../Img/logo.png'}/></Link>
                <input className={'my-auto'} height={50} type={'text'}/>
                <div className={'d-flex align-content-center'}>
                    <div className={'my-auto'}>
                        <Link to={'/login'}><img src={"Img/login.png"}/></Link>
                        <Link to={'/cart'}><img className={'ms-2 mt-2'} width={40}
                                                src={"Img/shoppingCart.png"}/></Link>
                        <Link to={'/login'}><img src={"Img/login.png"}/></Link>
                        <Link to={'/login'}><img src={"Img/login.png"}/></Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Main;