import React,{useState} from 'react'
import {TextField,Button, FormControl,Select, MenuItem, InputLabel, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio,} from "@mui/material"


const form = () => {
    const [form, setForm] = useState(
       {
        name:"",
        email:"",
        password:"",
        terms:false,
        mern:"",
        gender:""
       }
    );

    const handleAuth = (e) =>{
        setForm((prevState) =>({
            ...prevState,
            [e.target.name]:[e.target.value],
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
        
    }

  return (
    <div onChange={handleSubmit}>
      <TextField onChange={handleAuth} value={form.name} name='name' type='text' placeholder='Enter your name' variant='outlined' sx={{margin:"10px", background:"blue",color:"black"}} /> <br />

      <TextField onChange={handleAuth} value={form.email} name='email' type='email' placeholder='Enter your email' variant='outlined' sx={{margin:"10px", background:"pink" ,color:"black"}}  /> <br />

      <TextField onChange={handleAuth}  value={form.password} name='password' type='password' placeholder='Enter your password' variant='outlined' sx={{margin:"10px",bgcolor:"orange", color:"black"}} /> <br />


     <FormControl sx={{margin:"10px", paddingTop:"10px"}} >
        <FormControlLabel
           label ="I Accept Term and Condition"
           control={
            <Checkbox onChange={()=>{
              setForm((prevState)=>({
                ...prevState,
                // terms:!form.terms,
                terms:e.target.checked,
              }))
            }}
          />}
        />
     </FormControl> <br/>

      
      <FormControl sx={{width:"200px",margin:"1px"}}>
        <InputLabel id='label'>MERN</InputLabel>
        <Select label="mern" value={form.mern} onChange={handleAuth} name='mern'>
            <MenuItem value={"mongodb"}>MongoDB</MenuItem>
            <MenuItem value={"express"}>Express.Js</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
            <MenuItem value={"node"}>Node.Js</MenuItem>
        </Select>
      </FormControl><br/>
      <FormControl>
        <FormLabel sx={{margin:"10px"}}>Gender</FormLabel>
         <RadioGroup name='gender' value={form.gender}  onChange={handleAuth}>
            <FormControlLabel 
              value={'male'}
              label='Male'
              control={<Radio/>}
            />

           <FormControlLabel 
              value={'female'}
              label='Female'
              control={<Radio/>}
            />

            <FormControlLabel 
              value={'others'}
              label='Others'
              control={<Radio/>}
            />
          </RadioGroup>
      </FormControl><br/>

      <Button type='submit'sx={{margin:"10px", width:"15%"}} variant='outlined' >Submit</Button>

      
    </div>
  )
}

export default form
