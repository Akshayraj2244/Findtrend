import React from 'react'
import styled from 'styled-components';
import facebook from '../../Assets/images/facebook.svg'
import twitter from '../../Assets/images/twitter.svg'
import dribble from '../../Assets/images/dribble.svg'
import git from '../../Assets/images/git.svg'
import company from '../../Assets/images/m company.svg'
import pintrest from '../../Assets/images/pintrest.svg'
import linkedin from '../../Assets/images/linkedin.svg'
import vk from '../../Assets/images/vk.svg'
import Elon from '../../Assets/images/linkedin -page1.jpg'
import tesla from '../../Assets/images/linkedin -page2.jpg'

 function Platformpage() {
  const arr = [
    {
      image : facebook,
    },
    {
      image : twitter,
    },
    {
      image : dribble,
    },
    {
      image : git,
    },
    {
      image : company
    },
    {
      image : pintrest
    },
    {
      image : linkedin
    },
    {
      image : vk
    },
  ]
  return (
   <>
      <PlaformContainer>
          <PlatformWrapper>
            <BgContainer>
            <PlatformContent>
                All platform connect to Findtrend
              </PlatformContent>
                <LogoContainer>
                  <LogoContent>
                    {arr.map((val) => (
                        <ImageContent>
                          <img src={val.image} alt="icon" />
                        </ImageContent>
                    ))}
                  </LogoContent>
                  <LinkedinContainer>
                      <EilonImage>
                        <img src={Elon} alt="Linked" />
                      </EilonImage>
                  </LinkedinContainer>
                  <TeslaContainer>
                    <TeslaImage>
                      <img src={tesla} alt="car" />
                    </TeslaImage>
                  </TeslaContainer>
                  <LinkedinContainer>
                      <EilonImage>
                        <img src={Elon} alt="Linked" />
                      </EilonImage>
                  </LinkedinContainer>
                  <ButtonContent>
                  <Button>Register</Button>
                  </ButtonContent>
                  
                </LogoContainer>
            </BgContainer> 
          </PlatformWrapper>
      </PlaformContainer>
   </>
  )
}

export default Platformpage;

const PlaformContainer  = styled.div`
  background-color: #f1f1f1;
  height: 210vh;
  padding-top: 50px;  
`;
const PlatformWrapper  = styled.div`
  width: 50%;  
  margin: 0 auto;
`;
const PlatformContent  = styled.h1`
  font-size: 50px;
  text-align: center;
`;
const  BgContainer  = styled.div`

`;
const LogoContainer = styled.div`
`;
const LogoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;
const ImageContent = styled.div`
  width: 50px;
  background-color: #fff;
  padding: 20px;  
  cursor: pointer;
  border-radius: 9px;

    img{
      display: block;
      width: 100%;
    }
    &:hover{
      background-color: green;
      transition: 0.6s ease all;
    }
`;
const LinkedinContainer =  styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;


`;
const EilonImage = styled.div`
  width: 80%;
  img{
    width: 100%;
    display: block;
  }
`;
const TeslaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;
const TeslaImage = styled.div`
  width: 80%;
  
  img{
    width: 100%;
    display: block;
  }
`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;

`;
const Button = styled.button`
  background-color: black;
  padding: 20px 39px ;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
`;