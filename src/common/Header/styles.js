import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 58px; 
    padding: .5rem 1rem;
    box-shadowrgba(0, 0, 0, 0.1) 0px 0px 45px 0px;
    box-sizingborder-box;  
`

export const Image = styled.img`
    height: 30px;
     
`


export const Inline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props => props.top ? '-10px': ''};
`

export const ProfileIcon = styled.div`
    height: 30px;
    width: 30px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
`

export const Type = styled.p`
    margin: 0;
    font-size: 14px;

`
export const Name = styled.p`
    margin: 0;
    font-size: 14px;
`
export const Logout = styled.p`
    text-decoration: underline;
    margin: 0;
    font-size: 12px;
`

export const MenuItemContainer = styled.div`
    text-align: center;
    border-bottom: ${props => props.new ? '1px solid orange' : 'none'};
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover{
        border-bottom: 1px solid green;
        cursor: pointer;
    }
`

export const New = styled.p`
    background: red;
    border-radius: 20px;
    text-align: center;
    color: white;
    font-size: 14px;
    display: inline-block;
    opacity: ${props => props.new ? '1' : '0'}; 
    margin-bottom: 0;
`

export const MenuItem = styled.p`
    color: ${props => props.new ? 'orange' : 'black'};
    margin: 5px;
    font-size: 14px;
`

export const VerticalCenter = styled.div`
    background: red; 
    text-align: right;
`

export const AvatarIcon = styled(Avatar)`
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    background: #FF7901;
`

export const SecondaryText = styled.p`
    color: white;
    font-family: "Helvetica Neue";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 18px;
    margin: 0;
`