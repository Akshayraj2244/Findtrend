import React, { useState } from "react";
import styled from "styled-components";
import findtrend from "../../Assets/images/findtrend.svg";
import cross from "../../Assets/images/cross.svg";
import arrow from "../../Assets/images/arrowithtext.svg";
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
    @media all and (max-width: 980px) {
        font-size: 38px;
    }
    @media all and (max-width: 768px) {
      font-size: 33px;
    }
`;
const BgContent = styled.div`
    background-color: #a6ff34;
    padding: 20px 0px 62px;
`;
const MainwhiteContainer = styled.div`
    width: 24%;
    margin: 0 auto;
    padding-top: 100px;
    &.close {
        display: none;
    }
    @media all and (max-width: 1440px) {
        width: 32%;
    }
`;
const WhiteContainer = styled.div`
    background-color: #fff;
    padding: 35px 13px;
    width: 85%;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        padding: 19px 0px;
    width: 79%;
    }
`;
const BlackContainer = styled.div`
    background-color: black;
    padding: 14px 8px;
    width: 70%;
    margin: 0 auto;
    @media all and (max-width: 768px) {
        padding: 10px 0px;
    }
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
    @media all and (max-width: 768px) {
        width: 65%;
    }

`;
const MainText = styled.div``;
const TextContent = styled.h1`
    color: #60625d;
    font-size: 17px;
    background: linear-gradient(to right, #393939, #020202);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    
    @media all and (max-width: 1440px) {
        font-size: 15px;
    }
    @media all and (max-width: 1280px) {
        font-size: 10px;
    }
    @media all and (max-width: 768px) {
       display: none;
    }
    

`;
const MainImage = styled.div``;
const ImageContent = styled.div`
    width: 60%;
    cursor: pointer;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 768px) {
      width: 45%;
    }
`;
const ParaContent = styled.p`
    text-align: center;
    margin-top: 60px;
    color: #60625d;
    @media all and (max-width: 980px) {
        font-size:13px;
    }
    @media all and (max-width: 768px) {
      font-size: 10px;
    }
`;
const ImageArrow = styled.div`
    display: flex;
    img {
    }
`;
