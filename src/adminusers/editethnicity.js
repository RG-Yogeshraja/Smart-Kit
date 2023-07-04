import React, { useState, useEffect } from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo6 from '../assets/images/dashboardimg/edit-logo6.png'

const EditEthinicity = () => {

  const [tags, setTags] = useState([
    { id: "1", naming: 'African American', checking: true },
    { id: "2", naming: 'Black', checking: true },
    { id: "3", naming: 'North African', checking: true },
    { id: "4", naming: 'Central Asian', checking: true },
    { id: "5", naming: 'Hispanic', checking: true },
    { id: "6", naming: 'Southeast Asian', checking: true },
    { id: "7", naming: 'Chinese Caribbean', checking: true },
    { id: "8", naming: 'Jewish', checking: true },
    { id: "9", naming: 'Black Carribean', checking: true },
    { id: "10", naming: 'LatinX', checking: true },
    { id: "11", naming: 'Middle Eastern', checking: true },
    { id: "12", naming: 'Black African', checking: true },
    { id: "13", naming: 'Pacific Islander', checking: true },
    { id: "14", naming: 'South Asian', checking: true },
    { id: "15", naming: 'East Asian', checking: true },
    { id: "15", naming: 'West Asian', checking: true },
    { id: "16", naming: 'Indo-Caribbean', checking: true },
    { id: "17", naming: 'Native American', checking: true },
    { id: "18", naming: 'Black American', checking: true },
    { id: "19", naming: 'Other', checking: true }


  ]
  )
  useEffect(() => {
    const newtagss = [...tags]
    newtagss.sort((a, b) => a.naming.localeCompare(b.naming))
    setTags(newtagss)
  }, [])
  const handlechange = (index) => {

    const newTags = [...tags]
    if (newTags[index].checking === true) {
      newTags[index].checking = false
    } else {
      newTags[index].checking = true
    }

    setTags(newTags)
  }
  const [showLess, setshowLess] = useState(true)

  const changeShow = () => {
    setshowLess(!showLess)
  }

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <img src={edit_logo6} width="20px" height="20px"></img>&nbsp;&nbsp;
          <span className='loc-text ms-75'>Ethnicity</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>


      <form className="row">


        {showLess ? <>
          {tags.map((items, index) => <div key={index} className="col-2">
            {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? <div className='mb-2 d-flex align-items-center' >

              <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-9'>{items.naming} </span><br></br>


            </div> : ""}

          </div>)}
        </> : <>
          {tags.map((items, index) => <div key={index} className="col-2">

            <div className='mb-2 d-flex align-items-center'>

              <img onClick={() => { handlechange(index) }} src={items.checking ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-9'>{items.naming} </span><br></br>


            </div>

          </div>)}
        </>
        }


      </form>


    </>
  )
}

export default EditEthinicity