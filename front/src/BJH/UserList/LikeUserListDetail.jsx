import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function LikeUserListDetail(props) {
  const {productNum} = useParams(); // 넘어온 productNum

  useEffect(() => {
    return async () => {
      const {data} = axios.post("http://localhost:8080/getZzimDetail", null, {params: {
        productNum: productNum,
        }})
    }
  })

  return (
    <div className={"container text-center mt-5 mb-5"}>
      <h2>{productNum} 찜 분석</h2>
    </div>
  );
}

export default LikeUserListDetail;
