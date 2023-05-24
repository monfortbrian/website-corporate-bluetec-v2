import React from "react";
import styled from "styled-components";

const FooterWaveBackground = () => {
    return (
        <Wrapper>
            <Wave
                src="/images/waves/footer-wave3.svg"
                style={{ top: "0px" }}
                alt=""
            />
            <Wave
                src="/images/waves/background_waves/wave3.svg"
                style={{ top: "10px" }}
                alt=""
            />
            <Wave
                className="circle"
                src="/images/waves/circle-gaps.svg"
                style={{ top: "20px" }}
                alt=""
            />
        </Wrapper>
    );
};

export default FooterWaveBackground;

const Wrapper = styled.div`
    position: relative;
`;

const Wave = styled.img`
    position: absolute;
    z-index: -1;

    &.circle {
        left: 300px;
        @media (max-width: 768px) {
            left: -100px;
        }
    }

    @media (min-width: 1440px) {
        width: 100%;
    }
`;
