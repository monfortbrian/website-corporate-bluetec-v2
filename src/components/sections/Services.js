import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import ServivesBackground from "../backgrounds/ServicesBackground";
import { BodyIntro, BodyMain, H3, MediumText } from "../styles/TextStyles";

export default function Services() {
    return (
        <Wrapper>
            <ServivesBackground />
            <ContentWrapper>
                <TextContent>
                    <MediumText>Services</MediumText>
                    <H3>Our vast range of services </H3>

                    <BodyIntro>
                        We provide services and products powered by the latest
                        technology, which can be customized to meet your needs.
                    </BodyIntro>
                </TextContent>
                <CardsContainer>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>UI/UX</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>Mobile development</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>Web development</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>APIs & Web Scraping</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>GPS Tracking</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                    <Card>
                        <ImgContainer>
                            <img src="/images/icons/figma.svg" alt="" />
                            <img src="/images/icons/figma.svg" alt="" />
                        </ImgContainer>
                        <H3>CCTV</H3>
                        <BodyMain>
                            Elevate your digital presence with a professionally
                            made website that increases your brand value.
                        </BodyMain>
                    </Card>
                </CardsContainer>
            </ContentWrapper>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    padding: 80px 30px;
    width: 100%;
    margin: 0px auto 80px;
`;

const TextContent = styled.div`
    text-align: center;
    display: grid;
    gap: 20px;
    max-width: 700px;
    width: 100%;
    margin: auto;
    padding: 0px 30px;
    color: ${themes.dark.text1};
`;

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 120px 0 80px;
`;

const Card = styled.div`
    width: 263px;
    border-radius: 0px 20px 20px 20px;
    padding: 20px 20px 40px;
    background: #747696;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    color: ${themes.dark.text1};
    display: grid;
    gap: 20px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
`;
