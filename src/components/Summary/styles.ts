import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -5.5rem;

  div {
    height: 8.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--text-title);
    width: 32%;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    background: var(--shape);
    &.total {
      background: var(--green);
      color: #fff;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    @media screen and (min-width: 560px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 720px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 980px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1080px) {
      font-size: 2rem;
    }
    font-weight: 500;
    line-height: 3rem;
    display: flex;
    justify-content: end;
  }
`;
