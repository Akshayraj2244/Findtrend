import React from "react";
import styled from "styled-components";
import google from "../../Assets/images/google.svg";
import porsche from "../../Assets/images/porsche.svg";
import volvo from "../../Assets/images/volvo.png";
import algolia from "../../Assets/images/algolia.png";
import grab from "../../Assets/images/grab.svg";
import upwork from "../../Assets/images/upwork.png";
import coinbase from "../../Assets/images/coinbase.png";

function SiteLandingpage() {
    const arr = [
        {
            image: google,
            link: "https://www.google.com/",
            
        },
        {
            image: porsche,
            link: "https://www.porsche.com/international/models/911/911-models/carrera/",
        },
        {
            image: algolia,
            link: "https://www.algolia.com/",
        },
        {
            image: volvo,
            link: "https://www.volvo.com/en/",
        },
        {
            image: algolia,
            link: "https://www.algolia.com/",
        },
        {
            image: volvo,
            link: "https://www.volvo.com/en/",
        },
        {
            image: grab,
            link: "https://www.grab.com/sg/",
        },
        {
            image: porsche,
            link: "hhttps://www.porsche.com/international/models/911/911-models/carrera/",
        },
        {
            image: volvo,
            link: "https://www.volvo.com/en/",
        },
        {
            image: upwork,
            link: "https://www.google.com/",
        },
        {
            image: coinbase,
            link: "https://www.google.com/",
        },
        {
            image: volvo,
            link: "https://www.volvo.com/en/",
        },
        {
            image: porsche,
            link: "hhttps://www.porsche.com/international/models/911/911-models/carrera/",
        },
        {
            image: google,
            link: "https://www.google.com/",
        },
        {
            image: grab,
            link: "https://www.grab.com/sg/",
        },
        {
            image: algolia,
            link: "https://www.algolia.com/",
        },
    ];
    return (
        <>
            <SitelandingContainer>
                <SitelandingWrapper>
                    <FrendTrendContent>
                        FindTrend make +1000 Startup grow
                    </FrendTrendContent>
                    <GalleryContainer>
                        <Gallery>
                            {arr.map((val) => (
                                <ImageContainer href={val.link} target="_blank">
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
    margin-bottom: 89px;
`;
const SitelandingWrapper = styled.div`
    width: 65%;
    margin: 0 auto;
`;
const FrendTrendContent = styled.h1`
    font-size: 45px;
    color: black;
    text-align: center;
    margin-bottom: 58px;
    @media all and (max-width: 980px) {
        font-size: 35px;
    }
    @media all and (max-width: 980px) {
        font-size: 29px;
    }
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
    @media all and (max-width: 640px) {
     font-size: 15px;
    }

`;
const GalleryContainer = styled.div``;
const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 50px;
    @media all and (max-width: 1440px) {
        grid-gap: 28px;
    }
 
`;

const ImageContainer = styled.a`
    background-color: #f1f1f1;
    padding: 25px;
    border-radius: 10px;
    width: 95%;
    img{
        display: block;
        width: 100%;
    }
    &:hover {
        transform: scale(1.2);
        background: #f0f0;
        transition: all 0.4s ease;
    }
    @media all and (max-width: 768px) {
       width: 100%;  
       padding: 15px;
    }
    @media all and (max-width: 640px) {
      padding: 9px;
      width: 100%;
    }
`;
