import React from "react";

const ProductLists = [
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
    {name: "갈색 니트", price: "120,000", img: "../Img/test.png"},
];

function ProductList(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={"row"}>
                        {ProductLists.map((product, index) => {
                            return (
                                <div key={index} className={'mt-5 col-3'}>
                                    <img width={300} src={product.img}/>
                                    <h5 className={'mb-0'}>{product.name}</h5>
                                    <h5 className={'mb-4'}>{product.price}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;