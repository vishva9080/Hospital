import './service.css'
function Service(){
    return(
        <>
       <div className='service-main' id='service-main'>
        <h1>Services</h1>
        <div className='service-top'>
<div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-stethoscope"></i></p>
<p className='headtag'>Diagnostics</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
<div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-hospital"></i></p>
<p className='headtag'>Treatment</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
<div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-briefcase-medical"></i></p>
<p className='headtag'>Surgery</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
        </div>
        <div className='service-bottom'>
        <div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-truck-medical"></i></p>
<p className='headtag'>Emergency</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
<div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-syringe"></i></p>
<p className='headtag'>Vaccine</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
<div className='service-top1'>
<p className='service-icon'><i class="fa-solid fa-user-doctor"></i></p>
<p className='headtag'>Qualified Doctors</p>
<p className='details'>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
</div>
        </div>
       </div>
        </>
    )
}
export default Service