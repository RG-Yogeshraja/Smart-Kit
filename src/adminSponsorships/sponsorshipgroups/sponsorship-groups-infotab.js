
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
import fill from '../../assets/images/dashboardimg/Fillinfield.png'
import plus from '../../assets/images/dashboardimg/cameraplus.png'
import addnewimage from '../../assets/images/dashboardimg/addnewimage.png'
import SponsorsAddcropDemo from './sponsors-groups-addcrop'
import SponsorsInfoAddcropDemo from './sponsorsaddgroupscropprofile'
import SponsorsInfooAddcropDemo from './sponsorsaddgroupscropprofile'



const SponsorshipGroupsInfoTab = (props) => {
    const [width, setwidth] = useState(20)
    const [height, setheight] = useState(`${20 * 14}px`)
    const [minCaption, set_minCaption] = useState(0)
    const [maxCaption, set_maxCaption] = useState(50)
    const [gender, setgender] = useState([{ name: "Man", checked: false }, { name: "Women", checked: false }, { name: "Non-binary", checked: false }])
    const [sponsorname, setsponsor] = useState('Hint Social')

    const [profiles, setprofiles] = useState([{ name: "States", checked: false }, { name: "Interests", checked: false }, { name: "Age Range", checked: false }, { name: "Gender", checked: false }, { name: "Religion", checked: false }, { name: "Ethincities", checked: false }, { name: "Politics", checked: false }, { name: "Languages", checked: false }])
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
    const handleDisplayFileDetails = (event) => {

        const file = event.target.files[0]

        seturl(URL.createObjectURL(file))

        console.log(file, url, event.target.result)
    }
    // const [value, setValue] = useState([]);

    // const handleInput = (e) => {
    // 	set_minCaption(e.minCaption)
    // 	set_maxCaption(e.maxCaption)
    // }
    const [sponsorshipcost, costsponsorship] = useState("$")
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
                
               if (val[i].name === 'Man' ) {
                setman([])
               }
               if (val[i].name === 'Women' ) {
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
        setwomen(tags)
    }
    const checkbinaryval = (item, index) => {
        const tags = [...binary]
        if (tags[index].checked === true) {
            tags[index].checked = false
        } else {
            tags[index].checked = true
        }
        setbinary(tags)
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
        { value: '', label: 'Day' }

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

        chooseMessage({ val: minValue, val1: nxval })


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
        if (props.data === "edit") { seturl(fill) }
    }, [])
    return (
        <div>
            {/* <div className="groupsponsorinfo-tapupload mb-3 mt-2" style={{ display: props.data !== 'edit' ? '' : 'none', width: "55%" }}>
                <div className="d-flex flex-column align-items-center py-3">
                    <img className="mb-2 mt-5" src={addnewimage} width="66px" height="66px" />
                    <span className="uploadimage-content mb-5 pb-3">Tap to upload an image or video</span>
                </div>
                <SponsorsAddcropDemo></SponsorsAddcropDemo>
             
            </div> */}
            <SponsorsInfooAddcropDemo></SponsorsInfooAddcropDemo>
            <div className='row mt-4'>
                <div className='col-6 d-flex flex-column'>
                    <span className='sponsor-textcomon'>Sponsor Name</span>
                    <input className='formControl sponsorship_innertext  mt-50' placeholder='Add Sponsor name...' defaultValue={sponsorname} style={{ border: "1px solid #ECECEC" }}></input>
                </div>
                <div className='col-6'>
                    <span className='sponsor-textcomon'>Sponsor URL</span>
                    <input className='formControl sponsorship_innertext mt-50' placeholder='Add Sponsor URL...' style={{ border: "1px solid #ECECEC" }}></input>
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
                        <input className={`form_box ${value === '' ? "sponshorship_text_placeholder" : ''}`} value={value !== '' ? moment(value).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={valueclick}></img>

                    </div>
                    <div>
                        <Calendar className={showCalendar ? "" : "hide"}
                            onChange={onChange} value={value} />
                    </div>
                </div>
                <div className="col-6">
                    <div className='formControl calen d-flex justify-content-flex-end align-items-center'>
                        <input className={`form_box ${value === '' ? "sponshorship_text_placeholder" : ''}`} value={mom !== '' ? moment(mom).format("MM/DD/YYYY") : 'MM/DD/YYYY'}></input>
                        <img src={calendar} width="34px" height="34px" onClick={changes}></img>

                    </div>
                    <div>
                        <Calendar className={showCalendardetail ? "" : "hide"}
                            onChange={setmom} value={mom} />
                    </div>

                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-6 d-flex flex-column'>
                    <span className='sponsor-textcomon'>Sponsorship Cost</span>
                    <input className='formControl sponsorship_innertext mt-50 ' defaultValue={sponsorshipcost} style={{ border: "1px solid #ECECEC" }}></input>
                </div>
                <div className='col-6'>
                    <span className='sponsor-textcomon'>Per</span>
                    <select value={selected} onChange={handleChange}
                        className="formControl sponsorship_innertext sponsorship_aligns"   >

                        {Options.map((res) => {
                            return (

                                <option
                                    value={res.value}>{res.label}</option>
                            )
                        })}
                    </select>
                </div>
            </div>

        </div>
    )
}
export default SponsorshipGroupsInfoTab