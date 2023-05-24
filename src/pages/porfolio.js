import React from "react";
import styled from "styled-components";
import UpdateWaveBackground from "../components/backgrounds/UpdateWaveBackground";
import ScrollTop from "../components/buttons/JumpToTopBtn";
import PurchaseButton from "../components/buttons/PurchaseButton";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import { themes } from "../components/styles/ColorStyles";
import {
    BodyMain,
    BodyIntro,
    Caption2,
    H1,
    H3,
    MediumText,
} from "../components/styles/TextStyles";

function porfolio() {
    return (
        <Layout>
            <SEO title="Porfolio" />
            <Wrapper>
                <UpdateWaveBackground />
                <ContentWrapper>
                    <ContentTop>
                        <H1>Porfolio</H1>
                        <BodyMain>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa
                        </BodyMain>
                    </ContentTop>
                </ContentWrapper>
                <Intro>
                    <div></div>
                    <IntroText>
                        <div>
                            <H3>Gravida rutrum quisque</H3>
                            <MediumText>
                                Ultrices eros in cursus turpis massa. Eu non
                                diam phasellus vestibulum lorem fames ac turpis
                                egestas maecenas pharetra convallis.
                            </MediumText>
                            <PurchaseButton title="More details" />
                        </div>
                        <div>
                            <H3>Proin fermentum</H3>
                            <MediumText>
                                New devices and cards for Sketch and Figma
                                libraries and XD files
                            </MediumText>
                            <MediumText>
                                New devices and cards for Sketch and Figma
                                libraries and XD files
                            </MediumText>
                            <MediumText>
                                Lacus luctus accumsan tortor posuere ac ut
                                consequat semper viverra.
                            </MediumText>
                            <MediumText>
                                Bibendum est ultricies integer quis auctor elit
                                sed vulputate mi.
                            </MediumText>
                            <MediumText>
                                New devices and cards for Sketch and Figma
                                libraries and XD files
                            </MediumText>
                            <MediumText>
                                Habitasse platea dictumst quisque sagittis purus
                                sit amet.
                            </MediumText>
                        </div>
                    </IntroText>
                </Intro>
                <CardsContainer>
                    <Card>
                        <img src="/images/covers/cover.webp" alt="cover" />
                        <CardText>
                            <div>
                                <BodyIntro>Product Name: Clinic MS</BodyIntro>
                                <MediumText>Client: Bluetec</MediumText>
                                <MediumText>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </MediumText>
                            </div>
                            <TechStack>
                                <BodyMain>Tech Stack</BodyMain>
                                <IconsWrapper>
                                    <img
                                        src="/images/icons/react-icon.svg"
                                        alt="icon"
                                    />
                                    <img
                                        src="/images/icons/python-icon.svg"
                                        alt="icon"
                                    />
                                    <img
                                        src="/images/icons/postgre-icon.svg"
                                        alt="icon"
                                    />
                                </IconsWrapper>
                            </TechStack>
                        </CardText>
                    </Card>
                    <Card>
                        <img src="/images/covers/cover_1.webp" alt="cover" />
                        <CardText>
                            <div>
                                <BodyIntro>Product Name: Clinic MS</BodyIntro>
                                <MediumText>Client: Bluetec</MediumText>
                                <MediumText>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </MediumText>
                            </div>
                            <TechStack>
                                <BodyMain>Tech Stack</BodyMain>
                                <IconsWrapper>
                                    <img
                                        src="/images/icons/vue-icon.svg"
                                        alt="icon"
                                    />
                                    <img
                                        src="/images/icons/python-icon.svg"
                                        alt="icon"
                                    />
                                    <img
                                        src="/images/icons/postgre-icon.svg"
                                        alt="icon"
                                    />
                                </IconsWrapper>
                            </TechStack>
                        </CardText>
                    </Card>
                    <PurchaseButton title="Show more" />
                </CardsContainer>
            </Wrapper>
            <ScrollTop />
        </Layout>
    );
}

const Wrapper = styled.div`
    overflow: hidden;
    color: #fff;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px 100px;
    color: ${themes.dark.text1};
    @media (max-width: 767px) {
        padding: 100px 30px;
    }
`;

const Intro = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1234px;
    margin: 0 auto;
    padding: 0px 30px 120px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 0px 30px;
    }
`;
const IntroText = styled.div`
    width: 100%;
    grid-template-columns: 1fr 1fr;
    display: grid;
    gap: 20px;
    background: rgba(195, 195, 247, 0.15);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    > div {
        display: grid;
        gap: 20px;
        height: fit-content;
        width: 100%;
    }
`;

const ContentTop = styled.div`
    width: 100%;
    max-width: 400px;
    margin: auto;
    text-align: center;
    display: grid;
    gap: 10px;
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 80px;
    width: 100%;
    max-width: 1234px;
    margin: 0 auto;
    justify-items: center;
    padding: 100px 30px;
`;

const Card = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 40px;
    img {
        max-width: 450px;
        border-radius: 12px;
    }

    @media (max-width: 1200px) {
        grid-template-columns: auto;
        justify-items: center;
        gap: 20px;
    }

    @media (max-width: 768px) {
        img {
            max-width: 100%;
        }
    }
`;

const CardText = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    > div {
        display: grid;
        gap: 15px;
        height: fit-content;
        width: 100%;
    }
    @media (max-width: 768px) {
        grid-template-columns: auto;
        gap: 40px;
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    @media (max-width: 768px) {
        justify-content: start;
        margin-top: 0px;
    }
`;

const TechStack = styled.div`
    text-align: center;
    @media (max-width: 768px) {
        text-align: left;
    }
`;

export default porfolio;
