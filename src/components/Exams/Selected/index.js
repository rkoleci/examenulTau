import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    IconButton,
    Typography,
    useMediaQuery,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

import {
    Header,
    InlineLeft,
    Dashed,
    AddButton,
    SendButton,
} from './styles'
import { Title } from '../styles'

import Common from '../../../common'
import DragListItem from '../DragListItem'
import SendTestModal from '../SendTestModal'
import { changeExamsPage, closeBottomSheet } from '../../../core/actions/exams'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 16
    },
}));

const Selected = ({ list, changeExamsPage, onDeleteItem, closeBottomSheet }) => {
    const classes = useStyles()
    const [sendModal, setSendModal] = useState(false)

    const isMobile = useMediaQuery('(max-width:450px)');

    useEffect(() => {
        closeBottomSheet()
    }, [])

    return (
        <Grid container xs={12}>
            {!isMobile && <Grid item xs={2} className={classes.root} />}

            <Grid container xs={12} md={8} className={classes.root} >
                <Box pt={!isMobile ? 7 : 2} width={1}>
                    <Title>Exercies</Title>
                    <Header>
                        <InlineLeft>
                            <IconButton onClick={() => changeExamsPage({ menu: 0 })}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography>Back</Typography>
                        </InlineLeft>
                        <IconButton onClick={() => onDeleteItem('all')}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </Header>
                    <Common.DraggableList list={list} onDeleteItem={(id) => onDeleteItem(id)} renderItem={<DragListItem />} />
                    <Dashed>
                        <AddButton
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon fontSize="large" />}
                            onClick={() => changeExamsPage({ menu: 0 })}
                        >
                            ADD EXERCISE
                        </AddButton>
                    </Dashed>
                    <SendButton
                        variant="contained"
                        color="secondary"
                        startIcon={<SendIcon />}
                        fullWidth
                        onClick={() => setSendModal(true)}
                        disabled={list.length == 0}
                    >
                        Send the test
                    </SendButton>
                </Box>
            </Grid>

            {!isMobile && <Grid item xs={2} className={classes.root} />}
            {sendModal && <SendTestModal open={sendModal} onClose={() => setSendModal(false)} onFinish={() => {
                setSendModal(false);
                onDeleteItem('all')
                changeExamsPage({ menu: 0 })
            }} />}
        </Grid >
    )
}

Selected.propTypes = {
    items: PropTypes.array,
    changeExamsPage: PropTypes.func,
    onDeleteItem: PropTypes.func,
    closeBottomSheet: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeExamsPage: (p) => dispatch(changeExamsPage(p)), 
        closeBottomSheet: () => dispatch(closeBottomSheet()),
    }
}

export default connect(null, mapDispatchToProps)(Selected)