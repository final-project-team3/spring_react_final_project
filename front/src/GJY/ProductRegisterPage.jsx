import React, {useEffect, useState} from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";
import FileUploadTest from "./FileUploadTest";

function ProductRegisterPage() {
    const [bigKind, setBigKind] = useState([]);
    const [smallKind, setSmallKind] = useState([]);



    useEffect(() => {
        return async () => {
            const {data} = await axios.post("http://localhost:8080/selectList");
            setBigKind(data);
        };
    }, []);

    const getSmallKinds = async e => {
        $('#selectBigKind').val(e.target.value).prop("selected", true);
        
        const {data} = await axios.post("http://localhost:8080/selectSmallList", null, {params: {productKind: e.target.value}});
        console.log(data);
        setSmallKind(data);
    }

    return (
        <div>
            <FileUploadTest/>
            <div className={"container"}>
                <div className={"row"}>
                    <h1 className={"mt-4 text-center"}>제품 신규 등록</h1>
                    <h3 className={"text-start mt-5"}>상품 등록</h3>
                    <hr/>
                    <table className={"border"} style={{height: 200}}>
                        <tbody className={"border"}>
                        <tr className={"border"}>
                            <td className={"border text-center"} style={{height: 60, width: 200}}>제품 분류</td>
                            <td >
                                <select className={"ms-3"} id={"selectBigKind"} onChange={getSmallKinds} style={{height: 30}}>
                                    <option value="대분류">----대분류----</option>
                                    {bigKind.map((item) => (
                                        <option value={item.productGender}>
                                            {item.productGender}
                                        </option>
                                    ))}
                                </select>
                                <select name="" id="" className={"ms-3"} style={{height: 30}}>
                                    <option value="null">----하위분류---</option>
                                    {smallKind.map((item) => <option
                                        value={item.productSmallKind}>{item.productSmallKind}</option>)}
                                </select>
                            </td>
                        </tr>
                        <tr className={"border"}>
                            <td className={"border text-center"} style={{height: 60}}>상품명</td>
                            <td>
                                <div className={"mx-auto"}>
                                    <input
                                        type="text"
                                        className={"col-6 ms-3"}
                                        placeholder={"상품명을 입력하세요."}
                                        style={{height: 35}}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className={"border"}>
                            <td className={"border text-center"} style={{height: 60}}>상품재고</td>
                            <td>
                                <div className={"mx-auto"}>
                                    <input
                                      type="number"
                                      className={"col-6 ms-3"}
                                      placeholder={"재고 수량을 입력하세요."}
                                      style={{height: 35}}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className={"border"} >
                            <td className={"border text-center"} style={{height: 60}}>상품 이미지 등록</td>
                            <td>
                                {/* 파일 첨부*/}
                                <div className="form-group col-6 ms-3">
                                    <input className="form-control" type="file" id={"productImg"} name={"productImg"} accept='image/*' style={{height: 35}}/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductRegisterPage;
