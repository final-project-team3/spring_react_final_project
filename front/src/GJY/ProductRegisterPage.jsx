import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";

function ProductRegisterPage() {
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState([]);
  const [test1, setTest1] = useState("");
  useEffect(() => {
    return async () => {
      const { data } = await axios.post("http://localhost:8080/selectList");
      setBigKind(data);
    };
  }, []);

  const getSmallKinds = async e => {
    const { data } = await axios.post("http://localhost:8080/selectSmallList", null, {params: {productKind: e.target.value}});
    setTest1(e.target.value);
    console.log(data);
    setSmallKind(data);

  }

  return (
    <div>
      <div className={"container"}>
        <div className={"row"}>
          <h1 className={"mt-4 text-center"}>제품 신규 등록</h1>
          <h3 className={"text-start mt-5"}>기본 정보</h3>
          <hr />
          <table className={"border"}>
            <tbody>
              <tr>
                <td>제품 분류</td>
                <td>
                  <select id={"selectBigKind"}  onChange={getSmallKinds}>
                    <option value={test1}>----대분류----</option>
                    {bigKind.map((item) => (
                      <option value={item.productGender}>
                        {item.productGender}
                      </option>
                    ))}
                  </select>
                  <select name="" id="">
                    <option value="null">----하위분류---</option>
                    {smallKind.map((item)=> <option value={item.productSmallKind}>{item.productSmallKind}</option>)}
                  </select>
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <div className={"mx-auto"}>
                    <input
                      type="text"
                      className={"col-10"}
                      placeholder={"상품명을 입력하세요."}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>상품 이미지 등록</td>
                <td>
                  <div className="form-group col-6">
                    <input className="form-control" type="file" id="formFile" />
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
