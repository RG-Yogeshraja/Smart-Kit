import { useState } from 'react'
import { useRef } from 'react'
import Editprof from "../adminusers/editprofilepopup"
import '../@core/scss/base/adminDashboard/sideprofile.scss'
import '../@core/scss/base/adminDashboard/editprofilepopup.scss'
import editcamera from '../assets/images/dashboardimg/edit-camera.png'
import EventscropDemo from './events-cropprofile'

const EditprofilePopup = (props) => {
  
  const inputRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState()
  const [url, seturl] = useState('')
  // This function will be triggered when the file field change
  const handleDisplayFileDetails = (event) => {
    const file = event.target.files[0]
    seturl(URL.createObjectURL(file))
    console.log(file, url, event.target.result)
  }
  const handleUpload = () => {
    inputRef.current?.click()
  }
  // This function will be triggered when the "Remove This Image" button is clicked
  return (
    <>
    <EventscropDemo></EventscropDemo>
      {/* <div className='col-12'>
        <img src={url === '' || props.data === "dogs" ? edituser2 : url === '' || props.data === "usered" ? edituser1 : url} width="300px" height="300px"></img>
      </div>
      <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={handleDisplayFileDetails}></input>
      <img src={editcamera} width="50px" height="50px" style={{ marginTop: "-5%", marginLeft: "36%" }} onClick={handleUpload}></img> */}
    </>
  )
}

export default EditprofilePopup