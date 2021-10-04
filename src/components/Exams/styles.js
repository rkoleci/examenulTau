import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Title = styled.p`
    font-size: 32px;
    margin: 0;
    font-weight: bold;
    color: #414142;
    font-family: "Helvetica Neue";
    text-align: left;

    @media screen and (max-width: 450px) {
        text-align: center;
    }
`
export const Test = styled(Button)`
    background: #FF7901;
    color: white;
`
export const Inline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TotalLength = styled.p` 
    color: #414142;
    font-family: "Helvetica Neue"; 
    text-align: left;

    @media screen and (max-width: 450px) {
        text-align: left;
    }
`
export const Filtered = styled.p`
    color: #9B9B9B;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
    text-transform: uppercase;
    font-weight: bold;
`

export const FullWidth = styled.div``