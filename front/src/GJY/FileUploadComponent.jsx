import React, { useState } from "react";

function FileUploadComponent() {
  // 파일 base 64 : 미리보기 구현을 위해 이미지 데이터를 받을 state
  const [imgBase64, setImgBase64] = useState([]);
  // 파일 그 자체를 받는 state
  const [imgFile, setImgFile] = useState(null);

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
          if (base64) {
            // 비트맵 데이터 저장 가능하도록 String 으로 바꾼다
            var base64Sub = base64.toString();

            // 파일은 여러개도 가능하기때문에 배열로 넣어줘야한다.
            // 아래코드 처럼 쓰면 기존 imgBase64 배열에 base64Sub 값을 붙인 새로운 배열을 스테이트에 저장한다.
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  return (
    <div className="form-group col-6 ms-3">
      {imgBase64.map((item) => {
        return (
          <img
            className={"float-start"}
            src={item}
            alt={"First slide"}
            style={{ width: "200px", height: "200px" }}
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
    </div>
  );
}

export default FileUploadComponent;
