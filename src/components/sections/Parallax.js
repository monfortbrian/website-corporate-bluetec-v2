import React, { useState } from "react";
import styled from "styled-components";
import useScrollPosition from "../hooks/UseScrollPosition";

function Parallax() {
    const scrollY = useScrollPosition();
    return (
        <Wrapper>
            <DeviceWrapper scroll={scrollY}>
                <Device1 scroll={scrollY < 200} scrollY={scrollY}>
                    <img
                        alt="device"
                        src="/images/mockups/hero-ipad.webp"
                        style={{ top: "99px", maxWidth: "507px" }}
                    />
                </Device1>
                <Device2 scroll={scrollY < 100} scrollY={scrollY}>
                    <img
                        alt="device"
                        src="/images/mockups/hero-iphone-blue.webp"
                        style={{
                            top: "160px",
                            left: "286px",
                            maxWidth: "540px",
                        }}
                    />
                </Device2>
                <Device3 scroll={scrollY < 200} scrollY={scrollY}>
                    <img
                        alt="device"
                        src="/images/mockups/hero-iphone-pink.webp"
                        style={{ top: "0", left: "461px", maxWidth: "458px" }}
                    />
                </Device3>
            </DeviceWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
`;

const DeviceWrapper = styled.div`
    position: relative;
    width: 872px;
    height: 672px;
    transform-origin: center center;
    margin: 180px auto 0px;

    ${props => `transform: scale(${props.scroll * 0.001 + 1});`}
    &,&>div {
        will-change: transform;
    }
    img {
        position: absolute;
    }

    @media (max-width: 786px) {
        width: 100%;
        ${props => `transform: scale(${props.scroll * 0.001 + 0.5})`}
    }
    @media (max-width: 560px) {
        left: -90px;
    }
`;

const Device1 = styled.div`
    ${props =>
        `transform: translateY(${-60 + props.scrollY * 0.1}px) scale(${0.7});`}
`;

const Device2 = styled.div`
    transform: translateY(-50px) scale(0.7);
`;

const Device3 = styled.div`
    ${props =>
        `transform: translateY(${-20 + props.scrollY * 0.3}px) scale(${0.7});`}
`;

export default Parallax;
