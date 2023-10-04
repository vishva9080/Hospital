import './booking.css';
import Button from 'react-bootstrap/Button';
import mobile from './assets/mobile.f82d73222992d2101a09.png'
import women from './assets/women.eb5c49c523f7d6240d33.png'
import location from './assets/download.png'
import heartmsg from './assets/download (1).png'
import setting from './assets/download (2).png'
import tick from './assets/download (3).png'
import { useState } from 'react'; 
import  Axios  from 'axios';


function Booking() {
    const [patient, Setpatient] = useState({
      patientID:'',
        name: "",
        number: "",
        age: "",
        visit: "",
date:'',
    })
    const [error,seterror]=useState({
        nameERR: "",
        numberERR: "",
        ageERR: "",
        visitERR: "",
        dateERR:"",
    })
    const [show, setShow] = useState(false);
    const [Details,setDetails]=useState([])

 const[patientid,setpatientid]=useState(2001)

     function Getinputhandel(e){
        let obj={}
        obj[e.target.name]=e.target.value
        Setpatient({...patient,...obj})
    }
    function submit(){
      setpatientid(patientid+1)
      patient.patientID=patientid.toString();
let obj={}
for(let key in patient){
    if(patient[key].trim().length == 0){
obj[key+'ERR']='mandatory'

document.getElementById('booking-left1').style.height='690px';
    }
    else{
obj[key+'ERR']=''
document.getElementById('booking-left1').style.height = '600px';
    }
}
seterror({...obj})
if(Object.values(obj).filter((val)=>Boolean(val)).length==0){
let check=Details.findIndex((val)=> val.name==patient.name)

if(check==-1){
    Details.push(patient)
      Axios.post('http://localhost:3000/booking',{patient})
    .then((res)=>{
 alert('booked sucessfully')
    })
    .catch(()=>{
    
    });
}
else{
    alert(" already booked")
}
}

    }
    
    return (
        <>
            <div className='main-booking' id='main-booking'>

                <div className='booking-left' id='booking-left1'>
                    <h1 className='book-appoint'>Book Appointment</h1>
                    <form>
                        <input type='text' placeholder='Enter Your Name' className='input1' name='name' onChange={Getinputhandel}></input>
                        <small className='booking-small'>{error.nameERR}</small>
                        <input type='number' placeholder='Phone Number' className='input1' name='number'  onChange={Getinputhandel}></input>
                        <small className='booking-small'>{error.numberERR}</small>
                        <input type='number' placeholder='Age' className='input1' name='age'  onChange={Getinputhandel}></input>
                        <small className='booking-small'>{error.ageERR}</small>
                        <textarea placeholder='Cause of visit' className='input1' name='visit'  onChange={Getinputhandel}></textarea>
                        <small className='booking-small'>{error.visitERR}</small>
                        <input type='date' className='input2'onChange={Getinputhandel}  name='date' ></input>
                        <small className='booking-small'>{error.dateERR}</small>
                        <input type='time' className='input2'></input>
                        <Button variant="success" className='submit-btn' onClick={submit}>Submit</Button>
                    </form>
                </div>
                <div className='booking-right'>
                    <img src={mobile} className='mobile' />
                    <img src={women} className='women' />
                    <img src={location} className='location' />
                    <img src={heartmsg} className='heartmsg' />
                    <img src={setting} className='setting' />
                    <img src={tick} className='tick' />
                </div>
            </div>
        </>
    )
}
export default Booking