import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/download.png';
import doctor1 from './images/doctor.7c2bc96d67d3eba1d64a.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const [data, setdata] = useState({
        employeeID:"",
        password:'',
    })
    function getinputhandel(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        setdata({...data,...obj })
    }
    const [empdata,setEmpdata]=useState()

const[errdata,setErrdata]=useState('')

useEffect(()=>{
    axios.get('http://localhost:3000/employeeDetails')
    .then((res)=>{
        setEmpdata(res.data)
    })
},[])
    function submit() {
        empdata.map((val)=>{
            if(val.employeeID==data.employeeID && val.Password==data.password){
                navigate('/dashboard')
                setErrdata('') 
             
                sessionStorage.setItem("ID",val.id)
                sessionStorage.setItem("role",val.Role)
            }
            else if(data.employeeID == "" && data.password == '')
            {
                setErrdata('Please fill the above details')
            }
            else{
                setErrdata('ID or Password is wrong')
            }
        })
    }
    return (
        <>
            <div className="main-div" id='main-div'>
                <div className='navbar-sticky'>
                    <div className="navbar-main">
                        <img src={logo}></img>
                        <div className='right-side-nav'>
                            <p><a className='link-tags' href='main-div'>home</a></p>

                            <p className='page-main'>
                                pages <i class="fa-solid fa-plus"></i>
                                <div className='pages-links'>
                                    <div className='pages-link-parent'>
                                        <a className='pages' href='#about-us' >about us</a>
                                        <a className='pages' href='#ourteam'>our team</a>
                                        <a className='pages' href='#main-booking'>booking</a>
                                    </div>
                                </div>
                            </p>
                            <p className='services-main'>
                                <a className='link-tags' href='#service-main'>services</a>
                            </p>
                            <p className='blog-main'>
                                <a className='link-tags' href='#blog-main-div'>blog</a>
                            </p>

                            <p> <a className='link-tags' href='#contact-main-div'>contact us</a></p>
                            <Link className='admin-only btn btn-outline-success' onClick={handleShow}> Admin Only</Link>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Admin Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <p className='text-center mb-1'>Employee ID</p>
                                        <input type='number' className='form-control w-50 m-auto 'name='employeeID' onChange={getinputhandel} />
                                        <p className=' mt-2 mb-1 text-center'> Password</p>
                                        <input type='password' className='form-control w-50 m-auto' name='password' onChange={getinputhandel} />
                                    </form>
                                    <div className='small-header'><small className='head-small'>{errdata}</small></div>
                                    <div className='d-flex justify-content-center pt-4'>
                                        <Button variant="primary" className='p-2 w-25 ' onClick={submit}>Login</Button>
                                    </div>
                                </Modal.Body>
                            </Modal>


                        </div>
                    </div>
                </div>
            </div>
            <div className='main-banner'>
                <div className='banner-left'>
                    <p>We Provide All Health Care Solution</p>
                    <h1>Protect Your Health And Take Care To Of Your Health</h1>
                </div>
                <div className='banner-right'>
                    <img src={doctor1} className='doctor-image'></img>
                </div>
            </div>
        </>
    )
}
export default Header