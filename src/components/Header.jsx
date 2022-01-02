import React from "react";
import styled from "styled-components";
import { ReactComponent as YourSvg } from "../assests/illustration-working.svg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const DesignButton = styled.button`
  background-color: #2acfcf;
  border-radius: 20px;
  font-size: 17px;
  color: #fff;
  border: none;
  width: 140px;
  margin-left: 145px;
  margin-top: -1em;
  height: 40px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #9be3df;
  }

  @media (max-width: 1110px) {
    display: flex;
    padding-top: 10px;
    justify-content: center;
    margin: 0px auto;
  }
`;
const TextH1 = styled.h1`
  font-size: 65px;
  margin-left: 140px;
  margin-right: 120px;
  color: #322e3a;
  letter-spacing: -1px;
  line-height: 80px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1110px) {
    padding-top: 8em;
    text-align: center;
  }
  @media (max-width: 768.9px) {
    font-size: 50px;
    text-align: center;
    margin: 0px auto;
  }

  @media (max-width: 600.9px) {
    font-size: 40px;
  }
`;

const TextH5 = styled.h5`
  font-size: 16px;
  margin-left: 10px;
  line-height: 30px;
  color: #a7a6ac;
  letter-spacing: 0px;
  font-weight: 500;
  margin-top: 0px;

  @media (max-width: 768.9px) {
    font-size: 15px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 20px;
  }
`;

const Image1 = styled(YourSvg)`
  float: right;

  @media (max-width: 1255px) {
    margin-right: 0em;
  }
  @media (max-width: 1110px) {
    display: grid;
    margin-right: 3em;
    margin-top: 0px;

    justify-content: center;
  }
  @media (max-width: 768px) {
    transform: scale(0.9);
    position: relative;
    left: 11%;
    box-sizing: border-box;
  }

  @media (max-width: 620px) {
    transform: scale(0.7);
    left: 26%;
  }

  @media (max-width: 520px) {
    transform: scale(0.6);
    left: 46%;
  }
  @media (max-width: 420px) {
    transform: scale(0.6);
    left: 80%;
  }

  @media (max-width: 260px) {
    transform: scale(0.4);
    left: 120%;
  }

  @media (max-width: 200px) {
    transform: scale(0.4);
    left: 200%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Image1 />
      <TextH1>
        More than just <br />
        shorter links
        <TextH5>
          Build your brand’s recognition and get detailed
          <br /> insights on how your links are performing.
        </TextH5>
      </TextH1>
      <DesignButton light href="#">
        Get Started
      </DesignButton>
    </HeaderContainer>
  );
};

export default Header;
