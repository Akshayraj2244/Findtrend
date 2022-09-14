import React, { useState } from "react";
import styled from "styled-components";
import twitter from "../../Assets/images/twitter.svg";
import pintrest from "../../Assets/images/pintrest.svg";
import facebook from "../../Assets/images/facebook.svg";
import dribble from "../../Assets/images/dribble.svg";
import cross from "../../Assets/images/cross.svg";
import arrow from "../../Assets/images/arrowithtext.svg";

function Spotlight() {
    const [isclose, setClose] = useState("");

    return (
        <>
            <SpotlightContainer>
                <SpotlightWrapper>
                    <MainContent>
                        Minimize your tabs.
                        <br /> find the trends!
                    </MainContent>
                    <TextContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate impedit ipsa eligendi, <br />
                        veritatis deserunt sint quia, suscipit, tenetur cum
                        earum neque.
                    </TextContent>
                    <ButtonContent>
                        <div>
                            <ArrowText>
                                <img src={arrow} alt="image" />
                            </ArrowText>
                            <GetButton>Get started🔥</GetButton>
                        </div>
                    </ButtonContent>
                    <IconContainer>
                        <Cryptocontent
                            className={isclose === "one" ? "none" : ""}
                        >
                            <TwitterImage>
                                <img src={twitter} alt="icon" />
                            </TwitterImage>
                            <PunkTest>cryptopunk - search</PunkTest>
                            <GradientBox></GradientBox>
                            <ImageContent
                                onClick={() => {
                                    setClose("one");
                                }}
                            >
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </Cryptocontent>
                        <PopularContent
                            className={isclose === "two" ? "none" : ""}
                        >
                            <Popularimage>
                                <img src={pintrest} alt="icon" />
                            </Popularimage>
                            <PopularTest>Popular design - search</PopularTest>
                            <ImageContent
                                onClick={() => {
                                    setClose("two");
                                }}
                            >
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </PopularContent>
                        <ProductContent
                            className={isclose === "three" ? "none" : ""}
                        >
                            <ProductImage>
                                <img src={facebook} alt="icon" />
                            </ProductImage>
                            <DesignContent>product design-search</DesignContent>
                            <ImageContent
                                onClick={() => {
                                    setClose("three");
                                }}
                            >
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </ProductContent>
                        <ElonContent
                            className={isclose === "four" ? "none" : ""}
                        >
                            <DribbleImage>
                                <img src={dribble} alt="icon" />
                            </DribbleImage>
                            <ElonText>Elon Musk - search</ElonText>
                            <ImageContent
                                onClick={() => {
                                    setClose("four");
                                }}
                            >
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </ElonContent>
                    </IconContainer>
                </SpotlightWrapper>
            </SpotlightContainer>
        </>
    );
}

export default Spotlight;

const SpotlightContainer = styled.div`
    padding: 129px 0 80px;
`;
const SpotlightWrapper = styled.div``;
const MainContent = styled.h1`
    color: aliceblue;
    text-align: center;
    font-size: 53px;
    line-height: 1.4em;
    margin-bottom: 50px;
    div {
        width: 50;
    }
    @media all and (max-width: 980px) {
        font-size: 43px;
    }
    @media all and (max-width: 768px) {
        font-size: 36px;
    }
`;
const TextContent = styled.p`
    color: #60625d;
    text-align: center;
    line-height: 2em;
    font-size: 14px;
    margin-bottom: 50px;
    @media all and (max-width: 980px) {
        font-size: 10px;
    }
    @media all and (max-width: 768px) {
        font-size: 8px;
    }
`;
const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;

    div {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`;

const GetButton = styled.button`
    cursor: pointer;
    background-color: #a6ff34;
    color: aliceblue;
    padding: 17px 35px;
    border: none;
    border-radius: 34px;
    font-size: 20px;
    color: black;
    font-weight: bold;
    @media all and (max-width: 1280px) {
        padding: 16px 31px;
        font-size: 17px;
    }
    @media all and (max-width: 980px) {
        padding: 14px 18px;
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        padding: 13px 10px;
        font-size: 11px;
    }
`;
const IconContainer = styled.div`
    padding-bottom: 250px;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
`;
const Cryptocontent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    background-color: #111;
    position: absolute;
    top: 108px;
    left: 28%;
    transform: rotate(-18deg);
    padding: 2px 17px;
    &.none {
        display: none;
    }
    @media all and (max-width: 1440px) {
        left: 20%;
    }
    @media all and (max-width: 768px) {
        top: -8%;
        left: 35%;
        padding: 8px 8px;
        transform: rotate(0deg);
    }
`;
const TwitterImage = styled.div`
    width: 28px;

    img {
        display: block;
        width: 100%;
    }
`;
const PunkTest = styled.p`
    color: aliceblue;
    background: linear-gradient(to right, #fdfdfd, #e0dddf, #1b1a1a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const ImageContent = styled.div`
    width: 8%;
    cursor: pointer;
    z-index: 2;
    img {
        width: 100%;
        display: block;
    }
`;
const PopularContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #111;
    position: absolute;
    left: 37%;
    top: 47%;
    padding: 14px 17px;
    &.none {
        display: none;
    }
    @media all and (max-width: 1440px) {
        left: 34%;
    }
    @media all and (max-width: 1440px) {
        top: 55%;
    }
    @media all and (max-width: 768px) {
        top: 35%;
        padding: 8px 2px;
    }
`;
const Popularimage = styled.div`
    width: 28px;
    color: #60625d;
    img {
        display: block;
        width: 100%;
    }
`;
const PopularTest = styled.p`
    color: aliceblue;
    background: linear-gradient(to right, #fdfdfd, #e0dddf, #1b1a1a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin-left: 13px;

    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const ProductContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #111;
    position: absolute;
    top: 28%;
    right: 38%;
    padding: 14px 17px;
    &.none {
        display: none;
    }
    @media all and (max-width: 1440px) {
        right: 29%;
        top: 33%;
    }
    @media all and (max-width: 768px) {
        top: 15%;
        right: 34%;
        padding: 8px 2px;
    }
    @media all and (max-width: 768px) {
        right: 21%;
    }
`;
const ProductImage = styled.div`
    width: 28px;
    img {
        display: block;
        width: 100%;
    }
`;
const DesignContent = styled.p`
    color: aliceblue;
    background: linear-gradient(to right, #fdfdfd, #e0dddf, #1b1a1a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin-left: 13px;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const ElonContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #111;
    position: absolute;
    top: 49%;
    right: 27%;
    padding: 14px 17px;
    transform: rotate(6deg);
    &.none {
        display: none;
    }
    @media all and (max-width: 1440px) {
        top: 53%;
        right: 15%;
    }
    @media all and (max-width: 768px) {
        top: 55%;
        right: 32%;
        padding: 8px 2px;
        transform: rotate(0deg);
    }
    @media all and (max-width: 768px) {
        right: 21%;
    }
`;
const DribbleImage = styled.div`
    width: 28px;
    img {
        width: 100%;
        display: block;
    }
`;
const ElonText = styled.p`
    color: aliceblue;
    background: linear-gradient(to right, #fdfdfd, #e0dddf, #1b1a1a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin-left: 13px;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const GradientBox = styled.div`
    height: 52px;
    width: 9%;
    position: absolute;
    right: 17%;
`;
const ArrowText = styled.div`
    width: 90px !important;
    position: absolute !important;
    right: -10%;
    top: 19%;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 1440px) {
        right: -27%;
    }
    @media all and (max-width: 1280px) {
        right: -33%;
    }
    @media all and (max-width: 980px) {
        right: -65%;
        width: 95%;
    }
    @media all and (max-width: 768px) {
        right: -78%;
        top: 20%;
    }
    @media all and (max-width: 768px) {
        width: 98%;
        right: -95%;
    }
`;
const MainImage = styled.div`
    display: flex;
`;
