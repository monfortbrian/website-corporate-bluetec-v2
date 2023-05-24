import React, { useRef } from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { useOnScreen } from "../hooks/useOnScreen";

function CounterSection() {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    console.log(isVisible);

    return (
        <WrapperContent ref={ref}>
            <Counter isVisible={isVisible}>
                <div>
                    {isVisible ? (
                        <CountUp end={10} delay={0.3} duration={3} />
                    ) : (
                        0
                    )}
                    <span>+</span>
                </div>
                <p>Happy clients</p>
            </Counter>
            <Counter isVisible={isVisible} className="counter1">
                <div>
                    {isVisible ? (
                        <CountUp end={190} delay={0.5} duration={5} />
                    ) : (
                        0
                    )}
                    <span>K</span>
                </div>
                <p>Line of code</p>
            </Counter>
            <Counter isVisible={isVisible} className="counter2">
                <div>
                    {isVisible ? (
                        <CountUp end={5} delay={0.3} duration={3} />
                    ) : (
                        0
                    )}
                    <span>+</span>
                </div>
                <p>Products </p>
            </Counter>
            <Counter isVisible={isVisible} className="counter3">
                <div>
                    {isVisible ? (
                        <CountUp end={300} delay={0.9} duration={5} />
                    ) : (
                        0
                    )}
                    <span>%</span>
                </div>
                <p>Incididunt</p>
            </Counter>
        </WrapperContent>
    );
}

export default CounterSection;

const WrapperContent = styled.div`
    max-width: 950px;
    width: 100%;
    margin: 0 auto 80px;
    padding: 100px 30px;
    color: ${themes.light.text1};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
`;

const Counter = styled.div`
    background: rgba(15, 14, 71, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 40px 30px;
    display: grid;
    gap: 30px;
    place-items: center;
    color: ${themes.dark.text1};
    opacity: ${props => (props.isVisible ? 1 : 0)};
    transform: ${props =>
        props.isVisible ? "translateY(0px)" : "translateY(60px)"};
    transition: ${props => (props.isVisible ? "1200ms ease-out" : "30ms ease")};
    transition-delay: ${props => (props.isVisible ? "600ms" : "0s")};

    &.counter1 {
        transition-delay: ${props => (props.isVisible ? "1000ms" : "0s")};
        transform: ${props =>
            props.isVisible ? "translateY(0px)" : "translateY(90px)"};
    }

    &.counter2 {
        transition-delay: ${props => (props.isVisible ? "1300ms" : "0s")};
        transform: ${props =>
            props.isVisible ? "translateY(0px)" : "translateY(120px)"};
    }

    &.counter3 {
        transition-delay: ${props => (props.isVisible ? "1600ms" : "0s")};
        transform: ${props =>
            props.isVisible ? "translateY(0px)" : "translateY(150px)"};
    }

    div {
        font-weight: 700;
        font-size: 2.5em;
        @media (max-width: 768px) {
            font-size: 2em;
        }
    }
`;
