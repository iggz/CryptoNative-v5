import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import UserLoginModal from '../Forms/UserLoginModal';
import logo from '../../Images/849.gif';

const useStyles = makeStyles({
    root: {
        background: '#1E2632',

        flexGrow: 1,
    },

    title: {
        padding: 15,
        flexGrow: 1,
        color: '#00C689',
        textColor: '#00C689'

    },
});

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="fixed">
                <Toolbar style={ { background: '#1E2632' } }>
                    <img src={ logo } />
                    <Typography className={ classes.title } variant="h6" noWrap>
                        Bitchin App
                    </Typography>
                    <UserLoginModal style={ { alignItem: 'right' } } />
                </Toolbar>
            </AppBar>
        </div>
    );
}


// SEARCH BAR //
// <div className={classes.search}>
//      <div className={classes.searchIcon}>
//          <SearchIcon />
//      </div>
//      <InputBase
//          placeholder="Search…"
//          classes={{
//              root: classes.inputRoot,
//              input: classes.inputInput,
//          }}
//          inputProps={{ 'aria-label': 'search' }}
//      />
//  </div>