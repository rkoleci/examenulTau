import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate';
import {
    Grid,
} from '@material-ui/core'
import './pagination.css'

const PAGE_RESULTS_LIMIT = 10;

const Paging = ({ onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [max, setMax] = useState(0)
    const results = useSelector(state => state.searchRequest)

    useEffect(() => {
        const { data, fetched } = results;

        if (fetched && data && data.data && data.data.total_count) {
            setMax(Math.ceil(data.data.total_count / PAGE_RESULTS_LIMIT))
        }
    }, [results])

    if (max > 0 && results.fetched) {
        return (
            <div>
                <Grid container xs={12} justify="center">
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={max}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={p => onPageChange(p.selected)}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"} />
                </Grid>
            </div>
        )
    }

    return null;
}

Paging.propTypes = {
    onNext: PropTypes.func,
    onPrev: PropTypes.func,
}

export default Paging;

