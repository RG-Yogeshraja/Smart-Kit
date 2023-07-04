import whitebox from '../../assets/images/dashboardimg/fieldbox.png'
import checked from '../../assets/images/dashboardimg/checktickbox.png'
import { useState, useRef, useEffect } from 'react'
import search from '../../assets/images/dashboardimg/searchbar.png'
import moment from 'moment'
import InputRange from 'react-input-range'
import infocircle from '../../assets/images/dashboardimg/info-circle1.png'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsorinfopopup.scss'
import off from '../../assets/images/dashboardimg/offtoggle.png'
import on from '../../assets/images/dashboardimg/ontoggle.png'
import calendar from '@src/assets/images/dashboardimg/CalendarButton.png'
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import FiltergrpWithin from '../../admingroups/groupspopup/filtergrpheight'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import FilterLocation from '../../adminusers/filterlocation'
import subtext from '../../assets/images/dashboardimg/Subheader.png'

import Calendar from "react-calendar"
import deletes from '../../assets/images/dashboardimg/Deleteradius.png'
import Cropper from "react-easy-crop"
import bgimage from '../../assets/images/dashboardimg/fillimage.png'
import bgcamera from '../../assets/images/dashboardimg/camera.png'
import subheader from '../../assets/images/dashboardimg/Subheading.png'
import fill from '../../assets/images/dashboardimg/fillstar2.png'
import plus from '../../assets/images/dashboardimg/cameraplus.png'
import SponsorsPostsInfooAddcropDemo from './sponsors-postsinfo-addcropprofile'
import SponsorsPostsInfooEditcropDemo1 from './sponsors-postsinfo-editcropprofile'

const Sponsorinfodetail = (props) => {
    const [width, setwidth] = useState(20)
    const [height, setheight] = useState(`${20 * 14}px`)
    const [minCaption, set_minCaption] = useState(0)
    const [maxCaption, set_maxCaption] = useState(50)
    const [gender, setgender] = useState([{ id: '1', name: "Man", checked: false }, { id: '2', name: "Women", checked: false }, { id: '3', name: "Non-binary", checked: false }])
    const [sponsorname, setsponsor] = useState('')
    const [setresetimage, getresetimage] = useState('')
    const [file, setfiles] = useState('')
    const [profiles, setprofiles] = useState([{ name: "States", checked: false }, { name: "Interests", checked: false }, { name: "Age Range", checked: false }, { name: "Gender", checked: false }, { name: "Religion", checked: false }, { name: "Ethnicities", checked: false }, { name: "Politics", checked: false }, { name: "Languages", checked: false }])
    const [intersetarr] = useState([{ name: 'Comedy Crew' }])
    const [intersetarr1] = useState([{ name: 'Boston' }])
    const [man, setman] = useState([])
    const [women, setwomen] = useState([])
    const [binary, setBinary] = useState([])
    const inputRef = useRef(null)
    const [url, seturl] = useState(null)
    const handleUpload = () => {
        inputRef.current?.click()
    }
    const trash1 = () => {
        seturl(null)

    }
    const handlecrop = (v) => {
        setfiles(v)
    }
    const geteventval = (v1) => {
        getresetimage(v1)
        setfiles('')
    }


    const handleDisplayFileDetails = (event) => {

        const file = event.target.files[0]

        seturl(URL.createObjectURL(file))

        console.log(file, url, event.target.result)
    }
    const [sponsorshipcost, costsponsorship] = useState("")
    const [sponsorshipurl, costsponsorshipurl] = useState("")
    const [value1, setValue] = useState([30, 60])
    const checkgenderval = (item, index) => {

        console.log(item.id)
        const val = [...gender]

        for (let i = 0; i < val.length; i++) {



            if (item.id === val[i].id && val[i].checked === false) {
                val[i].checked = true
                if (val[i].name === "Man" && val[i].checked === true) {
                    setBinary([])
                    setwomen([])
                    setman([{ name: "Intersex Man", checked: false }, { name: "Trans Man", checked: false }, { name: "Transmasculine", checked: false }, { name: "Man and Nonbinary", checked: false }, { name: "Cis Man", checked: false }])
                }
                if (val[i].name === "Women" && val[i].checked === true) {
                    setman([])
                    setwomen([{ name: "Intersex Woman", checked: false }, { name: "Trans Woman", checked: false }, { name: "Transfeminine", checked: false }, { name: "Woman and Nonbinary", checked: false }, { name: "Cis Woman", checked: false }])
                    setBinary([])
                }

                if (val[index].name === "Non-binary" && val[index].checked === true) {
                    setman([])
                    setwomen([])
                    setBinary([{ name: "Agender", checked: false }, { name: "Bigender", checked: false }, { name: "Genderfluid", checked: false }, { name: "Genderqueer", checked: false }, { name: "Gender nonconforming", checked: false }, { name: "Gender questioning", checked: false }, { name: "Gender variant", checked: false }, { name: "Intersex", checked: false }, { name: "Neutrois", checked: false }, { name: "Nonbinary man", checked: false }, { name: "Nonbinary woman", checked: false }, { name: "Pangender", checked: false }, { name: "Polygender", checked: false }, { name: "Transgender", checked: false }, { name: "Two-spirit", checked: false }])
                }
            } else {

                val[i].checked = false

                if (val[i].name === 'Man') {
                    setman([])
                }
                if (val[i].name === 'Women') {
                    setwomen([])
                }
                if (val[i].name === 'Non-binary') {
                    setBinary([])
                }

            }


        }

        setgender(val)

    }
    const checkwomanval = (item, index) => {
        const tags = [...women]
        if (tags[index].checked === true) {
            tags[index].checked = false
        } else {
            tags[index].checked = true
        }
        setwomen(tags)
    }
    const checkmanval = (item, index) => {
        const tags = [...man]
        if (tags[index].checked === true) {
            tags[index].checked = false
        } else {
            tags[index].checked = true
        }
        setman(tags)
    }
    const checkbinaryval = (item, index) => {
        const tags = [...binary]
        if (tags[index].checked === true) {
            tags[index].checked = false
        } else {
            tags[index].checked = true
        }
        setBinary(tags)
    }
    const handleInput1 = (e) => {

        console.log(e)
        setwidth(e)
        setheight(`${e * 14}px`)
    }
    const [overall, setoverall] = useState([
        { name: "Unique Viewers", checked: false }, { name: "Impressions", checked: false }, { name: "Event Clicks", checked: false },
        { name: "Cost Per Unique Viewer", checked: false }, { name: "Cost Per Impression", checked: false }, { name: "Cost Per Event Click", checked: false }, { name: "Event Link Clicks", checked: false },
        { name: "Sponsor Link Clicks", checked: false }, { name: "Members Attending", checked: false }, { name: "Cost Per Event Link Click", checked: false }, { name: "Cost Per Sponsor Link Click", checked: false }, { name: "Total Spent", checked: false }
    ])

    const Options = [
        { value: '', label: 'Sponsorship' }

        // { value: 'France', label: 'Moderator' }
    ]


    const checkoverall = (index) => {
        const tags = [...overall]
        if (tags[index].checked === true) {
            tags[index].checked = false
        } else {
            tags[index].checked = true
        }
        setoverall(tags)
    }

    const checkoverallval = (index) => {
        const tags1 = [...profiles]
        if (tags1[index].checked === true) {
            tags1[index].checked = false
        } else {
            tags1[index].checked = true
        }
        setprofiles(tags1)
    }
    const [mom, setmom] = useState('')
    const [value, onChange] = useState('')
    const [alldays, setalldays] = useState(false)
    const [selected, setSelected] = useState(Options[0].value)
    const [showCalendardetail, setShowCalendardetail] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [hs, seths] = useState(false)
    const [minValue, set_minValue] = useState(25)
    const [maxValue, set_maxValue] = useState(32)

    const [nxval, set_maxval] = useState(maxValue)
    const handleInput = (e) => {
        if (e.maxValue == 75) {
            set_maxval("75+")
            console.log(nxval, "aaaa")
        } else {
            set_maxval(e.maxValue)
        }
        set_minValue(e.minValue)
        set_maxValue(e.maxValue)

        // chooseMessage({ val: minValue, val1: nxval })


    }
    const changes = () => {
        if (showCalendardetail === false) {
            setShowCalendardetail(true)
        } else {
            setShowCalendardetail(false)
        }

    }
    const valueclick = () => {

        if (showCalendar === false) {
            setShowCalendar(true)
        } else {
            setShowCalendar(false)
        }

    }
    const imagetrigger = () => {
        if (hs === true) {
            seths(true)
        } else {
            seths(false)
        }
    }
    const checktoggle = () => {
        if (alldays === false) {
            setalldays(true)
        } else {
            setalldays(false)
        }

    }
    const handleChange = event => {
        console.log(event.target.value)
        setSelected(event.target.value)

    }
    useEffect(() => {
        if (props.data === "edit") {
            seturl(fill)
            setsponsor('Barry’s')
            costsponsorship('www.barrys.com')
            costsponsorshipurl("www.barrys.com/packpromo")
        }
    }, [])
    return (
        <div>
            <div className="row mt-3 mb-2" style={{ display: props.data !== 'edit' ? '' : 'none' }}>
                <div className="col-12">
                    {/* <div style={{position:"relative"}} >
       
            <img src={   url ? url : bgimage  } width="359px" height="359px"></img>
            
            <div className="col-6  justify-content-center " style={{display:url === null  ? 'flex' : 'none'}} onClick={handleUpload}>
            <input className="d-none" type="file" accept='.jpg,.png'  ref={inputRef} onChange={handleDisplayFileDetails}></input>
            <img style={{position:"absolute", top:0, marginTop:"139px"}} className="me-3 " width="66px" height="66px" src={bgcamera} ></img>
            
       </div>
       
        <div className="col-6   justify-content-center " style={{display:url === null ? 'flex' : 'none'}}>
        <img style={{position:"absolute", top:0, marginTop:"220px"}} className="me-3 " width="270px" src={subtext}></img>
        </div>
        <div className="col-6  justify-content-center " style={{display:url === null ? 'none' : 'flex'}}>
           
           <img style={{position:"absolute", bottom:-17, left:"280px"}} className="me-3 " width="44px" height="44px" src={deletes} onClick={trash1}></img>
           
      </div>
        </div> */}



                    <span style={{ display: props.data === '' ? '' : 'none' }}>
                        <SponsorsPostsInfooAddcropDemo></SponsorsPostsInfooAddcropDemo> </span>
                    <span style={{ display: props.data === 'edited' ? '' : 'none' }}>
                        <SponsorsPostsInfooEditcropDemo1 crop={handlecrop} handle1={geteventval}></SponsorsPostsInfooEditcropDemo1> </span>


                </div>

            </div>
            <div className="row  mt-1 mb-2" style={{ display: props.data === 'edit' ? '' : 'none' }}>
                <div className="col-12">
                    <div style={{ position: "relative" }} onClick={handleUpload}>
                        <input className="d-none" type="file" accept='.jpg,.png' ref={inputRef} onChange={handleDisplayFileDetails}></input>
                        <img src={url} width="332px" height="398px"></img>

                        <div className="col-6   justify-content-center " style={{ display: url === null ? 'flex' : 'none' }}>
                            <img style={{ position: "absolute", top: 0, marginTop: "220px" }} className="me-3 " width="219px" src={subheader}></img>
                        </div>
                        <div className="col-6  justify-content-center " style={{ display: url === null ? 'none' : 'flex' }}>

                            <img style={{ position: "absolute", bottom: 28, left: "247px" }} className="me-3 " width="44px" height="44px" src={plus} ></img>

                        </div>
                    </div>
                </div>

            </div>

            <div className='row mt-2'>
                <div className='col-12 d-flex flex-column'>
                    <span className='sponsor-textcomon'>Sponsor Name</span>
                    <input className='formControl sponsorship_innertext  mt-50 ' placeholder='Add sponsor name... ' defaultValue={sponsorname} style={{ border: "1px solid #ECECEC" }}></input>
                </div>

            </div>
            <div className='row mt-2'>
                <div className='col-6 d-flex flex-column'>
                    <span className='sponsor-textcomon'>Sponsor URL</span>
                    <input className='formControl sponsorship_innertext mt-50 ' placeholder='Add sponsor URL...' defaultValue={sponsorshipcost} style={{ border: "1px solid #ECECEC" }}></input>
                </div>
                <div className='col-6'>
                    <span className='sponsor-textcomon'>Advertisement URL</span>
                    <input className='formControl sponsorship_innertext mt-50 ' placeholder='Add advertisement URL...' defaultValue={sponsorshipurl} style={{ border: "1px solid #ECECEC" }}></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6  d-flex">
                    <span className="eventdetail_smaller" style={{ textAlign: "left" }}>Start Date</span>
                </div>
                <div className="col-3  d-flex">
                    <span className="eventdetail_smaller">End Date</span>
                </div>
                <div className="col-3  d-flex align-items-center justify-content-end ">
                    <span className="eventdetail_smaller">All Day</span>
                    <img className="ms-50" onClick={checktoggle} src={alldays === true ? on : off} width="48px" height="27px"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${value === '' ? "sponshorship_text_placeholder" : ""}`} value={value !== '' ? moment(value).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

                    </div>
                    <div>
                        <Calendar className={showCalendar ? "" : "hide"}
                            onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${mom === '' ? "sponshorship_text_placeholder" : ""}`} value={mom !== '' ? moment(mom).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                    </div>
                    <div>
                        <Calendar className={showCalendardetail ? "" : "hide"}
                            onChange={setmom} value={mom} />
                    </div>

                </div>
            </div>
            <hr className='mt-2' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='mt-2'>
                <span className='eventdetails_bolderheading'>Targeted Groups</span>
            </div>
            <div className='d-flex mt-1 col-12'>
                {intersetarr.map((items) => {
                    return (
                        <div className='d-flex col-12'>
                            <button className='btn-btn-green_info d-flex justify-content-center align-items-center'>
                                <span className='btn-fonty'>{items.name}</span>&nbsp;<img src={closecircle} width="25px"></img>
                            </button>
                        </div>
                    )
                }
                )
                }
            </div>
            <div className='col-12 mt-2'>
                <div className='d-flex align-items-center border_size'>
                    <img className='search ms-2' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search groups...'></input>

                </div>
            </div>
            <hr className='mt-2' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='mt-2'>
                <span className='eventdetails_bolderheading'>Target Audience</span>
            </div>
            <div className='range d-flex justify-content-between flex-row mt-2'>
                <span className="sponsor-textcomon col-10">Age Range</span>
                <span className=' height-detail text-font1'>{minValue} - {nxval}


                </span>

            </div>
            <MultiRangeSlider
                min={18}
                max={75}
                // step={5}
                minValue={minValue}
                maxValue={maxValue}
                minCaption={minValue}
                maxCaption={nxval}
                onInput={(e) => {
                    handleInput(e)
                }}></MultiRangeSlider>
            <hr className='mt-2' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='mt-2'>
                <span className='eventdetails_bolderheading'>Location</span>
            </div>
            <div className='d-flex mt-1 col-12'>
                {intersetarr1.map((items) => {
                    return (
                        <div className='d-flex col-12'>
                            <button className='btn-btn-green d-flex justify-content-center align-items-center'>
                                <span className='btn-fonty'>{items.name}</span>&nbsp;<img src={closecircle} width="25px"></img>
                            </button>
                        </div>
                    )
                }
                )
                }
            </div>
            <div className='col-12 mt-2'>
                <div className='d-flex align-items-center border_size'>
                    <img className='search ms-2' src={search} width="20px" height="20px"></img>

                    <input className='w-100 height-range ms-1 text_search ' placeholder='Search location...'></input>

                </div>
            </div>
            <div className='range  flex-row mt-2'>

                <span className="font-groups">Within</span>
            </div>
            <div className="hello1 mt-1">
                <div style={{ marginLeft: height }} className="mb-75">{width}&nbsp;mi</div>
                <InputRange
                    maxValue={50}
                    minValue={0}
                    value={width}
                    onChange={handleInput1}
                />

                {/* <input  style={{width:"95%",display:"flex",justifyContent:'center'}}
        type='range'
        onChange={handleInput}
        min={minCaption}
        max={maxCaption}
		
        value={width}
      ></input> */}
            </div>
            <hr className='mt-2' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='row mt-2'>
                <div className='col-6'>
                    <span className='eventdetails_bolderheading'>Gender Identity</span>
                </div>
                <div className='col-6'>
                    <span className='eventdetails_bolderheading'>Notes</span>
                </div>
            </div>

            <div className='row mt-1'>
                <div className='col-6  d-flex flex-wrap'>
                    {gender.map((items, index) => {
                        return (
                            <div className=' me-2 py-50 d-flex   mt-1'>
                                <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkgenderval(items, index)}></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                            </div>
                        )
                    }
                    )

                    }
                    {man.map((items, index) => {
                        return (
                            <div className=' me-2 py-50 d-flex align-items-center  mt-1'>
                                <img src={items.checked === true ? checked : whitebox} onClick={() => checkmanval(items, index)} width="20px" height="20px" className="me-25" ></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                            </div>
                        )
                    }
                    )
                    }
                    {women.map((items, index) => {
                        return (
                            <div className=' me-2 py-50  d-flex align-items-center  mt-1'>
                                <img src={items.checked === true ? checked : whitebox} onClick={() => checkwomanval(items, index)} width="20px" height="20px" className="me-25" ></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                            </div>
                        )
                    }
                    )
                    }
                    {binary.map((items, index) => {
                        return (
                            <div className=' me-2  py-50 d-flex   mt-1'>
                                <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkbinaryval(items, index)}></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className='col-6'>
                    <textarea className='formControl ' style={{ height: "100px" }} placeholder='This info will only come up as a reference for you...'></textarea>
                </div>
            </div>
            <hr className='mt-2' style={{ border: "1px solid #CCD8DB" }}></hr>
            <div className='mt-2'>
                <span className='sponsor-bigtext'>Default Sponsorship Report</span>
            </div>
            <div className='mt-2'>
                <span className='sponsor_bullets'>Choose the default metric categories you want to include to show in the report.</span>
            </div>
            <div className='mt-2'>
                <span className='eventdetails_bolderheading'>Overall Metrics</span>
            </div>
            <div className=' row'>
                {overall.map((items, index) => {
                    return (
                        <div className='col-3 py-50 d-flex align-items-center mt-1'>
                            <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkoverall(index)}></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                        </div>
                    )
                }
                )
                }
            </div>
            <div className='mt-2'>
                <span className='eventdetails_bolderheading'>Profile Metrics</span>
            </div>
            <div className='row'>
                {profiles.map((items, index) => {
                    return (
                        <div className=' col-2 py-50 me-2 d-flex align-items-center  mt-1'>
                            <img src={items.checked === true ? checked : whitebox} width="20px" height="20px" className="me-25" onClick={() => checkoverallval(index)}></img><span className='sponsor-checkboxcommom'>{items.name}</span>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}
export default Sponsorinfodetail