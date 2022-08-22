import React from "react";
import styled from "styled-components";
import logo from "../../Assets/images/findtrend.svg";

function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <MainContainer>
                        <LogoContainer>
                            <img src={logo} alt="findtrend" />
                        </LogoContainer>
                        <NavBoxContainer>
                            <NavBox>
                                <NavItem>About</NavItem>
                                <NavItem>How it work</NavItem>
                                <NavItem>Pricing</NavItem>
                                <NavItem>Solution</NavItem>
                                <NavItem>Features</NavItem>
                            </NavBox>
                            <RightContainer>
                                <LoginButton>Login</LoginButton>
                                <RegisterButton>Register</RegisterButton>
                            </RightContainer>
                        </NavBoxContainer>
                    </MainContainer>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
}
export default Header;

const HeaderContainer = styled.div`
    padding-top: 15px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
`;
const LogoContainer = styled.div`
    width: 10%;
    cursor: pointer;

    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width : 980px) {
        width: 12%;
    }
`;
const NavBoxContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 55%;
    color: aliceblue;
    @media all and (max-width: 1440px) {
        width: 73%;
    }   
`;
const NavBox = styled.div`
    display: flex;
    width: 41%;
    justify-content: space-between;
    font-size: 18px;
    @media all and (max-width : 1440px) {
        width: 69%
    }
    @media all and (max-width : 1280px) {
        font-size: 15px;
    }
    @media all and (max-width : 980px) {
        font-size: 14px;
    }
    @media all and (max-width : 768px) {
        font-size: 12px;

    }
    @media all and (max-width: 640px) {
       font-size: 10px;
    }
    @media all and (max-width: 768px) {
       width: 59%;
    }
`;
const NavItem = styled.div``;
const RightContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: aliceblue;
    align-items: center;
    @media all and (max-width : 768px) {
    margin-right: 1px;
    }

`;
const LoginButton = styled.span`
    margin-right: 36px;
    display: inline-block;
    cursor: pointer;
    @media all and (max-width : 1280px) {
        margin-right: 30px;
    }
    @media all and (max-width : 980px) {
        font-size: 15px;
    }
    @media all and (max-width : 768px) {
        font-size: 14px;
    }
    @media all and (max-width : 640px) {
        font-size: 12px;
    }
    @media all and (max-width: 768px) {
       font-size: 10px;
    }
    @media all and (max-width: 768px) {
      font-size: 5px;
    }
`;
const RegisterButton = styled.button`
    border: none;
    padding: 13px 27px;
    border-radius: 20px;
    background-color: aliceblue;
    cursor: pointer;
    font-size: 15px;
    @media all and (max-width : 980px) {
        font-size: 11px;
        padding: 8px 18px;
    }
    @media all and (max-width : 768px) {
        font-size: 12px;
        padding: 5px 13px;
    }
    @media all and (max-width: 768px) {
      padding: 7px 7px;
      font-size: 9px;
    }

`;

