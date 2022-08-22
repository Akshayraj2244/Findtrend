import React from "react";
import styled from "styled-components";
import findtrend from "../../Assets/images/logo.png";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <MainContainer>
                        <RightContent>
                            <FindtrendLogo>
                                <img src={findtrend} alt="logo" />
                            </FindtrendLogo>
                        </RightContent>
                        <LeftContent>
                            <NavBox>
                                <NavItem>How it Work</NavItem>
                                <NavItem>Pricing</NavItem>
                                <NavItem>Solution</NavItem>
                                <NavItem>Features</NavItem>
                            </NavBox>
                        </LeftContent>
                    </MainContainer>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
const FooterContainer = styled.div`
    height: 150px;
    margin-top: 15px;
`;
const FooterWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const RightContent = styled.div``;
const FindtrendLogo = styled.div`
    width: 60%;
    cursor: pointer; 
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 1280px) {
        width: 55%;
    }
    @media all and (max-width : 768px) {
        width: 35%;
    }
    @media all and (max-width: 768px) {
      margin: 0 auto;
    }
`;
const LeftContent = styled.div``;
const NavBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 640px) {
      margin: 0 auto;
    }
`;
const NavItem = styled.div`
    margin-right: 30px;
    font-size: 20px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width : 980px) {
        font-size: 15px;
    }
    @media all and (max-width : 768px) {
        font-size: 11px;
    }
    @media all and (max-width: 640px) {
      display: none;
    }
`;
