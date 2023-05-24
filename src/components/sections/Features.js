import React from "react";
import styled from "styled-components";
import FeatureBackground from "../backgrounds/FeatureBackground";
import { themes } from "../styles/ColorStyles";
import { BodyIntro, BodyMain, H3, MediumText } from "../styles/TextStyles";

export default function Features() {
    return (
        <Wrapper>
            <FeatureBackground />
            <ContentWrapper>
                <TextContent>
                    <div>
                        <MediumText>Feature</MediumText>
                        <H3>Why choose us?</H3>
                    </div>
                    <Desrciption>
                        We are a software development house with unparalleled
                        knowledge and expertise, we deliver astonishing
                        solutions
                    </Desrciption>
                </TextContent>
                <CardsWrapper>
                    <Card>
                        <Avatar />
                        <CardTitle>Fast and Inexpensive</CardTitle>
                        <BodyMain>
                            Our websites and custom systems are fully compatible
                            when viewing from a phone, tablet, or computers.
                        </BodyMain>
                    </Card>
                    <Card>
                        <Avatar />
                        <CardTitle>Fast and Inexpensive</CardTitle>
                        <BodyMain>
                            Our websites and custom systems are fully compatible
                            when viewing from a phone, tablet, or computers.
                        </BodyMain>
                    </Card>
                    <Card>
                        <Avatar />
                        <CardTitle>Fast and Inexpensive</CardTitle>
                        <BodyMain>
                            Our websites and custom systems are fully compatible
                            when viewing from a phone, tablet, or computers.
                        </BodyMain>
                    </Card>
                </CardsWrapper>
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
    margin: 80px auto;
`;

const TextContent = styled.div`
    text-align: center;
    display: grid;
    gap: 90px;
    max-width: 800px;
    width: 100%;
    margin: auto;
    padding: 0px 30px;
    color: ${themes.light.text1};
    @media (max-width: 768px) {
        color: white;
        margin-top: 50px;
        gap: 40px;
    }

    & > div {
        display: grid;
        gap: 20px;
    }
`;

const Desrciption = styled(BodyIntro)`
    color: white;
`;

const CardsWrapper = styled.div`
    width: 100%;
    padding: 80px 30px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    color: ${themes.dark.text1};
    @media (max-width: 768px) {
        grid-template-columns: auto;
        place-items: center;
    }
`;

const Card = styled.div`
    padding: 20px;
    min-height: 200px;
    border-radius: 20px;
    width: 340px;
    min-height: 300px;
    gap: 20px;
    background: rgba(15, 14, 71, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    display: grid;
    grid-template-rows: repeat(3, auto);
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Avatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #4382ff;
`;

const CardTitle = styled(MediumText)`
    font-weight: bold;
`;
