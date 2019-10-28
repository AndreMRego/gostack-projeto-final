import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  img {
    width: 940px;
    height: 300px;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    color: #fff;
    margin-top: 15px;
  }

  div {
    display: flex;
    margin-top: 20px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 18px;
      color: #fff;
      opacity: 0.6;

      svg {
        margin-right: 10px;
      }
    }
    span + span {
      margin-left: 30px;
    }
  }
`
export const MeetupItem = styled.li`
  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;

  strong {
    color: ${props => (props.available ? '#999' : '#fff')};
    font-size: 18px;
    line-height: 24px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.8;
    color: ${props => (props.available ? '#999' : '#fff')};

    svg {
      margin-left: 25px;
    }
  }
`
