import React from "react";
import styled from "styled-components";

export default function UpdateWaveBackground() {
    return (
        <Wrapper>
            <Background />
            <Wave
                src="/images/waves/background_waves/wave1.svg"
                style={{ top: "310px" }}
            />
            <Wave
                src="/images/waves/background_waves/wave4.svg"
                style={{ top: "476px" }}
            />

            <Wave
                src="/images/waves/background_waves/wave3.svg"
                style={{ top: "550px" }}
            />
            <Wave
                src="/images/waves/hero-wave3-dark.svg"
                style={{ top: "600px" }}
            />
            <Wave
                src="/images/waves/background_waves/maskTop.svg"
                style={{ top: "0px" }}
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
    background: linear-gradient(180deg, #343563 0%, #1f1f47 100%);
    position: absolute;
    width: 100%;
    height: 800px;
    z-index: -1;
`;
