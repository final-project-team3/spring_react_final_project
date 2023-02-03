import React from 'react';
import {useParams} from "react-router-dom";

const Category = () => {
    const {bigKind,smallKind} = useParams();
    return (
        <div>
            <h1>{bigKind + smallKind}</h1>
        </div>
    );
};

export default Category;