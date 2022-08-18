import React from "react";
import styled from "styled-components";
import Header from "../../includes/landingpage/Header";
import Spotlight from "./Spotlight";
import MiddleSection from "./middleSection";
import ParagraphPage from "./ParagraphPage"
import SiteLandingpage from './SiteLandingpage'
import Platformpage from './Platformpage'

export default function () {
  return (
    <>
    <Container>
    <Header />
    <Spotlight />
    </Container>
    <MiddleSection />
    <ParagraphPage />
    <SiteLandingpage />
    <Platformpage />
    </>
  );
}
const Container = styled.div`
    background-color: black;
`;