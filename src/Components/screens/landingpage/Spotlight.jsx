import React from "react";
import styled from "styled-components";
import twitter from "../../Assets/images/twitter.svg";
import pintrest from "../../Assets/images/pintrest.svg";
import facebook from "../../Assets/images/facebook.svg";
import dribble from "../../Assets/images/dribble.svg";

function Spotlight() {
  return (
    <>
      <SpotlightContainer>
        <SpotlightWrapper>
          <MainContent>
            Minimize your tabs.
            <br /> find the trends!
          </MainContent>
          <TextContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            impedit ipsa eligendi, <br />
            veritatis deserunt sint quia, suscipit, tenetur cum earum neque.
          </TextContent>
          <ButtonContent>
            <GetButton>Get started🔥</GetButton>
          </ButtonContent>
          <IconContainer>
            <Cryptocontent>
              <TwitterImage>
                <img src={twitter} alt="icon" />
              </TwitterImage>
              <PunkTest>cryptopunk-search</PunkTest>
            </Cryptocontent>
            <PopularContent>
              <Popularimage>
                <img src={pintrest} alt="icon" />
              </Popularimage>
              <PopularTest>Popular design-search</PopularTest>
            </PopularContent>
            <ProductContent>
              <ProductImage>
                <img src={facebook} alt="icon" />
              </ProductImage>
              <DesignContent>product design-search</DesignContent>
            </ProductContent>
            <ElonContent>
              <DribbleImage>
                <img src={dribble} alt="icon" />
              </DribbleImage>
              <ElonText>
                Elon Musk-search
              </ElonText>
            </ElonContent>
          </IconContainer>
        </SpotlightWrapper>
      </SpotlightContainer>
    </>
  );
}

export default Spotlight;

const SpotlightContainer = styled.div`
  padding-top: 90px;
  margin-bottom: 2px;
`;
const SpotlightWrapper = styled.div``;
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
  font-size: 20px;
`;
const IconContainer = styled.div`
  padding-bottom :250px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 39px;
`;
const Cryptocontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px; 
  background-color: rgb(82, 86, 89);
  position: absolute;
  top: 104px;
  left: 27%;
  transform: rotate(-22deg);
  padding: 2px 27px;
`;
const TwitterImage = styled.div`
  width: 28px;

  img {
    display: block;
    width: 100%;
  }
`;
const PunkTest = styled.p`
  color: aliceblue;
`;
const PopularContent = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(82, 86, 89);
  position: absolute;
  left: 37%;
  top: 47%;
  padding: 2px 13px;
`;
const Popularimage = styled.div`
  width: 28px;
  img {
    display: block;
    width: 100%;
  }
`;
const PopularTest = styled.p`
  color: aliceblue;
`;
const ProductContent = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(82, 86, 89);
  position: absolute;
  top: 20%;
  right: 42%;
  padding: 2px 13px;
  transform: rotate(-7deg);


`;
const ProductImage = styled.div`
  width: 28px;
  img {
    display: block;
    width: 100%;
  }
`;
const DesignContent = styled.p`
  color: aliceblue;
`;
const ElonContent = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(82, 86, 89);
  position: absolute;
  top: 29%;
  right: 31%;
  padding: 2px 13px;

`;
const DribbleImage = styled.div`
     width: 28px;
    img{
        width: 100%;
        display: block;
    }
`;
const ElonText = styled.p`
  color: aliceblue;
    
`;
