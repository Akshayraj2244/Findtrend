import React from "react";
import styled from "styled-components";
import Header from "../../includes/landingpage/Header";
import Spotlight from "./Spotlight";
import ParagraphPage from "./ParagraphPage";
import SiteLandingpage from "./SiteLandingpage";
import Platformpage from "./Platformpage";
import MiddleSection from "./MiddleSection";
import Bestdealpage from "./Bestdealpage";
import Emailpage from "./Emailpage";
import Footer from "../../includes/landingpage/Footer";
import bg from "../../Assets/images/spotlight.jpg";

export default function () {
    return (
        <>
            <Container className="background">
                <Header />
                <Spotlight />
            </Container>
            <MiddleSection />
            <ParagraphPage />
            <SiteLandingpage />
            <Platformpage />
            <Bestdealpage />
            <Emailpage />
            <Footer />
        </>
    );
}
const Container = styled.div`
    background-color: black;
    background: url(${bg});
    background-position: center;
`;
