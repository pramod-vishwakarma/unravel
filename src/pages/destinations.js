import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import img1 from '../assets/images/img-1.png';
import img2 from '../assets/images/img-2.png';
import img3 from '../assets/images/img-3.png';
import img4 from '../assets/images/img-4.png';
import img5 from '../assets/images/img-5.png';
import img6 from '../assets/images/img-6.png';
import img7 from '../assets/images/img-7.png';
import img8 from '../assets/images/img-8.png';
import MV from '../assets/images/icons/🇲🇻.svg'
export default function Destinations() {
  return (
    <Grid container spacing={12} justifyContent="center">
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img1}
            alt="img-1"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img2}
            alt="img-2"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img3}
            alt="img-3"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img4}
            alt="img-4"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img5}
            alt="img-5"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img6}
            alt="img-6"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img7}
            alt="img-7"
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
        <Grid item sm={6} md={4} lg={3} xl={3}>
        <Card sx={{borderRadius:'10px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="385"
            image={img8}
            alt="img-8"
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
        
    </Grid>
  );
}
