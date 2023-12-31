import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import banner from '../assets/images/banner.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FilterIcon from '../assets/images/icons/Filter.svg';
import Destinations from './destinations';
import DiscoverDestinations from './discoverDestination';
import Footer from './footer';
import Logo from '../assets/images/logo.png';
import HomeIcon from '../assets/images/icons/Home.svg';
import DiscoverIcon from '../assets/images/icons/Discover.svg';
import SavedIcon from '../assets/images/icons/Saved.svg';
import AboutUsIcon from '../assets/images/icons/AboutUs.svg';
import ChatWithUsIcon from '../assets/images/icons/Chat-with-us.svg';
import Avatar from '../assets/images/icons/Avatar.svg';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '../assets/images/icons/whatsapp-icon.svg';

const drawerWidth = 224;
const fabStyle = {
  position: 'fixed',
  bottom: 55,
  right: 40,
};
function HomePage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <div>
           <List>
                 <ListItem disablePadding>
                  <img src={Logo} alt='logo' className='logo-style'/>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton  sx={{background:'#F1F3F9',borderRadius:2,margin:'0 16px'}}>
                    <img src={HomeIcon} alt='HomeIcon'/>
                  <ListItemText className='sidebar-text-active' primary="Home" sx={{pl:2.5,}}/>
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{margin:'0 16px'}}>
                    <img src={DiscoverIcon} alt='DiscoverIcon'/>
                  <ListItemText className='sidebar-text' primary="Discover" sx={{pl:2.5}}/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{margin:'0 16px'}}>
                    <img src={SavedIcon} alt='SavedIcon'/>
                  <ListItemText className='sidebar-text' primary="Saved" sx={{pl:2.5}}/>
                </ListItemButton>
              </ListItem>
          </List>
          <List sx={{pt:54}}>
            <ListItem disablePadding>
                <ListItemButton sx={{margin:'0 16px'}}>
                    <img src={AboutUsIcon} alt='AboutUsIcon'/>
                  <ListItemText className='sidebar-text' primary="About us" sx={{pl:2.5}}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{margin:'0 16px'}}>
                  <img src={ChatWithUsIcon} alt='ChatWithUs'/>
                <ListItemText className='sidebar-text' primary="Chat with us" sx={{pl:2.5}}/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{margin:'0 16px'}}>
                  <img src={Avatar} alt='Avatar'/>
                <ListItemText className='sidebar-text' primary="Abhishek" sx={{pl:2.5}}/>
              </ListItemButton>
            </ListItem>
          </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { md: 'none',xl:'none', sm:'none'}
        }}
      >
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -4, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} alt='logo' className='mini-logo'/>
        </Toolbar>
      </AppBar>
      <Box component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}open
        >
        {drawer}
      </Drawer>
    </Box>
    <Box
        component="main"
        sx={{ flexGrow: 1,width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: 'background.default',overflowX:'hidden'}}
      >
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <img src={banner} alt='banner' loading="lazy" className='img-style'/>
            </Grid>
       </Grid>
        <Grid container spacing={2} padding={10}>
        <Grid item xs={12} md={10}>
          <Typography fontSize="fontSizeRegular" color="text" fontWeight="fontWeightBold">
             Discover dream destinations 
          </Typography>
          <Typography fontSize="fontSizeSm" color="gray80" fontWeight="fontWeightLight">
             All the inspiration you need for your next holiday
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} textAlign='right'>
        <Button variant="contained" startIcon={<img src={FilterIcon} alt='filtericon'/>} color='white' sx={{padding:'8px 16px',borderRadius:'7px'}}>
        <Typography color='primary' fontSize='fontSizeSm' fontWeight='fontWeightMedium' size="small" textTransform="capitalize">Filter</Typography>
      </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={10} pt={0}>
       <Destinations/>
       <DiscoverDestinations/>
      </Grid>
      <Footer/>
      <Fab size="small" color="white" sx={fabStyle}>
        <img src={WhatsAppIcon} alt='icon'/>
      </Fab>
      </Box>
    </Box>
  );
}

HomePage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomePage;