import React from "react";

// User 함수
function User({ user, onRemove }) {
  return (
    <tr className={"border border-1"}>
      <td className={"border border-1"}>{user.id}</td>
      <td className={"border border-1"}><b>{user.productOption1}</b></td>
      <td className={"border border-1"}>{user.productOption2}</td>
      <td className={"border border-1"}><button className={"btn btn-primary"} onClick={() => onRemove(user.id)}>삭제</button></td>
    </tr>
  );
}

// OptionList 함수
function OptionList({ users, onRemove }) {
  return (
    <div className={"container"}>
      <table className={"table text-center border mt-5"}>
        <thead className={"bg-secondary text-light"}>
        <tr>
          <th>번호</th>
          <th>옵션1</th>
          <th>옵션2</th>
          <th>옵션삭제</th>
        </tr>
        </thead>
        <tbody>
      {/*  Map() 이용 */}
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default OptionList;
