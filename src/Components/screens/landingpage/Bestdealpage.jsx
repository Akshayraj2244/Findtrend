import React from "react";
import styled from "styled-components";
import tick from "../../Assets/images/tick-icon.svg";

function Bestdealpage() {
    return (
        <>
            <BestdealContainer>
                <BestdealWrapper>
                    <TopContainer>
                        <BestdealContent>Get your best deal</BestdealContent>
                        <MiddleSection>
                            <YearContent>Year</YearContent>
                            <ButtonContent>
                                <CircleContent></CircleContent>
                            </ButtonContent>
                            <MonthContent>Month</MonthContent>
                        </MiddleSection>
                    </TopContainer>
                    <BottomContainer>
                        <LeftBox>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceList>$8</PriceList>
                                <MonthPrice>/Year</MonthPrice>
                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <ForButton>For Free</ForButton>
                        </LeftBox>
                        <MiddleBox>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceList>$8</PriceList>
                                <MonthPrice>/Month </MonthPrice>
                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <FreeButton>ForFree</FreeButton>
                        </MiddleBox>
                        <RightBox>
                            <Personalmonthcontent>
                                <PersonalContent>Personal</PersonalContent>
                                <TextContent>Lorem ipsum dolor sit</TextContent>
                                <PriceList>$8</PriceList>
                                <MonthPrice>/Year </MonthPrice>
                                <BottomContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                    <ImageContent>
                                        <img src={tick} alt="icon" />
                                        Lorem ipsum dolor sit
                                    </ImageContent>
                                </BottomContent>
                            </Personalmonthcontent>
                            <GreenButton>ForFree</GreenButton>
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
    padding-top: 30px;
`;
const BestdealWrapper = styled.div``;
const TopContainer = styled.div``;
const BestdealContent = styled.h2`
    text-align: center;
    color: #fff;
    font-size: 40px;
`;
const MiddleSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
const YearContent = styled.span`
    color: #fff;
    margin-right: 30px;
`;
const ButtonContent = styled.div`
    padding: 5px;
    background-color: #fff;
    border-radius: 27px;
    width: 81px;
`;
const CircleContent = styled.div`
    background-color: #a6ff34;
    padding: 14px;
    width: 31px;
    border-radius: 32px;
`;
const MonthContent = styled.span`
    color: #fff;
    margin-left: 30px;
`;
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`;
const LeftBox = styled.div`
    background-color: #fff;
    padding: 15px;
    width: 316px;
    border-radius: 12px;
`;
const Personalmonthcontent = styled.div`
    color: black;
    height: 400px;
`;
const PersonalContent = styled.h4`
    font-size: 20px;
    margin-bottom: 3px;
`;
const TextContent = styled.p`
    color: black;
    margin-bottom: 50px;
`;
const PriceList = styled.span`
    font-size: 50px;
    font-weight: bold;
`;
const MonthPrice = styled.span`
    font-size: 20px;
`;
const BottomContent = styled.div`
    margin-top: 25px;
`;
const ImageContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    img {
        width: 5%;
        display: block;
    }
`;
const ForButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    background-color: #a6ff34;
    border-radius: 20px;
`;
const MiddleBox = styled.div`
    background-color: #fff;
    padding: 15px;
    width: 379px;
    border-radius: 12px;
`;
const FreeButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    background-color: black;
    border-radius: 20px;
    color: aliceblue;
`;
const RightBox = styled.div`
    background-color: #fff;
    padding: 15px;
    width: 379px;
    border-radius: 12px;
`;
const GreenButton = styled.button`
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    background-color: #a6ff34;
    border-radius: 20px;
`;
