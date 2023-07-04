import React, { useState, useEffect } from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo1 from '../assets/images/dashboardimg/editlogo1.png'

const EditRelationshipStatus = (props) => {
const [setrelation, getrelationship] = useState(props.dataval)
  const [tags, setTags] = useState([
    { id: "1", naming: 'Single ', checking: false, value:'single' },
    { id: "2", naming: 'In a Relationship', checking: false, css: { marginLeft: '-23px' }, value:'in_a_relationship' },
    { id: "3", naming: 'It’s Complicated', checking: false, value:'its_complicated' }
  

  ])
 
  const [genders, setgenders] = useState([])
  const [showLess, setshowLess] = useState(true)
  useEffect(() => {
    
    let vals
    console.log(setrelation)
    const getrelation = [...tags]
    const getrelations = [...setrelation]
   
    if (getrelations.length >= getrelation.length) {
       for (let i = 0; i < getrelations.length; i++) {
      for (let j = 0; j < getrelation.length; j++) {
        if (getrelations[i] === getrelation[j].value) {
          getrelation[j].checking = true
        }
      }
    }
  } else if (getrelations.length < getrelation.length) {
    for (let i = 0; i < getrelation.length; i++) {
      for (let j = 0; j < getrelations.length; j++) {
        if (getrelations[i] === getrelation[j].value) {
          getrelation[j].checking = true
        }
      }
    }  
  }
  const s = getrelation.filter(res => res.checking === true)
  
  if (s.length !== 0) {
vals = [
      { id: "4", naming: 'Engaged', checking: true, value:'engaged' },
      { id: "5", naming: 'Married', checking: true, css: { marginLeft: '-23px' }, value:'married' },
      { id: "6", naming: 'Widowed', checking: true, value:'widowed' },
      { id: "7", naming: 'ENM', checking: true, value:'enm' },
      { id: "8", naming: 'Separated', checking: true, css: { marginLeft: '-23px' }, value:'seperated' },
      { id: "9", naming: 'Divorced', checking: true, value:'divorced' }
  ]
  setshowLess(false)
  setgenders(vals)
    

  } else  {
    setshowLess(true)
    setgenders([])
  }
  if (s.length !== 0) {
  const getrelate = [...vals]
  
  if (getrelations.length >= getrelate.length) {
    for (let k = 0; k < getrelations.length; k++) {
   for (let l = 0; l < getrelate.length; l++) {
     if (getrelations[k] === getrelate[l].value) {
      getrelate[l].checking = true
     }
   }
 }
} else if (getrelations.length < getrelate.length) {
  for (let k = 0; k < getrelations.length; k++) {
 for (let l = 0; l < getrelate.length; l++) {
   if (getrelations[k] === getrelate[l].value) {
    getrelate[l].checking = true
   }
 }
}
}
setgenders(getrelate)
props.sethandle(getrelate, tags)
}
setTags(getrelation)
if (s.length === 0) {
props.sethandle([], tags)
}
}, [])
  const changeShow = () => {
    if (showLess === true) {
      setshowLess(false)
    } else {
      setshowLess(true)
      
    }

  }
  // useEffect(() => {

  // }, [])
  const handlechange1 = (index) => {
    const tagval = [...genders]
    if (tagval[index].checking === true) {
      tagval[index].checking = false
    } else {
      tagval[index].checking = true
    }
    setgenders(tagval)
    props.sethandle(tagval, tags)
  }
  const handlechange = (index, name) => {
    
    const newtags = [...tags]
for (let i = 0; i < newtags.length; i++) {
  if (newtags[i].naming === name && newtags[i].checking === false) {
    newtags[i].checking = true
 
  } else if (newtags[i].checking === true) {
    
    newtags[i].checking = false
    
  } 
 

  }
  
  const f = newtags.filter(res => res.checking === true)
  if (f.length !== 0) {
    
   
    setgenders([
      { id: "4", naming: 'Engaged', checking: false, value:'engaged' },
      { id: "5", naming: 'Married', checking: false, css: { marginLeft: '-23px' }, value:'married' },
      { id: "6", naming: 'Widowed', checking: false, value:'widowed' },
      { id: "7", naming: 'ENM', checking: false, value:'enm' },
      { id: "8", naming: 'Separated', checking: false, css: { marginLeft: '-23px' }, value:'seperated' },
      { id: "9", naming: 'Divorced', checking: false, value:'divorced' }
  ]
    )
  } else {
    setshowLess(true)
    setgenders([])
  }
  setTags(newtags)
  props.sethandle(genders, tags)     
  
}
  
  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2 '>
        <div>
          <img src={edit_logo1} width="20px" height="20px"></img>&nbsp;&nbsp;
          <span className='loc-text'>Relationship Status</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <form className="row">

          {tags.map((items, index) => <div key={index} className="col-4">
           <div className='mb-2 d-flex align-items-center' style={items.css}>

              <img disabled={() => { handlechange(index, items.naming) }} src={items.checking ? checktickboxes  : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style '>{items.naming} </span><br></br>


            </div> 

          </div>)}
          {genders.map((items, index) => <div  style={{display:showLess === true ? 'none' : ''}} key={index} className="col-4">

            <div className='mb-2 d-flex align-items-center' style={items.css}>

              <img disabled={() => { handlechange1(index) }} src={items.checking ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-9'>{items.naming} </span><br></br>


            </div>

          </div>)}


      </form>


    </>
  )
}

export default EditRelationshipStatus