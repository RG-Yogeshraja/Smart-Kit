import React, { useState, useCallback, useRef, useEffect } from 'react'

import Cropper from 'react-easy-crop'



import blankimagees from'../../../src/assets/images/dashboardimg/blank-image.png'
import editcamera from '../../../src/assets/images/dashboardimg/edit-camera.png'

import InputRange from 'react-input-range'

import { getCroppedImg } from '../../adminusers/tabs/canvasUtils'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { Upload } from 'react-feather'
import calendardarks from'../../../src/assets/images/dashboardimg/calendardark.png'






const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
}

const SponsorsEventsInfooAddcropDemo = (props) => {
  const [imageSrc, setImageSrc] = React.useState(null)
  const [image, setImage] = React.useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [setdefault, getdefault] = useState(false)
  const [getfile, setfile] = useState(null)
  const [filename, setfilename] = useState(null)
  const inputRef = useRef(null)



 
  const handleUpload = () => {
    console.log(croppedImage, url, "aaaaaa")
    setImage(false)
    console.log(image, "jdjsdjj")
    inputRef.current?.click()
    setShow(true)
  }

  const resetbuttonbox = () => {
    setCroppedImage(calendardarks)
    console.log(croppedImage, "aaaaaa")
    props.handle1("reset")
    getdefault(true)
  }
  useEffect(() => {
    getdefault(false)
  }, [])

  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data.split(',')[1])
    const byteArrays = []
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize)
      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }
    const blob = new Blob(byteArrays, { type: contentType })
    return blob
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setfile(file)
      setfilename(file.name)
      e.target.value = null
      const imageDataUrl = await readFile(file)
      console.log(file, url, e.target.result)
      setImage(true)
      setImageSrc(imageDataUrl)
    }
  }


  const trash1 = () => {
   seturls(blankimagees)
   setCroppedImage(null)
    setImage(true)
  }
  const trash2 = () => {
    setImage(true)
    setCroppedImage(null)
    seturls(blankimagees)
    console.log(croppedImage)
  }

  const [url, seturl] = useState('')

  // const handleUpload = () => {
  //   setCroppedAreaPixels(croppedAreaPixels),
  //     inputRef
  // }


 

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    imageSrc,
      setCroppedAreaPixels(croppedAreaPixels)



  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation)
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
      const val = b64toBlob(croppedImage, filename)
      const done = new File([val], filename, { type: 'image/png' })
      props.crop(done)
      console.log(getfile)
    } catch (e) {
      console.error(e)
    }
    setShow(false)
  }, [imageSrc, croppedAreaPixels, rotation])

    const handleShow = () => {
      setShow(true)
    }
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 

  return (
    <div>



      {image && (
        <React.Fragment>



          <div className='btn1'>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>

              </Modal.Header>
              <Modal.Body>



                <div style={{
                  position: 'relative', backgroundColor: 'white', width: '100%',
                  height: '400px',
                }} className="mb-3">

                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}

                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </div>
                {/* <span>Zoom</span>
                <div className='mb-1'>
                  <InputRange
                    value={zoom}
                    min={1}
                    max={100}
                    step={0.1}
                    aria-labelledby="Zoom"

                    onChange={(e, zoom) => setZoom(zoom)}
                  /></div> */}

                {/* <span>Rotation</span>
<div className="mb-1">
       <InputRange  
        value={rotation}
        min={0}
        max={360}
        step={1}
        aria-labelledby="Rotation"
        
        onChange={(e, rotation) => setRotation(rotation)}
        /> </div> */}
                {/* <Button onClick={showCroppedImage}
              variant="contained"
              classN">show preview</Button> */}
                <div className='d-flex justify-content-end align-tems-end'>
                  <button variant="contained" className='buttonshow mb-2' onClick={showCroppedImage}>
                    Done
                  </button>
                </div>
                {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}

              </Modal.Body>

            </Modal>
            </div>

</React.Fragment>
      )}

<div className='row'>
        <div className='col-6'>
          <img src={croppedImage != undefined ? croppedImage : blankimagees} width="332px" height="398px" onClick={handleUpload} style={{ borderRadius: '10px' }}></img>
          <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={onFileChange} onClick={handleShow}></input>
          <div className='d-flex justify-content-center'>
            <img src={editcamera} width="66px" height="66px" style={{ position: 'absolute', top: "150px", left: '130px', display: croppedImage !== null ? 'none' : '' }} onClick={handleUpload}></img>
          </div>
          <span className='font-white-camera  absolutivelyyy' style={{ display: croppedImage !== null ? 'none' : 'flex', left:"60px",top:"235px" }}>Tap to upload images or videos</span>
        </div>
        <div className='col-6 d-flex align-items-center'><button className="align-items-center ms-2 btn2-style" onClick={resetbuttonbox} style={{ width: "175px", height: "45px", display: croppedImage !== null && setdefault === false ? 'flex' : 'none' }}><span className="text-update">Reset Default Image</span></button>
        </div>
      </div>
         
     
    </div>

  )
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

export default SponsorsEventsInfooAddcropDemo;

// const StyledDemo = withStyles(styles)(Demo)

// const rootElement = document.getElementById('root')
// ReactDOM.render(<StyledDemo />, rootElement)
