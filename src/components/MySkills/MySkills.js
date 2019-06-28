import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Value from './Values/Values';

import SkillCharts from './SkillCharts/SkillCharts';


const MySkills = (props) => {

    const Wrapper = styled.div`
        position: relative;
        min-height: 100vh;
        width: 100vw;
    `;

    const InnerWrapper = styled(Grid)`
        padding: 50px;

        @media (max-width: 600px) {
            padding: 30px;
        }
    `;

    const Title = styled.h1`
        font-size: 30px;
        color: ${({theme}) => theme.colors.title};
        text-transform: uppercase;
    `;

    const Paragraph = styled.p`
        color: ${({theme}) => theme.colors.paragraph};
    `;

    const Button = styled.button`
        color: ${({theme}) => theme.colors.green};
        border: 1px solid ${({theme}) => theme.colors.green};
        font-size: ${({theme}) => theme.sizes.subtitle};
        padding:10px;
        margin-top: 50px;
        transition: .2s;
        outline: none;
        :hover{
            cursor: pointer;
            background-color: ${({theme}) => theme.colors.green};
            color: ${({theme}) => theme.colors.white};
        }
    `;

    return(
        <Wrapper>
            {/** First row */} 
            <Grid container>
                <InnerWrapper item xs={12} sm={6}>
                    <Title>My skills</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri.<br /> <br /> Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.</Paragraph> 
                    <Button>Contact me</Button>
                </InnerWrapper>
                <InnerWrapper item xs={12} sm={6}>
                    <SkillCharts />
                </InnerWrapper>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Value 
                        valueTitle='Values'
                        valueText='Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Value 
                        valueTitle='Goals'
                        valueText='Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Value 
                        valueTitle='Hobbies'
                        valueText='Lorem ipsum dolor sit amet, ea doming until epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est.'
                    />
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default MySkills;