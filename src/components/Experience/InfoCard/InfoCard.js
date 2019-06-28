import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const InfoCard = (props) => {

    const Title = styled.h1`
        font-size: ${({theme}) => theme.sizes.title};
        color: ${({theme}) => theme.colors.title};
        text-transform: uppercase;
        padding-top: 50px;
        padding-left: 50px;
    `;

    const TextInfo = styled.p`
        color: ${({theme}) => theme.colors.paragraph};
        font-size: ${({theme}) => theme.sizes.paragraph};
    `;

    const InnerWrapper = styled(Grid)`
        padding: 50px;
        padding-top: 10px;
        @media (max-width: 600px) {
            padding: 30px;
        }
    `;

    const Line = styled.hr`
        width: calc(100% - 100px);
        margin: 0 auto;
        padding: 0;
        height: 0;
        border: 0;
        border-top: 1px solid #cccccc;

        @media (max-width: 600px) {
            width: calc(100% - 60px);
        }   
    `;

    return(
        <>
            <Title>{props.title}</Title>
            <Grid container>  
                <InnerWrapper item sm={6} xs={12}>
                    <TextInfo>{props.textInfo}</TextInfo>
                </InnerWrapper>
                <InnerWrapper item sm={6} xs={12}>
                    {props.children}
                </InnerWrapper> 
                <Line />
            </Grid>
            
        </>
    );
}

export default InfoCard;