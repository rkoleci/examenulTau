import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Dialog,
    TextField,
    Typography,
    Grid,
    Button
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

import Common from '../../../common'
import { Label, Content, Text, Date, SendBtn } from './styles'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const TextArea = ({ label }) => {
    return (
        <>
            <Label>{label}</Label>
            <Text aria-label="empty textarea" placeholder="Empty" minRows={5} />
        </>
    )
}

const styles_dialog = {
    dialogPaper: {
        minHeight: '60vh'
    }
}

const SendTestModal = ({ open, onClose, onFinish, classes }) => {
    const [success, setSuccess] = useState(false)

    return (
        <Dialog onClose={() => onClose()} aria-labelledby="customized-dialog-title" open={open} classes={{ paper: classes.dialogPaper }} >
            {success ?
                <>
                    <Common.Success
                        label="Test Sent!"
                        actionButton={<Button color={"primary"} variant="contained" fullWidth onClick={() => onFinish()}>Finish</Button>}
                    />
                </>
                :
                <>
                    <DialogTitle>Send the test</DialogTitle>
                    <Content dividers>
                        <>
                            <Grid container spacing={4}>
                                <Grid item md={6} xs={12}>
                                    <TextArea label="Test name" />
                                    <Common.Select />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextArea label="Test Description" />
                                    <Common.Select />
                                </Grid>
                            </Grid>

                            <Date container md={12} justifyContent="center">
                                <TextField
                                    id="datetime-local"
                                    label=""
                                    type="datetime-local"
                                    defaultValue="2017-05-24T10:30"
                                    InputLabelProps={{
                                        shrink: true,

                                    }}
                                />
                            </Date>

                            <SendBtn
                                variant="contained"
                                startIcon={<SendIcon />}
                                color="secondary"
                                onClick={() => setSuccess(true)}
                                fullWidth
                            >
                                Send the Test
                        </SendBtn>

                        </>
                    </Content>
                </>
            }
        </Dialog>
    )
}

SendTestModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
}

export default withStyles(styles_dialog)(SendTestModal)