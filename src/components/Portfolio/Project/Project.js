import React from 'react';
import styled from 'styled-components';

import lupeIcon from '../../../assets/project-lupe.svg';

const Project = (props) => {

    const Box = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        background-image: url(${props.image});
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        margin: 10px;
        
        :after{
            opacity: 0;
            content:'';
            transition: opacity 0.3s ease-out;
            background-color: rgba(46, 204, 113, .7);
            background-image: url(${lupeIcon});
            background-repeat: no-repeat;
            position: absolute;
            width: 100%;
            height: 100%;
            background-position: center;
        }
        :hover{
            :after{
                transition: all 0.3s ease-out;
                cursor: pointer;
                opacity: 1;
            }
        }
    `;

    const TextWrapper = styled.div`
        position: absolute;
        background-color: rgba(46, 204, 113,0.9);
        color: #ffffff;
        font-size: 20px;
        top: 10%;
    `;

    const ProjTitle = styled.p`
        font-size: 15px;
        padding: 0px 5px 0px 5px;
    `;

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Box>
                <TextWrapper>
                    <ProjTitle>Project: {props.title}</ProjTitle>
                    <ProjTitle>Employer: {props.employer}</ProjTitle>
                </TextWrapper>
            </Box>
        </a>
    )
}

export default Project;