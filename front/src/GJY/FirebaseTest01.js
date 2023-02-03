import React, {useEffect} from 'react';
import {fireStore} from "./Firebase";

const FirebaseTest01 = () => {
  useEffect(() => {
    console.log(fireStore);
  });
  return (
      <div className="App">
        <h2>프로젝트 ID : {fireStore._databaseId.projectId}</h2>
          <button className={"btn btn-primary"}>데이터 넣기</button>
      </div>
  );
};

export default FirebaseTest01;