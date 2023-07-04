import React, { useState, useEffect } from "react"
import ChartjsRadar from './piechartgraph'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import 'chart.js/auto'
import { PieChart } from "react-minimal-pie-chart"
import ReactApexChart from 'react-apexcharts'
import dot1 from '../assets/images/dashboardimg/analytics_dot1.png'
import dot2 from '../assets/images/dashboardimg/analytics_dot2.png'
import dot3 from '../assets/images/dashboardimg/analytics_dot3.png'
import { ChevronLeft, ChevronRight } from "react-feather"
import Invitecoderegistration from './Invitecoderegistration'
import ViewActiveUserDetail from './viewactiveusers'
import { connect, useDispatch, useSelector } from 'react-redux'
import { admin_analytics_chart_activeusers_APIcall } from './slice-adminanalytics/activeusersdetails-splice'
import { getUsersListofInvitedCodeReg_APIcall } from "./slice-adminanalytics/getUserslistofInvitedCodeReg"
import ViewInactiveUsers from "./viewInactiveUsers"
import ViewDeletedUsers from "./viewDeletedUsers"
import { getDeletedUsersList_APIcall } from "./slice-adminanalytics/slice-getDeletedUsers"
import ViewActiveUserDetails from "./viewActiveUserDetails"
import IncompleteObboardingUsers from './IncompleteOnboardingUsers'
import load from '../assets/images/dashboardimg/loadersimg.gif'

const Analytics_graph = () => {
  const dispatch = useDispatch()
  const [getgroupstotal, setgroupstotal] = useState("")
  const [geteventtotal, seteventtotal] = useState("")
  const [getfriendstotal, setfriendstotal] = useState("")
  const [getactivetotal, setactivetotal] = useState("")
  const [getNumber_ofDownloads, setNumber_ofDownloads] = useState("0")
  const [getReports_Submitted, setReports_Submitted] = useState("")
  const [getStatuses_Created, setStatuses_Created] = useState("")
  const [getPosts_Created, setPosts_Created] = useState("")
  const [getComments_Created, setComments_Created] = useState("0")
  const [usersListofInvitedCodeReg, setUsersListofInvitedCodeReg] = useState([])
  const [deletedUserCount, setDeletedUserCount] = useState('')
  const [totalUsersCountSoFar, setTotalUsersCountSoFar] = useState('')
  const [totalFriendshipsCount, setTotalFriendshipsCount] = useState('')
  const [started, getstarted] = useState(false)
  const [getUsers_with_Statuses_Created, setUsers_with_Statuses_Created] = useState("")
  const authStat_parentFilterData = useSelector((state) => state.analyticsParentFilterData)
  const [deletedUsersList, setDeletedUsersList] = useState([])
  const authStat_getUsersListofInviteCodeReg = useSelector((state) => state.getUsersListofInvitedCodeRegData)
  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const authStat_getDeletedUsersList = useSelector((state) => state.getDeletedUsersListData)
  const auths = useSelector((state) => state.admin_analytics_filter_global)
  const authStat_filterByDateData = useSelector((state) => state.admin_analytics_filter_global)
  const [getFriendShipRequested, setFriendShipRequested] = useState('')
  const activeusers = useSelector((state) => state.admin_analytics_chart_activeuserlist)


  useEffect(() => {
    const payload = {
      user_id: localStorage.getItem('loggedIn_userId')
    }
    dispatch(admin_analytics_chart_activeusers_APIcall(payload))
  }, [])

  const [data, setGroupsAnalytics] = useState([
    { title: "Active Groups", color: "#95E1BF", color1: dot1, value1: 342 },
    { title: "Inactive Groups", color: "#24859E", color1: dot2, value1: 104 },
    { title: "Deleted Groups", color: "#003B4A", color1: dot3, value1: 104 }
  ])
  const [data1, setEventAnalytics] = useState([
    { title: "Upcoming Events", color: "#95E1BF", color1: dot1, value1: 342 },
    { title: "Past Events", color: "#24859E", color1: dot2, value1: 104 },
    { title: "Deleted Events", color: "#003B4A", color1: dot3, value1: 104 }
  ])
  const data2 = [
    { title: "Message Requests Accepted", value: 104, color: "#24859E", color1: dot1, value1: 342 },
    { title: "Message Requests Ignored", value: 104, color: "#003B4A", color1: dot2, value1: 104 },
    { title: "Message Requests Sent", value: 342, color: "#95E1BF", color1: dot3, value1: 104 }
  ]
  const [data3, setFriendsAnaltics] = useState([
    { title: "Friendships Accepted", color: "#95E1BF", color1: dot1, value1: 342 },
    { title: "Deleted Friendships", color: "#24859E", color1: dot2, value1: 208 }

  ])
  const data4 = [{ title: "Blocked Users", value: 42, color: "#95E1BF", color1: dot1 }]
  const [data5, setdatas5] = useState([
    { title: "Active Users", color: "#003B4A", color1: dot3, value1: '' },
    { title: "Inactive Users", color: "#95E1BF", color1: dot1, value1: '' },
    { title: "Deleted Users", color: "#24859E", color1: dot2, value1: '' }

  ])

  useEffect(() => {
    getstarted(true)
    if (authStat_parentFilterData.data.responseCode == 200 && authStat_parentFilterData.data.responseBody != undefined) {
      const itemgroups4 = [...data5]
      itemgroups4[0].value = authStat_parentFilterData.data.responseBody.active_users
      itemgroups4[1].value = authStat_parentFilterData.data.responseBody.inactive_users
      itemgroups4[2].value = authStat_parentFilterData.data.responseBody.deleted_users
      setdatas5(itemgroups4)
      const totalUsers = itemgroups4[1].value + itemgroups4[2].value + itemgroups4[0].value
      setTotalUsersCountSoFar(totalUsers)
      getstarted(false)
    }
    else {
      const itemgroups4 = [...data5]
      itemgroups4[0].value = ''
      itemgroups4[1].value = ''
      itemgroups4[2].value = ''
      setdatas5(itemgroups4)
      setTotalUsersCountSoFar('')
      getstarted(false)
    }
  }, [authStat_parentFilterData.data])




  useEffect(() => {

    getstarted(true)
    if (authStat_childFilterData.data.responseBody != undefined && authStat_childFilterData.data.responseCode == 200) {
      const itemgroups4 = [...data5]
      itemgroups4[0].value = authStat_childFilterData.data.responseBody.active_users
      itemgroups4[1].value = authStat_childFilterData.data.responseBody.inactive_user
      itemgroups4[2].value = authStat_childFilterData.data.responseBody.deleted_user
      setdatas5(itemgroups4)
      const totalUsers = itemgroups4[1].value + itemgroups4[2].value + itemgroups4[0].value
      setTotalUsersCountSoFar(totalUsers)
      getstarted(false)
    }
    else {
      const itemgroups4 = [...data5]
      itemgroups4[0].value = ''
      itemgroups4[1].value = ''
      itemgroups4[2].value = ''
      setdatas5(itemgroups4)
      setTotalUsersCountSoFar('')
      getstarted(false)
    }
  }, [authStat_childFilterData.data])


  useEffect(() => {
    if (authStat_parentFilterData.data.responseBody !== undefined && authStat_parentFilterData.data.responseCode == 200) {
      setReports_Submitted(authStat_parentFilterData.data.responseBody.report_details)
      setPosts_Created(authStat_parentFilterData.data.responseBody.post_details)
      setComments_Created(authStat_parentFilterData.data.responseBody.comments_details)
    }
    else {
      setReports_Submitted('')
      setStatuses_Created('')
      setPosts_Created('')
      setComments_Created('')
      setUsers_with_Statuses_Created('')
    }
  }, [authStat_parentFilterData.data])

  useEffect(() => {
    if (activeusers !== undefined) {
      if (activeusers.admin_analytics_chart_activeuser_listdata.responseCode === 200) {
        const itemgroups4 = [...data5]

        itemgroups4[0].value = activeusers.admin_analytics_chart_activeuser_listdata.responseBody[0].totalActiveUsersCount
        itemgroups4[1].value = activeusers.admin_analytics_chart_activeuser_listdata.responseBody[0].totalInactiveUsersCount
        itemgroups4[2].value = activeusers.admin_analytics_chart_activeuser_listdata.responseBody[0].totalDeletedUsersCount
        const totalUsers = itemgroups4[1].value + itemgroups4[2].value + itemgroups4[0].value
        setTotalUsersCountSoFar(totalUsers)
        setactivetotal(activeusers.admin_analytics_chart_activeuser_listdata.responseBody[0].totalRegisteredUsersCount)
        setdatas5(itemgroups4)
      } else if (activeusers.admin_analytics_chart_activeuser_listdata.responseCode === 201) {
      }
    }
  }, [activeusers.admin_analytics_chart_activeuser_listdata])

  useEffect(() => {
    if (authStat_parentFilterData.data.responseBody !== undefined && authStat_parentFilterData.data.responseCode == 200) {
      if (authStat_parentFilterData.data.responseCode === 200) {
        //groups
        const itemgroups = [...data]
        itemgroups[0].value = authStat_parentFilterData.data.responseBody.group_details.active_groups
        itemgroups[1].value = authStat_parentFilterData.data.responseBody.group_details.inactive_groups
        itemgroups[2].value = authStat_parentFilterData.data.responseBody.group_details.deleted_group
        console.log(itemgroups)
        const totalGroupsCount = authStat_parentFilterData.data.responseBody.group_details.active_groups +
          authStat_parentFilterData.data.responseBody.group_details.inactive_groups +
          authStat_parentFilterData.data.responseBody.group_details.deleted_group
        setGroupsAnalytics(itemgroups)
        console.log(totalGroupsCount)
        setgroupstotal(totalGroupsCount)

        //events
        const itemgroups1 = [...data1]
        itemgroups1[0].value = authStat_parentFilterData.data.responseBody.event_details.active_events
        itemgroups1[1].value = authStat_parentFilterData.data.responseBody.event_details.past_events
        itemgroups1[2].value = authStat_parentFilterData.data.responseBody.event_details.deleted_events
        const totalEventsCount = authStat_parentFilterData.data.responseBody.event_details.active_events +
          authStat_parentFilterData.data.responseBody.event_details.past_events +
          authStat_parentFilterData.data.responseBody.event_details.deleted_events
        setEventAnalytics(itemgroups1)
        seteventtotal(totalEventsCount)

        //friends
        const itemgroups2 = [...data3]
        itemgroups2[0].value = authStat_parentFilterData.data.responseBody.friends_details.friendships_accepted
        itemgroups2[1].value = authStat_parentFilterData.data.responseBody.friends_details.deleted_friendships
        const totalFriendsCount = authStat_parentFilterData.data.responseBody.friends_details.friendships_accepted +
          authStat_parentFilterData.data.responseBody.friends_details.deleted_friendships
        setFriendsAnaltics(itemgroups2)
        setTotalFriendshipsCount(totalFriendsCount)
        setFriendShipRequested(authStat_parentFilterData.data.responseBody.friends_details.friendships_requested)
      }
      else {
        setgroupstotal('')
        seteventtotal('')
        setGroupsAnalytics([])
        setFriendsAnaltics([])
        setEventAnalytics([])
      }
    }
  }, [authStat_parentFilterData.data])

  useEffect(() => {
    const payload = {
      admin_id: localStorage.getItem('loggedIn_userId')
    }
    dispatch(getUsersListofInvitedCodeReg_APIcall(payload))
  }, [])

  useEffect(() => {
    if (authStat_getUsersListofInviteCodeReg.data.responseBody != undefined && authStat_getUsersListofInviteCodeReg.data.responseCode == 200) {
      const responseData = [...authStat_getUsersListofInviteCodeReg.data.responseBody]
      const sortDataAtoZ = responseData.sort((a, b) => a.full_name.localeCompare(b.full_name))
      setUsersListofInvitedCodeReg(sortDataAtoZ)
    }
    else (
      setUsersListofInvitedCodeReg([])
    )
  }, [authStat_getUsersListofInviteCodeReg.data])

  useEffect(() => {
    getstarted(true)
  }, [authStat_childFilterData.childFilterPayload])


  return (
    <div className="row">
      <div style={{ display: started !== false ? '' : 'none' }}>
        <div className='enable-loader1'>
          <img src={load} width="80px" height="80px"></img>
        </div>
      </div>

      <span className="an mb-2">Comparison Analytics</span>
      <div className="col-4"  >
        <div className="card g ">
          <div className="parent" >
            <div className="text_parent">
              <span className="comparison">{getgroupstotal}</span><span className="break grp">Groups Created</span> </div>
            <PieChart
              animate
              animationDuration={40}
              animationEasing="ease-in"
              data={data}
              lineWidth={20}
              lengthAngle={500}
              paddingAngle={0}
              radius={34}
              rounded
              startAngle={-240}
              endAngle={150}
            />
          </div>
          {data.map(val => (
            <div className="div_bg1 col-11 mx-75 mb-1">
              <div className="d-flex flex-row" style={{ marginTop: "-5px" }}>
                <div className="col-2 flexlay1 ">
                  <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
                <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                  <span className="small_text">{val.title}</span></div>
                <div className="col-1 flex_lay" >
                  <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-4 ">
        <div className="card g ">
          <div className=" parent" >
            <div className="text_parent">
              <span className="comparison">{geteventtotal}</span><span className="break grp">Events Created</span> </div>
            <PieChart
              animate
              animationDuration={40}
              animationEasing="ease-in"
              data={data1}
              lineWidth={20}
              lengthAngle={500}
              paddingAngle={0}
              radius={34}
              rounded
              startAngle={-240}
              endAngle={150}
            />
          </div>
          {data1.map(val => (
            <div className="div_bg1 col-11 mx-75 mb-1">
              <div className="d-flex flex-row" style={{ marginTop: "-5px" }}>
                <div className="col-2 flexlay1 ">
                  <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
                <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                  <span className="small_text">{val.title}</span></div>
                <div className="col-1 flex_lay" >
                  <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="col-3">
        <div className="card g ">
        <div className="parent" >
      <div className="text_parent">
        <span className="comparison">550</span><span className="break grp">Total Messages</span> </div>
    
    
        <PieChart
          
          animate
          animationDuration={40}
          animationEasing="ease-in"
       
        
          data={data2}
          lineWidth={20}
          lengthAngle={500}
          paddingAngle={0}

          radius={34}
          rounded
          startAngle={-240}
          endAngle={150}
          
          />
            </div>
              {data2.map(val => (
        <div className="div_bg1 col-11 mx-75 mb-1">
        <div className="d-flex flex-row"  style={{marginTop:"-5px"}}> 
        <div className="col-2 flexlay1 ">        
    <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
    <div className="col-8 d-flex align-items-center" style={{marginLeft:"-5%"}} >  
    <span className="small_text">{val.title}</span></div>
    <div className="col-1 flex_lay" >
    <span className="small_text1" >&nbsp;&nbsp;{val.value1}</span></div>
    
        </div>
    
    </div>
              ))}
        </div>
        </div> */}
      <div className="col-4">
        <div className="card g ">
          <div className="parent" >
            <div className="text_parent">
              <span className="comparison">{totalFriendshipsCount}</span><span className="break grp">Total Friendships</span> </div>
            <PieChart
              animate
              animationDuration={40}
              animationEasing="ease-in"
              data={data3}
              lineWidth={20}
              lengthAngle={500}
              paddingAngle={0}
              radius={34}
              rounded
              startAngle={-240}
              endAngle={150}
            />
          </div>
          {data3.map(val => (
            <div className="div_bg1 col-11 mx-75 mb-1">
              <div className="d-flex flex-row" style={{ marginTop: "-5px" }}>
                <div className="col-2 flexlay1 ">
                  <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
                <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                  <span className="small_text">{val.title}</span></div>
                <div className="col-1 flex_lay" >
                  <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
              </div>
            </div>
          ))}

          <div className="div_bg1 col-11 mx-75 mb-1">
            <div className="d-flex flex-row" style={{ marginTop: "-5px" }}>
              <div className="col-2 flexlay1 ">
                <img className="mt-50" src={dot3} width="55px" height='55px' ></img>
              </div>
              <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                <span className="small_text">Friendships Requested</span></div>
              <div className="col-1 flex_lay" >
                <span className="small_text1" >&nbsp;&nbsp;{getFriendShipRequested}</span></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-3"   >
    <div className="card g1" >
    <div className="parent" >
      <div className="text_parent">
        <span className="comparison">42</span><span className="break grp">Total Blocks</span> </div>
    
    
          <PieChart
          
            animate
            animationDuration={40}
            animationEasing="ease-in"
       
            data={data4}
            lineWidth={20}
            lengthAngle={360}
            paddingAngle={0}
            radius={34}
            rounded
            startAngle={-120}
            endAngle={150}
            />
            </div>
              {data4.map(val => (
      <div className="div_bg1 col-11 mx-75 mb-1">
      <div className="d-flex flex-row"  style={{marginTop:"-5px"}}> 
      <div className="col-2 flexlay1 ">        
  <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
  <div className="col-8 d-flex align-items-center" style={{marginLeft:"-5%"}} >  
  <span className="small_text">{val.title}</span></div>
  <div className="col-1 flex_lay" >
  <span className="small_text1" >&nbsp;&nbsp;{val.value1}</span></div>
  
      </div>
  
  </div>
              ))}
                <div className="col-11   mar mx-75  mb-1">
                  <Invitecoderegistration data="viewblock"></Invitecoderegistration>
              
            </div>
        </div>
        </div> */}
      <div className="col-4"  >
        <div className="card g1 " >
          <div className="parent" >
            <div className="text_parent">
              <span className="comparison">{totalUsersCountSoFar}</span><span className="break grp">Total Users</span> </div>
            <PieChart
              animate
              animationDuration={40}
              animationEasing="ease-in"
              data={data5}
              lineWidth={20}
              lengthAngle={500}
              paddingAngle={0}
              radius={34}
              rounded
              startAngle={-240}
              endAngle={150}
            />
          </div>
          <div >
            {data5.map(val => (
              <div className="div_bg1 col-11 mx-75 mb-1" >
                <div className="d-flex flex-row" style={{ marginTop: "-5px" }}>
                  <div className="col-2 flexlay1 ">
                    <img className="mt-50" src={val.color1} width="55px" height='55px' ></img></div>
                  <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                    <span className="small_text">{val.title}</span></div>
                  <div className="col-1 flex_lay" >
                    <span className="small_text1" >&nbsp;&nbsp;{val.value}</span></div>
                </div>
              </div>
            ))}
          </div>


          {/* <div className="div_bg1 col-11 mx-75 mb-1 py-2" >
            <div className="d-flex flex-row py-25" style={{ marginTop: "-5px" }}>
              <div className="col-2 flexlay1 ">
              </div>
              <div className="col-8 d-flex align-items-center" style={{ marginLeft: "-5%" }} >
                <span className="small_text">Deleted Users</span></div>
              <div className="col-1 flex_lay" >
                <span className="small_text1 ps-50">{deletedUserCount}</span></div>
            </div>
          </div> */}
          {/* <Invitecoderegistration data="active"></Invitecoderegistration> */}
          <ViewActiveUserDetails></ViewActiveUserDetails>
          <ViewInactiveUsers></ViewInactiveUsers>
          <ViewDeletedUsers></ViewDeletedUsers>
          <IncompleteObboardingUsers></IncompleteObboardingUsers>
        </div>
      </div>

      {/* <div class="col-2 ">
        <div class="card paddings">
          <div className="col-12 background d-flex justify-content-center align-center">
<span className="an_font_style "  style={{ fontSize:"30px" }}>550</span></div>
<div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text" style={{ fontSize:"18px", lineHeight:"21px"}}>Number of Downloads</span></div>
</div>
<div class="card paddings">
          <div className="col-12 background d-flex justify-content-center align-center ">
<span className="an_font_style " style={{ fontSize:"30px" }}>1,232</span></div>
<div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text" style={{ fontSize:"18px", lineHeight:"21px"}}>Posts Created</span></div>

</div>

      </div>
     
      <div class="col-2">
      <div class="card paddings">
          <div className="col-12 background d-flex justify-content-center align-center ">
<span className="an_font_style " style={{ fontSize:"30px" }}>1,232</span></div>
<div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text" style={{ fontSize:"18px", lineHeight:"21px"}}>Reports Submitted</span></div>

</div>
<div class="card paddings">
          <div className="col-12 background d-flex justify-content-center align-center "> 
<span className="an_font_style " style={{ fontSize:"30px" }}>550</span></div>
<div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text"  style={{ fontSize:"18px", lineHeight:"21px"}}>Comments Created</span></div>

</div>
    </div>  */}

      <div className="col-8 row  pd" >

        <div class="col-4 pe-0">
          <div class="card padd mp">
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>{getNumber_ofDownloads}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="wid" style={{ fontSize: "18px", lineHeight: "21px" }}>Number of Downloads</span></div>
          </div>
        </div>
        <div class="col-4  pe-0">
          <div class="card padd mp">
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>{getReports_Submitted}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="wid" style={{ fontSize: "18px", lineHeight: "21px" }}>Reports Submitted</span></div>
          </div>
        </div>
        <div class="col-4  pe-0">
          <div class="card padd mp " >
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>NA</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="wid" style={{ fontSize: "18px", lineHeight: "21px" }}>Statuses Created</span></div>
          </div>
        </div>
        <div class="col-4  pe-0">
          <div class="card padd mp" >
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>{getPosts_Created}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="wid" style={{ fontSize: "18px", lineHeight: "21px" }}>Posts Created</span></div>
          </div>
        </div>
        <div class="col-4  pe-0">
          <div class="card padd mp" >
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>{getComments_Created}</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="wid" style={{ fontSize: "18px", lineHeight: "21px" }}>Comments Created</span></div>
          </div>
        </div>
        <div class="col-4  pe-0">
          <div class="card padd mp" >
            <div className="col-12 bac d-flex justify-content-center align-center">
              <span className="an_font_style " style={{ fontSize: "30px" }}>NA</span></div>
            <div className="col-12 d-flex justify-content-center align-center pt-1 "><span className="font_styles_text" style={{ fontSize: "18px", lineHeight: "21px" }}>Users with Statuses Created</span></div>
          </div>
        </div>
        <div></div>
        <div class="col-12 pe-0">
          <Invitecoderegistration usersListofInvitedCodeReg={usersListofInvitedCodeReg} data="coderegistration"></Invitecoderegistration>
        </div>
      </div>
    </div>


  )
}


const mapStateToProps = (state) => {
  return {
    getUsersListofInvitedCodeRegData: state.getUsersListofInvitedCodeRegData,
    getDeletedUsersListData: state.getDeletedUsersListData,
    admin_analytics_filter_global: state.admin_analytics_filter_global,
    analyticsParentFilterData: state.analyticsParentFilterData,
    analyticsChildFilterData: state.analyticsChildFilterData
  }
}
export default connect(mapStateToProps, {})(Analytics_graph)