import './contact.css'
import Button from 'react-bootstrap/Button';
function Contact(){
    return(
        <>
<div className='contact-main-div' id='contact-main-div'>
<p className='contact-header'>Contact us</p>
    <div className='contact-left-right-main'>
    <div className='contact-left'>
<form>
<input type='text' placeholder='Enter Your Name' className='contact-input1'></input>
        <input type='number' placeholder='Phone Number' className='contact-input1'></input>
        <input type='number' placeholder='Age' className='contact-input1'></input>
        <textarea placeholder='Type Message' className='contact-input1'></textarea>
</form>
<Button variant="success" className='contact-submit-btn'>Submit</Button>
</div>
<div className='contact-right'>
    <div className='bg-blue-opacity'>
        <p className='bg-blue-head'>Contact Us For Any Informations</p>
        <p className='bg-blue-head1'>Contact Us For Any Informations</p>
<div className='location-contact'>
    <p> <i class="fa-solid fa-location-dot"></i> Location</p>
    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
</div>
<div className='email-contact'>
    <p> <i class="fa-solid fa-address-card"></i> Email & Phone</p>
    <p>info@yourdomain.com <br></br>
(+68) 120034509</p>
</div></div>

</div>
    </div>

</div>
        </>
    )
}
export default Contact