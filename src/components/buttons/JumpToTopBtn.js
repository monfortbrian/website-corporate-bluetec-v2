import React from "react";
import styled from "styled-components";
import { HiChevronDoubleUp } from "react-icons/hi";
import useScrollPosition from "../hooks/UseScrollPosition";

export default function ScrollTop() {
    const position = useScrollPosition();
    const scrollTop = () =>
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    return (
        <Button onClick={scrollTop} visible={position > 300}>
            <Arrow />
        </Button>
    );
}
const Button = styled.button`
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    opacity: ${props => (props.visible ? 1 : 0)};
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    width: 40px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    right: 6%;
    z-index: 6;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 300ms all ease;
    &:hover {
        background-color: rgba(255, 255, 255, 0.35);
        box-shadow: rgb(47 184 255 / 30%) 0px 10px 40px,
            rgb(47 184 255) 0px 0px 0px 1px inset;
    }
`;

const Arrow = styled(HiChevronDoubleUp)`
    color: #fff;
    opacity: 1;
    font-size: 20px;
    animation: anime 0.9s infinite alternate;
    @keyframes anime {
        0% {
            opacity: 1;
            transform: translateY(-4px);
        }
        100% {
            opacity: 0.2;
            transform: translateY(5px);
        }
    }
`;
