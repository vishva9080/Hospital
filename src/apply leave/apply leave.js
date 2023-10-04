import { useState } from 'react';
import './apply leave.css';
import axios from 'axios';
function Applyleave(){
    const [leave,Setleave]=useState({
        Date:'',
        reason:''
    });
    const [leaveERR,SetleaveERR]=useState({
        DateERR:'',
        reasonERR:''
    });
    const [details,Setdetails]=useState([])
    function getInputhandel(e){
let obj={}
obj[e.target.name]=e.target.value
Setleave({...obj})
    }
    function submit(){
        let obj={}
for(let key in leave){
if(leave[key].trim().length==0){
obj[key+'ERR']='Mandatory'
}
else{
obj[key+'ERR']=''
}
}
SetleaveERR({...obj})
if(Object.values(obj).filter((val)=>Boolean(val)).length==0){
    let check=details.findIndex((val)=>val.Date==leave.Date)
    if(check==-1){
        details.push(leave)
        axios.post('  http://localhost:3000/applyleave',leave)
        .then((res)=>{
          alert(' LEAVE APPLIED')
    
        })
        .catch(()=>{
    
        });
      
    }
    else{
        alert(' Already leave appiled ')
      }
}

    }
    return(
        <>
       <div className='apply-leave'>
        <div className='apply-leave-main'>
<div className='AP-TOP'>
<p>Date :</p>
<input type='date' className='input-ap-date' onChange={getInputhandel} name='date'></input>

</div>
<div className='leavesmall-div'><small className='leavesmall'>{leaveERR.DateERR}</small></div>

<div className='AP-DOWN'>
<p>Reason :</p>
<textarea className='textarea-ap'  onChange={getInputhandel} name='reason'></textarea>

</div>
<div className='leavesmall-div'><small className='leavesmall'>{leaveERR.reasonERR}</small></div>

<div className=' ap-btn'><button class="btn btn-primary ap-btn" onClick={submit} >Submit</button></div>

        </div>
       </div>
        </>
    )
}
export default Applyleave