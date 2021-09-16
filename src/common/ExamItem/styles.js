import styled from 'styled-components'
import { Link, Button } from '@material-ui/core'

export const Category = styled.p`
    color: #9B9B9B;
    font-family: "Helvetica Neue";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 18px;
`

export const ReportError = styled(Link)`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    line-height: 15px;
    text-decoration: underline;
    color: #5263FF;
`

export const Description = styled.p`
    color: #4A4A4A;
    font-family: "Helvetica Neue";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
`
export const Index = styled.p`
    color: #4A4A4A;
    font-family: "Helvetica Neue";
    font-size: 14px;
    letter-spacing: 0;
    line-height: 18px;
    width: 100%;
    text-align: right;
`

export const AddButton = styled(Button)`
    cursor: pointer;
    background: #006C33;
    letter-spacing: 1px;
    color: #FFFFFF; 
    display: flex;
    align-items: center;
    place-content: center;
    text-transform: capitalize;
`
export const RemoveButton = styled(Button)`
    cursor: pointer;
    background: red;
    letter-spacing: 1px;
    color: #FFFFFF; 
    display: flex;
    align-items: center;
    place-content: center;
    text-transform: capitalize;
`
export const Image = styled.img`
    margin-right: 10px;
`

export const InlineSpaced = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.padding ? '16px' : ''};
`