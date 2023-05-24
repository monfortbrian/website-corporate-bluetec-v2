import React from "react";
import styled from "styled-components";

const TextField = props => {
    const { type, icon, input, placeholder } = props;
    return (
        <InputWrapper>
            <label>
                <img src={`/images/icons/${icon}.svg`} alt="x" />
            </label>
            <Input type={type} {...input} placeholder={placeholder} />
        </InputWrapper>
    );
};

export default TextField;

const InputWrapper = styled.div`
    position: relative;
    height: 44px;
    width: 100%;

    label {
        z-index: 5;
        position: absolute;
        left: 4px;
        top: 4px;
    }
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: inherit;
    padding: 14px 10px 10px 50px;
    border-radius: 30px;
    background: linear-gradient(
        180deg,
        rgba(99, 106, 150, 0.4) 0%,
        rgba(182, 186, 214, 0.25) 100%
    );
    border: 0.5px solid rgba(47, 184, 255, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    outline: none;
    color: #fff;
    &:focus {
        box-shadow: rgb(47 184 255 / 30%) 0px 10px 40px,
            rgb(47 184 255) 0px 0px 0px 1px inset;
    }
`;
