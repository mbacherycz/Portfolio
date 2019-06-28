import React from 'react';
import styled from 'styled-components';

const ProjectCard = (props) => {

    const Title = styled.h1`
        font-size: ${({theme}) => theme.sizes.subtitle};
        color: ${({theme}) => theme.colors.subtitle};
        text-transform: uppercase;
        margin: 0;
        margin-top: 50px;
        padding: 0;
    `;

    const Time = styled.p`
        color: ${({theme}) => theme.colors.paragraph};
        font-size: 18px;
        padding: 0;
        margin-top: 5px;
    `;
    
    const TimeBox = styled.p`
        padding:7px;
        text-align: center;
        max-width: 50px;
        font-size: 12px;
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.green};
    `;

    const Line = styled.hr`
        width: 100%;
        margin: 0 auto;
        padding: 0;
        height: 0;
        border: 0;
        border-top: 1px solid #cccccc;
    `;

    const MainInfo = styled(Time)``; // `` is needed because objects are not vaild as a props children 

    return(
        <>
            <Title>{props.title}</Title>
            <Time>{props.place} / {props.date}</Time>
            <TimeBox>{props.time}</TimeBox>
            <Line />
            <MainInfo>{props.mainInfo}</MainInfo>
        </>
    );
}

export default ProjectCard;