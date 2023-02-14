import React from 'react';
import {Link} from "react-router-dom";

const ProductSelect = () => {
    return (
        <div className={'d-flex justify-content-around'}>
            <Link to={'/productR2'} className={'btn btn-primary'}>상품 등록</Link>
            <Link to={'/myProductList'} className={'btn btn-primary'}>상품 수정</Link>
        </div>
    );
};

export default ProductSelect;