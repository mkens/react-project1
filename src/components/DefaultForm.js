import React, { useState } from 'react'

export default function DefaultForm() {
 const[myForm, setMyForm] = useState({FirstName:"krutika"});

 const handleClick =()=>{
    console.log(myForm)
 }
  return (
    <div>
      <div className="row">
        <div className="col">
            <input type="text" className="form-control" 
            placeholder="First name" aria-label="First name" value={myForm.FirstName}
            onChange={(e)=>{ setMyForm({FirstName:e.target.value})}}
            ></input>
        </div>
        <div className="col">
            {/* <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" 
            value={myForm.LastName}
            onChange={(e)=>{ setMyForm({LastName:e.target.value,...myForm})}}
            ></input> */}
        </div>
        <button className="btn btn-primary" onClick={handleClick} >Submit</button>
    </div>
    </div>
  )
}
