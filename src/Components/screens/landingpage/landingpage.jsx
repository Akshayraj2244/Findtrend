import React from "react";
import styled from "styled-components";
import Header from "../../includes/landingpage/Header";
import Spotlight from "./Spotlight";
import MiddleSection from "./middleSection";

export default function () {
  return (
    <>
    <Container>
    <Header />
    <Spotlight />
    </Container>
    <MiddleSection />
     

    </>
  );
}
const Container = styled.div`
    background-color: black;
`;