import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sideprofile.scss'
import sidepanel from '../../assets/images/dashboardimg/image_sidepanel.png'
import General_info from './generalinfo'
import Sponsor_Info from './sponsorinfo'
import dances from '../../assets/images/dashboardimg/dancerss.png'
import yoga from '../../assets/images/dashboardimg/yogas.png'
import theader from '../../assets/images/dashboardimg/topcalendar.png'
import yogatext from '../../assets/images/dashboardimg/yogatext.png'
import secrettext from '../../assets/images/dashboardimg/Secretcomedytext.png'
import privatetext from '../../assets/images/dashboardimg/privateparty.png'
import hintsocial from '../../assets/images/dashboardimg/hsbtn.png'
import Sponsor_Edit from './sponsoredit'
import { useSelector } from "react-redux"
import calendardark from '../../assets/images/dashboardimg/calendardark.png'
import moment from 'moment'
import blankimages from '../../assets/images/dashboardimg/blank-image.png'

const Sideprofile = (props) => {

  const [active, setActive] = useState('1')
  const [description, setdescription] = useState('Hint Social has partnered with Don’t Tell Comedy to bring you this secret stand-up comedy show. Venue and comedians to be announced day of event.')
  const [imgs, setimgs] = useState("")
  const [imgsdes, setimgsdes] = useState("secret")
  const [text, settext] = useState(secrettext)
  const [valueset, setval] = useState(false)
  const [defaulttxt, setdefaulttxt] = useState("Sponsorship Info")
  const [sponsorEventDetails, setSponsorEventDetails] = useState([])
  const authStat_getSponsorEventDetails = useSelector((state) => state.getAllSponsorEventsData)




  useEffect(() => {
    if (props.data1 === true && props.data2 === false && props.data3 === false) {
      setdescription('Hint Social has partnered with Don’t Tell Comedy to bring you this secret stand-up comedy show. Venue and comedians to be announced day of event.')
      setimgs(sidepanel)
      setval(true)
      setimgsdes("secret")
      settext(secrettext)
    } else if (props.data2 === true && props.data1 === false && props.data3 === false) {
      setdescription('Grab your spot in the Red Room! Barry’s is hosting a private class for Hint Social members at the Barry’s Back Bay studio.')
      setimgs(dances)
      settext(privatetext)
      setval(false)
      setActive('1')
      setimgsdes("party")
      setdefaulttxt("Sponsorship Info")
    } else if (props.data3 === true && props.data2 === false && props.data1 === false) {
      setdescription('Join us at The Studio South End for a 60-minute long yoga sculpt featuing a high-energy playlist, strength-building exercises and moments of meditation.')
      setimgs(yoga)
      settext(yogatext)
      setval(false)
      setimgsdes("yoga")
      setActive('1')
      setdefaulttxt("Sponsorship Info")
    } else {
      setdescription('')
      setimgs('')
    }
  })

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)

      if (tab === "2") {

        setdefaulttxt("Sponsor Info")
      } else {
        setdefaulttxt("Sponsorship Info")
      }
    }
  }

  useEffect(() => {
    if (authStat_getSponsorEventDetails.sponsorEventDetailsData != undefined && authStat_getSponsorEventDetails.sponsorEventDetailsData.event_id !== undefined) {
      
      console.log(authStat_getSponsorEventDetails.sponsorEventDetailsData)
      setSponsorEventDetails([authStat_getSponsorEventDetails.sponsorEventDetailsData])
    }
  }, [authStat_getSponsorEventDetails.sponsorEventDetailsData])

  const datetime = (data) => {
    const monthValue = moment(data).format('MMM')
    const dateValue = moment(data).format('DD')
    return (<span>{`${monthValue}. ${dateValue}`}</span>)
  }

  const startTimeFormat = (data) => {

    const localDateTimeConversion = new Date(data)
    const UTCTimePick = moment(localDateTimeConversion, "h:mmA").format("HH:mm")
    const localTimeConversion = moment(UTCTimePick, ["HH:mm"]).format("hh:mm A")
    console.log(localTimeConversion)
    return (<span>{localTimeConversion}</span>)
  }


  return (
    <div className="card d-flex flex-column p-2">
      <div className="">
        {sponsorEventDetails?.map((data) => {
          return (
            <>
              <div className='col-12 d-flex flex-column justify-content-center'>
                {data.event_image.image_url != "" ?
                  <img src={data.event_image.image_url} height="300px" className='' style={{ position: "relative", borderRadius: "15px" }}></img> :
                  <>
                    <img style={{ position: "relative" }} height="300px" src={blankimages}></img>
                    <img src={calendardark} width="160px" style={{ position: 'absolute', marginLeft: '80px', marginTop: '12px' }}></img>
                  </>
                }

                <div className='sideprofile-timesection d-flex justify-content-center flex-column align-items-center  pt-25 ' style={{ position: "absolute", top: "35px", left: "40px", width: "20%" }}>
                  <span className='sideprofile-eventdate'>{datetime(data.start_date)}</span>
                  {data.start_date != "" ? <span className='sideprofile-eventtime'>{startTimeFormat(data.start_date)}</span> : <span className='sideprofile-eventtime pb-2'></span>
                  }
                </div>
                <div style={{ position: "absolute", marginBottom: "-175px" }} className=' col-10  d-flex  justify-content-between align-items-center'>
                  <span className='mx-50' style={{ fontWeight: "bolder", fontSize: "25px", color: 'white', marginTop: "50px" }}  >{data.event_title}</span>

                </div>
                <div style={{ position: 'absolute', right: "15px", top: "25px" }}>
                  <Sponsor_Edit data={imgsdes} data1={valueset} value="edit"></Sponsor_Edit>
                </div>
                <div className="d-flex align-items-center">

                  {/* <img src={text} width="200px" className='' style={{ position: "absolute", left: "0px", marginLeft: "30px", marginBottom: "50px" }}></img> */}
                  <img src={hintsocial} width="78px" height="38px" style={{ display: valueset === false ? '' : 'none' }}
                    className='sponserlist_text1' ></img>

                  <button className="sponsorship_txtss" style={{ display: active === "2" ? '' : 'none' }}><span className="sponsor_btn_text">Private</span></button>
                </div>
              </div>
            </>
          )
        })}
        {/* {sponsorEventDetails[0].general_info.event_image != "" ?
          <img src={imgs} width="100%" className='' style={{ position: "relative" }}></img> : null} */}
        {/* <img src={theader} width="58px" className='mt-75 ' style={{ position: "absolute", left: "0px", marginLeft: "30px" }}></img> */}

      </div>
      <div className="mt-1">
        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>
          <NavItem>
            <NavLink active={active === '1'} onClick={() => {   toggle('1') }}>
              <span className="sponsorship_tabheaders_text">General Info</span>
            </NavLink>
          </NavItem>
          <NavItem className="test">
            <NavLink style={{ pointerEvents: valueset === true ? '' : 'none' }}  active={active === '2'}  onClick={() => {    toggle('2')  }}>
              <span className="sponsorship_tabheaders_text">{defaulttxt}</span>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent className="mb-2" activeTab={active}>
          <TabPane tabId="1">
            <General_info data1={imgs}></General_info>
          </TabPane>
          <TabPane tabId="2" >
            <Sponsor_Info></Sponsor_Info>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}
export default Sideprofile