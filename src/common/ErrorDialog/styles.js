import styled from 'styled-components'
import { Button, ListItemText, TextareaAutosize } from '@material-ui/core'

export const Container = styled.p`
    padding: 16px;
    text-align: center;
    position: relative;
`

export const Title = styled.p`
    margin-bottom: 25px !important;
    text-align: center;
    max-width: 90%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    letter-spacing: 0px;
    color: #414142;
    opacity: 1;
    margin: 0 auto;
    width: 480px;
    font-weight: bold;
    line-height: 34px;
`

export const SubTitle = styled.p`
    margin-bottom: 25px !important;
    max-width: 90%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 29px !important;
    color: #414142;
    opacity: 1;
    margin: 0 auto;
    width: 480px;
    font-weight: bold;
`

export const Image = styled.img`
    height: 200px; 
`

export const Item = styled(ListItemText)`
    text-align: left;
    letter-spacing: 0px;
    color: #4A4A4A;
    font-size: 16px;
    font-weight: normal;
`

export const Send = styled(Button)`
    margin-top: 30px;
`

export const Close = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    cursor: pointer;
`

export const TextArea = styled(TextareaAutosize)`
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #006C33;
    border-radius: .25rem;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
`
