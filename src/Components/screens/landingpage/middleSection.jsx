import React from "react";
import styled from "styled-components";
import findtrend from "../../Assets/images/findtrend.svg";
import cross from "../../Assets/images/cross.svg";
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
                    <Logocontainer>
                      <ImageContainer>
                        <img src={findtrend} alt="trend" />
                      </ImageContainer>
                      <MainText>
                        <TextContent>-Elon</TextContent>
                      </MainText>
                      <MainImage>
                        <ImageContent>
                          <img src={cross} alt="cros" />
                        </ImageContent>
                      </MainImage>
                    </Logocontainer>
                </BlackContainer>
              </WhiteContainer>
            </MainwhiteContainer>
            <ParaContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate impedit ipsa eligendi, <br />
              veritatis deserunt sint quia, suscipit, tenetur cum earum neque.
            </ParaContent>
          </BgContent>
        </MiddlesectionWrapper>
      </MiddlesectionContainer>
    </>
  );
}

export default middleSection;

const MiddlesectionContainer = styled.div`
  margin-bottom: 30px;
`;
const MiddlesectionWrapper = styled.div``;
const TabContent = styled.h1`
  text-align: center;
  font-size: 50px;
`;
const BgContent = styled.div`
  background-color: #A6FF34;
  height: 57vh;
  padding-top: 20px;
`;
const MainwhiteContainer = styled.div`
  width: 24%;
  margin: 0 auto;
  padding-top: 100px;
`;
const WhiteContainer = styled.div`
  background-color: #fff;
  border-radius: 9px;
  padding: 20px 37px;
`;
const BlackContainer = styled.div`
  background-color: black;
`;
const Logocontainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ImageContainer = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;
const MainText = styled.div``;
const TextContent = styled.h1`
  color: #60625D;
`;
const MainImage = styled.div``;
const ImageContent = styled.div`
  img {
    width: 100%;
    display: block;
  }
`;
const ParaContent = styled.p`
  text-align: center;
  margin-top: 60px;
  color: #60625D;
`;
