import React from "react";

function FileUpload(props) {
  return (
    <div>
      {/* 파일 업로드*/}
      <div className={"my-3"}>
        <input type="file" className={"form-control"} id={"files"} name={"files"} multiple="multiple"  accept={"image/*"}/>
      </div>
    </div>
  );
}

export default FileUpload;