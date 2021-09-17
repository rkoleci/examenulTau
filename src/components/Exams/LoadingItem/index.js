import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';

import { Inline } from './styles'

const LoadingItem = () => {
    return (
        <>
            <Inline>
                <Skeleton count={1} width={100} />
            </Inline>
            <p></p>
            <Skeleton count={5} />
            <p></p>
            <Inline>
                <Skeleton count={1} width={100} />
                <Skeleton count={1} width={100} />
            </Inline>

        </>
    )
}

LoadingItem.propTypes = {

}

export default LoadingItem