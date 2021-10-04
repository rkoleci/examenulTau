import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Slider = styled.div`
    box-sizing: border-box;
    position: fixed;
    width: 50%;
    bottom: 0;
    left: 25%;
    right: 0;
    transform: ${props => props.open ? 'translateY(0)' : 'translateY(170px)' };
    transition: .3s;

    background: #5E5E64;
    box-shadow: rgba(120, 122, 128, 0.655) 0px 2px 15px;

    display: flex;
    align-items: center;
    justify-content: ${props => props.isMobile ? 'flex-start' : 'space-between'};
    padding: 10px 16px;
    border-radius: 8px;

    @media screen and (max-width: 450px) {
        width: 100%;
        left: 0;
        right: 0;
    }
`

export const Exercises = styled.p`
    font-size: 20px;
    color: white; 
    font-family: Helvetica Neue;
    text-align: center;

    @media screen and (max-width: 450px) {
        text-align: center;
    }
`

export const Image = styled.img`
    margin-left: 30px;

    @media screen and (max-width: 450px) {
        margin-left: 0;
        margin-right: 30px;
    }
`

export const CreateBtn = styled(Button)`
    background: #FF7901;
    color: white;
    padding: 16px;
`

export const Container = styled.div`
    width: 100%;
    display: block;
`