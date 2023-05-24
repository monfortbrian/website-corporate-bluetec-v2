import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import { MediumText, H1, Caption, H3 } from "../components/styles/TextStyles";
import PurchaseButton from "../components/buttons/PurchaseButton";
import UpdateWaveBackground from "../components/backgrounds/UpdateWaveBackground";
import ScrollTop from "../components/buttons/JumpToTopBtn";

function AboutPage() {
    return (
        <Layout>
            <SEO title="Page two" />
            <Wrapper>
                <UpdateWaveBackground />
                <ContentText>
                    <div></div>
                    <TextTop>
                        <H1>
                            One place for all
                            <br /> your Apps
                        </H1>
                        <MediumText>
                            Ultrices eros in cursus turpis massa. Eu non diam
                            phasellus vestibulum lorem fames ac turpis egestas
                            maecenas pharetra convallis.
                        </MediumText>
                        <PurchaseButton />
                    </TextTop>
                </ContentText>
                <CardsContainer>
                    <TwoCards>
                        <Card>
                            <img alt="x" src="/images/logos/ae-logo.svg" />
                            <CardText>
                                <H3>Duis aute irure dolor in</H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
                                </Caption>
                                <PurchaseButton />
                            </CardText>
                        </Card>
                        <Card>
                            <img alt="x" src="/images/logos/angle-logo.svg" />
                            <CardText>
                                <H3>Ornare suspendisse</H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
                                </Caption>

                                <PurchaseButton />
                            </CardText>
                        </Card>
                    </TwoCards>
                    <TwoCards>
                        <Card>
                            <img alt="x" src="/images/logos/figma-logo.svg" />
                            <CardText>
                                <H3>Duis aute irure</H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
                                </Caption>
                                <PurchaseButton />
                            </CardText>
                        </Card>
                        <Card>
                            <img alt="x" src="/images/logos/framer-logo.svg" />
                            <CardText>
                                <H3>Ornare suspendisse</H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
                                </Caption>

                                <PurchaseButton />
                            </CardText>
                        </Card>
                    </TwoCards>
                </CardsContainer>
                <Section>
                    <BackgroundMiddle />
                    <SectionText>
                        <Mockups>
                            <MockupImg
                                src="/images/mockups/device3.webp"
                                style={{
                                    top: "0px",
                                    left: "0px",
                                    maxWidth: "543px",
                                }}
                            />
                            <MockupImg
                                src="/images/mockups/device2.webp"
                                style={{
                                    top: "-100px",
                                    left: "190px",
                                    maxWidth: "273px",
                                }}
                            />

                            <MockupImg
                                src="/images/mockups/device1.webp"
                                style={{
                                    top: "-200px",
                                    left: "0px",
                                    maxWidth: "353px",
                                }}
                            />
                        </Mockups>
                        <TextSection>
                            <H1>
                                One place for all
                                <br /> your Apps
                            </H1>
                            <MediumText>
                                Ultrices eros in cursus turpis massa. Eu non
                                diam phasellus vestibulum lorem fames ac turpis
                                egestas maecenas pharetra convallis.
                            </MediumText>
                            <PurchaseButton />
                        </TextSection>
                    </SectionText>
                </Section>
            </Wrapper>
            <ScrollTop />
        </Layout>
    );
}

const Wrapper = styled.div`
    color: #fff;
    overflow: hidden;
`;
const ContentText = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1234px;
    width: 100%;
    margin: 0 auto;
    padding: 200px 30px;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 120px 30px;
    }
`;

const TextTop = styled.div`
    max-width: 450px;
    width: 100%;
    display: grid;
    gap: 30px;
`;

const CardsContainer = styled.div`
    display: grid;
    gap: 50px;
    width: 100%;
    max-width: 1234px;
    margin: 0 auto;
    padding: 100px 30px;
`;

const TwoCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    background: rgba(242, 246, 255, 0.6);
    border-radius: 20px;
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    @media (max-width: 767px) {
        grid-template-columns: auto;
        gap: 50px;
        background: transparent;
        box-shadow: none;
    }
    @media (min-width: 768px) {
        div:nth-child(1) {
            border-right: 1px solid #919191;
            :hover {
                border-right: none;
            }
        }
    }
`;

const Card = styled.div`
    width: 100%;
    border-radius: 0px;
    overflow: hidden;
    padding: 30px 20px 20px;
    display: grid;
    justify-items: center;
    text-align: center;
    gap: 30px;
    color: #1f1f47;
    transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (max-width: 767px) {
        border-radius: 20px;
        background: rgba(242, 246, 255, 0.6);
    }

    & > img {
        height: 100px;
    }
    a {
        opacity: 0;
    }

    :hover {
        background: #f53325;
        border-radius: 20px;
        color: #fff;
        transform: scale(1.1);

        a {
            opacity: 1;
        }
    }
`;

const CardText = styled.div`
    display: grid;
    gap: 20px;
    height: fit-content;
    justify-items: center;
`;

const Section = styled.div`
    position: relative;
    padding-bottom: 430px;
    @media (max-width: 768px) {
        padding-bottom: 0px;
    }
`;

const SectionText = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;

    @media (max-width: 1035px) {
        grid-template-columns: auto;
        justify-items: center;
        justify-content: center;
        gap: 20px;
    }
`;

const TextSection = styled.div`
    width: 100%;
    max-width: 450px;
    display: grid;
    gap: 30px;
    height: fit-content;
`;

const Mockups = styled.div`
    position: relative;
    width: 587px;
    height: 420px;
    margin: 0px auto;
    @media (max-width: 1035px) {
        width: 100%;
    }
`;

const MockupImg = styled.img`
    position: absolute;
`;

const BackgroundMiddle = styled.div`
    background: url("/images/waves/plugin-wave.svg");
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 1510px;
    top: -380px;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 767px) {
        top: -455px;
    }
`;

export default AboutPage;
