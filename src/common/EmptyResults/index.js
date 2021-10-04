import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from '@material-ui/icons/Info'

import { Container, Label } from './styles'

const EmptyResults = ({ label, onRefresh }) => {
    return (
        <Container onClick={() => onRefresh && onRefresh()}>
            <InfoIcon color="primary" fontSize="large" />
            <Label>{label}</Label>
        </Container>
    )
}

EmptyResults.propTypes = {
    label: PropTypes.string,
    onRefresh: PropTypes.func,
}

export default EmptyResults