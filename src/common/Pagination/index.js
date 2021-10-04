import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import { Container } from './styles'

const PAGE_RESULTS_LIMIT = 10;

const Paging = ({ onPageChange }) => {
    const [max, setMax] = useState(0)
    const results = useSelector(state => state.EXAMS.searchRequest)

    useEffect(() => {
        const { data, fetched } = results;

        if (fetched && data && data.data && data.data.total_count) {
            setMax(Math.ceil(data.data.total_count / PAGE_RESULTS_LIMIT))
        }
    }, [results])

    if (max > 0 && results.fetched) {
        return (
            <Container>
                <Pagination
                    count={max}
                    variant="outlined"
                    shape="rounded"
                    color={'primary'}
                    onChange={(e, p) => onPageChange(p)}
                />
            </Container>
        )
    }

    return null;
}

Paging.propTypes = {
    onPageChange: PropTypes.func,
}

export default Paging;

