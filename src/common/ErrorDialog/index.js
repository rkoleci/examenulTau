import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, Checkbox, Button, ListItemIcon, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next'

import {
    Container,
    Title,
    SubTitle,
    Image,
    Item,
    TextArea,
    Send,
    Close,
} from './styles'
import { ListItemContainer } from '../FiltersBlock/styles'
import Common from 'common'
import svg from 'assets/error.svg'
import { useTranslatedStrings } from 'config/hooks'
import { ReportErrorSchema } from 'config/validation/exams'

const ErrorDialog = ({ open, onClose, id }) => {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const { t } = useTranslation()
    const exerciseErrors = useTranslatedStrings('exerciseErrors')

    const onSubmit = () => {
        ReportErrorSchema
            .validate({ error }, { abortEarly: false })
            .then((valid) => {
                if (valid) setSuccess(true)
            }).catch(error => {
                setErrorMessage(error.errors[0])
            })
    }

    return (
        <Dialog open={open} onClose={() => onClose()}>
            {success ?
                <Common.Success
                    label={t('error_dialog.reported')}
                    actionButton={<Button color={"primary"} variant="contained" fullWidth onClick={() => { onClose(); }}>{t('finish')}</Button>}
                />
                :
                <DialogContent>
                    <Container>
                        <Title>{t('error_dialog.title')}</Title>
                        <SubTitle>{t('error_dialog.subtitle')}</SubTitle>
                        <Image src={svg} />
                        {exerciseErrors.map(e => (
                            <ListItemContainer role={undefined} dense button onClick={() => setError(error == e ? '' : e)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={error === e}
                                        onChange={() => setError(error == e ? '' : e)}
                                        tabIndex={-1}
                                        disableRipple
                                        color={'primary'}
                                    />
                                </ListItemIcon>
                                <Item id={e} primary={e} />
                            </ListItemContainer>
                        ))}
                        {error === exerciseErrors[3] && (
                            <TextArea minRows={4} onChange={e => setMessage(e.target.value)} />
                        )}
                        <Common.LoadingBtn loading={false} errorLabel={errorMessage}>
                            <Send onClick={() => onSubmit()} fullWidth color={'primary'} variant="contained">{t('error_dialog.send')}</Send>
                        </Common.LoadingBtn>
                    </Container>
                    <Close>
                        <IconButton onClick={() => onClose()}>
                            <CloseIcon fontSize={'large'} color={"accent"} />
                        </IconButton>
                    </Close>
                </DialogContent>
            }
        </Dialog>
    )
}

ErrorDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    id: PropTypes.string,
}

export default ErrorDialog
