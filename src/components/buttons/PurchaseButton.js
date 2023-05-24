import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function PurchaseButton(props) {
    const { title, link, onClick } = props;
    return (
        <Link to={link || "/"}>
            <Wrapper onClick={onClick}>
                <IconWrapper>
                    <Icon
                        src="/images/icons/credit.svg"
                        className="icon"
                        alt=""
                    />
                    <Ring src="/images/icons/icon-ring.svg" alt="" />
                </IconWrapper>
                <TextWrapper>
                    <Title>{title || "Hire us today"}</Title>
                </TextWrapper>
            </Wrapper>
        </Link>
    );
}

const Wrapper = styled.div`
    width: fit-content;
    padding: 12px;
    background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 20px 40px rgba(23, 0, 102, 0.2),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    display: grid;
    grid-template-columns: 30px auto;
    align-items: center;
    gap: 12px;

    *,
    & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 30px 60px rgba(23, 0, 102, 0.5),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);

        .icon {
            transform: scale(1.2);
        }
    }
`;

const TextWrapper = styled.div`
    display: grid;
    gap: 4px;
`;

const Title = styled.p`
    color: black;
    font-size: 0.9rem;
`;

const Icon = styled.img`
    width: 18px;
    height: 18px;
`;

const Ring = styled.img`
    position: absolute;
    top: -12px;
    left: -13px;
    width: 60px;

    ${Wrapper}:hover & {
        transform: rotate(30deg) scale(1.1) translate(1px, 1px);
    }
`;

const IconWrapper = styled.div`
    width: 28px;
    height: 28px;
    background: linear-gradient(200.44deg, #003585 13.57%, #00a3ff 98.38%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center;
    position: relative;

    ${Wrapper}:hover & {
        filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
`;
