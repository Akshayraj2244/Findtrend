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
`;
const RegisterWrapper = styled.div``;
const JoinContent = styled.h2`
    text-align: center;
`;
const GreyContent = styled.span`
    color: #60625d;
`;
