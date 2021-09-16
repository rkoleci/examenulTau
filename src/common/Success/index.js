import React from 'react'
import PropTypes from 'prop-types'

import { Container, Center, Label, Icon, Bottom } from './styles'

const Success = ({ label, actionButton }) => {
    return (
        <Container>
            <Center>
                <Icon color={'primary'} />
                <Label>{label}</Label>
                <Bottom>{actionButton}</Bottom>
            </Center>
        </Container>
    )
}

Success.propTypes = {
    label: PropTypes.string,
    actionButton: PropTypes.object,
}

export default Success