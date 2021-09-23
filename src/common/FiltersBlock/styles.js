import styled from 'styled-components'
import { ListItem } from '@material-ui/core'

export const ItemContainer = styled.div`
    margin-bottom: 10px;
`

export const Category = styled.p`
    color: #4A4A4A;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 24px;
    margin: 0 0 0 10px;
    text-align: left;

    @media screen and (max-width: 450px) {
        text-align: center;
    }
`
export const SubCategory = styled.p`
    color: #4A4A4A;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 16px; 
    letter-spacing: 0;
    line-height: 24px;
    margin: 0;
    text-align: left;

    @media screen and (max-width: 450px) {
        text-align: center;
    }
`

export const Item = styled.p`
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    display: block;
    color: #4A4A4A;
    opacity: 1;
    font-weight: 500 !important;
    position: relative;
    
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
export const ListItemContainer = styled(ListItem)`
    padding-top: 0;
    padding-bottom: 0;
`

export const SeeLess = styled.p`
    color: #4A4A4A;
    cursor: pointer;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    padding-left: 10px;
`
export const SeeMoreContainer = styled.div`
    display: flex;
    justify-contents: flex-start;
    alignItems: center;
    padding-top: 20px;
    padding-left: 10px;
`
export const Another = styled.p`
    color: #4A4A4A;
    cursor: pointer;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 14px;
    margin: 1px 3px 0 0;
`
export const Chapters = styled.p`
    color: #4A4A4A;
    cursor: pointer;
    font-weight: 700;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 14px;
    margin: 0 3px 0 0;
`

export const SeeMore = styled.p`
    color: #4A4A4A;
    cursor: pointer;
    text-decoration: underline;
    font-family: "HelveticaNeue", "Helvetica Neue", sans-serif;
    font-size: 14px;
    margin: 0;
`

export const FullWidth = styled.div`
    width: 100%;
`
export const Inline = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
`