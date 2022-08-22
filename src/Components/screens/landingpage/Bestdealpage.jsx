import React, { useState } from "react";
import styled from "styled-components";
import tick from "../../Assets/images/tick-icon.svg";
import arrow from "../../Assets/images/arrowithtext.svg";

function Bestdealpage() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <BestdealContainer>
                <BestdealWrapper>
                    <TopContainer>
                        <BestdealContent>Get your best deal</BestdealContent>
                        <MiddleSection>
                            <MainContent>
                                <YearContent>Year</YearContent>
                                <ButtonContent
                                    className={toggle ? "toggle" : ""}
                                    onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                >
                                    <CircleContent
                                        className={toggle ? "toggle" : ""}
                                        onClick={() => {
                                            setToggle(!toggle);
                                        }}
                                    ></CircleContent>
                                </ButtonContent>
                                <MonthContent>Month</MonthContent>
                                <ArrowImage>
                                    <img src={arrow} alt="image" />
                                </ArrowImage>
                            </MainContent>
                        </MiddleSection>
                    </TopContainer>
                    <BottomContainer>
                        <LeftBox className={toggle ? "box" : ""}>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceContent>
                                    <PriceList>$8</PriceList>
                                    <MonthPrice>/ Month</MonthPrice>
                                </PriceContent>
                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <ForButton>
                                <Fbutton className={toggle ? "box" : ""}>
                                    For Free
                                </Fbutton>
                            </ForButton>
                        </LeftBox>
                        <MiddleBox className={!toggle ? "box" : ""}>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceContent>
                                    <PriceList>$20</PriceList>
                                    <MonthPrice>/ Year </MonthPrice>
                                </PriceContent>

                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet{" "}
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <FreeButton>
                                <Rbutton className={toggle ? "box" : ""}>
                                    ForFree
                                </Rbutton>
                            </FreeButton>
                        </MiddleBox>
                        <RightBox className={toggle ? "box" : ""}>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceContent>
                                    <PriceList>$8</PriceList>
                                    <MonthPrice>/ Month </MonthPrice>
                                </PriceContent>
                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet{" "}
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit amet
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <GreenButton>
                                <Button className={toggle ? "box" : ""}>
                                    ForFree
                                </Button>
                            </GreenButton>
                        </RightBox>
                    </BottomContainer>
                </BestdealWrapper>
            </BestdealContainer>
        </>
    );
}
export default Bestdealpage;

const BestdealContainer = styled.div`
    background-color: black;
    padding: 85px 0px 150px;
    border-bottom: 2px solid #fff;
`;
const BestdealWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const TopContainer = styled.div``;
const BestdealContent = styled.h2`
    text-align: center;
    color: #fff;
    font-size: 40px;
    margin-bottom: 57px;
    @media all and (max-width: 980px) {
        font-size: 35px;
    }
`;
const MiddleSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
const MainContent = styled.div`
    position: relative;
    align-items: center;
    display: flex;
`;
const YearContent = styled.span`
    color: #fff;
    margin-right: 30px;
`;
const ButtonContent = styled.div`
    background-color: #fff;
    border-radius: 27px;
    width: 69px;
    display: flex;
    position: relative;
    height: 35px;
    align-items: center;
    padding: 0px 5px;
    cursor: pointer;
`;
const CircleContent = styled.div`
    background-color: #a6ff34;
    padding: 14px;
    width: 25px;
    border-radius: 32px;
    cursor: pointer;
    display: inline-block;
    &.toggle {
        position: absolute;
        right: 0;
        margin-right: 6px;
    }
`;
const MonthContent = styled.span`
    color: #fff;
    margin-left: 30px;
`;
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 90px;
    width: 60%;
    @media all and (max-width: 1440px) {
        width: 86%;
    }
    @media all and (max-width: 1280px) {
        width: 92%;
    }
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;
const LeftBox = styled.div`
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    padding: 15px;
    width: 300px;
    border-radius: 12px;
    &.box {
        background-color: #a6ff34;
        transition: all 0.7s ease;
        transform: scale(1.2);
    }
    @media all and (max-width: 1440px) {
        width: 285px;
    }
    @media all and (max-width: 1280px) {
        width: 250px;
    }
    @media all and (max-width: 980px) {
        &.box {
            transition: all 0.2.3s ease;
            transform: scale(1);
        }
        transform: scale(0.8);
    }
    @media all and (max-width: 768px) {
        &.box {
            transform: scale(0.8);
        }
    }
`;
const Personalmonthcontent = styled.div`
    color: black;
    height: 400px;
`;
const PersonalContent = styled.h4`
    font-size: 30px;
    margin-bottom: 3px;
`;
const TextContent = styled.p`
    color: #60625d;
    padding-bottom: 15px;
    border-bottom: 1px solid #60625d; ;
`;
const PriceList = styled.span`
    font-size: 70px;
    font-weight: bold;
    margin-top: 15px;
`;
const MonthPrice = styled.span`
    font-size: 20px;
`;
const BottomContent = styled.div`
    margin-top: 25px;
    color: black;
`;
const ImageContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    width: 100%;

    img {
        width: 5%;
        display: block;
        margin-right: 8px;
    }
`;
const ForButton = styled.div`
    display: flex;
    justify-content: center;
`;
const Fbutton = styled.button`
    padding: 12px 81px;
    background-color: #a6ff34;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    &.box {
        background-color: black;
        color: #fff;
    }
    @media all and (max-width: 980px) {
        &.box {
            background-color: black;
            color: #fff;
            font-size: 11px;
        }
        font-size: 15px;
        padding: 9px 70px;
    }
`;
const MiddleBox = styled.div`
    padding: 15px;
    background-color: #fff;
    width: 300px;
    border-radius: 12px;
    transition: all 0.5s ease-in-out;

    &.box {
        background-color: #a6ff34;
        transform: scale(1.2);
    }
    @media all and (max-width: 1440px) {
        width: 285px;
    }
    @media all and (max-width: 1280px) {
        width: 250px;
    }
    @media all and (max-width: 980px) {
        &.box {
            transform: scale(1);
        }
        transform: scale(0.8);
    }
    @media all and (max-width: 768px) {
        &.box {
            transform: scale(0.8);
        }
    }
`;
const FreeButton = styled.div`
    display: flex;
    justify-content: center;
`;
const Rbutton = styled.button`
    padding: 12px 81px;
    background-color: black;
    border-radius: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    &.box {
        background-color: black;
        color: #fff;
    }
`;
const RightBox = styled.div`
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    padding: 15px;
    width: 300px;
    border-radius: 12px;

    &.box {
        background-color: #a6ff34;
        transition: all 0.7s ease;
        transform: scale(1.2);
    }
    @media all and (max-width: 1440px) {
        width: 285px;
    }
    @media all and (max-width: 1280px) {
        width: 250px;
    }
    @media all and (max-width: 980px) {
        &.box {
            transition: all 0.2.3s ease;
            transform: scale(1);
        }
        transform: scale(0.8);
    }
    @media all and (max-width: 768px) {
        &.box {
            transform: scale(0.8);
        }
    }
`;
const GreenButton = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    padding: 12px 81px;
    background-color: #a6ff34;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    &.box {
        background-color: black;
        color: #fff;
    }
`;
const ArrowImage = styled.div`
    width: 90px;
    position: absolute;
    top: -21px;
    right: -66%;

    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        right: -54%;
        top: -104%;
    }
`;
const PriceContent = styled.div`
    margin-top: 20px;
`;
