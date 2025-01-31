import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Profile from "../../components/Common/Profile";
const Item = ({ roomId, latestMessage, yourNickname }) => {
  const navigate = useNavigate();

  const getElapsedTime = sentAt => {
    const elapsedSec =
      new Date().getTime() -
      sentAt +
      new Date().getTimezoneOffset() * 60 * 1000;

    //지난 분,시간,일,개월,년
    const elapsedMin = elapsedSec / (1000 * 60);
    const elapsedHour = elapsedMin / 60;
    const elapsedDay = elapsedHour / 24;
    const elapsedMonth = elapsedDay / 30;
    const elapsedYear = elapsedMonth / 12;

    if (elapsedMin >= 60) {
      if (elapsedHour >= 24) {
        if (elapsedDay >= 30) {
          if (elapsedMonth >= 12) {
            return Math.floor(elapsedYear) + "년 전";
          }
          return Math.floor(elapsedMonth) + "개월 전";
        }
        return Math.floor(elapsedDay) + "일 전";
      }
      return Math.floor(elapsedHour) + "시간 전";
    }
    return Math.floor(elapsedMin) + "분 전";
  };

  return (
    <Wrapper>
      <ChatItem
        onClick={() => {
          navigate(`/chats/${roomId}`);
        }}
      >
        <div className="img">
          <Profile nickname={yourNickname} width={"67px"} height={"67px"} />
          <img src={""} alt="" />
        </div>
        <div className="mainContainer">
          <p className="name">{yourNickname}</p>
          {latestMessage && <p className="text">{latestMessage.content}</p>}
        </div>
        <div className="subContainer">
          {latestMessage && (
            <p className="time">{getElapsedTime(latestMessage.sentAt)}</p>
          )}
          {false && <p className="count">3</p>}
        </div>
      </ChatItem>
      <Line />
    </Wrapper>
  );
};

export default Item;

const ChatItem = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  p {
    margin: 0;
  }
  .img {
    margin: 15px 0px 35px 0px;
    width: 67px;
    height: 67px;
    display: flex;
    border-radius: 35px;
    background: #a1a1a1;
  }
  .name {
    margin: 27px 0px 0px 44px;
    width: 138px;
    height: 23px;
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
    margin: 32px 0px 0px 0px;
    width: 48px;
    color: #979797;
    text-align: right;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text {
    margin-left: 42px;
    width: 176px;
    height: 40px;
    color: #979797;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .count {
    margin-top: 5px;
    width: 17px;
    height: 17px;
    border-radius: 10px;
    background: #3deb63;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .mainContianer {
    width: 176px;
  }
  .subContainer {
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
const Line = styled.div`
  width: 380px;
  height: 0.5px;
  background: #d9d9d9;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
