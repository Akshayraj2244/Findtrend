import React from 'react'
import styled from 'styled-components'
import logo from '../../Assets/images/logo-colour.svg'

function Header() {
  return (
    <>
        <HeaderContainer>
             <HeaderWrapper>
                <MainContainer>
                <LogoContainer>
                    <img src= {logo} alt="findtrend" />
                </LogoContainer>
                <NavBoxContainer>
                <NavBox>
                        <NavItem>About</NavItem>
                        <NavItem>How  it work</NavItem>
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
  )
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
    width: 8%;

    img{
        width: 100%;
        display: block;
    }
`;
const NavBoxContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 65%;
    color: aliceblue;
`;
const NavBox =styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;
const NavItem = styled.div`
    
`;
const RightContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: aliceblue;
    
`;
const LoginButton = styled.span`
margin-right: 8px;

`;
const RegisterButton = styled.button`
    border: none;

`;

