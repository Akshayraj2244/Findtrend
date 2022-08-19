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
            link: "https://www.google.com/",
        },
        {
            image: algolia,
            link: "https://www.google.com/",
        },
        {
            image: volvo,
            link: "https://www.google.com/",
        },
        {
            image: algolia,
            link: "https://www.google.com/",
        },
        {
            image: volvo,
            link: "https://www.google.com/",
        },
        {
            image: grab,
            link: "https://www.google.com/",
        },
        {
            image: porsche,
            link: "https://www.google.com/",
        },
        {
            image: volvo,
            link: "https://www.google.com/",
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
            link: "https://www.google.com/",
        },
        {
            image: porsche,
            link: "https://www.google.com/",
        },
        {
            image: google,
            link: "https://www.google.com/",
        },
        {
            image: grab,
            link: "https://www.google.com/",
        },
        {
            image: algolia,
            link: "https://www.google.com/",
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
    margin-bottom: 49px;
`;
const SitelandingWrapper = styled.div`
    width: 65%;
    margin: 0 auto;
`;
const FrendTrendContent = styled.h1`
    font-size: 45px;
    color: black;
    text-align: center;
    margin-bottom: 50px;
`;
const GalleryContainer = styled.div``;
const Gallery = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & :nth-child(1) {
        margin-top: 0;
    }
    & :nth-child(2) {
        margin-top: 0;
    }
    & :nth-child(3) {
        margin-top: 0;
    }
    & :nth-child(4) {
        margin-top: 0;
    }
`;
const ImageContainer = styled.a`
    background-color: #f1f1f1;
    margin-top: 80px;
    padding: 35px;
    border-radius: 10px;
    &:hover {
        transform: scale(1.2);
        background: #f0f0;
        transition: all 0.4s ease;
    }
`;
