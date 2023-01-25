import React, { useState } from "react";
import axios from "axios";

function FileUploadComponent() {
  // 파일 base 64 : 미리보기 구현을 위해 이미지 데이터를 받을 state
  const [imgBase64, setImgBase64] = useState([]);
  // 파일 그 자체를 받는 state
  const [imgFile, setImgFile] = useState(null);

  const [imgCode, setImgCode] = useState([]);

  // 파일 등록 함수
  const handleChangeFile = (e) => {
    console.log("----------- e.target.files ---------");
    console.log(e.target.files);
    console.log("----------- e.target.files ---------");
    setImgFile(e.target.files);
    setImgBase64([]);
    for (var i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]); // 1. 파일을 읽어 버퍼에 저장

        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 파일 읽기가 완료되면 아래 코드가 실행됨
          const base64 = reader.result;
          console.log(`--------- base64 --------- : 
          ${base64}
          ---------base64--------- :`);
          // imgCode 1
          setImgCode([...base64]);
          if (base64) {
            // 비트맵 데이터 저장 가능하도록 String 으로 바꾼다
            var base64Sub = base64.toString();

            // 파일은 여러개도 가능하기때문에 배열로 넣어줘야한다.
            // 아래코드 처럼 쓰면 기존 imgBase64 배열에 base64Sub 값을 붙인 새로운 배열을 스테이트에 저장한다.
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);

            // imgCode 2 <- 이게 맞는듯..
            console.log(`--------- imgBase64 --------- : 
          ${imgBase64[1]}
          ---------imgBase64--------- :`);
          }
        };
      }
    }
  };

  // 글쓰기 함수(이미지파일 데이터 전송?)
  const WriteBoard = async()=> {

    if(imgFile == null){
      alert("이미지를 등록 해주세요");
      return false;
    }
    // else {
    //   const {data} = await axios.post("http://localhost:8080/productImgUpload", null, {params: {img: base64}});
    //   console.log(data);
    //   console.log(base64);
    // }

    // const fd = new FormData();
    // Object.values(imgFile).forEach((file) => fd.append("file", file));
    // console.log("1111111111111111111111111111111111111111111111111");
    // fd.append(
    //   "tag",
    //   fd.value(0),
    // );
    // fd.append(
    //   "comment",
    //   "comment 내용"
    // );
    // const fd2 = new FormData();
    // await axios.post('http://localhost:8080/WriteBoard', fd, {
    //   headers: {
    //     "Content-Type": `multipart/form-data; `,
    //   }
    // })
    //   .then((response) => {
    //     if(response.data){
    //       console.log(response.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }

  return (
      <div className="form-group col-6 ms-3">
        {imgBase64.map((item) => {
          return (
            <img
              className={"float-start"}
              src={item}
              alt={"First slide"}
              style={{width: "200px", height: "200px"}}
            />
          );
        })}
        <input
          className="form-control"
          type="file"
          id={"productImg"} name={"productImg"}
          accept={"image/*"}
          onChange={handleChangeFile}
          multiple={"multiple"}
        />
        <button onClick={WriteBoard} style={{border: '2px solid black', width: '700px', fontSize: '40px'}}>작성완료</button>

        <img
          className={"float-start"}
          src={"data:image/jpeg;base64,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"}
          alt={"First slide"}
          style={{width: "200px", height: "200px"}}
        />
      </div>
    );
  }

export default FileUploadComponent;
