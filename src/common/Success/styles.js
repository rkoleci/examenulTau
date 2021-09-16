import styled from 'styled-components'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export const Container = styled.div`
    text-align: center;
    min-width: 300px;
    padding: 20px;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Center = styled.div`
    text-align: center;
    width: 100%;  
    height: 100%;
    position: relative;
`

export const Label = styled.p`
    margin-bottom: 25px !important;
    text-align: center; 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    letter-spacing: 0px;
    color: #414142;
    opacity: 1;
    margin: 0 auto; 
    font-weight: bold;
    line-height: 34px;
`

export const Icon = styled(CheckCircleOutlineIcon)`
    font-size: 100px;
    margin-top: 25%;
`

export const Bottom = styled.div`
    position: absolute;
    background: red;
    bottom: 20px;
    left: 0px;
    right: 0;
`