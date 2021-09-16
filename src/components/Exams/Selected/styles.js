import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'

export const Header = styled(Card)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const InlineLeft = styled.div` 
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const Dashed = styled.div`
    border: 4px dashed rgba(0, 0, 0, .1);
    border-radius: 12px;
    text-align: center;
    padding: 30px 0;
`

export const AddButton = styled(Button)`
    background: #006C33;
    padding: 16px 50px;
`

export const SendButton = styled(Button)`
    color: white;
    width: 50%;
    margin-left: 25%;
    margin-top: 20px;
    margin-bottom: 50px;
    
    @media screen and (max-width: 450px) {
        width: 100%;
        margin-left: 0;
    }
`