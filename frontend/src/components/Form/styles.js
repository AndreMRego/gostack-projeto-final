import styled from 'styled-components'
import { Form } from '@rocketseat/unform'

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;

  #description {
    min-height: 200px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  input,
  textarea {
    background: rgba(0, 0, 0, 0.1);
    height: 50px;
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    color: #fff;
    margin: 0 0 10px;

    width: 100%;

    &::placeholder {
      opacity: 0.5;
      color: #fff;
    }
  }

  > span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0 20px;
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`
