import React from "react";
import styled from "styled-components";
import Header from "./Header";
import NavComponent from "./NavComponent";
import MainComponent from "./MainComponent";

const Main = styled.div``;

const Shortly = () => {
  return (
    <Main>
      <NavComponent />
      <Header />
      <MainComponent />
    </Main>
  );
};

export default Shortly;
