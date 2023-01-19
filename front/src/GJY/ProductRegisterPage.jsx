import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import $ from "jquery";

function ProductRegisterPage() {
  const [bigKind, setBigKind] = useState([]);
  const [smallKind, setSmallKind] = useState();
  let strList = [];
  useEffect(() => {
    return async () => {
      const { data } = await axios.post("http://localhost:8080/selectList");
      setBigKind(data);
      // console.log(data);
      // let str = [];
      // data.map((item) => {
      //   if (str !== item.productGender) {
      //     str = item.productGender;
      //     strList.push(str);
      //   }
      // });
      // console.log(strList);
      // setBigKind(strList);
      // console.log(bigKind);
    };
  }, []);

  useEffect(() => {
    return async () => {
      console.log(smallKind);
      const { data } = await axios.post("http://localhost:8080/selectSmallList", null, {params: {productKind: smallKind}});
      console.log(data);

    };
  }, [smallKind]);

  // const setSmallKind = () => {
  //   let bigKindValue = $("#selectBigKind").val();
  //
  // }

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
                  <select id={"selectBigKind"} onChange={() => {
                    console.log($("#selectBigKind").val());
                    setSmallKind($("#selectBigKind").val());
                    console.log(smallKind);
                  }}>
                    <option value="null">----대분류----</option>
                    {bigKind.map((item) => (
                      <option value={item.productGender}>
                        {item.productGender}
                      </option>
                    ))}
                  </select>
                  <select name="" id="">
                    <option value="null">----하위분류---</option>
                    <option value="female"></option>
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
