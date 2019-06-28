import React from 'react';
import styled from 'styled-components';

const NotFound = () => {

    const Wrapper = styled.div`
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    return (
        <Wrapper>
            <h1>Page not found</h1>
        </Wrapper>
    )
}

export default NotFound;