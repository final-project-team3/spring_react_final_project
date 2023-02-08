import React, { useRef, useState } from "react";
import { useEffect } from "react";
import fireStore from "../firebase";
import firebaseConfig from "../firebase";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const storage = getStorage();

const FireBaseExample = (props) => {

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const [fileRealCode, setFileRealCode] = useState();
  const [downloadUrl, setDownloadUrl] = useState("");

  const btnTitle1 = props.btnTitle1;
  const btnTitle2 = props.btnTitle2;




  useEffect(() => {
    if (file !== "") {
      setPreview(
        <img className="img_preview" src={previewURL} alt="previewImage" style={{width:200, height:200}}/>
      );
    }
    return (
    ) => {};
  }, [file, previewURL]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);

      saveToFirebaseStorage(file);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  // upload 기능
  const saveToFirebaseStorage = (file) => {
    const uniqueKey = new Date().getTime();
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, "")
      .split(" ")
      .join("");

    const metaData = {
      contentType: file.type,
    };

    const storageRef = sRef(storage, "Images/" + newName + uniqueKey);
    const UploadTask = uploadBytesResumable(storageRef, file, metaData);
    const fileCode = newName + uniqueKey;
    UploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        alert(`error: image upload error ${JSON.stringify(error)}`);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadUrl) => {
          console.log(`완료 url: ${downloadUrl}`);
          console.log(`storageRef : ${storageRef}`);
          console.log(`fileCode : ${fileCode}`);
          setFileRealCode(fileCode);
          setDownloadUrl(downloadUrl);
          // 저장할 이미지 파일명 부모 컴포넌트로 전달
          props.setImageData(downloadUrl);

        });
      }
    );
  };

  // delete 기능
  const deleteFile = () => {
    console.log(fileRealCode);
    const desertRef = sRef(storage, `Images/${fileRealCode}`);


    deleteObject(desertRef)
      .then(() => {
        setPreviewURL(null);
        setPreview(null);
        setFile("");
        console.log(`delete success`);
      })
      .catch((error) => {
        console.log(`delete ${error}`);
      });
  };

  return (
    <>
      {/*<img src={downloadUrl} alt="" />*/}
      {/* 이미지 미리보기 공간 */}
      <div className="priveiw-rapping" id={"prDiv"}>
        {preview}
      </div>
      <div style={{ padding: 10 }}>
        <input
          ref={fileRef}
          hidden={true}
          id="file"
          type="file"
          onChange={handleFileOnChange}
          style={{width:50, height:50}}
        />

        <button onClick={handleFileButtonClick} className={"btn btn-info"}>
          {btnTitle1}
        </button>
        <button onClick={deleteFile} className={"btn btn-danger"}>
          {btnTitle2}
        </button>
      </div>
    </>
  );
};

export default FireBaseExample;

