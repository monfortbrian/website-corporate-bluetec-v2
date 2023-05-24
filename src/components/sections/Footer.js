import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import FooterWaveBackground from "../backgrounds/FooterWaveBackground";
import { footerData } from "../../data/menuData";
import FooterButton from "../buttons/FooterButton";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <Wrapper>
            <FooterWaveBackground />
            <ContentWrapper>
                <FooterTop>
                    <div>
                        <HeadTitle>Bluetec</HeadTitle>
                        <Text>
                            Bluetec helps Entrepreneurs and innovators to
                            develop digital Solution. We provide product
                            development,....
                        </Text>
                    </div>
                    <div>
                        <HeadTitle> Useful Links</HeadTitle>

                        {footerData.map((item, index) => (
                            <FooterButton item={item} key={index} />
                        ))}
                    </div>
                    <div>
                        <HeadTitle>Contact</HeadTitle>
                        <ContactInfo>
                            <a href="mailto:hello@bluetec.bi">
                                hello@bluetec.bi
                            </a>
                            <br />
                            <a href="tel:+25762115300">+257 62115300</a>
                        </ContactInfo>

                        <Social>Follow Us on</Social>
                        <IconContainer>
                            <Icon
                                href="https://facebook.com/bluetec.labs"
                                title="facebook"
                            >
                                <FaFacebookF />
                            </Icon>
                            <Icon
                                href="https://twitter.com/bluetec_labs"
                                title="twitter"
                            >
                                <FaTwitter />
                            </Icon>
                            <Icon
                                href="https://instagram.com/bluetec_labs"
                                title="instagram"
                            >
                                <FaInstagram />
                            </Icon>
                        </IconContainer>
                    </div>
                </FooterTop>
                <FooterBottom>
                    {/* Made with <FaHeart color="red" size={8} /> by Bluetec */}
                    © 2022 Bluetec group, All Rights Reserved.
                </FooterBottom>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    color: #fff;
    width: 100%;
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    width: 100%;
    margin: 0 auto;
    padding: 200px 30px 20px;
    @media (max-width: 768px) {
        padding: 100px 30px 20px;
    }
`;

const FooterTop = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20%);
    justify-content: space-between;
    line-height: 1.4rem;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        gap: 30px;
    }
`;

const HeadTitle = styled.p`
    margin-bottom: 24px;
`;

const FooterBottom = styled.div`
    text-align: center;
    font-weight: 200;
    font-size: 12px;
    padding: 120px 0 0;
    @media (max-width: 768px) {
        text-align: left;
        padding: 20px 0 0;
    }
`;

const IconContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Icon = styled.a`
    height: 32px;
    width: 32px;
    display: grid;
    place-items: center;
    padding: 8px;
    border-radius: 50%;
    background: #fff;
    color: #003585;
`;

const Social = styled.div`
    margin: 24px 0 8px;
`;

const Text = styled.p`
    font-weight: 200;
`;

const ContactInfo = styled.div`
    a {
        color: #fff;
        font-weight: 200;
        transition: 300ms all ease;
        &:hover {
            color: #6ee0ff;
        }
    }
`;
