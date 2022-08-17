import React from 'react'
import styled from 'styled-components';

function Spotlight() {
  return (
    <>
        <SpotlightContainer>
          <SpotlightWrapper>
            <MainContent>
              Minimize your tabs.
             <br/> find the trends!
              </MainContent> 
              <TextContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit ipsa eligendi, <br/>veritatis deserunt sint quia, suscipit, tenetur cum earum neque.
                </TextContent> 
                <ButtonContent>
                <GetButton>Get started</GetButton>
                </ButtonContent>
                
          </SpotlightWrapper>
        </SpotlightContainer>
    </>
  )
}

export default Spotlight;

const SpotlightContainer = styled.div`
  padding-top: 90px;
`;
const SpotlightWrapper = styled.div`
  
`;
const MainContent = styled.h1`
  color: aliceblue;
  text-align: center;
  font-size: 53px;
  line-height: 1.4em;
  `;
  const TextContent = styled.p`
    color: aliceblue;
    text-align: center;
    line-height: 2em;
    font-size: 12px;
  `;
  const ButtonContent = styled.div`
    display: flex;
    justify-content: center;

  `;

  const GetButton = styled.button`
    cursor: pointer;
    background-color: green;
    color: aliceblue;
    padding: 17px 49px;
    border: none;
    border-radius: 20px;

  `;