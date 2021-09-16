import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

import { Container } from './styles'

const LoadingBtn = ({ loading, children }) => {
    return (
        <Container>
            {loading ?
                <CircularProgress color={'primary'} />
                : children}
        </Container>
    )
}

LoadingBtn.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
}

export default LoadingBtn