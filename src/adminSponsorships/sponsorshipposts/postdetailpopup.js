import React, { useState, useRef, useCallback, useEffect } from "react"
import whitebox from '../../assets/images/dashboardimg/fieldbox.png'
import checked from '../../assets/images/dashboardimg/checktickbox.png'
import imgs1 from '../../assets/images/dashboardimg/fillimagearray.png'
import boxes from '../../assets/images/dashboardimg/justbox.png'
import 'react-calendar/dist/Calendar.css'
import bgimage from '../../assets/images/dashboardimg/fillimage.png'
import bgcamera from '../../assets/images/dashboardimg/camera.png'
import subheader from '../../assets/images/dashboardimg/Subheading.png'
import SponsorsPostsAddcropDemo from "./sponsors-posts-addcropprofile"
import SponsorsPostsEditcropDemo1 from "./sponsors-posts-editcropprofile"
import sponsorpostimage1 from '../../assets/images/dashboardimg/sponsorpostimage1.png'



const Post_detailEdit = (props) => {

  const Options = [
    { value: '', label: 'Comedy Crew' }

    // { value: 'France', label: 'Moderator' }
  ]

  const [imgss1, setimg1] = useState(null)

  const [value, onChange] = useState()
  const [eventname, seteventname] = useState('')
  const [eventfee, seteventfee] = useState('')
  const [Cancellation, setcancellation] = useState('')
  const [City, setcity] = useState('')
  const [Code, setcode] = useState('')
  const [Venue, setVenue] = useState('')
  const [address, setaddress] = useState('')
  const [txt, defaulttxt] = useState('')
  const [levent, setevent] = useState(false)
  const [value1, onChange1] = useState()
  const [showCalendardetail, setShowCalendardetail] = useState(false)
  const [showCalendardetail1, setShowCalendardetail1] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showCalendar1, setShowCalendar1] = useState(false)
  const [mom, setmom] = useState()
  const [mom1, setmom1] = useState()
  const [url, seturl] = useState(null)
  const [multiple, setmultipleurl] = useState(null)
  const [alldays, setalldays] = useState(false)
  const [alldaysmultiple, setalldaysmultiple] = useState(false)
  const stateoption = [{ value: '', label: 'Boston' }]
  const [images1234] = useState([{ name: "img1", img123: imgs1 }, { name: "img2", img123: imgs1 }, { name: "img3", img123: imgs1 }])
  const [datemultiple, setmultiple] = useState([{ name: 'Nov. 16, 2022 from 3 - 4:30 pm' }, { name: 'Nov. 18, 2022 from 2 - 4:30 pm' }])
  const [intersetarr1] = useState([{ name: 'Pets' }, { name: 'Sports', css: { marginLeft: "-8px" } }, { name: 'Travel', css: { marginLeft: "-1px" } }, { name: 'Music', css: { marginLeft: "5px" } }, { name: 'Painting', css: { marginLeft: "10px" } }, { name: 'Outdoors', css: { marginLeft: "10px" } }])
  const [intersetarr] = useState([{ name: 'Comedy' }])
  const [textareas, setarea] = useState('')
  const [selected, setSelected] = useState(null)
  const [selectedoption, setSelectedoption] = useState(Options[0].value)
  const inputRef = useRef(null)
  const inputRef1 = useRef(null)
  const [selectedImage, setSelectedImage] = useState()
  const [imageSrc, setImageSrc] = React.useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  const checktrigger = event => {
    if (levent === true) {
      setevent(false)
    } else {
      setevent(true)
    }

  }
  useEffect(() => {
    setimg1(props.im)
    if (props.im === "secret") {
      seturl(boxes)
      seteventname('Secret Comedy Show')
      seteventfee('$0.00')
      setcancellation('$5.00')
      setcity('Dorchester')
      setcode('33244')
      setVenue('TBA')
      setaddress('TBA')
      defaulttxt('Yes')
      setarea('The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY. Click to learn more and grab your pack!')
      setSelected(Options[0].value)
    } else {

    }


  }, [])

  const trash1 = () => {
    seturl(null)
    setimg1(null)
  }
  const handleUpload = () => {
    inputRef.current?.click()
  }
  const handleUpload1 = () => {
    inputRef1.current?.click()
  }
  const valueclick1 = () => {

    if (showCalendar1 === false) {
      setShowCalendar1(true)
    } else {
      setShowCalendar1(false)
    }

  }
  const changes1 = () => {
    if (showCalendardetail1 === false) {
      setShowCalendardetail1(true)
    } else {
      setShowCalendardetail1(false)
    }

  }
  const valueclick = () => {

    if (showCalendar == false) {
      setShowCalendar(true)
    } else {
      setShowCalendar(false)
    }

  }
  const changes = () => {
    if (showCalendardetail === false) {
      setShowCalendardetail(true)
    } else {
      setShowCalendardetail(false)
    }

  }
  const checktoggle = () => {
    if (alldays === false) {
      setalldays(true)
    } else {
      setalldays(false)
    }

  }
  const checktogglemultiple = () => {
    if (alldaysmultiple === false) {
      setalldaysmultiple(true)
    } else {
      setalldaysmultiple(false)
    }

  }
  const checktoggleevent = () => {

    if (levent === false) {
      setevent(true)
      defaulttxt('Yes')
    } else {
      setevent(false)
      defaulttxt('No')
    }

  }
  const handleChanges1 = event => {
    console.log(event.target.value)
    setSelectedoption(event.target.value)

  }
  const handleDisplayFileDetails = (event) => {

    const file = event.target.files[0]

    seturl(URL.createObjectURL(file))

    console.log(file, url, event.target.result)
  }
  const handleDisplayFileDetails1 = (event) => {


    const file = event.target.files[0]

    setmultipleurl(URL.createObjectURL(file))

    console.log(file, url, event.target.result)
  }
  const multipleval = (index) => {

    const tags12 = [...images1234]
    tags12[index].img123 = multiple
    //  setvalimages(tags12[index].img123)
    console.log(index, tags12, multiple)
  }
  return (
    <div>

      <div style={{ position: "relative" }} >

        {/* <img  onClick={handleUpload} src={   url ? url : bgimage  } width="359px" height="353px"></img>
       <div>
       <div className="col-6  justify-content-center " style={{display:url === null  ? 'flex' : 'none'}}>
       <input className="d-none" type="file" accept='.jpg,.png'  ref={inputRef} onChange={handleDisplayFileDetails}></input>
       <img style={{position:"absolute", top:0, marginTop:"139px"}} className="me-3 " width="66px" height="66px" src={bgcamera} onChange={handleDisplayFileDetails} ></img>
       <div className="col-6   justify-content-center " style={{display:url === null ? 'flex' : 'none'}}>
        <img style={{position:"absolute", top:0, marginTop:"220px"}} className="me-3 " width="219px" src={ subheader}></img>
        </div>
  </div>
  </div> */}
        <span style={{ display: props.data === '' ? '' : 'none' }}>
          <SponsorsPostsAddcropDemo></SponsorsPostsAddcropDemo>
          </span>
          <img src={sponsorpostimage1} height="353px" width="359px" className="sponsorPostImage" style={{borderRadius: "15px"}}/>
        <span style={{ display: props.data === 'edited' ? '' : 'none' }}>
          {/* <SponsorsPostsEditcropDemo1></SponsorsPostsEditcropDemo1> */}
          </span>

      </div>

      {/* <SponsorsEventsAddcropDemo ></SponsorsEventsAddcropDemo>
          
<SponsorsEventsEditcropDemo1></SponsorsEventsEditcropDemo1> */}




      <div className="col-12 mt-2 d-flex flex-column mt-2">
        <span className="eventdetail_smaller  ms-50 ">Description</span>

      </div>
      <div className="col-12 mt-50">
        <textarea defaultValue={textareas} className="w-100 formControl sponsorPostText " placeholder="Add a description" style={{ height: "104px" }}>

        </textarea>
      </div>
      <hr style={{ border: "1px solid #CCD8DB" }} className="mt-2"></hr>
      <div className="d-flex justify-content-end align-items-center">
        <img src={levent === true ? checked : whitebox} onClick={checktrigger} width="20px" height="20px" className="me-50"></img><span className='post_edit'>Include Auto-Generated Coupon Code </span>
      </div>
      <div className="col-12 mt-2">
        <span className="post_panel">Maximum Number of Coupon Codes (if applicable) </span>
      </div>
      <div className="col-12 mt-25">
        <input className="formControl sponsorPostText " placeholder="Enter maximum number"></input>
      </div>
    </div>

  )
}
export default Post_detailEdit