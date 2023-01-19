import React from "react";
import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  // Math.ceil(연산식) : 식의 결과값을 무조건 올림 해주는 함수
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <button className={"btn btn-primary"} onClick={() => setPage(page - 1)} disabled={page === 1}>
          &laquo;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              className={"btn btn-light"}
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <button className={"btn btn-primary"}  onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &raquo;
        </button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`

  &[aria-current] {
    background: #ebebe9;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
