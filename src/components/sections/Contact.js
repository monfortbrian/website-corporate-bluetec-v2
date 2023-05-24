import React from "react";
import styled from "styled-components";
import PurchaseButton from "../buttons/PurchaseButton";
import { themes } from "../styles/ColorStyles";
import { BodyIntro, MediumText } from "../styles/TextStyles";

export default function Contact() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextContent>
                    <Title>Ready to start?</Title>
                    <BodyIntro>
                        Drop us a line and let's find out how we can work
                        together to make your idea a reality.
                    </BodyIntro>
                </TextContent>
                <FormWrapper>
                    <ReachUsSection>
                        <Title>Reach us</Title>
                        <div>
                            <MediumText>+257 62 11 53 00</MediumText>
                            <MediumText>hello@bluetec.bi</MediumText>
                        </div>
                        <Icons>
                            <a href="www.twitter.com">
                                <img src="/images/logos/twitter-logo.svg" />
                            </a>
                            <a href="www.fb.com">
                                <img src="/images/logos/instagram-logo.svg" />
                            </a>
                            <a href="www.instagram.com">
                                <img src="/images/logos/facebook-logo.svg" />
                            </a>
                        </Icons>
                    </ReachUsSection>
                    <ContactForm>
                        <Title>
                            Let’s talk about the incredible things we can make
                            together.
                        </Title>
                        <FormGrid>
                            <Input />
                            <Input />
                            <ColSpan>
                                <Input />
                            </ColSpan>
                            <ColSpan>
                                <Textarea />
                            </ColSpan>
                            <PurchaseButton title="Get in touch" />
                        </FormGrid>
                    </ContactForm>
                    <AdressSection>
                        <Title>Office Address</Title>
                        <div>
                            <MediumText>
                                1st floor, Hotel Source du Nil
                            </MediumText>
                            <MediumText>Bujumbura, Burundi</MediumText>
                        </div>
                    </AdressSection>
                </FormWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    color: ${themes.light.text1};
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1234px;
    padding: 120px 30px 80px;
    margin: 0 auto;
`;

const Title = styled(MediumText)`
    font-weight: bold;
`;

const TextContent = styled.div`
    text-align: center;
    display: grid;
    gap: 30px;
    max-width: 800px;
    width: 100%;
    margin: auto;
    padding: 0px 30px;
    color: ${themes.light.text1};
`;

const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr, 3);
    grid-template-rows: repeat(1fr, 3);
    gap: 30px;
    padding: 60px 0;
    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
`;

const ReachUsSection = styled.div`
    display: inline-grid;
    grid-row: 1 / span 2;
    border: 2px solid #0f0e4780;
    border-radius: 20px;
    gap: 10px;
    padding: 30px;
    @media (max-width: 768px) {
        grid-row: auto;
        order: 2;
    }
`;

const AdressSection = styled.div`
    border: 2px solid #0f0e4780;
    display: inline-grid;
    border-radius: 20px;
    gap: 10px;
    padding: 30px;
    @media (max-width: 768px) {
        order: 3;
    }
`;

const ContactForm = styled.div`
    grid-row: 1 / span 3;
    grid-column: 2 / span 2;
    border-radius: 20px;
    border: 2px solid #0f0e4780;
    padding: 30px;
    @media (max-width: 768px) {
        grid-row: auto;
        grid-column: auto;
    }
`;

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    padding: 20px 0;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const Input = styled.input`
    display: inline-flex;
    border: 1px solid;
    padding: 14px 12px;
    border-radius: 10px;
    background: transparent;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: #0f0e4780;
    }
`;

const Textarea = styled.textarea`
    border: 1px solid;
    padding: 14px 12px;
    border-radius: 10px;
    background: transparent;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    height: 100px;
    &:focus {
        outline: none;
        border-color: #0f0e4780;
    }
`;

const ColSpan = styled.div`
    display: inline-grid;
    grid-column: 1/3;
    @media (max-width: 768px) {
        grid-column: auto;
    }
`;

const Icons = styled.div`
    display: flex;
    gap: 16px;
`;
