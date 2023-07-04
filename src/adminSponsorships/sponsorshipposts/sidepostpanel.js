import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sideprofile.scss'
import sidepanel from '../../assets/images/dashboardimg/image_sidepanel.png'
import dances from '../../assets/images/dashboardimg/dancerss.png'
import yoga from '../../assets/images/dashboardimg/yogas.png'
import theader from '../../assets/images/dashboardimg/topcalendar.png'
import yogatext from '../../assets/images/dashboardimg/yogatext.png'
import secrettext from '../../assets/images/dashboardimg/Secretcomedytext.png'
import privatetext from '../../assets/images/dashboardimg/privateparty.png'
import boxes from '../../assets/images/dashboardimg/boxer.png'
import boxes1 from '../../assets/images/dashboardimg/grp1.png'
import SidePostPanel from './generalpostinfo'
import SponsorPost_Info from './sponserpostinfo'
import work from '../../assets/images/dashboardimg/workouts.png'
import Post_Edit from "./postedit"
import defaultpostimage from '../../../src/assets/images/dashboardimg/defaultpostimage.png'
import { useSelector } from "react-redux"


const SidePostpanel = (props) => {

  const [active, setActive] = useState('1')
  const [description, setdescription] = useState('The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY.')
  const [description1, setdescription1] = useState('Click to learn more and grab your pack! ')
  const [imgsdes, setimgsdes] = useState("secret")
  const [text, settext] = useState(secrettext)
  const [valueset, setval] = useState(false)
  const [imgs, setimgs] = useState(boxes)
  const [rd, setrd] = useState(false)

  const [defaulttxt, setdefaulttxt] = useState("Sponsorship Info")
  const authStat_getSponsorEventDetails = useSelector((state) => state.getAllSponsorPostsData)
  const [getSponsorPostDetails, setSponsorPostDetails] = useState([])

  useEffect(() => {


    if (props.data1 === true && props.data2 === false && props.data3 === false) {
      setdescription('The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY.')
      setdescription1('Click to learn more and grab your pack! ')
      setimgs(boxes)
      setval(true)
      setimgsdes("secret")
      setrd(false)
      settext(secrettext)
    } else if (props.data2 === true && props.data1 === false && props.data3 === false) {
      setdescription('The Barry’s SUMMER 6 PACK SALE is BACK - 7/6 to 7/10 ONLY.')
      setdescription1('Click to learn more and grab your pack! ')
      setimgs(boxes1)
      settext(privatetext)
      setval(false)
      setActive('1')
      setimgsdes("party")
      setrd(false)
      setdefaulttxt("Sponsorship Info")
    } else if (props.data3 === true && props.data2 === false && props.data1 === false) {
      setdescription('Get 50% off for 2 weeks of Barry Workouts on Us! ')
      setdescription1('Click to learn more and redeem the offer.')
      setrd(true)
      setimgs(work)
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
    if (authStat_getSponsorEventDetails.sponsorPostDetailsData != undefined && authStat_getSponsorEventDetails.sponsorPostDetailsData.post_id !== undefined) {
      console.log(authStat_getSponsorEventDetails.sponsorPostDetailsData)
      setSponsorPostDetails([authStat_getSponsorEventDetails.sponsorPostDetailsData])
    }
  }, [authStat_getSponsorEventDetails.sponsorPostDetailsData])

  return (
    <div className="card d-flex flex-column p-2">
      <div className="">
        {getSponsorPostDetails?.map((data) => {
          return (
            <>
              {data.image_url != "" ?
              <img src={data.image_url} width="100%" height="100%" style={{ borderRadius: "15px" }}></img> :
              <img src={defaultpostimage} width="324px" height="324px"></img>
             }
            </>
          )
        })}
              {/* <img src={defaultpostimage} width="324px" height="324px"></img> */}

        <Post_Edit data={imgsdes} data1={valueset} value="edit"></Post_Edit>
        {/* <Sponsor_Edit data={imgsdes} value="edit"></Sponsor_Edit> */}
      </div>

      <div className="mt-1">
        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>
          <NavItem>
            <NavLink active={active === '1'} onClick={() => { toggle('1') }}>
              <span className="sponsorship_tabheaders_text">General Info</span>
            </NavLink>
          </NavItem>
          <NavItem className="test">
            <NavLink style={{ pointerEvents: valueset === true ? '' : 'none' }} active={active === '2'} onClick={() => { toggle('2') }}>
              <span className="sponsorship_tabheaders_text">Sponsor Info</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="mb-2" activeTab={active}>
          <TabPane tabId="1">
            <SidePostPanel postDetails={getSponsorPostDetails} bold={description1} other={rd}></SidePostPanel>
          </TabPane>
          <TabPane tabId="2" >
            <SponsorPost_Info postDetails={getSponsorPostDetails}></SponsorPost_Info>
          </TabPane>
        </TabContent>
      </div>
    </div>
  )
}
export default SidePostpanel