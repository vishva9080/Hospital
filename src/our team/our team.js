import './our team.css'
import member1 from './images/member1.22ac1d594f69ddaf3e08.jpg'
import member2 from './images/member2.d03a0686030bcd2f05ec.jpg'
import member3 from './images/member3.0d822ecc51b2532abe0e.jpg'
import member4 from './images/member4.9045579a47c3fd89b17c.jpg'
import member5 from './images/member5.24eb182159ea2d58610f.jpg'
import member6 from './images/member6.be2a77adde3dc48f9d5b.jpg'
import before from './images/download (1).png'
import after from './images/download.png'
function Ourteam (){
    return(
        <>
        <div className='ourteam-main' id='ourteam'>
            <h1>Our Team</h1>
            <div className='ourteam-top'>
            <div  className='ourteam-top1'>
                <img src={member1} className='member1'></img>
                <img src={before} className='before-png'></img>
                <img src={after} className='after-png'></img>
                <p className='doctorname'>Dr. Addition Smith</p>
                <p className='drpro'>Dentist</p>
            </div>
            <div  className='ourteam-top2'>
            <img src={member2} className='member1'></img>
                <img src={before} className='before2-png'></img>
                <img src={after} className='after2-png'></img>
                <p className='doctorname2'>Dr. Mahfuz Riad</p>
                <p className='drpro2'>Chiropractor</p>
            </div>
            <div  className='ourteam-top3'>
            <img src={member3} className='member1'></img>
                <img src={before} className='before3-png'></img>
                <img src={after} className='after3-png'></img>
                <p className='doctorname3'>Dr. David Benjamin</p>
                <p className='drpro3'>Cardiologist</p>
            </div>
            </div>
            <div className='ourteam-bottom'>
            <div  className='ourteam-bottom1'>
            <img src={member4} className='member1'></img>
                <img src={before} className='before4-png'></img>
                <img src={after} className='after4-png'></img>
                <p className='doctorname'>Dr. Addition Smith</p>
                <p className='drpro'>Dentist</p>
            </div>
            <div   className='ourteam-bottom2'>
            <img src={member5} className='member1'></img>
                <img src={before} className='before5-png'></img>
                <img src={after} className='after5-png'></img>
                <p className='doctorname2'>Dr. Mahfuz Riad</p>
                <p className='drpro2'>Chiropractor</p>
            </div>
            <div   className='ourteam-bottom3'>
            <img src={member6} className='member1'></img>
                <img src={before} className='before6-png'></img>
                <img src={after} className='after6-png'></img>
                <p className='doctorname3'>Dr. David Benjamin</p>
                <p className='drpro3'>Cardiologist</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default Ourteam