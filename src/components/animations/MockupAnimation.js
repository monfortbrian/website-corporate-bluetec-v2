import React from "react";
import styled from "styled-components";

export default function MockupAnimation() {
    return (
        <Wrapper>
            <div className="mockup1" />
            <div className="mockup2" />
            <div className="mockup3" />
            <div className="mockup4" />
            <div className="mockup5" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    perspective: 5000;

    @media (max-width: 768px) {
        transform: scale(0.6);
        transform-origin: top left;
    }
    @media (max-width: 450px) {
        transform: scale(0.4);
    }

    div {
        transform: rotateY(-20deg) rotateX(20deg);
        transform-origin: bottom left;
    }

    * {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover div {
        transform: rotateY(0deg) rotateX(0deg);
        &.mockup1 {
            transition-delay: 0.1s;
            transform: translate(-30px, -30px);
        }
        &.mockup2 {
            transition-delay: 0.2s;
            transform: translate(0, -30px);
        }
        &.mockup3 {
            transition-delay: 0s;
        }
        &.mockup4 {
            transition-delay: 0.1s;
            transform: translate(-120px, 30px);
        }
        &.mockup5 {
            transition-delay: 0.2s;
            transform: translate(-90px, 30px);
        }
        :hover {
            filter: brightness(150%) saturate(120%);
        }
    }

    .mockup1 {
        position: absolute;
        width: 183px;
        height: 120px;
        left: 0px;
        top: 0px;

        background: url("/images/animations/mockup-card1.svg"),
            radial-gradient(
                218.51% 281.09% at 100% 100%,
                rgba(55, 253, 51, 0.6) 0%,
                rgba(0, 116, 200, 0.6) 45.83%,
                rgba(200, 0, 120, 0.6) 100%
            );
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(21.8507px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 16px;
    }
    .mockup2 {
        position: absolute;
        width: 183px;
        height: 120px;
        left: 214px;
        top: 0px;

        background: url("/images/animations/mockup-card2.svg"),
            radial-gradient(
                218.51% 281.09% at 100% 100%,
                rgba(55, 253, 51, 0.6) 0%,
                rgba(0, 116, 200, 0.6) 45.83%,
                rgba(200, 0, 120, 0.6) 100%
            );
        box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
            0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(21.8432px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 16px;
    }
    .mockup3 {
        position: absolute;
        width: 701px;
        height: 428px;
        left: 37px;
        top: 60px;

        background: rgba(23, 12, 61, 0.5);
        /* background: url("/images/animations/mockup-card3.svg"),
            rgba(23, 12, 61, 0.5); */
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 8px;
    }
    .mockup4 {
        position: absolute;
        width: 362.08px;
        height: 209.7px;
        left: 194px;
        top: 262px;

        background: rgba(39, 20, 62, 0.3);
        /* background: url("/images/animations/mockup-card4.svg"),
            rgba(39, 20, 62, 0.3); */
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 10px;
    }
    .mockup5 {
        position: absolute;
        width: 239px;
        height: 213.72px;
        left: 560px;
        top: 262px;

        /* background: url("/images/animations/mockup-card5.svg"),
            rgba(39, 20, 62, 0.2); */
        background: rgba(39, 20, 62, 0.2);
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 8px;
    }
`;
