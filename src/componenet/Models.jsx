import React from 'react'
import { Box, Button, Modal, Link,Typography } from "@mui/material"
import { useState } from 'react'

const Models = () => {
    const [click, setClick] = useState(false);
  return (
    <div>
      <Button onClick={()=>setClick(true)} sx={{marginTop:"-500px"}}>Open Model</Button>
      <Modal open={click} onClose={()=>setClick(false)}>
        <Box position="absolute" top="50%" left="50%" >
            <Typography>This is Models</Typography>
            <Button variant='contained' onClick={()=>setClick(false)}>
                Cancel
            </Button>
        </Box>
      </Modal>
      <Link variant="h4" underline="hover" href="https://mui.com/material-ui/react-pagination/"  
      >PRoejcts</Link>
      
    </div>
  )
}
export default Models
