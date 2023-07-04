import edit from '../assets/images/dashboardimg/editmenu.png'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import deletes from '../assets/images/dashboardimg/editdelete.png'
import adminemail from '../assets/images/dashboardimg/sms.png'
import phones from '../../src/assets/images/dashboardimg/phonenum.png'
import Modal from 'react-bootstrap/Modal'
import birth from '../assets/images/dashboardimg/birthdate.png'
import user from '../assets/images/dashboardimg/1.png'
import loc from '../assets/images/dashboardimg/location.png'
import cases from '../assets/images/dashboardimg/briefcase.png'
import teach from '../assets/images/dashboardimg/teacher.png'
import gender from '../assets/images/dashboardimg/Gender.png'
import edituser1 from '../assets/images/dashboardimg/edit-user1.png'
import editcamera from '../assets/images/dashboardimg/edit-camera.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import React, { useState, useRef } from 'react'
import FilterGenderActivity from './filtergenderactivity'
import Demo from './tabs/croprofile'


const Editprof = () => {

  const inputRef = useRef(null)
  const [url, seturl] = useState('')
  const [tags1, setTags1] = useState([{ id: "1", naming: 'Display age as age range instead', checking: true }])
  const [birthsdate, setdate] = useState('02/07/1998')
  const [addmore, setmore] = useState([])

  const handleUpload = () => {
    inputRef.current?.click()
  }
  const handleDisplayFileDetails = (event) => {
    const file = event.target.files[0]
    seturl(URL.createObjectURL(file))
    console.log(file, url, event.target.result)
  }


  // This function will be triggered when the file field change
  const handlechange1 = (index) => {
    const newTags1 = [...tags1]
    if (newTags1[index].checking === true) {
      newTags1[index].checking = false
    } else {
      newTags1[index].checking = true
    }
    setTags1(newTags1)
  }

console.log(addmore)
  const moreclick = () => {
    
    setmore([])
    console.log(addmore)
  }

  return (
    <>
      <Demo></Demo>
      <div className='row mt-1'>
        <span className='edit_subheading mb-2'>Credentials</span>
        <div className='col-6'>
          <div className="form-group">
            <div className='d-flex align-items-center'>
              <img src={adminemail} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Email</span>
            </div>
            <input name="fullname" type="text" defaultValue="johndoe@gmail.com" className='formControl text_field ' />
          </div>
        </div>
        <div className='col-6'>
          <div className="form-group">
            <img src={phones} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Mobile Number</span>
            <input name="fullname" type="text" defaultValue="445-334-3322" className='formControl text_field ' />
          </div>
        </div>
      </div>

      <hr style={{ borderBottom: "0.5px solid #CCD8DB" }} className="mb-2"></hr>

      <div className='row'>
        <span className='edit_subheading mb-2'>Key Profile Info</span>
        <div className='col-6'>
          <div className="form-group">
            <div className='d-flex align-items-center'>
              <img src={user} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Full Name</span>
            </div>
            <input name="fullname" type="text" defaultValue="John Doe" className='formControl text_field ' />
          </div>
        </div>
        <div className='col-6'>
          <div className="form-group">
            <div className='d-flex align-items-center'>
              <img src={birth} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Birthdate</span>
            </div>
            <input name="birthdate" type="text" placeholder='MM/DD/YYYY' defaultValue={birthsdate} className='formControl text_field ' />
          </div>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-7'></div>
        <div className='col-5' >
          {tags1.map((items1, index) => <div key={index} style={{ marginLeft: "10%", marginTop: "-2%" }} >
            <img onClick={() => { handlechange1(index) }} src={items1.checking ? checkblankboxes : checktickboxes} width="25px" height="25px"></img>&nbsp;&nbsp;
            <span class="text_style">{items1.naming}</span>
          </div>)}
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col-6'>
          <div className="form-group">
            <div className='d-flex align-items-center'>
              <img src={loc} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Primary Location</span>
            </div>
            <input name="fullname" type="text" defaultValue="South End, Boston" className='formControl text_field ' />
          </div>
        </div>
        <div className='col-6'>
          <div className="form-group">
            <div className='d-flex align-items-center'>
              <img src={cases} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Occupation</span>
            </div>
            <input name="birthdate" type="text" defaultValue="UX Designer at Hint Social" className='formControl text_field ' />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between '>
        <span className='d-flex align-items-center'>
          <img src={teach} height="20px" width="20px" className='me-50'></img> <span className='input_toptext'>Education</span> </span>
        <span className='edit_delete' onClick={moreclick} >Add More</span>

      </div>

        {addmore.map((res) => {
          return (
            <div className='col-6'>
              <input name="birthdate" type="text"  className='formControl text_field ' />
            </div>
          )
        })
        }
      
    </>
  )
}

export default Editprof