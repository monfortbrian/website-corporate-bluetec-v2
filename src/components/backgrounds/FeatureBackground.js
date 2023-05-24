import React from "react";
import styled from "styled-components";

export default function FeatureBackground() {
    return (
        <Wrapper>
            <Background />
            <Wave
                src="/images/waves/feature-wave1.svg"
                style={{ top: "180px" }}
                alt=""
            />
            <Wave
                src="/images/waves/feature-wave2.svg"
                style={{ top: "600px" }}
                alt=""
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
`;

const Wave = styled.img`
    position: absolute;
    z-index: -1;

    @media (min-width: 1440px) {
        width: 100%;
    }
`;

const Background = styled.div`
    /* background: linear-gradient(180deg, #003585 0%, #1f1f47 100%);
    position: absolute;
    width: 100%;
    height: 700px;
    z-index: -1; */
`;
