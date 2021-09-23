import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

import { Container, Error } from './styles'

const LoadingBtn = ({ loading, children, errorLabel }) => {
    return (
        <Container>
            {loading ?
                <CircularProgress color={'primary'} />
                :
                <Container>
                    {children}
                    {errorLabel && <Error>{errorLabel}</Error>}
                </Container>}
        </Container>
    )
}

LoadingBtn.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
}

export default LoadingBtn