import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#22202c, #402845);
  overflow: auto;
`

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
    }
  }

  ul {
    margin-top: 30px;
  }
`
