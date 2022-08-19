import React, { useState } from "react";
import styled from "styled-components";
import findtrend from "../../Assets/images/findtrend.svg";
import cross from "../../Assets/images/cross.svg";
function MiddleSection() {
    const [isclose, setClose] = useState(false);

    return (
        <>
            <MiddlesectionContainer>
                <MiddlesectionWrapper>
                    <BgContent>
                        <TabContent>Open new tabs is sh*t</TabContent>
                        <MainwhiteContainer className={isclose ? "close" : ""}>
                            <WhiteContainer>
                                <BlackContainer>
                                    <Logocontainer>
                                        <ImageContainer>
                                            <img src={findtrend} alt="trend" />
                                        </ImageContainer>
                                        <MainText>
                                            <TextContent>
                                                -Elon Musk
                                            </TextContent>
                                        </MainText>
                                        <MainImage>
                                            <ImageContent
                                                onClick={() => {
                                                    setClose(true);
                                                }}
                                            >
                                                <img src={cross} alt="cros" />
                                            </ImageContent>
                                        </MainImage>
                                    </Logocontainer>
                                </BlackContainer>
                            </WhiteContainer>
                        </MainwhiteContainer>
                        <ParaContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate impedit ipsa eligendi, <br />
                            veritatis deserunt sint quia, suscipit, tenetur cum
                            earum neque.
                        </ParaContent>
                    </BgContent>
                </MiddlesectionWrapper>
            </MiddlesectionContainer>
        </>
    );
}

export default MiddleSection;

const MiddlesectionContainer = styled.div`
    margin-bottom: 30px;
    border-top: 3px solid #fff;
`;
const MiddlesectionWrapper = styled.div``;
const TabContent = styled.h1`
    text-align: center;
    font-size: 50px;
    margin-top: 69px;
`;
const BgContent = styled.div`
    background-color: #a6ff34;
    height: 57vh;
    padding-top: 20px;
`;
const MainwhiteContainer = styled.div`
    width: 24%;
    margin: 0 auto;
    padding-top: 100px;
    &.close {
        display: none;
    }
`;
const WhiteContainer = styled.div`
    background-color: #fff;
    padding: 35px 13px;
    width: 85%;
    margin: 0 auto;
`;
const BlackContainer = styled.div`
    background-color: black;
    padding: 14px 8px;
    width: 70%;
    margin: 0 auto;
`;
const Logocontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ImageContainer = styled.div`
    width: 50%;
    img {
        display: block;
        width: 100%;
    }
`;
const MainText = styled.div``;
const TextContent = styled.h1`
    color: #60625d;
    font-size: 17px;
    background: linear-gradient(to right, #393939, #020202);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`;
const MainImage = styled.div``;
const ImageContent = styled.div`
    width: 60%;
    cursor: pointer;
    img {
        width: 100%;
        display: block;
    }
`;
const ParaContent = styled.p`
    text-align: center;
    margin-top: 60px;
    color: #60625d;
`;
