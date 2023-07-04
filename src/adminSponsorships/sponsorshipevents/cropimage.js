import  Modal  from "react-bootstrap/Modal"
import React, { useState, useRef, useCallback} from "react"
import subheader from '../../assets/images/dashboardimg/Subheading.png'
import Cropper from 'react-easy-crop'

const Imagecrop = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

    const [shows, setShows] = useState(false)
    const handleClose = () => setShows(false)
    const handleShow = () => {
   
  //   props.clickhandle()
    setShows(true)
    }
    
   
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }, [])
return (
    <>
    {/* <button onClick={handleShow}>crop</button> */}
    <Modal 
    show={shows} centered onHide={handleClose}
    >  
 <div className="App p-5">
      <div className="crop-container">
        <Cropper
          image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
    
    </div>

    </Modal>
    </>
)
}
export default Imagecrop