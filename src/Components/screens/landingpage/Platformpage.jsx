import React from "react";
import styled from "styled-components";
import facebook from "../../Assets/images/facebook.svg";
import twitter from "../../Assets/images/twitter.svg";
import dribble from "../../Assets/images/dribble.svg";
import git from "../../Assets/images/git.svg";
import company from "../../Assets/images/m company.svg";
import pintrest from "../../Assets/images/pintrest.svg";
import linkedin from "../../Assets/images/linkedin.svg";
import vk from "../../Assets/images/vk.svg";
import Elon from "../../Assets/images/linkedin -page1.jpg";
import tesla from "../../Assets/images/linkedin -page2.jpg";

function Platformpage() {
    const arr = [
        {
            image: facebook,
            link: "https://www.google.com/",
        },
        {
            image: twitter,
        },
        {
            image: dribble,
        },
        {
            image: git,
        },
        {
            image: company,
        },
        {
            image: pintrest,
        },
        {
            image: linkedin,
        },
        {
            image: vk,
        },
    ];
    return (
        <>
            <PlaformContainer>
                <PlatformWrapper>
                    <BgContainer>
                        <PlatformContent>
                            All platform connect to Findtrend
                        </PlatformContent>
                        <LogoContainer>
                            <LogoContent>
                                {arr.map((val) => (
                                    <ImageContent
                                        href={val.link}
                                        target="_blank"
                                    >
                                        <img src={val.image} alt="icon" />
                                    </ImageContent>
                                ))}
                            </LogoContent>
                            <LinkedinContainer>
                                <EilonImage>
                                    <img src={Elon} alt="Linked" />
                                </EilonImage>
                            </LinkedinContainer>
                            <TeslaContainer>
                                <TeslaImage>
                                    <img src={tesla} alt="car" />
                                </TeslaImage>
                            </TeslaContainer>
                            <LinkedinContainer>
                                <EilonImage>
                                    <img src={Elon} alt="Linked" />
                                </EilonImage>
                            </LinkedinContainer>
                            <ButtonContent>
                                <Button>Register</Button>
                            </ButtonContent>
                        </LogoContainer>
                    </BgContainer>
                </PlatformWrapper>
            </PlaformContainer>
        </>
    );
}

export default Platformpage;

const PlaformContainer = styled.div`
    background-color: #f1f1f1;
    padding-top: 50px;
    padding-bottom: 88px;
`;
const PlatformWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    @media all and (max-width: 1440px) {
        width: 65%;
    }
    @media all and (max-width: 980px) {
       width: 78%;
    }
    @media all and (max-width: 768px) {
        width: 88%;
    }
`;
const PlatformContent = styled.h1`
    font-size: 50px;
    text-align: center;
    @media all and (max-width: 1440px) {
        font-size: 30px;
    }
`;
const BgContainer = styled.div``;
const LogoContainer = styled.div``;
const LogoContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;
const ImageContent = styled.div`
    width: 80px;
    background-color: #fff;
    padding: 20px;
    cursor: pointer;
    border-radius: 9px;
    img {
        display: block;
        width: 100%;
    }
    &:hover {
        background-color: #a6ff34;
        transition: 0.6s ease all;
    }
    @media all and (max-width: 1440px) {
       margin-right: 15px;
    }
    @media all and (max-width: 980px) {
        width: 90px;
    }
    @media all and (max-width: 768px) {
        width: 60px;
    }
    @media all and (max-width: 640px) {
      width: 40%;
      padding: 10px;
    }
`;
const LinkedinContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 55px;
`;
const EilonImage = styled.div`
    width: 80%;
    img {
        width: 100%;
        display: block;
    }
`;
const TeslaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 45px;
`;
const TeslaImage = styled.div`
    width: 80%;
    img {
        width: 100%;
        display: block;
    }
`;
const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 55px;
`;
const Button = styled.button`
    background-color: black;
    padding: 20px 39px;
    border: none;
    border-radius: 25px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    @media all and (max-width: 640px) {
      padding: 10px 20px;
      font-size: 10px;
    }
`;
