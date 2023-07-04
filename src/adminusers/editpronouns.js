import React, { useState, useEffect} from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo3 from '../assets/images/dashboardimg/edit-logo3.png'

const EditPronouns = (props) => {

  const [pronouns, setPronouns] = useState([
    { id: 0, name: 'she/her', checked: false, value:'she_her' },
    { id: 1, name: 'he/him', checked: false, value:'he_him' },
    { id: 2, name: 'they/them', checked: false, value:'they_them' },
    { id: 3, name: 'ze/zir', checked: false, value:'ze_zir' },
    { id: 4, name: 'xe/xim', checked: false, value:'xe_xim' },
    { id: 5, name: 'co/co', checked: false, value:'co_co' },
    { id: 6, name: 'ey/em', checked: false, value:'ey_em'},
    { id: 7, name: 've/ver', checked: false, value:'ve_ver' },
    { id: 8, name: 'per/per', checked: false, value:'per_per' },
    { id: 9, name: 'Other', checked: false, value:'other' }

  ])
  const [getpronouns, setpronounsval] = useState(props.data_pronoun)
  useEffect(() => {
    let vm = []
    console.log(props.data_pronoun)
    const noun = [...pronouns]
    const apinoun = [...getpronouns]
    for (let i = 0; i < noun.length; i++) {
      for (let j = 0; j < apinoun.length; j++) {
        if (noun[i].value === apinoun[j]) {
          noun[i].checked = true
        }
      }
    }
    
    setPronouns(noun)
    vm = noun.filter(res => res.checked === true)
    if (vm.length !== 0) {
      props.setpro(vm)
    }
  }, [])
  const [showLess_pronouns, setshowLess_pronouns] = useState(true)
  const newPronouns = [...pronouns]

  const changeShow_pronouns = () => {
    setshowLess_pronouns(!showLess_pronouns)
  }

  // const handlechange_pronouns = (index) => {
  //   const newpronouns = [...pronouns]
  //   if (newpronouns[index].checked === true) {
  //     newpronouns[index].checked = false
  //   } else {
  //     newpronouns[index].checked = true
  //   }
  //   setPronouns(newpronouns)
  // }

  const handlechange_pronouns = (index) => {
    let vm=[]
    for (let i = 0; i < newPronouns.length; i++) {
      if (newPronouns[i].id === index) {
        newPronouns[i].checked = true
      } else if (newPronouns[i].id !== index) {
        newPronouns[i].checked = false
      }
    }
    setPronouns(newPronouns)
    vm = newPronouns.filter(res => res.checked === true)
    if (vm.length !== 0) {
      props.setpro(vm)
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <img src={edit_logo3} width="20px" height="20px"></img>&nbsp;&nbsp;
          <span className='loc-text'>Pronouns</span>
        </div>
        <div>
          <div onClick={changeShow_pronouns}>{showLess_pronouns ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <div className="row">
        {showLess_pronouns ? <>
          {pronouns.map((items, index) => <div key={index} className="col-2">
            {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? <div className='mb-2 d-flex align-items-center' >
              <img disabled={() => { handlechange_pronouns(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style'>{items.name} </span><br></br>
            </div> : ""}
          </div>)}
        </> : <>
          {pronouns.map((items, index) => <div key={index} className="col-2">
            <div className='mb-2 d-flex align-items-center'>
              <img disabled={() => { handlechange_pronouns(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style'>{items.name} </span><br></br>
            </div>
          </div>)}
          <div className='col-12 mb-1 placeholding'>
            <div className='d-flex align-items-center border_size'>
              <input type="input" className='w-100 height-range ms-1 text_search ' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Let us know what we are missing...'></input>
            </div>
          </div>
        </>
        }
      </div>
    </>
  )
}

export default EditPronouns