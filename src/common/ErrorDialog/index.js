import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, Checkbox, Button, ListItemIcon, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

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
import Common from '../../common'
import { exerciseErrors } from '../../config/constants'
import svg from '../../assets/error.svg'

const ErrorDialog = ({ open, onClose, id }) => {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    return (
        <Dialog open={open} onClose={() => onClose()}>
            {success ?
                <Common.Success
                    label="Error reported!"
                    actionButton={<Button color={"primary"} variant="contained" fullWidth onClick={() => {onClose();}}>Finish</Button>}
                />
                :
                <DialogContent>
                    <Container>
                        <Title>What error did you find?</Title>
                        <SubTitle>We are constantly adding new exercises, and less than 1% contain error. We publish weekly fixed updates.</SubTitle>
                        <Image src={svg} />
                        {exerciseErrors.map(e => (
                            <ListItemContainer role={undefined} dense button onClick={() => setError(e)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={error === e}
                                        onChange={() => setError(e)}
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
                        <Common.LoadingBtn loading={false}>
                            <Send onClick={() => setSuccess(true)} fullWidth color={'primary'} variant="contained">Send</Send>
                        </Common.LoadingBtn>
                    </Container>
                    <Close>
                        <IconButton onClick={() => onClose()}>
                            <CloseIcon fontSize={'large'} style={{ color: '#414142' }} />
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
