import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { BodyMain, SmallText, MediumText, H3 } from "../styles/TextStyles";

const Testimonials = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextContent>
                    <Title>Testimonial</Title>
                    <H3>What our clients say about us</H3>
                </TextContent>
                <Card>
                    <Avatar />
                    <BodyMain>
                        The design is very professional and well done. We love
                        the clean look which fits our company's branding.
                    </BodyMain>
                    <div>
                        <Text>Aubin</Text>
                        <Desrc>Developer at Bluetec</Desrc>
                    </div>
                </Card>

                {/* <Title>Partners who trusted us</Title>
                <PartenersContainer>
                    <img src="/images/logos/gtt-logo.svg" alt="logo" />
                    <img src="/images/logos/mediabox.svg" alt="logo" />
                    <img src="/images/logos/silverback.svg" alt="logo" />
                    <img src="/images/logos/fresh-soap-logo.svg" alt="logo" />
                </PartenersContainer> */}
            </ContentWrapper>
        </Wrapper>
    );
};

export default Testimonials;

const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    color: ${themes.light.text1};
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1234px;
    padding: 0 30px 80px;
    margin: 0 auto;
    display: flex;
    gap: 80px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const TextContent = styled.div`
    max-width: 340px;
    display: grid;
    gap: 20px;
`;

const Title = styled(BodyMain)`
    font-weight: bold;
`;

const Avatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 20px;
    max-width: 400px;
    background: rgba(15, 14, 71, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    color: #fff;
    img {
        max-width: 60px;
    }
`;

const Desrc = styled(MediumText)`
    opacity: 0.6;
    text-transform: uppercase;
`;

const Text = styled(MediumText)`
    font-weight: bold;
`;

// const PartenersContainer = styled.div`
//     width: 100%;
//     margin-top: 48px;
//     display: grid;
//     gap: 40px;
//     grid-template-columns: repeat(4, auto);
//     place-items: center;
//     @media (max-width: 500px) {
//         grid-template-columns: repeat(2, auto);
//     }

//     img {
//         max-width: 120px;
//         transition: 300ms all;

//         &:hover {
//             filter: opacity(50%);
//         }
//     }
// `;
