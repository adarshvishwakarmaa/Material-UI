import { Grid } from '@mui/material'
import React from 'react'

const ResponsiveGrid = () => {
  return (
    <div>
       <Grid container>
        <Grid itemxs={10} sm={8} md={6} lg={4} xl={2} sx={{background:'blue'}} spacing={3}>
            Content A
        </Grid>

        <Grid item xs={10}  sm={8} md={6} lg={4} xl={2} sx={{background:'pink'}}>
            Content D
        </Grid>


       </Grid>
    </div>
  )
}

export default ResponsiveGrid
