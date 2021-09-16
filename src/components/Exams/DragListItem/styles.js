import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import PanToolIcon from '@material-ui/icons/PanTool';

export const DragIcon = styled(PanToolIcon)`
    visibility: hidden;
    position: absolute:
    top: 0;
    left: 5px; 
`

export const Container = styled(Paper)`
    position: relative;

    background: #F1F1F1;
    padding: 20px 16px;
    margin-bottom: 20px;

    &:hover ${DragIcon} {
        visibility: visible;
      }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Description = styled.p`
    color: #4A4A4A;
    font-family: "Helvetica Neue";
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px
`
export const BottomRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    width: 100%;
`