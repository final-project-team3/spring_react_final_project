import React, { useRef, useState } from "react";

import OptionList from "./OptionList";
import CreateOption from "./CreateOption";
import user from "../BJH/User";
import axios, {default as Axios} from "axios";

const axios = Axios.create({
  baseURL: "http://ec2-3-39-252-127.ap-northeast-2.compute.amazonaws.com:8080"
});

function GwakApp() {
  const [iData, setIData] = useState(0);
  const [inputs, setInputs] = useState({
    productOption1: "",
    productOption2: "",
  });

  const { productOption1, productOption2 } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target; // 우선 e.target 에서 name 과 value 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을  value 로 설정
    });
  };

  const [users, setUsers] = useState([]);

  // useRef() 사용할떄 파라미터를 넣어주면 이 값이 .current 값의 기본값이 된다.
  const nextId = useRef(1);

  const onCreate = () => {
    // if (productOption1 == "" || productOption2 == "") {
    //   alert("옵션을 입력하세요.");
    // } else {
      // 배열에 항목을 추가 : 불변성을 해치지 않아야함 -> push, splice, sort 금지. spread 연산자 또는 concat 사용
    for (let i = 0; i < inputs.length ; i++) {
      const user = {
        id: nextId.current,
        productOption1: productOption1,
        productOption2: productOption2,
      };
    }
      setUsers([...users, user]); // spread 연산자 사용
      // setUsers(users.concat(user));  // concat 사용

      setInputs({
        productOption1: "",
        productOption2: "",
      });

      nextId.current += 1;
    // }
  };

  const submitOption = async () => {
    // const config = {"Content-Type": 'application/json'};

    await axios.post("/submitOption", users)
      .then(res => {
        alert('성공');
        console.log(users);
      }).catch(err => {
        alert(`에러 : ${err}`);
      console.log(err.response.data.message); // --> 서버단 에러메세지 출력~
    });
  };

  // onRemove 함수 : "id 가 __인 객체를 삭제해라"
  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
    // console.log(users.length);
    // console.log(users[1].id);
    for(let i = 0; i <= users.length ; i++) {
      // const { name, value } = e.target; // 우선 e.target 에서 name 과 value 추출
      users[i].id = i+1;

      // console.log(users);
    }
  };

  return (
    <>
      <CreateOption
        productOption1={productOption1}
        productOption2={productOption2}
        onChange={onChange}
        onCreate={onCreate}
      />
      <OptionList users={users} onRemove={onRemove} />
      <button onClick={submitOption}>등록완료</button>
    </>
  );
}

export default GwakApp;
