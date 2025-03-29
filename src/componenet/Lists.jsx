import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const Lists = () => {
  const cars = ["Buggati","Lamborgini","BMW","Porse"]
  return (
    <div>
      <List sx={{width:200,background:"pink"}}>
      {cars.map((car)=>(
          <ListItem >
         
            <ListItemButton>{">"}</ListItemButton>
            <ListItemText primary={car}/>  
           </ListItem>
          ))}
      </List>
    </div>
  )
}

export default Lists
