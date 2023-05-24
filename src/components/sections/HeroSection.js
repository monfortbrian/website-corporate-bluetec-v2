import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MockupAnimation from '../animations/MockupAnimation';
import WaveBackground from '../backgrounds/WaveBackground';
import PurchaseButton from '../buttons/PurchaseButton';
import SignIn from '../forms/SignIn';
import { themes } from '../styles/ColorStyles';

function HeroSection({ modal }) {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Your Future Awaits</Title>
          {/* <Description>
            We’re not just talking about software, we solve problems and grow
            your business
          </Description> */}
          <Description>
            Ready to take the plunge into the world of innovative technology?{' '}
            <br></br> We craft and develop the cutting-edge tools, services, and
            support you need to stay ahead in your business
          </Description>
          <PurchaseButton title="Let's build it" link="#services" />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
      {modal.visible && <SignIn onClick={modal.handleClick} />}
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px 220px;
  display: grid;
  grid-template-columns: 500px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  button {
    margin-left: 100px;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  min-width: 35vw;
  @media (max-width: 450px) {
    font-size: 1.625rem;
  }
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #011564 0%, #021e95 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 1.063rem;
  font-weight: 800px;
  line-height: 140%;
  min-width: 35vw;
  color: ${themes.light.text1};
`;
