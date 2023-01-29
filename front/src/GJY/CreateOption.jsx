import React from "react";

function CreateOption({ productOption1, productOption2, onChange, onCreate }) {
  return (
    <div className={"container"}>
      <div className={"row col-3"}>
        <input
          className={"col-2"}
          type="text"
          name={"productOption1"}
          placeholder={"productOption1"}
          onChange={onChange}
          value={productOption1}
        />
        <input
          className={"col-2"}
          type="text"
          name={"productOption2"}
          placeholder={"productOption2"}
          onChange={onChange}
          value={productOption2}
        />
        <button onClick={onCreate} className={"btn btn-info"}>등록</button>
      </div>
    </div>
  );
}

export default CreateOption;
