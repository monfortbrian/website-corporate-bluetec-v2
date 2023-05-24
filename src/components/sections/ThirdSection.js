import React from "react";
import styled from "styled-components";
import SecondaryButton from "../buttons/SecondaryButton";

import { Caption, H1, MediumText } from "../styles/TextStyles";

export default function ThirdSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextContent>
                    <Caption>Consectetur adipiscing elit</Caption>
                    <H1>
                        Purus sit amet volutpat consequat mauris nunc congue
                        nisi.
                    </H1>
                    <MediumText>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </MediumText>
                    <SecondaryButton />
                </TextContent>
                <IllustrationContent>
                    <Card>
                        <div className="card1"></div>
                        <div className="card2"></div>
                    </Card>
                </IllustrationContent>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: #fff;
    overflow: hidden;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    width: 100%;
    margin: auto;
    padding: 120px 30px;
    display: grid;
    grid-template-columns: 600px auto;
    align-items: center;
    gap: 80px;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const TextContent = styled.div`
    display: grid;
    gap: 20px;
    height: fit-content;
    box-sizing: border-box;
`;
const IllustrationContent = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

const Card = styled.div`
    position: relative;
    > div {
        width: 480px;
        height: 357px;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    .card1 {
        background: rgba(0, 0, 0, 0.3);
        border: 0.5px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 0px 60px 60px 60px;
        transform-origin: left;
    }
    .card2 {
        position: absolute;
        top: 0px;
        left: 0;
        z-index: -1;
        background: linear-gradient(180deg, #ff5252 0%, #ff72b6 100%);
        mix-blend-mode: normal;
        border-radius: 0px 60px 60px 60px;
        transform: matrix(1, 0.12, 0, 0.99, 0, 0);
        transform-origin: left;
    }

    *,
    & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
        .card1 {
            transform: translateY(-3px);
        }
        .card2 {
            transform: matrix(1, 0.12, 0, 0.99, 0, 0) rotateY(35deg)
                rotate(5deg) translate(10px, -10px);
        }
    }
`;
