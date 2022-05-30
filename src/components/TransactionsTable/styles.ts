import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 2rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }

    &:first-child {
      color: var(--text-title);
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
    }
    &:last-child {
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
    }
  }
`;
