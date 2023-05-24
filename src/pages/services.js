import React from "react";
import styled from "styled-components";
import UpdateWaveBackground from "../components/backgrounds/UpdateWaveBackground";
import Layout from "../components/layout/layout";
import { themes } from "../components/styles/ColorStyles";
import SEO from "../components/layout/seo";
import {
    BodyMain,
    Caption,
    H1,
    H3,
    SmallText2,
} from "../components/styles/TextStyles";
import Parallax from "../components/sections/Parallax";

export default function updates() {
    return (
        <Layout>
            <SEO title="Services" />
            <Wrapper>
                <UpdateWaveBackground />
                <Parallax />
                <ContentWrapper>
                    <ContentTop>
                        <Caption>What we do</Caption>
                        <H1>Our Services Grow Your Business</H1>
                        <BodyMain>
                            Whether you need to digitalize an existing business,
                            adapt to a changing marketplace, you need a lot but
                            at Bluetec we know this better than anyone, so we’ve
                            created a complete range of services that bring your
                            business to life.
                        </BodyMain>
                    </ContentTop>
                    <CardContainer>
                        <Card>
                            <CardImg>
                                <img
                                    alt="x"
                                    src="/images/logos/illustration1.svg"
                                />
                            </CardImg>
                            <CardText>
                                <SmallText2>service</SmallText2>
                                <H3>UI/UX Optimization</H3>
                                <Caption>
                                    Always give our customers flawless user
                                    experience they deserve.
                                </Caption>
                            </CardText>
                        </Card>
                        <Card>
                            <CardImg>
                                <img
                                    alt="x"
                                    src="/images/logos/illustration1.svg"
                                />
                            </CardImg>
                            <CardText>
                                <SmallText2>service</SmallText2>
                                <H3>Software development</H3>
                                <Caption>
                                    Our range of full-stack development services
                                    allow you to turn a bright idea into
                                    something you show to your users and we do
                                    it all by getting to know your business as
                                    if it were our own.
                                </Caption>
                            </CardText>
                        </Card>
                        <Card>
                            <CardImg>
                                <img
                                    alt="x"
                                    src="/images/logos/illustration1.svg"
                                />
                            </CardImg>
                            <CardText>
                                <SmallText2>service</SmallText2>
                                <H3>GPS tracking & sensors</H3>
                                <Caption>
                                    Our GPS tracking systems covers all types of
                                    vehicles; with us, you can track monitor
                                    your entire fleet 24/7 and our support team
                                    is there whenever needed.
                                </Caption>
                            </CardText>
                        </Card>
                        <Card>
                            <CardImg>
                                <img
                                    alt="x"
                                    src="/images/logos/illustration1.svg"
                                />
                            </CardImg>
                            <CardText>
                                <SmallText2>service</SmallText2>
                                <H3>IT support & Outstaff engineering</H3>
                                <Caption>
                                    We're smarter than hiring. We've curated
                                    Burundian's best JavaScript developers so
                                    that you can tap into them full time, with
                                    zero admin and zero hiring risk.
                                </Caption>
                            </CardText>
                        </Card>
                    </CardContainer>
                </ContentWrapper>
            </Wrapper>
        </Layout>
    );
}

const Wrapper = styled.div`
    overflow-x: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    color: ${themes.dark.text1};
    @media (max-width: 767px) {
        padding: 120px 30px;
    }
`;

const ContentTop = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    text-align: center;
    display: grid;
    gap: 10px;
`;

const CardContainer = styled.div`
    width: 100%;
    max-width: 938px;
    margin: auto;
    padding: 100px 0;
    display: grid;
    gap: 40px;
`;

const Card = styled.div`
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    background: rgba(15, 14, 71, 0.3);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    display: grid;
    grid-template-columns: 250px auto;
    gap: 30px;

    @media (max-width: 767px) {
        grid-template-columns: auto;
    }
`;

const CardText = styled.div`
    display: grid;
    gap: 16px;
    height: fit-content;
    width: 100%;
`;

const CardImg = styled.div`
    border-radius: 20px;
    height: 260px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, #f53325 0%, #fa4c3e 100%);
`;
