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
import ScrollTop from "../components/buttons/JumpToTopBtn";

export default function blog() {
    return (
        <Layout>
            <SEO title="Blog" />
            <Wrapper>
                <UpdateWaveBackground />
                <Parallax />
                <ContentWrapper>
                    <ContentTop>
                        <Caption>WHAT'S NEW</Caption>
                        <H1>Blog</H1>
                        <BodyMain>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa
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
                                <H3>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate
                                </H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
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
                                <H3>
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate
                                </H3>
                                <Caption>
                                    morbi blandit cursus risus. Ipsum faucibus
                                    vitae aliquet nec ullamcorper
                                </Caption>
                            </CardText>
                        </Card>
                    </CardContainer>
                </ContentWrapper>
            </Wrapper>
            <ScrollTop />
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
    max-width: 400px;
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
