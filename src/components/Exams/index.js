import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector } from 'react-redux'
import {
    Grid,
    Box,
    Typography,
    Button,
    CircularProgress,
    IconButton,
    useMediaQuery,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Title, Test, TotalLength, Filtered, Inline } from './styles'

import Common from '../../common'
import { searchRequest, clearFilters } from '../../core/actions/exams'
import { filters } from '../../config/constants'

const PAGE_RESULTS_LIMIT = 10;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Exams = ({ searchRequest, clearFilters }) => {
    const classes = useStyles();
    const [total, setTotal] = useState('')
    const [current, setCurrent] = useState(0)
    const [filtered, setFiltered] = useState('')
    const [selectedItems, setSelectedItems] = useState([])
    const [filtersModalOpen, setFiltersModalOpen] = useState(false)

    const results = useSelector(state => state.searchRequest)

    const isMobile = useMediaQuery('(max-width:450px)');

    useEffect(() => {
        searchRequest({
            "enabled": true,
            "curriculum": "MAT",
            "grade": 5,
            "chapter": 5,
            "notion": "NOT14C13",
            "keywords": [
                [
                    "multimi",
                    "elemente"
                ]
            ],
            "difficulty": 1,
            "size": 10,
            "start_index": current
        })
    }, [current])

    useEffect(() => {
        const { fetched, data } = results;

        if (fetched && data && data.data) {
            setTotal(data.data.total_count)
        }
    }, [results])

    const Results = () => {
        const { fetching, fetched, data, errored, error } = results

        if (fetching) {
            return (
                <Grid item xs={12} align="center" style={{ height: "100%" }}>
                    <CircularProgress />
                    <Typography>Loading...</Typography>
                </Grid>
            )
        }

        if (fetched && data && data.data) {
            return (
                <Grid item xs={12}>
                    <Inline>
                        <TotalLength>{total ? `${total} exercies displayed according to criteria` : ''}</TotalLength>
                        {isMobile && (
                            <IconButton onClick={() => setFiltersModalOpen(true)}>
                                <FilterListIcon />
                            </IconButton>
                        )}
                    </Inline>
                    <Grid container xs={12} spacing={!isMobile ? 4 : 1}>
                        {data.data.items.slice(PAGE_RESULTS_LIMIT * current, (PAGE_RESULTS_LIMIT * current) + PAGE_RESULTS_LIMIT)
                            .map(item => (
                                <Grid item md={6} xs={12}>
                                    <Common.ExamItem
                                        {...item}
                                        onSelect={(id) => {
                                            if (selectedItems.includes(id)) {
                                                setSelectedItems(selectedItems.filter(item => item !== id))
                                                return
                                            }
                                            setSelectedItems([...selectedItems, id])
                                        }}
                                        selected={selectedItems.includes(item.id)}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            )
        }

        return null;
    }

    console.log(filtered)
    return (
        <Grid container xs={12}>
            {!isMobile && <Grid item xs={1} className={classes.root} />}

            <Grid container xs={12} md={10} className={classes.root} >

                <Box pt={!isMobile ? 8 : 2} width={1}>
                    <Grid container md={12} xs={12} justifyContent={'space-between'} spacing={!isMobile && 8}>
                        <Grid item xs={12} md={10}>
                            <Title>Create a Test</Title>
                        </Grid>
                        {!isMobile &&
                            <Grid item xs={12} md={2}>
                                <Test fullWidth variant={'contained'} xs={12}>Test</Test>
                            </Grid>}
                    </Grid>
                </Box>

                <Grid container xs={12} justify={'center'} spacing={!isMobile && 4}>
                    <Grid item md={3} xs={12}>

                        {!isMobile &&
                            <Grid container xs={12} md={12} justify="space-between">
                                <Filtered>Filtered</Filtered>
                                <IconButton onClick={() => {
                                    clearFilters();
                                    setFiltered({})
                                }}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </Grid>}

                        {!isMobile ?
                            filters.map(f =>
                                <Common.FiltersBlock
                                    {...f}
                                    onFilterChanged={list => {
                                        setFiltered({ ...filtered, [f.type]: list })
                                    }} />)
                            :
                            <Common.FiltersDialog
                                open={filtersModalOpen}
                                onClear={() => setFiltered('')}
                                onApply={() => setFiltersModalOpen(false)}
                                onClose={() => setFiltersModalOpen(false)} >
                                {filters.map(f =>
                                    <Common.FiltersBlock
                                        {...f}
                                        filtered={filtered}
                                        onFilterChanged={list => {
                                            setFiltered({ ...filtered, [f.type]: list })
                                        }} />)}
                            </Common.FiltersDialog>}

                    </Grid>
                    <Grid item md={9} xs={12}>
                        <Results />
                        <Box pt={3} width={1}>
                            {isMobile &&
                                <Grid item xs={12} md={2}>
                                    <Button fullWidth variant={'contained'} xs={12} color={'primary'}>Test</Button>
                                </Grid>}
                            <Grid item xs={12} md={12}>
                                <Common.Pagination
                                    onPageChange={(selected) => setCurrent(selected)}
                                />
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>

            {!isMobile && <Grid item xs={1} className={classes.root} />}
        </Grid >
    )
}

Exams.propTypes = {
    searchRequest: PropTypes.func,
    clearFilters: PropTypes.func,
}

export default connect(null, (dispatch) => {
    return {
        searchRequest: p => dispatch(searchRequest(p)),
        clearFilters: () => dispatch(clearFilters()),
    }
})(Exams)