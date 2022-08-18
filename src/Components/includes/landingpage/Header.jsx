import React from 'react'
import styled from 'styled-components'
import logo from '../../Assets/images/findtrend.svg'

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
    width: 10%;
    cursor: pointer;

    img{
        width: 100%;
        display: block;
    }
`;
const NavBoxContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 55%;
    color: aliceblue;
`;
const NavBox =styled.div`
    display: flex;
    width: 41%;
    justify-content: space-between;
    font-size: 18px;
`;
const NavItem = styled.div`
    
`;
const RightContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: aliceblue;
    
`;
const LoginButton = styled.span`
    margin-right:36px;
    display: inline-block;
    cursor: pointer;

`;
const RegisterButton = styled.button`
    border: none;
    padding: 9px 27px;
    border-radius: 20px;
    background-color: aliceblue;
    cursor: pointer;
    font-size: 15px;


`;

