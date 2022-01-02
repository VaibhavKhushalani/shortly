import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShortenDesktop from "../assests/bg-shorten-desktop.svg";
import Statistics from "./Statistics";
const Middle = styled.div`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
const SearchBar = styled.div`
  background: #3b3054;
  margin-left: 140px;
  margin-right: 120px;
  margin-top: 13em;
  height: auto;
  width: 75%;
  border-radius: 10px;
  padding-top: 50px;
  padding-left: 65px;
  padding-bottom: 41px;
  background-image: url(${ShortenDesktop});
  background-size: 100%;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1110px) {
    padding-left: 30px;
    margin: 0px auto;
    margin-top: 13em;
  }
  @media (max-width: 900px) {
    padding-left: 50px;
  }
  @media (max-width: 768.9px) {
    padding-left: 3%;
    padding-right: 3%;
    margin: 0px auto;
    width: 90%;
    margin-top: 5em;
  }

  .Text-Error {
    white-space: nowrap;
    margin: 2px;
    font-size: 12px;
    color: #f5514e;
  }
`;

const InputLink = styled.input`
  width: 75%;
  height: 55px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "poppins";
  color: var(--grayish-violet);
  border: ${(props) => props.border};
  box-sizing: border-box;
  padding: 22px;
  transition: all 0.2s ease-in-out;
  ::placeholder {
    color: ${(props) => props.placeholdertext};
  }

  :focus {
    border-color: none;
    outline: none;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 768.9px) {
    width: 100%;
  }
`;
const DesignButton = styled.button`
  background-color: ${(props) => props.buttonColor || "#2acfcf"};
  border-radius: 8px;
  font-size: 22px;
  color: #fff;
  border: none;
  font-weight: bold;
  width: 120px;
  margin-top: 10em;
  height: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.buttonHoverColor || "#3b3054"};
  }
  &::after {
    background-color: ${(props) => props.buttonHoverColor || "#3b3053"};
  }
`;
const DesignSearchButton = styled.button`
  background-color: #2acfcf;
  border-radius: 8px;
  font-size: 22px;
  color: #fff;
  border: none;
  font-weight: bold;
  width: 180px;
  margin-left: 15px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.buttonHoverColor};
  }

  @media (max-width: 1110px) {
    width: 130px;
  }

  @media (max-width: 768.9px) {
    width: 100%;
    margin: 0px auto;
    margin-top: 1em;
  }
`;
const GreyBox = styled.div`
  background-color: #eff1f7;
  height: 100vh;
  width: 100%;
  margin-top: -75px;
  position: absolute;
  z-index: -1;
  transition: all 0.2s ease-in-out;
`;
const ResultGroup = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  transition: all 0.2s ease-in-out;
`;
const Result = styled.div`
  background-color: #fff;
  margin-left: 140px;
  margin-right: 120px;
  margin-top: 30px;
  height: 100%;
  width: 80%;
  font-size: 23px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1110px) {
    margin-left: 130px;
    width: 77%;
  }
  @media (max-width: 900px) {
    margin: 0px auto;
    width: 80%;
  }

  @media (max-width: 768.9px) {
    width: 93%;
  }

  .link-field {
    margin-left: 15px;
    display: flex;
    position: relative;
    justify-content: space-between;
    @media (max-width: 860px) {
      margin-left: -1px;
      @media (max-width: 768.9px) {
        flex-flow: column nowrap;
        text-align: center;
        display: flex;
        margin-bottom: 40px;
      }
    }
  }
  .user-link {
    float: left;
    font-weight: 500;
    margin-left: 15px;
    margin-top: 20px;
    overflow: hidden;
    @media (max-width: 860px) {
      margin-left: 1px;
    }
    @media (max-width: 768.9px) {
      width: 95%;
      overflow: hidden;
      white-space: nowrap;
      margin-left: 2px;
      margin-right: 2px;
    }
  }
  .shorty-link {
    color: #2acfcf;
    font-weight: 500;
    margin-right: 15px;
    margin-top: 20px;
    @media (max-width: 860px) {
      margin-right: 2px;
    }
    @media (max-width: 768.9px) {
      width: 100%;
    }
  }
  .copybutton {
    float: right;
    font-weight: 500;
    margin-right: 50px;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 860px) {
      margin-right: 20px;
    }
    @media (max-width: 768.9px) {
      width: 90%;
      margin: 0px auto;
      margin-bottom: 20px;
      margin-left: 3%;
      margin-right: 3%;
    }
  }
  .copyUpdateButton {
    float: right;
    background: #3b3053;
    font-weight: 500;
    margin-right: 50px;
    margin-top: 15px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 860px) {
      margin-right: 20px;
    }
    @media (max-width: 768.9px) {
      width: 90%;
      margin: 0px auto;
      margin-bottom: 20px;
      margin-left: 3%;
      margin-right: 3%;
    }
  }
  .copyUpdateButton:hover {
    background: #625385;
  }
`;

const Loading = styled.h4`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  margin-left: 150px;
  margin-right: 120px;
  margin-top: 100px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768.9px) {
    text-align: center;
    white-space: nowrap;
  }
  @media (max-width: 500px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const MainComponent = () => {
  const [items] = useState([]);
  const [result, setResult] = useState(false);
  const [text, setText] = useState({ text: "", colortext: "" });
  const [buttontext, setButtonText] = useState("Copy");
  const [update, setUpdate] = useState(0);
  const [error, setError] = useState({
    border: "0px",
    placeholdertext: "#9e9aa7",
  });
  const [user, setUser] = useState({
    input: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const AddData = async () => {
    setText({ text: "Shortening your link wait...", colortext: "" });
    setError({ border: "0px", placeholdertext: "#9e9aa7" });

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${user.input}`
    );
    setUser(await response.json());

    if (!user.input) {
      setText({ colortext: "Please add a Link" });
      setError({ border: "3px solid #e45452", placeholdertext: "#e8b7b7" });
    }
  };

  //updating link state at modification
  useEffect(() => {
    if (user.ok === true) {
      let data = {
        link: user.result.original_link,
        shortlink: user.result.short_link,
        id: user.result.code,
      };
      items.push(data);

      setResult(true);
      setText({ text: "", colortext: "" });
      user.input = "";
      setButtonText("Copy");
      setUpdate();
      user.ok = false;
    }
  }, [items, user]);

 

  const CopyData = (e, value) => {
    if (update === e) {
      setUpdate();
    } else {
      setUpdate(e);
      setButtonText("Copied!");
      navigator.clipboard.writeText(value);
  
    }
  };

  const RenderMenu = () => {
    if (result) {
      return (
        <>
          <ResultGroup>
            {items.map((elem, id) => {
              return (
                <>
                  <Result>
                    <div className="link-field">
                      <h5 className="user-link">{elem.link} </h5>
                      <h5 className="shorty-link">{elem.shortlink}</h5>

                      <DesignButton
                        className={
                          id === update ? "copyUpdateButton" : "copybutton"
                        }
                        href="#"
                        onClick={() => CopyData(id, elem.shortlink)}
                      >
                        {id === update ? buttontext : "Copy"}
                      </DesignButton>
                    </div>
                  </Result>
                </>
              );
            })}
          </ResultGroup>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Middle>
      <SearchBar>
        <div className="content-form">
          <InputLink
            border={error.border}
            name="input"
            placeholdertext={error.placeholdertext}
            value={user.input}
            onChange={handleInputs}
            required=""
            placeholder="Shorten a link here..."
          />

          <DesignSearchButton
            light
            href="#"
            onClick={AddData}
            buttonHoverColor=" #9be3df"
          >
            Shorten it!
          </DesignSearchButton>
          <h7 className="Text-Error">{text.colortext}</h7>
        </div>
      </SearchBar>
      <GreyBox>
        <Loading>{text.text} </Loading>
        <RenderMenu />
        <Statistics />
      </GreyBox>
    </Middle>
  );
};

export default MainComponent;
