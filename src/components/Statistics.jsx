import React from "react";
import styled from "styled-components";
import IconbrandRecognition from "../assests/icon-brand-recognition.svg";
import IcondetailedRecords from "../assests/icon-detailed-records.svg";
import IconfullyCustomizable from "../assests/icon-fully-customizable.svg";
import BgboostDesktop from "../assests/bg-boost-desktop.svg";
import Footer from "./Footer";

const Middle = styled.div`
  background-color: #eff1f7;
`;

const MiddleText = styled.h1`
  font-size: 18px;
  color: #232127;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-top: 200px;
  .h4-Middletext {
    color: #9e9aa7;
    font-weight: 500;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 140px;
  margin-top: 150px;
  margin-bottom: 150px;
  margin-right: 120px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1220px) {
    margin-left: 83px;
    margin-right: 40px;
  }
  @media (max-width: 1000px) {
    display: grid;
    margin: 0px auto;
    margin-top: 150px;
    padding: 0px;
  }

  .blue-line {
    display: inline-flex;
    width: 95%;
    height: 10px;
    background-color: #2acfcf;
    position: absolute;
    z-index: 0;
    top: 50%;
    @media (max-width: 1000px) {
      transform: rotate(90deg);
    }
    @media (max-width: 610px) {
      width: 590px;
    }
    @media (max-width: 586px) {
      width: 590px;
    }
    @media (max-width: 586px) {
      width: 39em;
      margin-left: -6em;
    }

    @media (max-width: 586px) {
      width: 53em;
      margin-left: -16em;
    }
  }
`;

const CardText = styled.div`
  align-self: flex-start;
  background-color: #fff;
  color: #232127;
  padding: 4px 22px 20px;
  margin-left: 22px;
  margin-top: ${(props) => props.marginTop};
  border-radius: 10px;
  width: 21em;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90%;
    align-self: center;
    height: 100%;
    padding: 0%;
    margin-right: 0% auto;
    margin-left: 0% auto;
  }

  .h4-Middletext {
    color: #9e9aa7;
    font-weight: 500;
  }
  .card-image {
    background-color: #3b3054;
    padding: 20px;
    border-radius: 50%;
    margin: 0px 12px 0px 13px;
    width: 48px;
    height: 41px;
    position: relative;
    top: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .card-text {
    margin: -40px 10px 0px 10px;
  }
  .card-icon {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
`;

const Banner = styled.div`
  height: 230px;
  width: 100%;
  background-image: url(${BgboostDesktop});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #3b3054;
  @media (max-width: 1000px) {
    margin-top: 6em;
  }
`;
const BannerText = styled.div`
  font-size: 40px;
  text-align: center;
  padding-top: 1em;
  color: #fff;
  @media (max-width: 454px) {
    font-size: 30px;
  }
  @media (max-width: 340.9px) {
    font-size: 25px;
  }
  @media (max-width: 284.9px) {
    font-size: 20px;
  }
  @media (max-width: 240.9px) {
    font-size: 15px;
  }
`;
const DesignButton = styled.button`
  background-color: #2acfcf;
  border-radius: 30px;
  font-size: 22px;
  color: #fff;
  border: none;
  font-weight: bold;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 50px;
  margin-top: 20px;

  cursor: pointer;
  &:hover {
    background-color: #9be3df;
  }
  @media (max-width: 284.9px) {
    width: 142px;
    height: 40px;
    font-size: 21px;
  }
  @media (max-width: 240.9px) {
    width: 100px;
    height: 30px;
    font-size: 15px;
  }
`;

const Statistics = () => {
  return (
    <Middle>
      <MiddleText>
        <h1>Advanced Statistics</h1>
        <h4 className="h4-Middletext">
          Track how your links are performing across the web
          <br /> with our advanced statistics dashboard.
        </h4>
      </MiddleText>

      <Card>
        <div className="blue-line"> </div>
        <CardText>
          <div className="card-image">
            <img
              className="card-icon"
              src={IconbrandRecognition}
              alt="IconbrandRecognition"
            />
          </div>
          <div className="card-text">
            <h2>Brand Recognition</h2>
            <h4 className="h4-Middletext">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </h4>
          </div>
        </CardText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardText marginTop="50px">
          <div className="card-image">
            <img
              className="card-icon"
              src={IcondetailedRecords}
              alt="IcondetailedRecords"
            />
          </div>
          <div className="card-text">
            <h2> Detailed Records</h2>
            <h4 className="h4-Middletext">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </h4>
          </div>
        </CardText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardText marginTop="100px">
          <div className="card-image">
            <img
              className="card-icon"
              src={IconfullyCustomizable}
              alt=" IconfullyCustomizable"
            />
          </div>
          <div className="card-text">
            <h2> Fully Customizable</h2>
            <h4 className="h4-Middletext">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </h4>
          </div>
        </CardText>
      </Card>

      <Banner>
        <BannerText>Boost your links today</BannerText>
        <DesignButton>Get Started</DesignButton>
      </Banner>

      <Footer />
    </Middle>
  );
};

export default Statistics;
