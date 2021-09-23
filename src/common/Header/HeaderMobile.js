import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Grid,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslatedStrings } from '../../config/hooks'

import { AvatarIcon } from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const menuList = useTranslatedStrings('menuList')

    const toggleDrawer = (open) => {
        setOpen(open);
    };

    const getIcon = (route) => {
        if (route == 'Home') return <HomeIcon />

        return <MailIcon />
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={() => toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {t('menu.app_name')}
                    </Typography>
                    <Button color="inherit">{t('menu.login')}</Button>
                </Toolbar>

                <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer(false)}>
                    <ListItem>
                        <AvatarIcon>RK</AvatarIcon>
                        <ListItemText primary={'Rei Koleci'} secondary={'Professor'} />
                    </ListItem>
                    <Divider />
                    <div
                        className={clsx(classes.list, {
                            [classes.fullList]: false,
                        })}
                        role="presentation"
                        onClick={() => toggleDrawer(false)}
                        onKeyDown={() => toggleDrawer(false)}
                    >
                        <List>
                            {menuList.map((text, index) => (
                                <Link to={`/${text}`} style={{
                                    textDecoration: "none",
                                    color: '#000000DE'
                                }}>
                                    <ListItem button key={text}>
                                        <ListItemIcon>{getIcon(text)}</ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                </Link>
                            ))}
                            <Link to={`/auth`} style={{
                                textDecoration: "none",
                                color: '#000000DE'
                            }}>
                                <ListItem button key={'log out'}>
                                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                                    <ListItemText primary={t('menu.log_out')} />
                                </ListItem>
                            </Link>

                        </List>
                    </div>
                </Drawer>
            </AppBar>
        </div>
    );
}
