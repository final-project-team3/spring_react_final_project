import React from "react";
import $ from "jquery";

const Main = () => {
    return (
        <div>
            <div className={'container'}>
                <div id="mainCarousel" className="d-flex justify-content-center carousel slide"
                     data-bs-ride="carousel">
                    <div style={{
                        width: 500,
                    }} className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="Img/up.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/down.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/up.png"/>
                        </div>
                        <div className="carousel-item">
                            <img src="Img/down.png"/>
                        </div>
                    </div>
                    <button style={{
                        color: "black"
                    }} className="carousel-control-prev" type="button" data-bs-target="#mainCarousel"
                            data-bs-slide="prev">
                        <button className={'carousel-control-prev'}><img src={'Img/prev.png'}/></button>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel"
                            data-bs-slide="next">
                        <button className={'carousel-control-next'}><img src={'Img/next.png'}/></button>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main;