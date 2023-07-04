import React, { useEffect, useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sideprofile.scss'
import sidepanel from '../../assets/images/dashboardimg/image_sidepanel.png'

import yoga from '../../assets/images/dashboardimg/rect2.png'
import dances from '../../assets/images/dashboardimg/Rectangle12.png'
import theader from '../../assets/images/dashboardimg/topcalendar.png'
import privatetext from '../../assets/images/dashboardimg/doct1.png'
import yogatext from '../../assets/images/dashboardimg/Dogtext.png'
import General_info_Groups from './groupsgeneralinfos'
// import filldogs from '../../assets/images/dashboardimg/Filldog.png'
import sponsorgroupimg01 from '../../assets/images/dashboardimg/sponsorshipgroupimg01.png'
import secrettext from '/src/assets/images/dashboardimg/doglove.png'
import Sponsor_InfoGroups from './groupsponsorinfo'
import SponsorshipGroupsInfoDialog from "./sponsorship-groups-infodialog"
import SponsorshipGroupsEditDialog from "./sponsorship-groups-editdialog"
import SponsorPop from "../sponsorshipevents/sponsoreventspopup"

// import Sponsor_Edit from './sponsoredit'
const GroupsSideprofile = (props) => {

  const [active, setActive] = useState('1')
  const [description, setdescription] = useState('For doggos and the people who love them to get together and socialize ')
  const [imgs, setimgs] = useState("")
  const [imgsdes, setimgsdes] = useState("secret")
  const [text, settext] = useState(sponsorgroupimg01)
  const [valueset, setval] = useState(false)
  const [widths, setwidths] = useState("130px")
  const [dogheight, setdogheight] = useState("248px")
  const [defaulttxt, setdefaulttxt] = useState("Sponsorship Info")
  useEffect(() => {

    if (props.data1 === true && props.data2 === false && props.data3 === false) {
      setdescription('For doggos and the people who love them to get together and socialize')
      setimgs(sponsorgroupimg01)
      setval(true)
      setimgsdes("secret")
      settext(secrettext)
      setwidths('130px')
      setdogheight('248px')
    } else if (props.data2 === true && props.data1 === false && props.data3 === false) {
      setdescription('For Rosé lovers that want to get together and meet new people.')
      setimgs(dances)
      settext(privatetext)
      setval(false)
      setdogheight('')
      setActive('1')
      setimgsdes("party")
      setwidths('200px')
      setdefaulttxt("Sponsorship Info")

    } else if (props.data3 === true && props.data2 === false && props.data1 === false) {
      setdescription('Interested in singing or performing at stand up comedy shows? Join this group and have fun!')
      setimgs(yoga)
      settext(yogatext)
      setval(false)
      setimgsdes("yoga")
      setActive('1')
      setwidths('200px')
      setdefaulttxt("Sponsorship Info")
      setdogheight('')
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
      // else{
      //     props.unhandle()
      //   }
    }
  }

  return (
    <div className="card d-flex flex-column p-2">
      <div className="">
        <img src={imgs} width="100%" height={dogheight}
          className='' style={{ position: "relative" }}></img>
        {/* <img src={theader} width="58px"
     className='mt-75 ' style={{position:"absolute", left:"0px", marginLeft:"30px"}}></img> */}
        {/* <SponsorshipGroupsInfoDialog></SponsorshipGroupsInfoDialog> */}
        <SponsorshipGroupsEditDialog data={imgsdes} data1={valueset} value="edit"></SponsorshipGroupsEditDialog>
        <div className="d-flex align-items-center">
          <img src={text} width={widths}
            className='' style={{ position: "absolute", left: "0px", marginLeft: "30px", marginBottom: "50px" }}></img>
          {/* <img src={hintsocial} width="58px" style={{display:valueset === true ? '' : 'none'}}
     className='sponserlist_text1' ></img>  */}

          <button className="sponsorship_txtss" ><span className="sponsor_btn_text">Private</span></button>
        </div>
      </div>
      <div className="mt-1">
        <Nav tabs style={{ borderBottom: "1px solid #CCD8DB" }}>

          <NavItem>
            <NavLink
              active={active === '1'}
              onClick={() => {
                toggle('1')
              }}
            >
              <span className="sponsorship_tabheaders_text">General Info</span>
            </NavLink>
          </NavItem>
          <NavItem className="test">
            <NavLink style={{ pointerEvents: valueset === true ? '' : 'none' }}
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }}
            ><span className="sponsorship_tabheaders_text">Sponsorship Info</span>

            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="mb-2" activeTab={active}>
          <TabPane tabId="1">
            <General_info_Groups data={description} data1={imgs}></General_info_Groups>
            {/* <General_info data={description} data1={imgs}></General_info> */}
          </TabPane>


          <TabPane tabId="2" >
            <Sponsor_InfoGroups></Sponsor_InfoGroups>
            {/* <Sponsor_Info></Sponsor_Info> */}
          </TabPane>

        </TabContent>
      </div>

      <SponsorPop></SponsorPop>
    </div>
  )
}
export default GroupsSideprofile