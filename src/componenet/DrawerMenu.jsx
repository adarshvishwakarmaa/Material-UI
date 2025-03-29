import React, { useState } from 'react'
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import { Alert, Button, CircularProgress, Drawer, IconButton, LinearProgress, List, ListItem, ListItemButton, ListItemText, Rating, Snackbar, Typography } from "@mui/material"

const DrawerMenu = () => {
    const [state, setstate] = useState(false);
    const [rate, setRate] = useState(false);

    const Fruits = ["Apple","Mango","Orange","Pinapple","Gauva","Watermelon","Pappya"]
  return (
    <div>
      <Button variant='contained' onClick={()=>setstate(true)}>Click</Button>
      <Drawer open={state} onClose={()=>setstate(false)} >
        <List>
           {Fruits.map((Fruit)=>(
            <ListItemButton onClick={()=>setstate(false)}>
                <ListItemText primary={Fruit}/>
            </ListItemButton>
           ))}
        </List>
      </Drawer>
      <br />
      <Snackbar open={true} autoHideDuration={2000}>
          <Alert severity='info'>This is SnackBar</Alert>
        </Snackbar><br/>
        <Typography>Java</Typography>
        <CircularProgress color='secondary' variant='determinate' value={80}/>
        <br />
        <LinearProgress/>
        <br />
        <Rating value={rate} onChange={(e,val) =>setRate (val)} size='large' precision={0.10}/>
           <Typography>Rated {rate!==undefined ? rate:0}stars</Typography>
           <br/>
           
           <IconButton onClick={()=>alert("YOu click")} >
               <AccessibilityNewOutlinedIcon color='secondary'/>
           </IconButton>
       
      
    </div>
  )
}

export default DrawerMenu
