import styled from 'styled-components'
import { Typography, DialogContent, TextareaAutosize, Button } from '@material-ui/core'

export const Label = styled.div`
    color: #9B9B9B;
    font-size: 16px;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    margin-bottom: 10px;
`

export const Content = styled(DialogContent)`
    padding: 20px;
`

export const Text = styled(TextareaAutosize)`
    width: 100%;
`

export const SendBtn = styled(Button)`
    color: white;
`

export const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const HeaderTitle = styled(Typography)`
    color: #414142;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`