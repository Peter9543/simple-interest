import { useState } from 'react'

import './App.css'
import { Button, Stack, TextField } from '@mui/material'



function App() {
  const[principle,setPrinciple]=useState(0)
 const[interest,setinterest]=useState(0)
  const[year,setyear]=useState(0)
  console.log(principle);
  const[isInvalidPrinciple,setInvalidPrinciple]=useState(false)
  const[isInvalidinterest,setInvalidinterest]=useState(false)
  const[isInvalidyear,setInvalidyear]=useState(false)
  const[simpleInterest,setSimpleInterest]=useState()
  const validateInput=(tag)=>{
    const {name,value}=tag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='principle'){
        setPrinciple(value)
        setInvalidPrinciple(false)
      }
      else if(name=='interest'){
        setinterest(value)
        setInvalidinterest(false)
      }
      else{
        setyear(value)
        setInvalidyear(false)
      }

    }
    else{
      if(name=='principle'){
        setInvalidPrinciple(true)
      }
      else if(name=='interest'){
        setInvalidinterest(true)
      }
      else {
        setInvalidyear(true)
      }
    }
    
    
  }
  
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)

    }
    else {
      alert('please fill the form properly')
    }
    
  }
  const handleReset=()=>{
    setPrinciple(0)
    setyear(0)
    setinterest(0)

   

  }
  

  return (
    <>
      
      <h1>Simple interest Calculator</h1>
            <p>calculate your simple interest easily</p>
            <div className='d-flex align-item-center justify-content-center text-center bg-warning mt-5 '  value={simpleInterest || ""} style={{minHeight:'100vh' }}>
              <div style={{width:"600px"}} className=' p-5 rounded'>
              <div className='bg-warning rounded '>
              <h1 className='mt-5'>₹ {simpleInterest}</h1>
              
              </div>
              </div>
             
            </div>
            <form action="" className='mt-5 '>
              <div ><TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} id="outlined-basic" label="₹ principle amount" variant="outlined" /></div>
              {
                isInvalidPrinciple &&
                <p className='text-danger'>Invalid principle</p>
              }
              <div className='mt-5'><TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)} id="outlined-basic" label="rate of interest" variant="outlined" /></div>
              {
                isInvalidinterest &&
                <p className='text-danger'>Invalid Interest</p>
              }
              <div className='mt-5'>   <TextField name='year'value={year || ""} onChange={e=>validateInput(e.target)} id="outlined-basic" label="Time period" variant="outlined" /></div>
              {
                isInvalidyear &&
                <p className='text-danger'>Invalid year</p>
              }
              <Stack className='mt-5' direction="row" spacing={2}>
              <Button disabled={isInvalidPrinciple || isInvalidinterest || isInvalidyear} type='submit'    onClick={handleCalculate} variant="contained">Calculate</Button>
              <Button onClick={handleReset}  variant="contained">reset</Button>
</Stack>
     
              </form>
            
            
  
    </>
  )
}

export default App
