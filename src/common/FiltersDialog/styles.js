import styled from 'styled-components'
import { DialogTitle, Button } from '@material-ui/core'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled(DialogTitle)`
    text-align: center;
    font-family: "Helvetica Neue";
`
export const Apply = styled(Button)`
    background: #FF7901;
    color: white;
    margin: 16px;
`