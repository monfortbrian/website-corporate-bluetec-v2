import React from "react";
import styled from "styled-components";
import SecondaryButton from "../buttons/SecondaryButton";
import useIsVisible from "../hooks/useIsVisible";
import {
    BodyMain,
    SmallText,
    SmallText2,
    MediumText,
    H3,
} from "../styles/TextStyles";

const Letstalk = ({ modal }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextTop>
                    <H3>Let’s Talk</H3>
                    <Text>
                        We’re looking forward to discussing your projects and
                        how we can help you!
                    </Text>
                    <SecondaryButton
                        title="Get in touch"
                        onClick={modal.handleClick}
                    />
                </TextTop>
                <BodyWrapper>
                    <TextContainer>
                        <H3>Latest from our blog</H3>
                        <Text>
                            Lorem ipsum dolor sit ,consectetur adipiscing elit.
                            Cras ultrices in sem ipsum fusce pellentesque id in.
                            Consectetur suspendisse sit id.
                        </Text>
                    </TextContainer>
                    <CardsContainer>
                        <Card>
                            <img src="/images/avatars/chris.png" alt="x" />
                            <BodyMain>By Aubin</BodyMain>
                            <SmallTxt>CTO-TAMAT</SmallTxt>
                            <Text>
                                Lorem ipsum dolor sit, consectetur adipiscing
                                elit. Cras ultrices in sem ipsum fusce
                                pellentesque id in. Consectetur suspendisse sit
                                id.
                            </Text>
                        </Card>
                        <Card>
                            <img src="/images/avatars/daniel.png" alt="x" />
                            <BodyMain>Daniel</BodyMain>
                            <SmallTxt>CEO & FOUNDER - DDG</SmallTxt>
                            <Text>
                                Lorem ipsum dolor sit, consectetur adipiscing
                                elit. Cras ultrices in sem ipsum fusce
                                pellentesque id in. Consectetur suspendisse sit
                                id.
                            </Text>
                        </Card>
                    </CardsContainer>
                </BodyWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Letstalk;

const Wrapper = styled.div`
    width: 100%;
    padding: 100px 0 40px;
    color: #fff;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1234px;
    padding: 0 30px;
    margin: 0 auto;
`;

const TextTop = styled.div`
    max-width: 360px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin: auto;
    align-items: center;
`;

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 360px auto;
    align-items: center;
    justify-content: space-between;
    margin: 48px 0 80px;
    gap: 60px;
    @media (max-width: 1024px) {
        grid-template-columns: auto;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 10px;
    min-width: 200px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 20px;
    color: #fff;

    img {
        max-width: 60px;
    }
`;

const SmallTxt = styled(SmallText)`
    color: #18c6ed;
`;

const Text = styled(MediumText)`
    font-weight: 300;
    color: #ededed;
`;

const TextContainer = styled.div`
    display: grid;
    gap: 10px;
    @media (max-width: 1024px) {
        text-align: center;
        max-width: 360px;
        margin: auto;
    }
`;
