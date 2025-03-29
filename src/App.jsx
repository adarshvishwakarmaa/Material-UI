
// import './App.css'
import {Typography,AppBar, Toolbar, Tabs,Tab, } from '@mui/material'
// import  Auth from "./componenet/Auth"

import { useState } from 'react'
// import MyCard from './componenet/MyCard';
import Models from './componenet/Models';
import Containers from './componenet/Containers';
import Lists from './componenet/Lists';
import Accordianss from './componenet/Accordianss';
import DrawerMenu from './componenet/DrawerMenu';
import ResponsiveGrid from './componenet/ResponsiveGrid';
import Login from './componenet/Login';


function App() {
  const [route, setRoute] = useState(0);


  return (
    <>

    <AppBar>
     <Toolbar>
     

     <Typography variant='h4' sx={{}}>LOGO</Typography>
        {/* It work Navbar Process */}
        <Tabs sx={{marginLeft:"auto",}} 
        textColor='inherit' 
        indicatorColor='secondary'
        value={route}
        onChange={(e,val) =>
          setRoute(val)
        }
        >
          <Tab label="Home"/>
          <Tab label="About"/>
          <Tab label="Project"/>
          <Tab label="Contacts"/>
        </Tabs>
     

     
     {/* <Button variant='contained ' color='danger' sx={{color:"black",background:"pink",marginLeft:"auto"}}>Click</Button> */}
     </Toolbar>
    </AppBar>
       {/* <Typography variant="h1" component={"h1"} sx={{color:"black",fontSize:"100px"}}>
        Adarsh
      </Typography> */}
      {/* <Auth/>    */}
      <div style={{marginTop:100}}>
        {/* <MyCard/> */}
        {/* <Models/> */}
        {/* <Containers/> */}
        {/* <Lists/> */}
        {/* <Accordianss/> */}
        {/* <DrawerMenu/> */}
        <ResponsiveGrid/>
        {/* <Login/> */}
      </div>
      
 
        


      
    </>
  )
}

export default App;
