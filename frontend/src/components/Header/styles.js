import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
`

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 32px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      line-height: 1.9;
    }

    a {
      display: block;
      color: #999;
      line-height: 1.6;
    }
  }
  button {
    width: 71px;
    height: 42px;
    background: #d44059;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`
