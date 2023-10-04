import './employee.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

import { Button } from 'primereact/button';
import axios from 'axios';
        
function Employee(){

  const[Employee,setEmployee]=useState({
    employeeID:'',
    name:'',
   Number:'',
    DOB:'',
    Gender:'',
    Address:'',
    Experience:'',
    Role:'',
    Blood:'',
    Shift:'',
    Password:'',
    loginTime:"",
    logoutTime:""
  });

const[EmployeeERR,setEmployeeERR]=useState({
    nameERR:'',
   NumberERR:'',
    DOBERR:'',
    GenderERR:'',
    AddressERR:'',
    ExperienceERR:'',
    RoleERR:'',
    BloodERR:'',
    ShiftERR:'',
    PasswordERR:'',
  });
  const [empDetails,setempDetails]=useState([])
    const [job, setJob] = useState('');
    const handleChange = (event) => {
      setJob(event.target.value);
      Employee.Role=event.target.value
    }

    const [blood, setBlood] = useState('');
    const handleChangeblood = (event) => {
        setBlood(event.target.value);
      Employee.Blood=event.target.value

    }

    const [shift, setShift] = useState('');
    const handleChangeshift = (event) => {
        setShift(event.target.value);
        Employee.Shift=event.target.value
    }
const[id,setid]=useState(1001)
    const [showPassword, setShowPassword] =useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
function Getinputhandel(e){
let obj={}
obj[e.target.name]=e.target.value
setEmployee({...Employee,...obj})
}

function Submit(){
  setid(id+1)
  Employee.employeeID = id.toString()
  let obj={}
  for(let key in Employee){
    if(Employee[key].trim().length == 0){
obj[key+'ERR']='Mandatory'
}
 else if(key=='Password'){
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  if(passwordRegex.test(Employee[key])){
    obj[key+'ERR']=''
  }
  else{
    obj[key+'ERR']='weak password'
  }
 }
 

else{
  obj[key+'ERR']=''
}

  }
  setEmployeeERR({...obj})
  if(Object.values(obj).filter((val)=>Boolean(val)).length==0){
    let check=empDetails.findIndex((val)=>val.name==Employee.name)
    if(check==-1){
      empDetails.push(Employee)
      axios.post('http://localhost:3000/employeeDetails',Employee)
    .then((res)=>{
      alert(' register sucessfully')

    })
    .catch(()=>{

    });
    }
    else{
      alert(' Employee exist ')
    }
  }

}
    return(
        <>
      <div className='employee-main'>
        <div className='employee-div'>

            <p className='emp-p-1'>Employee Details</p>
<div className='emp-input-main'>

    <div className='emp-input-1 row'>
        <div className='col-lg-6 '>
            <p className='emp-label'>Name</p> 
        <input type='text' className='emp-input' name='name' onChange={Getinputhandel}/>
        <small className='empsmall1'>{EmployeeERR.nameERR}</small>
        </div>
  <div className='col-lg-6 '>
    <p  className='emp-label'>Phone Number</p> 
  <input className='emp-input'  name='Number' onChange={Getinputhandel}/>
  <small className='empsmall1'>{EmployeeERR.NumberERR}</small>
  </div>
    </div>

    <div className='emp-input-2 row'>
        <div  className='dob-emp col-lg-6'>
            <p  className='emp-label'>DOB</p>
             <input className='emp-input' type='date' name='DOB' onChange={Getinputhandel}/>
             <small className='empsmall1'>{EmployeeERR.DOBERR}</small>
             </div>
        <div className=' col-lg-6'> 
        <p  className='emp-label'>Gender   </p>
         <input className='emp-input' type='text'  name='Gender' onChange={Getinputhandel}/>
         <small className='empsmall1'>{EmployeeERR.GenderERR}</small>
         </div>
    </div>

    <div className='emp-input-3 row'>
        <div className='add-emp col-lg-6'>
            <p className='emp-address'>Address</p>
            <textarea className='emp-input-add' name='Address' onChange={Getinputhandel}></textarea>
            <small className='empsmall1'>{EmployeeERR.AddressERR}</small>
         </div>
        <div className=' col-lg-6'>
            <p className='emp-label'>Experience</p>
         <input className='emp-input' type='text' name='Experience' onChange={Getinputhandel}/>
         <small className='empsmall1'>{EmployeeERR.ExperienceERR}</small>
         </div>
    </div>
    <div className='emp-input-4 row mt-3 ms-2'>
    <FormControl className='col-lg-6 '>
        <InputLabel id="demo-simple-select-label">Job Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={job}
          label="Job Role"
          onChange={handleChange}
          className='job-input '
        >
          <MenuItem value='Hr'>Hr</MenuItem>
          <MenuItem value='Doctor'>Doctor</MenuItem>
          <MenuItem value='Front Officer'>Front Officer</MenuItem>
        </Select>
        <small className='empsmall'>{EmployeeERR.RoleERR}</small>
      </FormControl>

      <FormControl className='col-lg-6  emp-inputs'>
        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={blood}
          label="Job Role"
          onChange={handleChangeblood}
          className='blood-input '
        >
          <MenuItem value='o+'>o+</MenuItem>
          <MenuItem value='o-'>o-</MenuItem>
          <MenuItem value='A+'>A+</MenuItem>
          <MenuItem value='A-'>A-</MenuItem>
          <MenuItem value='b+'>b+</MenuItem>
          <MenuItem value='b-'>b-</MenuItem>
        </Select>
        <small className='empsmallblood'>{EmployeeERR.BloodERR}</small>
      </FormControl>
    </div>
    <div className='emp-input-5 row mt-3 ms-2'>
    <FormControl  className='col-lg-6 emp-inputs' >
        <InputLabel id="demo-simple-select-label">Shift</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={shift}
          label="Job Role"
          onChange={handleChangeshift}
          className='blood-input'
        >
          <MenuItem value='Moring'>Moring</MenuItem>
          <MenuItem value='Afternoon'>Afternoon</MenuItem>
          <MenuItem value='Night'>Night</MenuItem>
        </Select>
        <small className='empsmall'>{EmployeeERR.ShiftERR}</small>
      </FormControl>
     
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='pasword-input col-lg-6'>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            onChange={Getinputhandel}
             name='Password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
           <small className='empsmall'>{EmployeeERR.PasswordERR}</small>
        </FormControl>
         
    </div>
      
</div>
<div className='col-lg-6 emp-btn'>
            <Button label="Submit" onClick={Submit}/>
        </div>
        </div>
      </div>
        </>
    )
}
export default Employee