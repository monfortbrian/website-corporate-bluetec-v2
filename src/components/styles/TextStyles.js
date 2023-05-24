import styled from "styled-components";

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 2.188rem;

    @media (max-width: 450px) {
        font-size: 1.625rem;
    }
`;

export const H2 = styled.h2`
    font-weight: bold;
    font-size: 2.5rem;

    @media (max-width: 450px) {
        font-size: 1.75rem;
    }
`;

export const H3 = styled.h3`
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 140%;

    @media (max-width: 450px) {
        font-size: 1.5rem;
    }
`;

export const BodyIntro = styled.p`
    font-size: 1.3rem;
    line-height: 140%;
`;

export const BodyMain = styled.p`
    font-weight: normal;
    font-size: 1rem;
    line-height: 140%;
`;

export const MediumText = styled.p`
    font-weight: normal;
    font-size: 1.063rem;
    line-height: 140%;
`;

export const Caption = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 18px;
`;

export const Caption2 = styled.p`
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 18px;
    text-transform: uppercase;
`;

export const SmallText = styled.p`
    font-weight: normal;
    font-size: 0.813rem;
    line-height: 130%;
`;

export const SmallText2 = styled.p`
    font-weight: 600;
    font-size: 0.813rem;
    line-height: 130%;
    text-transform: uppercase;
`;
