import React from "react";
import styled from "styled-components";
import google from "../../Assets/images/google.svg"
import porsche from '../../Assets/images/porsche.svg'
import volvo from '../../Assets/images/volvo.png'
import algolia from '../../Assets/images/algolia.png'
import grab from'../../Assets/images/grab.svg'
import upwork from'../../Assets/images/upwork.png'
import coinbase from'../../Assets/images/coinbase.png'

function SiteLandingpage() {
  const arr = [
    {
      image: google,
    },
    {
        image: porsche,
      },
      {
        image: algolia,
      },
      {
        image: volvo,
      },
      {
        image: algolia,
      },
      {
        image: volvo,
      },
      {
        image: grab,
      },
      {
        image: porsche,
      },
      {
        image: volvo,
      },
      {
        image: upwork,
      },
      {
        image: coinbase,
      },
      {
        image: volvo,
      },
      {
        image: porsche,
      },
      {
        image: google,
      },
      {
        image: grab,
      },
      {
        image: algolia,
      },
  ];
  return (
    <>
      <SitelandingContainer>
        <SitelandingWrapper>
          <FrendTrendContent>
            FindTRend make +1000 Startup grow
          </FrendTrendContent>
          <GalleryContainer>
            <Gallery>
            {arr.map((val) => (
                <ImageContainer>
                    <img src={val.image} alt="logo" />
                </ImageContainer>

                ))}
            </Gallery>
          </GalleryContainer>
        </SitelandingWrapper>
      </SitelandingContainer>
    </>
  );
}

export default SiteLandingpage;

const SitelandingContainer = styled.div`
  padding-top: 45px;
`;
const SitelandingWrapper = styled.div`
    width: 65%;
    margin: 0 auto  ;
`;
const FrendTrendContent = styled.h1`
  font-size: 40px;
  color: black;
  text-align: center;
`;
const GalleryContainer = styled.div`
`;
const Gallery = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;

    
`;
const ImageContainer = styled.div`
    background-color: #f1f1f1;
    width: 17%;
    margin-top: 80px;
    padding: 25px;
    border-radius: 10   px;
`;


