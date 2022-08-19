import React from "react";
import styled from "styled-components";

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
const TopContainer = styled.div`
    
`;
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

