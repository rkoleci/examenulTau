import React from 'react'
import PropTypes from 'prop-types'
import { 
    Grid,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import {
    Container,
    Image,
    DragIcon,
    Description,
    BottomRight
} from './styles'
import img from 'assets/T1-1.png'

const DragListItem = ({ customProps }) => {
    return (
        <Container>
            <DragIcon />
            <Grid container xs={12} md={12}>
                <Grid item xs={12} md={7}>
                    <Description>Lorem Ipsuem</Description>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src={img} />
                </Grid>
                <BottomRight>
                    <IconButton onClick={() => customProps.onDeleteItem(customProps.id)}>
                        <DeleteIcon />
                    </IconButton>
                </BottomRight>
            </Grid>
        </Container>
    )
}

DragListItem.propTypes = {
    customProps: PropTypes.object,
}

export default DragListItem