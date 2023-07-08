import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlayStore from '../assets/images/icons/playstore.svg'
import { Typography,Button } from '@mui/material';
import Unravelcon from '../assets/images/icons/Unravel_fav_icon.svg'
import {Link,List,ListItem,ListItemText} from '@mui/material';
import Location from '../assets/images/icons/Location.svg';
import Envelop from '../assets/images/icons/fi_mail.svg';
import LinkedIn from '../assets/images/icons/Linkedn.svg';
import Instagram from '../assets/images/icons/Instagram.svg';
import Tiktok from '../assets/images/icons/tiktok.svg';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1,background:'#fff' }}>
      <Grid container spacing={2} sx={{padding:'30px'}}>
      <Grid item xs={12} md={5} sm={6}>
          <img src={PlayStore} alt='playstore'/>
          <Typography color='text.primary' fontWeight='fontWeightMedium' fontSize='fontSizeSm'>Coming soon to <br/>
            Play Store!</Typography>
            <Button size="small" color='tint' variant='contained' sx={{color:'#0B0C15',height:40, padding:'8px 16px 8px 16px',marginTop:'16px',textTransform:'initial',fontSize:15}}>
              <img src={Unravelcon} alt='icon' style={{marginRight:'8px'}}/>
              Sign up now for the beta access</Button>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>About us</Link></Grid>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>Help</Link></Grid>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>Privacy policy</Link></Grid>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>Terms & Conditions</Link></Grid>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>Join the tribe</Link></Grid>
        <Grid item xs={12} pb={2}><Link href='#' underline='none'>Contact us</Link></Grid>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <List sx={{ width: '100%', maxWidth: 320, pt:0 }}>
            <ListItem alignItems='flex-start' sx={{pt:0}}>
              <img src={Location} alt='location'/>
              <ListItemText className='location-text' sx={{marginTop:'-2px'}} secondary="Jl. Sunset Road No.9, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia"/>
            </ListItem>
            <ListItem>
              <img src={Envelop} alt='Envelop'/>
              <ListItemText className='email-text' secondary="hello@gounravel.com"/>
            </ListItem>
            <ListItem>
              <Link href='#' mr={2.5} title="Linkedin"><img src={LinkedIn} alt='Linkedin'/></Link>
              <Link href='#' mr={2.5} title="Instagram"><img src={Instagram} alt='instagram'/></Link>
              <Link href='#' title="Tiktok"><img src={Tiktok} alt='tiktok'/></Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography textAlign='center' className='copyright-text'>2022 All rights reserved by Unravel Technologies Ltd</Typography>
    </Box>
  );
}
