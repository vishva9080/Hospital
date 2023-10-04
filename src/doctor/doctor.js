import './doctor.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
function Doctor(){
    
    const [Medcine, SetMedcine] = useState('');

    const handleChange = (event) => {
        SetMedcine(event.target.value.toString());
      
    }
const[bmidata,Setbmidata]=useState()
const [preCalculate,setPreCalculate] = useState(
 { height:'',
  weight:''}
)
    const[getdata,Setgetdata]=useState([])
    console.log(getdata);
    const[form,Setform]=useState({
      name:'',
      number:'',
      age:''
    })
    
 
useEffect(()=>{
  let curData = []
axios.get(` http://localhost:3000/booking`)
.then((res)=>{
res.data.map((val)=>{
  curData.push(val.patient)
})
Setgetdata(curData)
})
},[])

function getinputhandel(e){
  console.log('function called');
  getdata.map((val)=>{
    console.log(val);
if(val.patientID==e.target.value){

  Setform(
    {
      name:val.name,
      number:val.number,    
      age:val.age
    }
  )

}
  })
  
  console.log(form);
}
function getdatas(e){
  let obj={}
  obj[e.target.name]=e.target.value
  setPreCalculate({...preCalculate,...obj})
  console.log(preCalculate)
  if(preCalculate.height && preCalculate.weight)
  {
    let calculate = preCalculate.height*preCalculate.height/preCalculate.weight
    console.log(calculate);
    Setbmidata(calculate)
  }

}
function submit(){
  alert('done')

  Setbmidata(
    { height:'',
  weight:''}
  )

  Setform(
    {
      name:'',
      number:'',
      age:''
    }
  )

  setPreCalculate(
    { height:'',
    weight:''}
  )
}
    return(
        <>
      <div className='doctor-main-bg'>
      <h1>PATIENT DETAILS</h1>
        <div className='doctor-main'>
           
        <div className='dr-left'>
        <TextField id="outlined-basic" label="Patient ID" type='NUMBER' variant="outlined" className='dr-inputs' onChange={getinputhandel}/><br></br>
        <input type='name' defaultValue={form.name} className='dr-inputs-form' placeholder='Name' ></input><br></br>
        <input type='number' defaultValue={form.number}  className='dr-inputs-form' placeholder='Phone Number' ></input><br></br>
        <input type='number' defaultValue={form.age}  className='dr-inputs-form' placeholder='Age' ></input><br></br>
     

<div className='medical-check'>
 <div className='medical-check-up'>
 <TextField id="outlined-basic" label="BP" type='NUMBER' variant="outlined" className='dr-inputs-checkup'/><br></br>
<TextField id="outlined-basic" label="heigth" type='NUMBER' variant="outlined" className='dr-inputs-checkup' onChange={getdatas} name='height' /><br></br>
</div>
<div className='medical-check-down'>
<TextField id="outlined-basic" label="Tempature" type='NUMBER' variant="outlined" className='dr-inputs-checkup'/><br></br>
<TextField id="outlined-basic" label="weight" type='NUMBER' variant="outlined" className='dr-inputs-checkup' onChange={getdatas} name='weight' /><br></br>
</div>
</div>
</div>
<div className='dr-right'>
<p className='dr-right-p'>Prescrption</p>
<div className="dropdown">
<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Medcine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Medcine}
          label="Medcine"
          onChange={handleChange}
          className='Medcine-dropdown'
        >
          <MenuItem value={'Paracetamol 500 mg'}>Paracetamol 500 mg </MenuItem>
          <MenuItem value={'Amoxycillin 250 mg.'}> Amoxycillin 250 mg.</MenuItem>
          <MenuItem value={'Nimesulide 100 mg'}> Nimesulide 100 mg.</MenuItem>
          <MenuItem value={'crocin'}>  crocin</MenuItem>
        </Select>
      </FormControl>
</div>
<table className='dr-table'>
    <tr>
        <th className='number-dr'>S.NO</th>
        <th className='tablet-dr'>Tablet</th>
        <th  className='bf-dr'>BreakFast</th>
        <th className='an-dr'>AfterNoon</th>
        <th  className='ni8-dr'>Night</th>
    </tr>
        <tr className='dr-checkbox'>
        <td>1</td>
        <td>{Medcine}</td>
        <td className='cb-1'>  <Checkbox/></td>
        <td className='cb-2'> <Checkbox/></td>
        <td> <Checkbox/></td>
        </tr>
</table>
<p className='next-p'>Next Visiting Date</p>
<TextField id="outlined-basic"  type='date' variant="outlined" className='visit-date' />
<p className='dr-test'>TEST</p>
<div className='check-main'>
    <p className='test-check'>Blood <Checkbox/></p>
    <p className='test-check'>Sugar <Checkbox/></p>
    <p className='test-check'>BP <Checkbox/></p>
    <p className='test-check'>Vitamin <Checkbox/></p>
</div>
<div>
<div className='test-box-1'>
<input placeholder='BMI' type='NUMBER' className='BMI' defaultValue={bmidata}/>
<Button label="Submit" className='test-btn-1' onClick={submit}/>
</div>
</div>
</div>
        </div>
        
      </div>
        </>
    )
}
export default Doctor