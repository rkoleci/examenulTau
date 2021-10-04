import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import {
    IconButton,
    Dialog,
    DialogContent,
    Typography,
    useMediaQuery
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close';

import { HeaderTitle, Image } from './styles'
import T1_1 from 'assets/T1-1.png'

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
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon color={"accent"} />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const PreviewDialog = ({ openPreview, onClose }) => {
    const { t } = useTranslation()
    const isMobile = useMediaQuery('(max-width:450px)');

    return (
        <>
            <Dialog onClose={() => onClose()} aria-labelledby="customized-dialog-title" open={openPreview}>
                <DialogTitle id="customized-dialog-title" onClose={() => onClose()}>
                    {t('preview')}
                </DialogTitle>
                <DialogContent dividers>
                    <Image src={T1_1} width={isMobile ? window.innerWidth*0.7 : '400px'} />
                </DialogContent>
            </Dialog>
        </>
    );
}

PreviewDialog.propTypes = {
    openPreview: PropTypes.bool,
    onClose: PropTypes.func,
}

export default PreviewDialog