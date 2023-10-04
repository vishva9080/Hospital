import './outpatient.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import  Axios  from 'axios';
function Outpatient (){
    const currencies = [
        {
          value: 'FEVER',
          label: 'FEVER',
        },
        {
          value: 'COLD',
          label: 'COLD',
        },
        {
          value: 'HEADACHE',
          label: 'HEADACHE',
        },
        {
          value: 'BODY PAIN',
          label: 'BODY PAIN',
        },
      ];
      const[patient,setPatient]=useState({
        patientID:'',
        name:'',
       number:'',
       age:'',
        address:'',
      visit:'',
      date:'',
      });
      const[patientERR,setPatientERR]=useState({
        nameERR:'',
       numberERR:'',
       ageERR:'',
        addressERR:'',
      visitERR:'',
      dateERR:'',
      });
      const [Details,setDetails]=useState([])
      const[patientid,setpatientid]=useState(3001)
function getinputhandel(e){
let obj={}
obj[e.target.name]=e.target.value
setPatient({...patient,...obj})

if (e.target.name == 'date') {
  const timechange = e.target.value.getFullYear() + "-" + (parseInt(e.target.value.getMonth()) + 1) + "-" + e.target.value.getDate();
  console.log(timechange);
}
console.log(patient);
}

function submit(){
  setpatientid(patientid+1)
  patient.patientID=patientid.toString();
let obj={}
for(let key in patient){
if(patient[key].trim().length==0){
  obj[key+'ERR']='mandatory'
}
else{
  obj[key+'ERR']=''
}
}
setPatientERR({...obj})
if(Object.values(obj).filter((val)=>Boolean(val)).length==0){
let check=Details.findIndex((val)=>val.name==patient.name)
console.log(patient);
if(check==-1){
  Details.push(patient)
  Axios.post('http://localhost:3000/booking',{patient})
  .then((res)=>{
alert('Patient added sucessfully')
setPatient(
 { patientID:'',
  name:'',
 number:'',
 age:'',
  address:'',
visit:'',}
)
  })
  .catch(()=>{
  
  });
}
else{
  alert("already patient added")
}

}
}
    return(

        <>
       <div className='op-main'>
<div className='op-main-div'>
    <h1>OUT PATIENTS</h1>
<TextField id="outlined-basic" label="Name" variant="outlined" className='op-inputs' name='name' onChange={getinputhandel} value={patient.name}/>
<small className='patient-small'>{patientERR.nameERR}</small>
<TextField id="outlined-basic" label="Phone Number" type='NUMBER' variant="outlined" className='op-inputs'  name='number' value={patient.number} onChange={getinputhandel}/>
<small className='patient-small'>{patientERR.numberERR}</small>
<TextField id="outlined-basic" label="Age" type='NUMBER' variant="outlined" className='op-inputs'  name='age' value={patient.age} onChange={getinputhandel} />
<small className='patient-small'>{patientERR.ageERR}</small>
<TextField id="outlined-basic" label="Address" variant="outlined" className='op-inputs' name='address'  value={patient.address} onChange={getinputhandel} />
<small className='patient-small'>{patientERR.addressERR}</small>
<TextField id="outlined-basic"  variant="outlined" className='op-inputs' name='date'  value={patient.date} onChange={getinputhandel} type='date'/>
<small className='patient-small'>{patientERR.date}</small>
<TextField
          id="outlined-select-currency"
          select
          label="Select"
          className='op-inputs'
          onChange={getinputhandel}
          name='visit'
          value={patient.visit}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <small className='patient-small'>{patientERR.visitERR}</small>
        <div className='op-btn-submit'>
        <button type="button" class="btn btn-primary" onClick={submit}>submit</button>
        </div>
       
</div>
       </div>
        </>
    )
}
export default Outpatient