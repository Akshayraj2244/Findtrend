import React from "react";
import styled from "styled-components";

const Emailpage = () => {
    return (
        <>
            <RegisterContainer>
                <RegisterWrapper>
                    <JoinContent>
                        Join us on email for
                        <br />
                        <GreyContent>more trending topics</GreyContent>
                    </JoinContent>
                    <RegisterButton>
                        <Button>Register</Button>
                    </RegisterButton>
                </RegisterWrapper>
            </RegisterContainer>
        </>
    );
};

export default Emailpage;

const RegisterContainer = styled.div`
    font-size: 30px;
    background-color: #a6ff34;
    height: 300px;
    padding-top: 70px;
    margin-bottom: 19 px;
`;
const RegisterWrapper = styled.div``;
const JoinContent = styled.h2`
    text-align: center;
    @media all and (max-width : 980px) {
        font-size: 30px;
    }
      
`;
const GreyContent = styled.span`
    color: #60625d;
`;
const RegisterButton = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;
const Button = styled.button`
    background-color: black;
    padding: 16px 40px;
    border-radius: 34px;
    color: #fff;
    border: none;
    cursor: pointer;
    @media all and (max-width: 640px) {
      padding: 10px 20px;
      font-size: 10px;
    }
`;




