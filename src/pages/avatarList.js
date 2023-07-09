import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar1 from '../assets/images/avatar-1.png';
import Avatar2 from '../assets/images/avatar-2.png';
import Avatar3 from '../assets/images/avatar-3.png';
import Avatar4 from '../assets/images/avatar-4.png';
import Avatar5 from '../assets/images/avatar-5.png';
import Avatar6 from '../assets/images/avatar-6.png';
import Avatar7 from '../assets/images/avatar-7.png';
import Avatar9 from '../assets/images/avatar-9.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow:'none',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
  return (
    <Grid container spacing={2}>
      <Stack direction="row" spacing={2}>
        <Item><img src={Avatar1} alt='avatar1'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Barcelona</Typography>
        </Item>
        <Item><img src={Avatar9} alt='avatar2'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Malaga</Typography>
        </Item>
        <Item><img src={Avatar2} alt='avatar3'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Madrid</Typography>
        </Item>
        <Item><img src={Avatar3} alt='avatar4'/>
            <Typography color='text.primary' fontSize="fontSizeSm">London</Typography>
        </Item>
        <Item><img src={Avatar4} alt='avatar5'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Paris</Typography>
        </Item>
        <Item><img src={Avatar5} alt='avatar6'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Rome</Typography>
        </Item>
        <Item><img src={Avatar6} alt='avatar7'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Berlin</Typography>
        </Item>
        <Item><img src={Avatar7} alt='avatar8'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Florence</Typography>
        </Item>
        <Item><img src={Avatar1} alt='avatar1'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Barcelona</Typography>
        </Item>
        <Item><img src={Avatar9} alt='avatar2'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Malaga</Typography>
        </Item>
        <Item><img src={Avatar2} alt='avatar3'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Madrid</Typography>
        </Item>
        <Item><img src={Avatar3} alt='avatar4'/>
            <Typography color='text.primary' fontSize="fontSizeSm">London</Typography>
        </Item>
        <Item><img src={Avatar4} alt='avatar5'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Paris</Typography>
        </Item>
        <Item><img src={Avatar5} alt='avatar6'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Rome</Typography>
        </Item>
        <Item><img src={Avatar6} alt='avatar7'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Berlin</Typography>
        </Item>
        <Item><img src={Avatar7} alt='avatar8'/>
            <Typography color='text.primary' fontSize="fontSizeSm">Florence</Typography>
        </Item>
      </Stack>
    </Grid>  
  );
}