import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import img9 from '../assets/images/img-9.png';
import img10 from '../assets/images/img-10.png';
import img11 from '../assets/images/img-11.png';
import img12 from '../assets/images/img-12.png';
import img13 from '../assets/images/img-13.png';
import img14 from '../assets/images/img-14.png';
import img15 from '../assets/images/img-15.png';
import img16 from '../assets/images/img-16.png';
import MV from '../assets/images/icons/🇲🇻.svg';
import AvatarImageList from './avatarList';
import Button from '@mui/material/Button';
import banner2 from '../assets/images/banner2.png'

export default function DiscoverDestinations() {
  return (
       <Grid container spacing={12} justifyContent="center">
         <Grid item xs={12} md={12} mt={10}>
        <Typography fontSize="fontSizeRegular" color="text" fontWeight="fontWeightBold">
            Discover dream destinations 
        </Typography>
        <Typography fontSize="fontSizeSm" color="gray80" fontWeight="fontWeightLight">
            All the inspiration you need for your next holiday
        </Typography>
        </Grid>
        <Grid item={12} pt={0} pb={8} sx={{maxWidth:'100%',overflowX:'scroll'}} className='overFLowX'><AvatarImageList/></Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img9}
            alt="img-9"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img10}
            alt="img-10"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img11}
            alt="img-11"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img12}
            alt="img-12"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img13}
            alt="img-13"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img14}
            alt="img-14"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img15}
            alt="img-15"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid item sm={4} md={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img16}
            alt="img-16"
          />
          <CardContent className='card-content'>
            <Typography gutterBottom variant="body2" component="div" display='flex' alignItems='center'>
            Noonu, Maldives<img src={MV} alt='flag' style={{paddingLeft:4}}/>
            </Typography>
            <Typography color="text.primary">
            Canoe your way through picture-perfect lagoons at the
            </Typography>
          </CardContent>
        </CardActionArea>
         </Card>
        </Grid>
        <Grid container justifyContent="center" sx={{margin:'70px 0 32px 0'}}>
            <Grid item md={4}>
              <Button size="small" color='tint' variant='contained' sx={{fontSize:'15px',color:'#00645E',width:440, height:40, padding:'12px 24px 12px 24px',maxWidth:'100%',textTransform:'initial'}}>Load more</Button>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <img src={banner2} alt='banner2' className='banner-style'/>
        </Grid>
    </Grid>
  );
}
