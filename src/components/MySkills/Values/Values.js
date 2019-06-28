import React from 'react';
import styled from 'styled-components';

const Value = (props) => {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 25px;
        margin: 25px;
        background-color: rgba(0,0,0,0.03);
        @media (max-width: 600px) {
            padding: 30px;
        }
    `;

    const Title = styled.h1`
        font-size: ${({theme}) => theme.sizes.subtitle};
        color: ${({theme}) => theme.colors.subtitle};
        text-transform: uppercase;
    `;

    const Paragraph = styled.p`
        color: ${({theme}) => theme.colors.paragraph};
    `;

    return(
        <Wrapper> 
            <Title>{props.valueTitle}</Title>
            <Paragraph>{props.valueText}</Paragraph>
        </ Wrapper>
    );
}

export default Value;