import React from "react";
import styled from "styled-components";

function HamburgerButton({ onClick }) {
    return (
        <HumburgerBtn onClick={onClick}>
            <img src="/images/icons/hamburger.svg" alt="" />
        </HumburgerBtn>
    );
}

export default HamburgerButton;

const HumburgerBtn = styled.div`
    color: rgba(255, 255, 255, 0.7);
    display: grid;
    align-items: center;
    padding: 10px;
    transition: 0.5s ease-out;
    border-radius: 10px;

    :hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
`;
