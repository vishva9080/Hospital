import './profile.css';
import  Axios  from 'axios';

import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
        
function Profile(){
  const [form,Setform]=useState({
    name:'',
    Number:'',
    Address:'',
    DOB:'',
    Gender:'',
    Blood:'',
  })
  const [newvalue,SetNewvalue]=useState({
    name:'',
    Number:'',
    Address:'',
  })

function getinputhandel(e){
  let obj={}
  obj[e.target.name]=e.target.value
  SetNewvalue({...newvalue,...obj})
}
  useEffect(()=>{
    if(sessionStorage.getItem("ID"))
    {
       Axios.get(` http://localhost:3000/employeeDetails/${sessionStorage.getItem("ID")}`)
       .then((res)=>{
     Setform({...form,...res.data})
     SetNewvalue(
      {
        name:res.data.name,
        Number:res.data.Number,
        Address:res.data.Address,
      }
     )
     console.log(form);
       })
       .catch((err)=>{
     console.log(err);
       })
    }

  },[])

  function submit()
  {
   
    let merge = {...form,...newvalue}

    Axios.patch(` http://localhost:3000/employeeDetails/${sessionStorage.getItem("ID")}`,merge)
    .then((res)=>{

  alert('updated sucessfully')
    })
    .catch((err)=>{
  console.log(err);
    })
  }


    return(
        <>
        <div className='pro-main-div'>
          
            <div className='pro-main'>
            <div className='pro-emp'>
                <p>Employee profile</p>
            </div>
<div className='pro-input-1 row'>

        <p className='mb-1'>Name</p>
        <input type='text' defaultValue={form.name} className='col-lg-6 pro-inputs' name='name' onChange={getinputhandel}/>
          
         <p className='mb-1'>Gender</p>
        <input type='text' defaultValue={form.Gender} disabled className='col-lg-6 pro-inputs'/>
</div>
<div className='pro-input-1 row'>

          <p className='mb-1'>Phone Number</p>
        <input type='text' defaultValue={form.Number} className='col-lg-6 pro-inputs' name='Number' onChange={getinputhandel}/>
      
          <p className='mb-1'>Blood Group</p>
        <input type='text' Value={form.Blood} disabled className='col-lg-6 pro-inputs'/>
</div>
<div className='pro-input-1 row'>

         <p className='mb-1'>Address</p>
        <input type='text' defaultValue={form.Address} className='col-lg-6 pro-inputs' name='Address' onChange={getinputhandel}/>
      
         <p className='mb-1'>DOB</p>
        <input type='text' Value={form.DOB} disabled className='col-lg-6 pro-inputs'/>
</div>
<div className='pro-btn'>
<Button label="Submit" onClick={submit} />
</div>

            </div>
        </div>
        </>
    )
}
export default Profile