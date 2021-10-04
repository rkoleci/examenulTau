import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const HeaderTitle = styled(Typography)`
    color: #414142;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export const Image = styled.img`
    width: ${props => props.width};
    height: 300px;
`