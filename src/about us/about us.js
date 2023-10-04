import './about us.css';
import image1 from './images/pic-1.ad1ed7ee8284087fe9ee.jpg'
import image2 from './images/pic-2.0593bc2fd8a13cf8c19f.jpg'
import image3 from './images/pic-3.fa689b1037dbf69567a3.jpg'
function Aboutus() {
    return (
        <>
            <div className='about-main' id='about-us'>
                <div className='about-left'>
                    <img src={image1} className='image1'></img>
                    <img src={image2} className='image2'></img>
                    <div className='img-blw'>
                        <img src={image3} className='image3'></img>
                        <div className='exp-20y'>
                            <p className='number20'>20</p>
                            <p className='experience-20'>year experience</p>
                        </div>
                    </div>
                </div>
                <div className='about-right'>
                    <div className='about-top'>
                    <p className='au-main'>About Us</p>
                        <h1>The Great Place Of Medical Hospital Center</h1>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    </div>
                    <div className='about-bottom'>
<div className='ab-top'>

<div className='ambulance'>
<i class="fa-solid fa-truck-medical"></i>
<p>Emergency Help</p>
</div>

<div className='bed'>
<i class="fa-solid fa-user-doctor"></i>
<p>Qualified Doctors</p>
</div>

</div>
<div className='ab-bottom'>

<div className='fire'>
<i class="fa-solid fa-hospital"></i>
<p>Best Professionals</p>
</div>

<div className='injection'>
<i class="fa-solid fa-syringe"></i>
<p>Medical Treatment</p>
</div>
</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Aboutus