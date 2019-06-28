import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import leftHero from '../../assets/aboutHero.png'
import Info from './Info/Info';

//info icons
import webIcon from '../../assets/web.svg';
import guitarIcon from '../../assets/guitar.svg';
import beerIcon from '../../assets/beer.svg';
import joystickIcon from '../../assets/joystick.svg';



const About = (props) => {

    const LeftHero = styled(Grid)`
        background-image: url(${leftHero});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 50vh;
    `;

    const Title = styled.h1`
        color: ${({theme}) => theme.colors.title};
        font-size: ${({theme}) => theme.sizes.title};
        text-transform: uppercase;
    `;

    const Describe = styled.p`
        color: ${({theme}) => theme.colors.paragraph};
        font-size: ${({theme}) => theme.sizes.paragraph};
        line-height: 30px;
    `; 

    return(
        <Grid container style={{minHeight: '100vh', backgroundColor: '#F2F2F1'}}>
            <LeftHero item xs={12} sm={4} />
            <Grid container item xs={12} sm={8} style={{padding: '5vw'}}>
                <Grid item sm={12}>
                    <Title>About me</Title>
                    <Describe>
                        Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. 
                        Purto brute disputando cu est, eam dicam soluta ei. 
                        Vel dicam vivendo accusata ei, cum ne periculis molestiae pri. <br /><br />
                        Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei.
                    </Describe>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Info 
                        icon={webIcon}
                        title='Web Developing'
                        info='I am working as a developer and consultant for one of the best and the biggest company in Norway, Evry!'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Info 
                        icon={guitarIcon}
                        title='Playing guitar'
                        info="Since I was a kid I am practising playing guitar. I graduated Polish State Music School. Let's make a band!"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Info 
                        icon={beerIcon}
                        title='Breewing beer'
                        info='Few months ago I discovered my another passion which is breewing beer. I made three styles so far.'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Info 
                        icon={joystickIcon}
                        title='Playing games'
                        info='In my free time I like to play games as well. Mostly I am into RTS and FPS games.'
                    />
                </Grid>
            </Grid>
        </Grid >
    );
}

export default About;