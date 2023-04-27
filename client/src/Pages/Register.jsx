import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(194, 231, 189, 0.5)
        ),
        url("https://cdn.wallpapersafari.com/18/95/puUm6F.jpg")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: '75%'})}
`;
const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid gray;
`;
const Agreements = styled.div`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreements>
                        By creating an account, I consent to the processing of
                        my personal data in accordance with the{" "}
                        <b>PRIVACY POLICY</b>
                    </Agreements>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
