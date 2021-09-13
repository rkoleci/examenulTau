import React from 'react'
import { Link } from 'react-router-dom'
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    MenuItem,
    Select,
    Button,
    ListItem,
    ListItemText
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import { AvatarIcon } from './styles'
import { appName, menuList } from '../../config/constants'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    center: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuItem: {
        fontSize: 13
    },
    inlineContainer: {
        display: 'flex',
    },
    pullRight: {
        textAlign: 'right'
    },
    userRole: {
        fontSize: 13,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    userName: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontSize: 13,
    },
    logOff: {
        fontSize: 13,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {appName}
                    </Typography>

                    <div className={classes.grow} />

                    <div className={classes.center}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={'Mathematics'}
                            onChange={(v) => console.log(v)}
                            style={{ color: 'white', }}

                        >
                            <MenuItem value={'Mathematics'} >Mathematics</MenuItem>
                            <MenuItem value={'Romania'}>Romania</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.grow} />

                    {menuList.map(item => (
                        <Link to={`/${item}`} style={{
                            textDecoration: "none",
                            color: 'white'
                        }}>
                            <Button
                                color="inherit"
                                href={item.toLowerCase()}
                                className={classes.menuItem}>
                                {item}
                            </Button>
                        </Link>
                    ))}

                    <div className={classes.grow} />
                    <div className={classes.center}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <ListItem>
                            <ListItemText primary={'Rei Koleci'} secondary={'Professor'} />
                            <AvatarIcon>RK</AvatarIcon>
                        </ListItem>
                    </div> 
                </Toolbar>
            </AppBar> 
        </div>
    );
}

export default Header