import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
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

import Common from 'common'
import {
    Label,
    Content,
    Text,
    Date,
    SendBtn, 
    HeaderTitle,
} from './styles'
import { sendToClassRoom, clearSentToClassRoom } from 'core/actions/exams'
import { studentList, classList } from 'config/constants'
import { SendToClassRommSchema } from 'config/validation/exams'
import { isEmpty } from 'config/utils'

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
            <HeaderTitle variant="h6">{children}</HeaderTitle>
            <IconButton aria-label="close" className={classes.closeButton} onClick={() => onClose()}>
                <CloseIcon color={"accent"} />
            </IconButton>
        </MuiDialogTitle>
    );
});

const TextArea = ({ label, onChange }) => {
    return (
        <>
            <Label>{label}</Label>
            <Text onChange={(e) => onChange(e.target.value)} aria-label="empty textarea" placeholder="Empty" minRows={5} />
        </>
    )
}

const styles_dialog = {
    dialogPaper: {
        minHeight: '60vh'
    }
}

const SendTestModal = ({ open, onClose, onFinish, classes, API }) => {
    const [success, setSuccess] = useState(false)
    const { t } = useTranslation()
    const [data, setData] = useState({ name: '', description: '', student: '', class: '', timestamp: '' })
    const [error, setError] = useState('')

    const sendToClass = useSelector(state => state.EXAMS.sendToClassroom)

    useEffect(() => {
        const { created, error, errored } = sendToClass

        if (created) setSuccess(true)
        if (!error) setError('')
        if (error) setError(t('send_dialog.server_error'))

    }, [sendToClass])

    const onSubmit = () => {
        SendToClassRommSchema
            .validate(data, { abortEarly: false })
            .then((valid) => {
                if (valid) API.sendToClassRoom(data)
            }).catch(err => {
                setError(err.errors[0])
            })
    }

    return (
        <Dialog onClose={() => onClose()} aria-labelledby="customized-dialog-title" open={open} classes={{ paper: classes.dialogPaper }} >
            {success ?
                <>
                    <Common.Success
                        label={t('send_dialog.sent')}
                        actionButton={<Button
                            color={"primary"}
                            variant="contained"
                            fullWidth
                            onClick={() => { API.clearSentToClassRoom(); onFinish() }}
                        >
                            {t('finish')}
                        </Button>
                        }
                    />
                </>
                :
                <>
                    <DialogTitle onClose={() => onClose()}>{t('send test')}</DialogTitle>
                    <Content dividers>
                        <>
                            <Grid container spacing={4}>
                                <Grid item md={6} xs={12}>
                                    <TextArea
                                        name="name"
                                        label={t('send_dialog.test name')}
                                        onChange={(e) => setData({ ...data, ['name']: e })}
                                    />
                                    <Common.Select
                                        label={'Student'}
                                        values={studentList}
                                        onChange={(v) => setData({ ...data, ['student']: v })}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextArea
                                        name="description"
                                        label={t('send_dialog.test description')}
                                        onChange={(e) => setData({ ...data, ['description']: e })}
                                    />
                                    <Common.Select
                                        label={'Class'}
                                        values={classList}
                                        onChange={(v) => setData({ ...data, ['class']: v })}
                                    />
                                </Grid>
                            </Grid>

                            <Date container md={12} justifyContent="center">
                                <TextField
                                    name="datetime"
                                    id="datetime-local"
                                    label=""
                                    type="datetime-local"
                                    defaultValue="2017-05-24T10:30"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setData({ ...data, ['timestamp']: e.target.value })}
                                />
                            </Date>

                            <Common.LoadingBtn loading={sendToClass.creating} errorLabel={error}>
                                <SendBtn
                                    variant="contained"
                                    startIcon={<SendIcon />}
                                    color="secondary"
                                    onClick={() => onSubmit()}
                                    fullWidth
                                    disabled={isEmpty(data)}

                                >
                                    {t('send test')}
                                </SendBtn>
                            </Common.LoadingBtn>

                        </>
                    </Content>
                </>
            }
        </Dialog >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        API: {
            sendToClassRoom: p => dispatch(sendToClassRoom(p)),
            clearSentToClassRoom: () => dispatch(clearSentToClassRoom()),
        }
    }
}

SendTestModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    API: PropTypes.shape({
        sendToClassRoom: PropTypes.func,
        clearSentToClassRoom: PropTypes.func,
    })
}

export default connect(null, mapDispatchToProps)(withStyles(styles_dialog)(SendTestModal))