import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Info = (props) => {

    const Wrapper = styled(Grid)`
        background-image: url(${props.icon});
        padding: 15px;
        padding-left: 55px;
        background-size: 50px;
        background-repeat: no-repeat;
        background-position-y: 5px;
        min-height: 60px;
        margin-bottom: 20px;
    `;

    const Title = styled.p`
        color: ${({theme}) => theme.colors.title};
        font-size: ${({theme}) => theme.sizes.subtitle};
        text-transform: uppercase;
        display: block;
        margin: 0px;
        padding: 0px;
    `;

    const Info = styled.p`
        position: relative;
        color: ${({theme}) => theme.colors.paragraph};
        font-size: ${({theme}) => theme.sizes.paragraph};
        line-height: 20px;
        margin: 0px;
        padding-left: 10px;
        :after{
            content: '';
            position: absolute;
            background-color: ${({theme}) => theme.colors.paragraph};
            width: 1px;
            height: 100%;
            left: 0;
            top: 0;
        }
    `;

    return (
        <Wrapper container>
            <div> {/* need for line break. Grid is using flex dir col. */}
                <Title>{props.title}</Title>
                <Info>{props.info}</Info>
            </div>
        </Wrapper>
    );

};

export default Info;