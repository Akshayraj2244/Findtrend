import React from "react";
import styled from "styled-components";
import findtrend from '../../Assets/images/findtrend.svg'
function middleSection() {
  return (
    <>
      <MiddlesectionContainer>
        <MiddlesectionWrapper>
          <BgContent>
            <TabContent>Open new tabs is sh*t</TabContent>
          <MainwhiteContainer>
            <WhiteContainer>
                <BlackContainer>
                <MainContent>
                <Logocontainer>
                     <ImageContainer>
                        <img src={findtrend} alt="trend" />
                     </ ImageContainer>
                     <MainText>
                     <TextContent>-Elon</TextContent>
                     </MainText>
                    <MainImage>
                        <ImageContent>
                            {/* <img src={} alt="cross" /> */}
                        </ImageContent>
                    </MainImage>
                 </Logocontainer>
                </MainContent>  
                </BlackContainer>
            </WhiteContainer>
          </MainwhiteContainer>
          </BgContent>
        </MiddlesectionWrapper>
      </MiddlesectionContainer>
    </>
  );
}

export default middleSection;

const MiddlesectionContainer = styled.div`  
    margin-bottom : 30px;
`;
const MiddlesectionWrapper = styled.div``;
const TabContent = styled.h1`
    text-align: center;
    font-size: 50px ;

`;
const BgContent = styled.div`
  background-color : green;
  height: 100vh; 
  padding-top: 20px;
`;
const MainwhiteContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    padding-top: 100px;
`;
const WhiteContainer = styled.div`
    background-color: #fff;
    border-radius: 20px;
    padding: 30px 96px;
`;
const BlackContainer = styled.div`
    background-color: black;
    
`;
const MainContent = styled.div`
    
`;
const Logocontainer = styled.div`
    display: flex;
    justify-content: center;
    
`;
const ImageContainer = styled.div`
    
    img{

    }
`;
const MainText = styled.div`
`;
const TextContent = styled.h1`
`;
const MainImage = styled.div`
    
`;
const ImageContent = styled.div`
    
`;
