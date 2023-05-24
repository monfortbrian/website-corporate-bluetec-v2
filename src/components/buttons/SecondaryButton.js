import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function SecondaryButton({ title, link, onClick }) {
    return (
        <Link to={link || "/"}>
            <Button onClick={onClick}>
                <img src="/images/icons/courses.svg" alt="x" />
                {title || "Learn more"}
            </Button>
        </Link>
    );
}

const Button = styled.div`
    display: grid;
    gap: 20px;
    color: rgba(255, 255, 255, 0.7);
    grid-template-columns: 10px auto;
    align-items: center;
    width: fit-content;
    height: 44px;
    background: rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
    padding: 10px 25px;
    transition: 0.5s ease-out;
    :hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
`;
