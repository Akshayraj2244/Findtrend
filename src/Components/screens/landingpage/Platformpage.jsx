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
              <BgContent>
                <LogoContainer>
                  <LogoContent>
                    {arr.map((val) => (
                        <ImageContent>
                          <img src={val.image} alt="icon" />
                        </ImageContent>



                    ))}
                  </LogoContent>

                </LogoContainer>
              </BgContent>
            </BgContainer> 
          </PlatformWrapper>
      </PlaformContainer>
   </>
  )
}

export default Platformpage;

const PlaformContainer  = styled.div`
  background-color: #f1f1f1;
  margin-top: 150px;
`;
const PlatformWrapper  = styled.div`
  width: 50%;  
  margin: 0 auto;
`;
const BgContainer = styled.div`
  height: 50vh;
`;
const PlatformContent  = styled.h1`
  font-size: 50px;
  text-align: center;
  padding-top: 85px;
`;
const BgContent = styled.div`

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

    img{
      display: block;
      width: 100%;
    }
    &:hover{
      background-color: green;
    } 
`;