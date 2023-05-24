import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import {
    BodyIntro,
    BodyMain,
    H3,
    MediumText,
    SmallText,
} from "../styles/TextStyles";

export default function About() {
    return (
        <Wrapper>
            <ContentWrapper>
                <Container>
                    <ImageContent>
                        <img src="/images/pictures/image.png" alt="" />
                        <ImageText>
                            <BodyIntro>
                                More than three years of delivering results
                            </BodyIntro>
                            <BodyMain>
                                Your dependable digital partner.
                            </BodyMain>
                        </ImageText>
                    </ImageContent>
                    <TextContent>
                        <MediumText>About Us</MediumText>
                        <H3>Trusted by businesses and organizations</H3>
                        <BodyMain>
                            When we develop solutions, our clients are always
                            part of the team to guarantee project satisfaction.
                            We provide updates to our clients on project
                            progress on a regular basis to make early
                            adjustments.
                        </BodyMain>
                    </TextContent>
                </Container>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    padding: 80px 30px;
    width: 100%;
    margin: 0px auto 140px;
`;

const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const TextContent = styled.div`
    display: grid;
    gap: 20px;
    color: ${themes.light.text1};
    width: 100%;
    margin: auto;
`;

const ImageContent = styled.div`
    position: relative;

    img {
        max-width: 460px;
        border-radius: 20px;
        @media (max-width: 768px) {
            max-width: 100%;
        }
    }
`;

const ImageText = styled.div`
    position: absolute;
    width: 240px;
    height: 220px;
    left: 300px;
    padding: 20px;
    bottom: -50px;
    background: rgba(15, 14, 71, 0.5);
    border: 5px solid #f2f6ff;
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    color: ${themes.dark.text1};
    border-radius: 20px;
    display: grid;
    gap: 10px;

    @media (max-width: 768px) {
        left: 0;
        bottom: 100px;
    }

    ${BodyMain} {
        opacity: 0.7;
    }
`;
