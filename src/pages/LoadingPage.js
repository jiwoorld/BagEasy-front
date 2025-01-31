import loading from "../assets/Loading/loadingIcon.gif";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Loading = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
    window.location.reload();
  };

  const handleNickName = () => {
    navigate("/nickname");
    window.location.reload();
  };

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const handleLoginPost = async code => {
    const data = {
      code: code,
    };
    try {
      const res = await axios.post(
        "https://server.bageasy.net/auth/login",
        data,
      );
      // 토큰 localstorage에 저장
      const accessToken = res.data.accessToken;
      localStorage.setItem("bagtoken", accessToken);
      // 신규/기존 회원 여부에 따라 redirect
      res.data.isExistingMember ? handleHome() : handleNickName();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log("로그인 재시도하세요.");
    }
  }, [code, navigate]);

  return (
    <LoadingConatiner>
      <LoadingIcon src={loading} />
    </LoadingConatiner>
  );
};

const LoadingConatiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.img``;

export default Loading;
