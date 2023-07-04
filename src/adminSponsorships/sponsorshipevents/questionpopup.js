import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/questions.scss'
import whitebox from '../../assets/images/dashboardimg/fieldbox.png'
import checked from '../../assets/images/dashboardimg/checktickbox.png'
import pluscircle from '../../assets/images/dashboardimg/addnew.png'
import { useState } from 'react'
const Questionspopup = () => {
    const [check1, setcheck] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)
    const [includeanswer, setincludeanswer] = useState(false)
    const [includeanswer1, setincludeanswer1] = useState(false)
    const [description, setdescription] = useState([{name:"Include “Other” Answer", checkeds:false}, {name:"Conditional", checkeds:false}])
    const [checks, setchecks] = useState([{name:"Multiple Choice", checkeds:false, description:"Only one answer can be selected"}, {name:"Checkboxes", checkeds:false, description:"More than one answer can be selected"}, {name:"Free Form", checkeds:false, description:"Open answer"}])
   const checkboxtrigger = () => {
        if (check1 === true) {
            setcheck(false)
        } else {
            setcheck(true) 
        }
    }
    const includeans = () => {
        if (includeanswer === true) {
            setincludeanswer(false)
        } else {
            setincludeanswer(true) 
        }
    }
    const includeans1 = () => {
        if (includeanswer1 === true) {
            setincludeanswer1(false)
        } else {
            setincludeanswer1(true) 
        }
    }
    const checkboxtrigger1 = () => {
        if (check2 === true) {
            setcheck2(false)
        } else {
            setcheck2(true) 
        }
    }
    const checkboxtrigger2 = () => {
        if (check3 === true) {
            setcheck3(false)
        } else {
            setcheck3(true) 
        }
    }
   const checkmultiple = (index) => {
  
        const newTags = [...checks]
        if (newTags[index].checkeds === true) {
          newTags[index].checkeds = false
        } else {
          newTags[index].checkeds = true
        }
       
        setchecks(newTags)
   }
   const checkmultipleanswer = (index) => {
    const newTags1 = [...description]
    if (newTags1[index].checkeds === true) {
      newTags1[index].checkeds = false
    } else {
      newTags1[index].checkeds = true
    }
   
    setdescription(newTags1)
   }

    return (
<div>
    <div>
<span className='questions_toptext'>Event Question from Admin</span>
</div>
<div className='d-flex justify-content-between align-items-center mt-50'>
<span >
    <img src={check1 === true ? checked : whitebox} onClick={checkboxtrigger} width="20px" height="20px"></img>
<span className='questions_questions1 ms-25 '>Question 1</span>
</span>
<span >
    <img src={pluscircle}  width="41px" height="41px"></img>

</span>
</div>
<div className='d-flex flex-row mt-1'>
{checks.map((res, index) => {
    return (
        <div className='d-flex ' style={{marginRight:"29px"}}>
        <span className='questions_multiplecheckbox '>  <img src={res.checkeds === true ? checked : whitebox} onClick={() => checkmultiple(index)} width="20px" height="20px" className='me-50'></img>{res.name}<br></br><span style={{marginLeft:"25px"}}>{res.description}</span></span>
        </div>
    )
}
)
}

</div>
<div className='col-12 mt-1'>
<input  placeholder='Question 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='row mt-1'>
    <div className='col-6'>
<input  placeholder='Answer 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 2...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='row mt-1'>
    <div className='col-6'>
<input  placeholder='Answer 3...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 4...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='d-flex justify-content-end'>
{description.map((res, index) => {
    return (
        <div className='d-flex ms-1 mt-1 align-items-center'>
        <span className='questions_multiplecheckbox'>  <img src={res.checkeds === true ? checked : whitebox} onClick={() => checkmultipleanswer(index)} width="20px" height="20px" className='me-50'></img>{res.name}</span>
        </div>
    )
}
)
}  
</div>
<div className='d-flex  align-items-center mt-1'>
<span >
    <img src={check2 === true ? checked : whitebox} onClick={checkboxtrigger1} width="20px" height="20px"></img>
<span className='questions_questions1 ms-25 '>Question 2</span>

</span>
</div>
<div className='mt-1'>
    <span className='questions_multiplecheckbox '>If yes,</span>
</div>
<div className='col-12 mt-1'>
<input  placeholder='Question 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='row mt-1'>

    <div className='col-6'>
<input  placeholder='Answer 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 2...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='row mt-1'>
    <div className='col-6'>
<input  placeholder='Answer 3...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 4...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='d-flex justify-content-end mt-1'>
<span className='questions_multiplecheckbox'>  <img src={includeanswer === true ? checked : whitebox} onClick={() => includeans()} width="20px" height="20px" className='me-50'></img>Include “Other” Answer</span>   
</div>

<div className='mt-1'>
    <span className='questions_multiplecheckbox '>If no,</span>
</div>
<div className='col-12 mt-1'>
<input  placeholder='Question 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='row mt-1'>

    <div className='col-6'>
<input  placeholder='Answer 1...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 2...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='row mt-1'>
    <div className='col-6'>
<input  placeholder='Answer 3...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
<div className='col-6'>
<input  placeholder='Answer 4...' className='formControl w-100' style={{border:"1px solid #ECECEC"}}></input>
</div>
</div>
<div className='d-flex justify-content-end mt-1'>
<span className='questions_multiplecheckbox'>  <img src={includeanswer1 === true ? checked : whitebox} onClick={() => includeans1()} width="20px" height="20px" className='me-50'></img>Include “Other” Answer</span>   
</div>

</div>
    )
}
export default Questionspopup