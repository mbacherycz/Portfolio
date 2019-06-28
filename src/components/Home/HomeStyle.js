import styled from 'styled-components';
import wrapperBackground from '../../assets/homeHero.png'

export const Wrapper = styled.div`
    background-image: url(${wrapperBackground});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    position: relative;
    font-size: 50px;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    text-align: center;
    margin: auto;
    margin-top: 50vh;
    border-top: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    padding: 20px;
    :before{
        content: '';
        background-color: #ffffff;
        position: absolute;
        height: 1px;
        width: 25%;
        bottom: 0px;
        left: 0px;
    }
    :after{
        content: '';
        background-color: #ffffff;
        position: absolute;
        height: 1px;
        width: 25%;
        bottom: 0px;
        right: 0px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin-top: -10px;
    border-top: none;
`;