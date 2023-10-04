import './dashboard.css'
import logo1 from '../header/images/download.png'
import React, { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const options = ['Off', 'On'];
  const [value, setValue] = useState(options[0]);
  const [getdata, Setgetdata] = useState([])
  const [tabledata, SetTabledata] = useState([])
  const [role, setRole] = useState('')
  const [user, setuser] = useState([])
  const [loginLog,setLoginLog] = useState({
    loginTime: "",
    logoutTime: ""
  })
  const Navigate = useNavigate();
  function apply() {
    Navigate('/Applyleave')
  }
  function outpatient() {
    Navigate('/Outpatient')
  }
  function doctor() {
    Navigate('/Doctor')
  }
  function employee() {
    Navigate('/Employee')
  }
  function profile() {
    Navigate('/Profile')
  }

  useEffect(() => {
 
    if (sessionStorage.getItem("ID")) {
      axios.get(` http://localhost:3000/employeeDetails/${sessionStorage.getItem("ID")}`)
        .then((res) => {
          setuser({ ...res.data, ...loginLog })
        })
        .catch((err) => {
        })
    }
    const d = new Date();
    let currentDate = `${d.getHours()}:${d.getMinutes()}`;
    setRole(sessionStorage.getItem("role"))
    if (value == "On") { 
      loginLog.loginTime = currentDate

      axios.patch(` http://localhost:3000/employeeDetails/${sessionStorage.getItem("ID")}`, user)
        .then((res) => {
       
        })
        .catch((err) => {
         
        })
    }
    else if (value == "Off") {
      loginLog.logoutTime = currentDate

      axios.patch(` http://localhost:3000/employeeDetails/${sessionStorage.getItem("ID")}`, user)
        .then((res) => {
        
        })
        .catch((err) => {
        
        })
    }
  }, [value])

  useEffect(() => {
    let curData = []
    axios.get('  http://localhost:3000/booking')
      .then((res) => {

        res.data.map((val) => {
          curData.push(val.patient)
        })
        Setgetdata(curData)
        SetTabledata(curData)
   
       
      })
      .catch(() => {

      })

      if(sessionStorage.getItem("curval"))
      {
        setValue(sessionStorage.getItem("curval"))
      }
  }, [])


  function getweeknumber(date){
    let currentDate= new Date(date)
    let startDate = new Date(currentDate.getFullYear(),0,1);
    var days = Math.floor((currentDate - startDate)/
    (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return weekNumber
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    return formattedDate;
  }

  function yesterday(){
    const currentDate = getCurrentDate();
    let records = getdata.filter((ele)=>ele.date == currentDate )
    SetTabledata(records)
  }

  
  function lastweek(){
    let currentweek = getweeknumber(new Date());
    let records = getdata.filter((ele)=>getweeknumber(ele.date)== currentweek-1);

  SetTabledata(records)
  }
  function currentmonth(){
    let currentmonth = new Date().getMonth();
    let records = getdata.filter((ele)=>{
      return new Date(ele.date).getMonth()===currentmonth
    });
    SetTabledata(records)
    
  }
 
  function alldata(){
    SetTabledata(getdata)
  }
  
  function roles(e)
  {
    setValue(e.value)
    if(e.value == "On")
    {
      sessionStorage.setItem("curval","On") 
    }
    else
    {
      sessionStorage.removeItem("curval")
    }
  }
  
  return (
    <>
      <div class="container db-nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dashboard">
          <div class="container-fluid db-nav1">
            <img src={logo1} />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {value == "On" && <li class="nav-item">
                  <a class="nav-link active" aria-current="page"><button className='btn btn-outline-primary m-1 db-btn' onClick={apply}>Apply Leave</button></a>
                </li>}
                {(role == "Front Officer" && value == "On") && <li class="nav-item">
                  <a class="nav-link active" aria-current="page"> <button className='btn btn-outline-primary  m-1 db-btn' onClick={outpatient}>Outpatient Entry</button></a>
                </li>}
                {(role == "Doctor" && value == "On") && <li class="nav-item">
                  <a class="nav-link active" aria-current="page" >    <button className='btn btn-outline-primary  m-1 db-btn' onClick={doctor}>Doctor Entry</button></a>
                </li>}
                {(role == "Hr" && value == "On") && <li class="nav-item">
                  <a class="nav-link active" aria-current="page"><button className='btn btn-outline-primary  m-1 db-btn' onClick={employee}>Add Employee</button></a>
                </li>}
                {value == "On" && <li class="nav-item">
                  <a class="nav-link active" aria-current="page"><button className='btn btn-outline-primary  m-1 db-btn' onClick={profile}>Edit Profile</button></a>
                </li>}
                <li class="nav-item">
                  <div className="card flex justify-content-center m-1 db-on-off">
                    <SelectButton value={value} onChange={roles} options={options} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='dashboard-content'>
          <h1 className='report1'>Report</h1>
          <div className='dashboard-btn '>
            <button className='btn btn-outline-secondary  m-1 w-25' onClick={yesterday}>Today</button>
            <button className='btn btn-outline-secondary m-1 w-25' onClick={lastweek}>Last week</button>
            <button className='btn btn-outline-secondary  m-1 w-25' onClick={currentmonth}>This month</button>
            <button className='btn btn-outline-secondary  m-1 w-25' onClick={alldata}>All data</button>
          </div>
          <div className="card mt-3">
            <DataTable value={tabledata} tableStyle={{ minWidth: '50rem' }}>
              <Column field="patientID" header="ID"></Column>
              <Column field="date" header="DATE"></Column>
              <Column field="name" header="NAME"></Column>
              <Column field="number" header="PHONE NUMBER"></Column>
              <Column field="age" header="AGE"></Column>
              <Column field="visit" header="CAUSE OF VISIT"></Column>
            </DataTable>
          </div>
        </div>
      </div>

    </>
  )
}
export default Dashboard

