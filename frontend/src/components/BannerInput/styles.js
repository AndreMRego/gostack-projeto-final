import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  label {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      color: #fff;
      opacity: 0.3;
    }

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      max-height: 300px;
    }
    input {
      display: none;
    }
  }
`
