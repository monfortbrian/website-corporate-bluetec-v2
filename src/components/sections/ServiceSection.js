import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../buttons/SecondaryButton';
import { themes } from '../styles/ColorStyles';

export default function ServiceSection() {
  return (
    <Wrapper id="services">
      <ContentWrapper>
        <TextContent>
          <Title>What We Do</Title>
          <Description>
            Discover our very high-quality end-to-end services for your website
            and mobile application projects.
          </Description>
        </TextContent>
        <CardsWrapper>
          <Card>
            <img alt="x" src="/images/logos/illustration1.svg" />
            <div>
              <BodyIntro>UI/UX & Branding</BodyIntro>
              <Description>
                We are experts on electronic design,prototyping and production
              </Description>
            </div>
          </Card>
          <Card className="card1">
            <img alt="x" src="/images/logos/illustration2.svg" />
            <div>
              <BodyIntro>Software development</BodyIntro>
              <Description>
                Sapien eget mi proin sed. Neque laoreet suspendisse interdum
                consectetur libero id.
              </Description>
            </div>
          </Card>
          <Card className="card2">
            <img alt="x" src="/images/logos/illustration1.svg" />
            <div>
              <BodyIntro>GPS tracking & sensors</BodyIntro>
              <Description>
                We are experts on electronic design,prototyping and production
              </Description>
            </div>
          </Card>
          <Card className="card3">
            <img alt="x" src="/images/logos/illustration2.svg" />
            <div>
              <BodyIntro>IT support & Outstaff engineering</BodyIntro>
              <Description>
                Vulputate eu scelerisque felis imperdiet proin fermentum leo vel
                orci.
              </Description>
            </div>
          </Card>
        </CardsWrapper>
        <ButtonWrapper>
          <SecondaryButton title="More services" link="/services" />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  width: 100%;
  margin: 80px auto;
`;

const TextContent = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 0px 30px;
  color: ${themes.light.text1};
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.188rem;
`;

const Description = styled.p`
  font-size: 1.063rem;
  line-height: 1.3rem;
`;

const BodyIntro = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
`;

const CardsWrapper = styled.div`
  padding: 80px 30px;
  display: grid;
  gap: 28px;
  /* grid-template-columns: repeat(4, minmax(240px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  overflow-x: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, #ff7373 0%, #491eb8 100%);
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  color: ${themes.dark.text1};
  & > div {
    display: grid;
    gap: 16px;
  }

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  > :nth-child(2) {
    margin-top: 20px;
  }
  :hover {
    transform: scale(1.08);
    img {
      transform: scale(0.9) translateY(-15px);
    }
  }

  &.card1 {
    background: linear-gradient(180deg, #4bbeff 0%, #216bda 100%);
  }

  &.card2 {
    background: linear-gradient(180deg, #ffd78a 0%, #f4762d 100%);
  }
  &.card3 {
    background: linear-gradient(180deg, #7ef29d 0%, #0f68a9 100%);
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
`;
