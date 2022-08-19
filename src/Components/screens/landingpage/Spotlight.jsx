import React, { useState } from "react";
import styled from "styled-components";
import twitter from "../../Assets/images/twitter.svg";
import pintrest from "../../Assets/images/pintrest.svg";
import facebook from "../../Assets/images/facebook.svg";
import dribble from "../../Assets/images/dribble.svg";
import cross from "../../Assets/images/cross.svg";

function Spotlight() {
    const [isclose, setClose] = useState(false);

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
                        <GetButton>Get started🔥</GetButton>
                    </ButtonContent>
                    <IconContainer>
                        <Cryptocontent className={isclose ? "none" : ""}>
                            <TwitterImage>
                                <img src={twitter} alt="icon" />
                            </TwitterImage>
                            <PunkTest>cryptopunk-search</PunkTest>
                            <GradientBox></GradientBox>
                            <ImageContent
                                onClick={() => {
                                    setClose(true);
                                }}
                            >
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </Cryptocontent>
                        <PopularContent>
                            <Popularimage>
                                <img src={pintrest} alt="icon" />
                            </Popularimage>
                            <PopularTest>Popular design-search</PopularTest>
                            <ImageContent>
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </PopularContent>
                        <ProductContent>
                            <ProductImage>
                                <img src={facebook} alt="icon" />
                            </ProductImage>
                            <DesignContent>product design-search</DesignContent>
                            <ImageContent>
                                <img src={cross} alt="cros" />
                            </ImageContent>
                        </ProductContent>
                        <ElonContent>
                            <DribbleImage>
                                <img src={dribble} alt="icon" />
                            </DribbleImage>
                            <ElonText>Elon Musk-search</ElonText>
                            <ImageContent>
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
`;
const TextContent = styled.p`
    color: #60625d;
    text-align: center;
    line-height: 2em;
    font-size: 14px;
    margin-bottom: 50px;
`;
const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
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
`;
const IconContainer = styled.div`
    padding-bottom: 250px;
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-top: 39px;
`;
const Cryptocontent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    background-color: #111;
    position: absolute;
    top: 104px;
    left: 27%;
    transform: rotate(-22deg);
    padding: 2px 27px;
    &.none {
        display: none;
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
    background: linear-gradient(to left, #393939, #020202);
    -webkit-text-fill-color: transparent;
`;
const ImageContent = styled.div`
    width: 8%;
    cursor: pointer;
    /* margin-left: 0px; */
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
    padding: 11px 27px;
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
`;
const ProductContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #111;
    position: absolute;
    top: 20%;
    right: 42%;
    padding: 11px 27px;
    transform: rotate(-7deg);
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
`;
const ElonContent = styled.div`
    display: flex;
    align-items: center;
    background-color: #111;
    position: absolute;
    top: 29%;
    right: 31%;
    padding: 11px 27px;
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
`;
const GradientBox = styled.div`
    height: 52px;
    width: 9%;
    position: absolute;
    right: 17%;
  
`;
