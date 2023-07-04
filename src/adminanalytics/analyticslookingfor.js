import React, { useState } from "react"
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"

const AnalyticsFilterLookingFor = () => {

  const [lookingfor, setLookingfor] = useState([
    { id: 0, name: 'New Friends', keyname: "new_friends", checked: false, show: true },
    { id: 1, name: 'Activity Partner', keyname: "activity_partners", checked: false, show: true },
    { id: 2, name: 'Dating', keyname: "dating", checked: false, show: true },
    { id: 3, name: 'Things to Do', keyname: "thinds_to_do", checked: false, show: false },
    { id: 4, name: 'Business', keyname: "business", checked: false, show: false }
  ])

  const [dating, setDating] = useState([
    { id: 5, name: 'Long-Term Relationship', keyname: "long_term_relationship", checked: false },
    { id: 6, name: 'Casual', keyname: 'causal', checked: false },
    { id: 7, name: 'Marriage', keyname: 'marriage', checked: false },
    { id: 8, name: 'Not Sure Yet', keyname: 'not_sure_yet', checked: false }
  ])

  const [datingOpt, setdatingOpt] = useState(false)
  const [selectedLookingfor, setSelectedLookingfor] = useState([])

  // const handlechange = (index) => {
  //   const newTags = [...tags];
  //   if (newTags[index].checking === false) {
  //     newTags[index].checking = true
  //   }
  //   else {
  //     newTags[index].checking = false
  //   }
  //   setTags(newTags);
  // }

  // const handlechange1 = (index) => {
  //   const newTags1 = [...tags1];
  //   if (newTags1[index].checking === false) {
  //     newTags1[index].checking = true
  //   }
  //   else {
  //     newTags1[index].checking = false
  //   }
  //   setTags1(newTags1);
  // }


  const lookingforHandle = (index) => {
    //
    // const selectedraw = []
    const newLookingfor1 = [...lookingfor]

    if (newLookingfor1[index].checked == false) {
      newLookingfor1[index].checked = true
      // selectedraw.push(newLookingfor1[index].keyname)
      setLookingfor(newLookingfor1)
    } else {
      newLookingfor1[index].checked == true
      newLookingfor1[index].checked = false
      setLookingfor(newLookingfor1)
    }

    if (index == 2 && newLookingfor1[index].checked == true) {
      setdatingOpt(true)
      setLookingfor(newLookingfor1)
      console.log(datingOpt)
      console.log(newLookingfor1)

    } else if (index == 2 && newLookingfor1[index].checked == false) {
      setdatingOpt(false)
      console.log(datingOpt)
      setLookingfor(newLookingfor1)
    }
    // const selectedVal = [...new Set(selectedraw)]
    // console.log(selectedVal)
    // setSelectedLookingfor(selectedVal)
    // console.log(selectedLookingfor)
  }

  const lookingforDatingHandle = (index) => {
    const newDating = [...dating]
    if (newDating[index].checked == false) {
      newDating[index].checked = true
      setDating(newDating)
    } else {
      newDating[index].checked == true
      newDating[index].checked = false
      setDating(newDating)
    }
    console.log(dating)
  }

  const [showLess_lookingfor, setshowLess_lookingfor] = useState(true)
  const changeShow_lookingfor = () => {
    if (showLess_lookingfor === true) {
    setshowLess_lookingfor(false)
    } else {
      setshowLess_lookingfor(true)
    }
  }

  return (
    <>
      <div>
        <div className='d-flex justify-content-between flex-row mb-2'>
          <div>
            <span className='loc'>Looking for</span>
          </div>
          <div>
            <div onClick={changeShow_lookingfor}>{showLess_lookingfor ? <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
          </div>
        </div>
        <div className="row">

          {lookingfor.map((items, index) => {
            return (
              <div key={index} className="col-4">
                <div className='mb-2 d-flex align-items-center' >
                  <img className="me-50" onClick={() => { lookingforHandle(index) }} src={items.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                  <span style={items.css} className='fonting-style col-9'>{items.name} </span><br></br>
                </div>
              </div>
            )
          })}
          {datingOpt == true ? <div className="row">
              <div className="mb-1" >
                <span className='fonting-styling '>Because you selected dating...</span><br></br>
              </div>
              {dating.map((items1, index) => {
                return (
                  <div key={index} className="col-6">
                    <div className='mb-2 d-flex align-items-center'>
                      <img className="me-50" onClick={() => { lookingforDatingHandle(index) }} src={items1.checked == true ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>
                      <span className='fonting-style col'>{items1.name} </span><br></br>
                    </div>
                  </div>
                )
              }
              )}
            </div> : null}
        </div>
      </div>
    </>
  )
}

export default AnalyticsFilterLookingFor