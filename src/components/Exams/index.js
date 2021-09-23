import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector } from 'react-redux'
import {
    Grid,
    Box,
    Button, 
    IconButton,
    useMediaQuery,
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useTranslation } from 'react-i18next';

import { Title, Test, TotalLength, Filtered, Inline } from './styles'

import Common from '../../common'
import LoadingItem from './LoadingItem'
import { searchRequest, clearFilters, openBottomSheet, closeBottomSheet, changeExamsPage } from '../../core/actions/exams'
import { filters } from '../../config/constants'
import Selected from './Selected'
import { InlineSpaced } from '../../common/ExamItem/styles';

const PAGE_RESULTS_LIMIT = 10;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 16
    },
}));

const Exams = ({ searchRequest, clearFilters, openBottomSheet, closeBottomSheet, changeExamsPage }) => {
    const classes = useStyles();
    const [total, setTotal] = useState('')
    const [current, setCurrent] = useState(0)
    const [filtered, setFiltered] = useState('')
    const [selectedItems, setSelectedItems] = useState([])
    const [filtersModalOpen, setFiltersModalOpen] = useState(false)
    const [previewIcon, setPreviewIcon] = useState('')
    const [errorOpen, setErrorOpen] = useState('')
    const [menu, setMenu] = useState(0)
    const { t } = useTranslation()

    const results = useSelector(state => state.EXAMS.searchRequest)
    const examsPage = useSelector(state => state.EXAMS.examsPage)

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

    useEffect(() => {
        if (selectedItems.length == 0) {
            closeBottomSheet()
        } else {
            openBottomSheet({ length: selectedItems.length })
        }

    }, [selectedItems])

    useEffect(() => {
        if (examsPage.menu == 0) {
            if (menu !== 0) setMenu(0)
        }
        if (examsPage.menu == 1) {
            if (menu !== 1) {
                closeBottomSheet()
                setMenu(1)
            }
        }
    }, [examsPage])

    const onDeleteItem = (arg) => {
        console.log('onDelteItem: ', arg,)
        if (arg === 'all') {
            setSelectedItems([])
        } else {
            setSelectedItems(selectedItems.filter(i => i !== arg))
        }
    }

    const Results = () => {
        const { fetching, fetched, data, errored, error } = results

        if (fetching) {
            return (
                <Grid container xs={12} align="center" spacing={!isMobile && 4}>
                    {Array.from(Array(4).keys()).map(i => (
                        <>
                            <Grid item md={6} xs={12}>
                                <LoadingItem />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <LoadingItem />
                            </Grid>
                        </>
                    ))}
                </Grid>
            )
        }

        if (fetched && data && data.data) {
            return (
                <Grid item xs={12}>
                    <Inline>
                        <TotalLength>{total ? `${total} ${t('exercises total')}` : ''}</TotalLength>
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
                                        onPreviewOpen={(img) => setPreviewIcon(img)}
                                        onErrorDialog={id => setErrorOpen(id)}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            )
        }

        return null;
    }

    if (menu == 1) return <Selected list={selectedItems} onBack={() => setMenu(0)} onDeleteItem={(id) => onDeleteItem(id)} />

    return (
        <Grid container xs={12}>
            {!isMobile && <Grid item xs={1} className={classes.root} />}

            <Grid container xs={12} md={10} className={classes.root} >

                <Box pt={!isMobile ? 8 : 2} width={1}>
                    <Grid container md={12} xs={12} justifyContent={'space-between'} spacing={!isMobile && 8}>
                        <Grid item xs={12} md={10}>
                            <Title>{t('create a test')}</Title>
                        </Grid>
                        {!isMobile &&
                            <Grid item xs={12} md={2}>
                                <Test onClick={() => setMenu(1)} fullWidth variant={'contained'} xs={12}>{t('test')}</Test>
                            </Grid>}
                    </Grid>
                </Box>

                <Grid container xs={12} justify={'center'} spacing={!isMobile && 4}>
                    <Grid item md={4} xs={12}>

                        {!isMobile &&
                            <InlineSpaced>
                                <Filtered>{t('filtered')}</Filtered>
                                <IconButton onClick={() => {
                                    clearFilters();
                                    setFiltered({})
                                }}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </InlineSpaced>}

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
                    <Grid item md={8} xs={12}>
                        <Results />
                        <Box pt={3} width={1}>
                            {isMobile &&
                                <Grid item xs={12} md={2}>
                                    <Button fullWidth variant={'contained'} xs={12} color={'primary'}>{t('test')}</Button>
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
            {previewIcon !== '' && <Common.PreviewDialog openPreview={previewIcon !== ''} onClose={() => setPreviewIcon('')} />}
            {errorOpen !== '' && <Common.ErrorDialog open={errorOpen !== ''} onClose={() => setErrorOpen('')} />}
        </Grid >
    )
}

Exams.propTypes = {
    searchRequest: PropTypes.func,
    clearFilters: PropTypes.func,
    openBottomSheet: PropTypes.func,
    closeBottomSheet: PropTypes.func,
    changeExamsPage: PropTypes.func,
}

export default connect(null, (dispatch) => {
    return {
        searchRequest: p => dispatch(searchRequest(p)),
        clearFilters: () => dispatch(clearFilters()),
        openBottomSheet: (p) => dispatch(openBottomSheet(p)),
        closeBottomSheet: () => dispatch(closeBottomSheet()),
        changeExamsPage: p => dispatch(changeExamsPage(p)),
    }
})(Exams)