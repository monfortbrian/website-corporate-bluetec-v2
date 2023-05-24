import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterButton = props => {
    const { item } = props;
    return (
        <Link to={item.link} onClick={props.onClick}>
            <FooterItem>
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
            </FooterItem>
        </Link>
    );
};

const FooterItem = styled.div`
    color: rgba(255, 255, 255, 0.8);
    display: grid;
    grid-template-columns: 24px auto;
    gap: 8px;
    align-items: center;
    padding: 6px;
    transition: 0.5s ease-out;
    border-radius: 10px;
    width: fit-content;

    p {
        font-weight: 300;
        font-size: 0.9rem;
    }

    :hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
`;

export default FooterButton;
