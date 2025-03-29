import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from "@mui/material"

const Accordianss = () => {
    const Fruits = ["Apple","Mango","Orange","Pinapple","Gauva","Watermelon","Pappya"]

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
            <Typography variant='h6'>What is Js ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis at cum aperiam. Eum eveniet, libero, eos esse veritatis earum aperiam obcaecati vel accusamus modi reprehenderit quaerat nam a ea architecto.
            </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Autocomplete or Search */}
      <Autocomplete sx={{width:300, marginTop:"20px"}} 
       options={Fruits}
       renderInput={(params) =>(
        <TextField {...params} label="Select a Fruits Name"/>
       )}
      />
    </div>
  )
}

export default Accordianss
