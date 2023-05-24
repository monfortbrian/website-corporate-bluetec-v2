import React from "react";
import styled from "styled-components";
import { BodyIntro, H3 } from "../styles/TextStyles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import TextField from "./TextField";

const SignIn = ({ onClick }) => {
    return (
        <ModalBcg>
            <Modal>
                <ButtonClose onClick={onClick}>
                    <img src="/images/icons/cancel.svg" />
                </ButtonClose>
                <ModalCover>
                    <img src="/images/illustrations/teamwork.svg" />
                </ModalCover>
                <FormWrapper>
                    <BodyIntro>Tell us about your challenge</BodyIntro>
                    <Social>
                        <SocialItem>
                            <img src="/images/icons/mail.svg" alt="x" />
                            <p>hello@gmail.com</p>
                        </SocialItem>
                        <SocialItem>
                            <img src="/images/icons/chat.svg" alt="x" />
                            <p>+257 62115300</p>
                        </SocialItem>
                        <SocialItem>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <p>bluetec_labs</p>
                        </SocialItem>
                    </Social>

                    <Divider>
                        <img src="/images/illustrations/rectangle.svg" />
                        <p>or</p>
                        <img src="/images/illustrations/rectangle.svg" />
                    </Divider>

                    <Form>
                        <TextField
                            type="text"
                            icon="mail"
                            placeholder="Email"
                        />
                        <TextField
                            type="password"
                            icon="lock-i"
                            placeholder="********"
                        />
                        <TextArea placeholder="Comment..." />
                        <SubmitBtn>Submit</SubmitBtn>
                    </Form>
                </FormWrapper>
            </Modal>
        </ModalBcg>
    );
};

export default SignIn;

const ModalBcg = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px) saturate(100%);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 10;
    padding: 0px 20px;
`;

const Modal = styled.div`
    position: relative;
    max-width: 960px;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 360px auto;
    gap: 20px;
    justify-items: center;
    background: rgba(50, 61, 109, 0.5);
    box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    backdrop-filter: blur(40px);
    border-radius: 20px;
`;

const ModalCover = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    place-content: center;
    background-image: url("/images/backgrounds/signup-background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
`;

const FormWrapper = styled.div`
    color: #fff;
    padding: 40px 0;
    max-width: 320px;
    width: 100%;
`;

const Social = styled.div`
    margin-top: 18px;
    display: grid;
    gap: 8px;
`;

const SocialItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 200;

    img {
        max-width: 20px;
    }
`;

const Divider = styled.div`
    margin: 20px 0;
    display: flex;
    gap: 20px;
`;

const Form = styled.form`
    display: grid;
    gap: 18px;
`;

const SubmitBtn = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
    border-radius: 30px;
    border: none;
    width: 320px;
    height: 44px;
    cursor: pointer;
    font-size: 1rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: inherit;
    border-radius: 20px;
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
    padding: 10px;
    height: 80px;
    resize: none;

    &:focus {
        box-shadow: rgb(47 184 255 / 30%) 0px 10px 40px,
            rgb(47 184 255) 0px 0px 0px 1px inset;
    }
`;

const ButtonClose = styled.div`
    position: absolute;
    right: -50px;
    top: -40px;
    cursor: pointer;
`;
