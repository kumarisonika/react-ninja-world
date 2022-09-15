import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth: number = 140;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

function Header() {
const [open, setOpen] = React.useState(true);
const toggleDrawer = () => {
setOpen(!open);
};
return(
<div>

    <Box sx={{ display: 'flex' }}>
        <AppBar>
            <Toolbar sx={{
              pr: '24px', // keep right padding when drawer closed
            }}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}>
                    <MenuIcon/>
                </IconButton>
                
                <Button className="back_button" variant="contained">
                    <Link to=".."><ArrowBackIcon/></Link>
                </Button>

                <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <Button style={{
                        borderRadius: 35,
                        
                        padding: "15px 26px",
                        fontSize: "15px",
                    }} variant="contained">Welcome to the Ninja World!</Button>
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
</div>
)
}

export default Header