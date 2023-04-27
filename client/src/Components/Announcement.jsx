import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: green;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
    return (
        <Container>
            Super deal! Free shopping on oder over 50$
        </Container>
    );
};

export default Announcement;