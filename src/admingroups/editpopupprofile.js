import React, { useState, useCallback, useRef, useEffect } from 'react'

import Cropper from 'react-easy-crop'

import editcamera from '../assets/images/dashboardimg/edit-camera.png'
import InputRange from 'react-input-range'

import { getCroppedImg } from '../adminusers/tabs/canvasUtils'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Upload } from 'react-feather'
import twousers from '../assets/images/dashboardimg/twousersgroup.png'

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90
}


const EditprofilePopup = (props) => {
  const [imageSrc, setImageSrc] = React.useState(null)
  const [imgurls, setimages] = useState()
  const [image, setImage] = React.useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const [getfile, setfile] = useState(null)
  const [filename, setfilename] = useState(null)
  const [setdefault, getdefault] = useState(false)
  const inputRef = useRef(null)
const [getheights, setheights] = useState('398px')

  const [url, seturl] = useState('')

  // const handleUpload = () => {
  //   setCroppedAreaPixels(croppedAreaPixels),
  //     inputRef
  // }


  const handleUpload = () => {
    // 
    console.log(croppedImage, url, "aaaaaa")

    setImage(false)
    // imageSrc,
    console.log(image, "jdjsdjj")
    inputRef.current?.click()
    setShow(true)

  }
  const handleUploadeded = () => {
    // imageSrc,

    inputRef.current?.click()


  }
 
  //   const handleDisplayFileDetails = (event) => {
  //     const file = event.target.files[0]

  //     seturl(URL.createObjectURL(file))

  //     console.log(file, url, event.target.result)
  //   }


  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    imageSrc,
      setCroppedAreaPixels(croppedAreaPixels)


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
  
    const blob = new Blob(byteArrays, {type: contentType})
    return blob
  }
useEffect(() => {
  
if (props.data === '') {
  setimages(edituser1)
 
  
} else {
 
  setimages(props.data)
}

}, [props])
useEffect(() => {
  
if (props.data === '/src/assets/images/dashboardimg/twousersgroup.png') {
  setheights('')
 getdefault(true)
 
  
} else {
  getdefault(false)
  
}

}, [])
  const showCroppedImage = useCallback(async () => {

    try {
      const croppedImage = await getCroppedImg(
        imageSrc,

        croppedAreaPixels,
        rotation

      )

      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
      getdefault(false)
      const val = b64toBlob(croppedImage, filename)
      const done = new File([val], filename, { type: 'image/png' })
      setheights('398px')
    props.crop(done)

    } catch (e) {
      console.error(e)

    }
    setShow(false)
  }
    , [imageSrc, croppedAreaPixels, rotation])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])
  const resetbuttonbox = () => {
    console.log(croppedImage)
    setheights('')
    setCroppedImage(twousers)
setimages('')
getdefault(true)
props.handle1('Reset')
    console.log(imgurls)
  }

  const onFileChange = async (e) => {
    // 
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      e.target.value = null
      setfile(file)
      setfilename(file.name)
      const imageDataUrl = await readFile(file)

      // const file = e.target.files[0]


      console.log(file, url, e.target.result)


      // try {

      //   const orientation = await getOrientation(file)
      //   const rotation = ORIENTATION_TO_ANGLE[orientation]
      //   if (rotation) {
      //     imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
      //   }
      // } catch (e) {
      //   console.warn('failed to detect the orientation')
      // }
      setImage(true)
      
      setImageSrc(imageDataUrl)
    }

  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }
    

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
                  position: 'relative',
backgroundColor: 'white',
width: '100%',
height: '400px'
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
              <img src={croppedImage != undefined ? croppedImage : imgurls} width="300px" height={getheights} style={{ borderRadius: '10px' }}></img>

              <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={onFileChange} onClick={handleShow}></input>
              <div className='d-flex justify-content-center'>
              <img src={editcamera} width="40px" height="40px" style={{marginLeft:"160px", marginTop: "-20px"}} onClick={handleUpload}></img>
              </div>
              </div>
              <div className='col-6 d-flex align-items-center'><button className="align-items-center ms-2 btn2-style" onClick={resetbuttonbox} style={{ width: "175px", height: "45px", display:  setdefault !== true  ? 'flex' : 'none' }}><span className="text-update">Reset Default Image</span></button>
        </div>
            </div>

       
    {/* ) : (

      <div>
         <img src={croppedImage == undefined ? edituser1 : croppedImage} width="176px" height="176px" style={{ borderRadius: '10px' }}></img>

        <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={onFileChange} onClick={handleShow}></input>
      <img src={editcamera} width="40px" height="40px" style={{ marginTop: "24%", marginLeft: "-8%" }} onClick={handleUpload}></img>
        </div>
      )} */}

      {/* <div>
            <img src={croppedImage} alt="Cropped" />
          </div> */}
      {/* <input type="file" onChange={onFileChange} accept="image/*" /> */}
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


export default EditprofilePopup