import React from 'react';
import { connect } from 'react-redux'
import { IconButton, Dialog, Button } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { Container, Title, Apply } from './styles'
import { clearFilters } from '../../core/actions/exams'

const FiltersDialog = ({ open, children, onClose, clearFilters, onClear, onApply }) => {
    return (
        <Dialog onClose={() => onClose()} aria-labelledby="simple-dialog-title" open={open}>
            <Container>
                <Title>Filter</Title>
                <IconButton onClick={() => {
                    clearFilters()
                    onClear()
                }}>
                    <HighlightOffIcon />
                </IconButton>
            </Container>
            {children}
            <Apply onClick={() => onApply()} variant={'contained'}>Apply</Apply>
        </Dialog>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearFilters: () => dispatch(clearFilters()),
    }
}

export default connect(null, mapDispatchToProps)(FiltersDialog)