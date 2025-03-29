import React,{useState} from 'react'
import {
  Button,
  Card,
  CardActions,  
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  DialogActions,
} from "@mui/material";

import {} from '@mui/material'
const MyCard = () => {
const [click, setClick] = useState(false);

  return (
    <div>
        <Card sx={{maxWidth:400,marginLeft:6,marginTop:-43}}>
            <CardMedia 
            component="img"
            height="150"
            image="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces"
            alt='test image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">Ract Developer</Typography>

                <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque! Nemo saepe eaque doloribus possimus! Molestias perspiciatis quis totam ad eveniet aliquid porro. Exercitationem labore eius, cupiditate facilis porro cum?</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='outlined' sx={{background:'cyan',}}>Exploer</Button>

                <Button size='small'  variant='outlined' sx={{background:'red'}}
                onClick={()=>setClick(true)}>Delete</Button>

            </CardActions>
        </Card>
        <Dialog open={click} onClose={()=>setClick(false)}>
        <DialogTitle>Are you Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to Delewte this corse
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={()=>setClick(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
       
        
        
      
    </div>
  )
}

export default MyCard
