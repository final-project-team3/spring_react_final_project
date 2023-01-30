import React, {useEffect, useState} from "react";
import axios from "axios";

function FileUploadComponent() {
  // 파일 base 64 : 미리보기 구현을 위해 이미지 데이터를 받을 state
  // let history = useHistory();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일
  const [tag, setTag] = useState([]);
  const [comment,setComment] = useState();
  var images = []

  const handleChangeFile = (event) => {
    console.log(event.target.files)
    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for(var i=0;i<event.target.files.length;i++){
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString()

            setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        }
      }
    }

  }
  const resetTag  = () => {
    document.getElementById('innerinput').value = '';
  }
  useEffect(resetTag, [tag])

  const setTags = (e) => {
    if(e.key === ' ' || e.key === 'Enter'){
      if(document.getElementById('innerinput').value !== ''){
        setTag(tag => [...tag, e.target.value]);
      }else{
        alert("태그를 입력해주세요")
        return false;
      }


    }
  }
  const deleteTag = (index) => {
    var array = [...tag];
    array.splice(index, 1);
    setTag(array)
  }

  const setComments = (e) => {
    setComment(e.target.value)
  }

  // 글쓰기 함수(이미지파일 데이터 전송?)
  const WriteBoard = async()=> {
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));

    await axios.post('http://localhost:8080/productImgUpload', null, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
    })
      .then((response) => {
        if(response.data){
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
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
        id={"productImg"}
        name={"productImg"}
        accept={"image/*"}
        onChange={handleChangeFile}
        multiple={"multiple"}
      />
      <button
        onClick={WriteBoard}
        style={{ border: "2px solid black", width: "700px", fontSize: "40px" }}
      >
        작성완료
      </button>
    </div>
  );
}

export default FileUploadComponent;
