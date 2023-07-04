

import React from "react";


import { useState } from "react";

import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import { useEffect } from "react";
import AutoComplete from '../groupspanel/locationApi'




const FiltergrpGroupType = (props) => {
  console.log(props.data,"bbbb")
  const [tags, setTags] = useState([
    { id: 0, naming: 'Active Groups', checking: true },
    { id: 1, naming: 'Inactive Groups', checking: true },
    { id: 2, naming: 'Private Groups', checking: true },
    { id: 3, naming: 'Public Groups', checking: true },
    { id: 4, naming: 'Hint Social Groups', checking: true },
    { id: 5, naming: 'Non-Hint Social Groups', checking: true },
    // {id:3,naming:'Non-Hint Social Groups',checking:true},
  ])
  const [clearFilterValues, setClearFilterValues] = useState('')

  useEffect(() => {
    
    if (props.data === '1') {
      setClearFilterValues(props.data)
      const newTags = [...tags];
      for(let i=0; i>newTags.length; i++){
        newTags[i].checking=false
      }
      setTags(newTags)

    }
    
  }, [props.data])

  const handlechange = (index) => {

    const newTags = [...tags];
    if (newTags[index].checking === true) {
      newTags[index].checking = false
    }
    else {
      newTags[index].checking = true
    }

    setTags(newTags);
  };

  

  return (
    <>
      <div className="mt-1 mb-2">
 
        <span className="font-groups">Group Type</span>
      </div>

      <form className="row">
     
        {tags.map((items, index) => <div key={index}  className="col-6">


          <div className='mb-2 d-flex align-items-center'>

            <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes}  clearFilterValues ={props.data} width="20px" height="20px"></img>&nbsp;&nbsp;

            <span style={items.css} className='fonting-style11 col-9'>{items.naming} </span><br></br>
            {/* <p>{props.data}</p> */}


          </div>



        </div>)}
      </form>



    </>
  )
}

export default FiltergrpGroupType;