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

const FireBaseExample = () => {


  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const [fileRealCode, setFileRealCode] = useState();

  useEffect(() => {
    if (file !== "") {
      setPreview(
        <img className="img_preview" src={previewURL} alt="previewImage" />
      );
    }
    return () => {};
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

  // 여기가 upload 함수입니다.
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
        });
      }
    );
  };

  // 여기가 delete 코드입니다.
  const deleteFile = () => {
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

  const aaa = () => {
    console.log(file);
  }

  return (
    <div>
      <button className={"btn btn-primary"} onClick={aaa}>파일 확인</button>
      <div className="priveiw-rapping" id={"prDiv"}>{preview}</div>
      <div style={{ padding: 10 }}>
        <input
          ref={fileRef}
          hidden={true}
          id="file"
          type="file"
          onChange={handleFileOnChange}
        ></input>

        <button onClick={handleFileButtonClick} className={"btn btn-info"}>
          UPLOAD
        </button>
        <button onClick={deleteFile} className={"btn btn-danger"}>
          DELETE
        </button>

      </div>
    </div>
  );
};

export default FireBaseExample;
