import React, { useState, useCallback, useRef, useEffect } from 'react'
import Cropper from 'react-easy-crop'
import editcamera from '../../assets/images/dashboardimg/edit-camera.png'
import InputRange from 'react-input-range'
import { getCroppedImg } from '../../adminusers/tabs/canvasUtils'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Upload } from 'react-feather'
import defaultuserprofilepicture from '../../assets/images/dashboardimg/defaultuserprofilepicture.png'



const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90
}


const Demo = (props) => {
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
  const inputRef = useRef(null)
  const [url, seturl] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => { setShow(true) }

const [setdefault, getdefault] = useState(false)
  const handleUpload = () => {
    console.log(croppedImage, url, "aaaaaa")
    setImage(false)
    console.log(image, "jdjsdjj")
    inputRef.current?.click()
    setShow(true)
  }
  const resetbuttonbox = () => {
    console.log(croppedImage)
    setCroppedImage(defaultuserprofilepicture)
setimages('')
getdefault(true)
props.handles('Reset')
    console.log(imgurls)
  }
  useEffect(() => {
    
  if (props.data === '') {
   getdefault(true)
   
    
  } else {
    getdefault(false)
    
  }
  
  }, [])
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
    const blob = new Blob(byteArrays, { type: contentType })
    return blob
  }

  useEffect(() => {
    
    if (props.data === '') {
      setimages(defaultuserprofilepicture)
    } else {
      setimages(props.data)
    }
  }, [props])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )
      console.log('donee', { croppedImage })
      setCroppedImage(croppedImage)
      const val = b64toBlob(croppedImage, filename)
      const done = new File([val], filename, { type: 'image/png' })
      props.crop(done)
      getdefault(false)

    } catch (e) {
      console.error(e)
    }
    setShow(false)
  }, [imageSrc, croppedAreaPixels, rotation])


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
      setImage(true)
      setImageSrc(imageDataUrl)
    }
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
                    onZoomChange={setZoom} />
                </div>

                <div className='d-flex justify-content-end align-tems-end'>
                  <button variant="contained" className='buttonshow mb-2' onClick={showCroppedImage}>
                    Done
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </React.Fragment>
      )}

      {/* <div> */}
        {/* <img src={croppedImage != undefined ? croppedImage : imgurls} width="300px" height="398px" style={{ borderRadius: '10px' }}></img>
        <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={onFileChange} onClick={handleShow}></input>
        <img src={editcamera} width="40px" height="40px" style={{ marginBottom: "-400px", marginLeft: "-8%" }} onClick={handleUpload}></img>
      </div>
    </div> */}

    
    <div className='row'>
    <div className='col-6'>
          <img src={croppedImage != undefined ? croppedImage : imgurls} width="300px" height="398px" style={{ borderRadius: '10px' }}></img>

          <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={onFileChange} onClick={handleShow}></input>
          <div className='d-flex justify-content-center'>
          <img src={editcamera} width="40px" height="40px" style={{marginLeft:"80%", marginTop: "-20px"}} onClick={handleUpload}></img>
          </div>
          </div>
          <div className='col-6 d-flex align-items-center'><button className="align-items-center ms-2 btn2-style" onClick={resetbuttonbox} style={{ width: "175px", height: "45px", display:  setdefault !== true  ? 'flex' : 'none' }}><span className="text-update">Reset Default Image</span></button>
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


export default Demo