import React, { useEffect, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from 'reactstrap'
import email from '../assets/images/dashboardimg/sms.png'
import edit from '../assets/images/dashboardimg/Edit1.png'
import user from '../assets/images/dashboardimg/1.png'
import DeleteDialog from './deleteAccount.js'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getDeletedUserAccount_APIcall } from './slice-getDeletedUser'
import RestoreExample from './Restorepop'
import Loaders from '../enableloader'
import { getActiveAdminAccount_APIcall } from './slice-active-deleteduserlist'


const AdminAccountList = (props) => {
  // console.log("table props defined", props)
  const [active, setActive] = useState('1')
  const [createdAdminList, setCreatedAdminList] = useState()
  const [loggedInAdminData, setLoggedInAdminData] = useState([])
  const [nonLoggedInAdminData, setNonLoggedInAdminData] = useState([])
  const [deletedUserAccountList, setDeletedUserAccountList] = useState([])
  const tests = props.props
  const [errorMessage, setErrorMessage] = React.useState("")
  const [ind, setindex] = React.useState("")
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // 
    // setCreatedAdminList(props.props)
    const adminData = [...props.props]
    const loggedInAccountFilter = adminData.filter(item => item.user_id == localStorage.getItem('loggedIn_userId'))
    const nonLoggedInAccountFilter = adminData.filter(item => item.user_id != localStorage.getItem('loggedIn_userId'))
    const nonLoggedInAccountSort = nonLoggedInAccountFilter.sort((a, b) => a.full_name.localeCompare(b.full_name))
    setLoggedInAdminData(loggedInAccountFilter)
    setNonLoggedInAdminData(nonLoggedInAccountSort)



    // console.log(createdAdminList)
  }, [props.props])

  const authStat_getDeletedAccountList = useSelector((state) => state.getDeletedUserAccountData)

  const toggle = tab => {

    // if (tab == 2) {
    //   props.parentCallback(active);
    // }
    // console.log(active);
    if (active !== tab) {
      setActive(tab)
    }
    if (active == "1") {
      setLoader(true)
      // get deleted user account list- API call
      const payload = {
        user_id: localStorage.getItem("loggedIn_userId")
      }
      dispatch(getDeletedUserAccount_APIcall(payload))
      // console.log("deletedUserAccountList_responseData", authStat_getDeletedAccountList)
    }
  }



  useEffect(() => {

    if (authStat_getDeletedAccountList.data.responseBody != undefined) {
      if (authStat_getDeletedAccountList.data.responseCode == 200) {
        setDeletedUserAccountList(authStat_getDeletedAccountList.data.responseBody)
        getCreatedAdminList()
        setLoader(false)
      }
      else {
        setDeletedUserAccountList([])
        setLoader(false)
      }
    }
  }, [authStat_getDeletedAccountList])

  const authStat_getActiveList = useSelector((state) => state.getActiveAdminData)
  const getCreatedAdminList = () => {
    const userId = localStorage.getItem('loggedIn_userId')
    const payload = {
      user_id: userId
    }
    dispatch(getActiveAdminAccount_APIcall(payload))
  }

  // useEffect(() => {
  //   setarrays(array)
  //   setorginals(orginals);
  //   props.logintype;
  //   console.log('****', props.logintype);
  // })


  // const deletepopup = (data) => {

  //   const arr = [...array]
  //   const splice = arr.splice(data, 1)
  //   // const sp = ({ 'id': splice[0].id, 'name': splice[0].name, 'email': splice[0].email, 'super': splice[0].super, 'buttons': splice[0].buttons })
  //   // console.log(splice)
  //   console.log(tests)
  //   setarrays(arr)
  //   setErrorMessage('')
  //   const ori = [...orginals]
  //   // ori.push(sp)
  //   setorginals(ori)
  //   console.log(orginals)
  //   props.delete()
  // }



  // const restorepopup = (data) => {
  //   const s = [...orginals]
  //   const splice1 = s.splice(data, 1)
  //   const sps = ({ 'id': splice1[0].id, 'name': splice1[0].name, 'email': splice1[0].email, 'super': splice1[0].super, 'buttons': splice1[0].buttons })
  //   setorginals(s)
  //   const ori = [...array]
  //   ori.push(sps)
  //   setarrays(ori)
  //   setActive("1")
  // }

  // const deleteno = (data) => {
  //   setErrorMessage('')
  // }


  // const handleClick = (i, id) => {
  //   console.log(i, id)
  //   console.log(array)
  //   {
  //     array.map((item, index) => {
  //       console.log(index, item, item.id)
  //       if (item.id == id) {
  //         setindex(index)
  //         setErrorMessage("Password reset triggered")
  //       }
  //     })
  //   }
  // }

  const edited = (data, index) => {

    setErrorMessage('')
    props.edit(data, index)
  }

  return (

    <React.Fragment>
      <Nav tabs style={{ border: "1px solid #CCD8DB", borderLeft: "none", borderRight: "none", borderTop: "none", borderRadius: "0px", width: "93%" }}>
        <NavItem>
          <NavLink className='bigger '
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}>
            Active
          </NavLink>
        </NavItem>

        {localStorage.getItem("user_role") == "1" ?
          <NavItem>
            <NavLink className='bigger ms-2'
              active={active === '2'}
              onClick={() => {
                toggle('2')
              }} >
              Deleted
            </NavLink>
          </NavItem> : null}
      </Nav>

      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          {loggedInAdminData?.map((res, index) => {
            return (
              <>
                <div>
                  <div className="row m-0 card cards d-none d-lg-flex mb-2 p-1  ">
                    <div className="col-xl-8 col-lg-8 col-md-5 col-sm-5 col-xs-5">
                      <img src={user} style={{ marginBottom: "7px" }} height="20px" width="20px" ></img>
                      <span className='marginalign'>{res.full_name}</span>
                      <br></br>
                      <img src={email} height="20px" width="20px" ></img>
                      <a href='mailto:' className="admin_mail marginaligned mt-2">{res.email_address}</a>
                      <br></br>


                      {/* *****trigger Password reset commented due to no need in sprint 1 */}
                      {/* <button className='btn btns borderdesign mt-2' onClick={() => handleClick(index, res.id)}><span>Trigger Password Reset</span></button>
                        {index == ind ? <div className="error" style={{ color: "red" }}> {errorMessage} </div> : ""} */}


                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7  col-sm-7 col-xs-7 "  >
                      <div className='d-flex justify-content-end' style={{ marginTop: "2px" }}>
                        {res.user_role == '1' ? <span className='texts padding' style={{ fontSize: "100%" }} >Super Admin</span> : <span className='texts padding' style={{ fontSize: "100%" }} >Admin</span>}
                      </div>
                      {localStorage.getItem("user_role") == "1" ?
                        <div className='d-flex justify-content-end' style={{ marginTop: "-10px", display: "none" }} >
                          <img className="mt-4" src={edit} height="53px" width="53px" onClick={() => edited(res, index)}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <DeleteDialog userId={res.user_id} /> */}
                        </div>
                        : null}

                      {(localStorage.getItem("user_role") == "2") && (localStorage.getItem("loggedIn_userId") == res.user_id) ?
                        <div className='d-flex justify-content-end' style={{ marginTop: "-10px", display: "none" }} >
                          <img className="mt-4" src={edit} height="53px" width="53px" onClick={() => edited(res, index)}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <DeleteDialog userId={res.user_id} /> */}
                        </div>
                        : null}
                    </div>
                  </div>
                </div>
              </>
            )
          })
          }


          {nonLoggedInAdminData?.map((res, index) => {
            return (
              <>
                <div>
                  <div className="row m-0 card cards d-none d-lg-flex mb-2 p-1  ">
                    <div className="col-xl-8 col-lg-8 col-md-5 col-sm-5 col-xs-5">
                      <img src={user} style={{ marginBottom: "7px" }} height="20px" width="20px" ></img>
                      <span className='marginalign'>{res.full_name}</span>
                      <br></br>
                      <img src={email} height="20px" width="20px" ></img>
                      <a href='mailto:' className="admin_mail marginaligned mt-2">{res.email_address}</a>
                      <br></br>

                      {/* *****trigger Password reset commented due to no need in sprint 1 */}
                      {/* <button className='btn btns borderdesign mt-2' onClick={() => handleClick(index, res.id)}><span>Trigger Password Reset</span></button>
                        {index == ind ? <div className="error" style={{ color: "red" }}> {errorMessage} </div> : ""} */}
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-7  col-sm-7 col-xs-7 "  >
                      <div className='d-flex justify-content-end' style={{ marginTop: "2px" }}>
                        {res.user_role == '1' ? <span className='texts padding' style={{ fontSize: "100%" }} >Super Admin</span> : <span className='texts padding' style={{ fontSize: "100%" }} >Admin</span>}
                      </div>
                      {/* {props.logintype == res.email_address ? */}
                      {localStorage.getItem("user_role") == "1" ?
                        <div className='d-flex justify-content-end' style={{ marginTop: "-10px", display: "none" }} >
                          <img className="mt-4" src={edit} height="53px" width="53px" onClick={() => edited(res, index)}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <DeleteDialog userId={res.user_id} />
                        </div>
                        : null}
                    </div>
                  </div>
                </div>
              </>
            )
          })
          }


        </TabPane>
        <TabPane tabId='2'>
          <div style={{ display: loader !== false ? '' : 'none' }}>
            <Loaders></Loaders>
          </div>
          {(deletedUserAccountList).length > 0 ?
            <>
              {deletedUserAccountList?.map((res, index) => {
                return (
                  <div>
                    <div className="row m-0 card  card1  d-none d-md-flex d-lg-none d-sm-flex d-xs-flex mb-2">
                      <div className='col-12'>
                        <div className='d-flex justify-content-end '>
                          <span className='texts padding' style={{ fontSize: "100%" }} >
                            {res.user_role}
                          </span>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                          <img src={user} height="20px" width="20px"  ></img>
                          <span className='marginalign '>{res.full_name}</span><br ></br>
                        </div>
                        <div className='d-flex align-items-center '>
                          <img src={email} height="20px" width="20px" ></img>
                          <span className="marginaligns_small">{res.email_address}</span>
                        </div>
                        <br></br>
                        <div>
                          <RestoreExample userId={res.user_id} />
                          {/* onClick={()=>restorepopup(index)} */}
                        </div>
                      </div>
                    </div>
                    <div className="row m-0 card cards  d-none d-lg-flex mb-2">
                      <div className="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-xs-7">
                        <img src={user} style={{ marginBottom: "7px" }} height="20px" width="20px" ></img>
                        <span className='marginalign'>{res.full_name}</span>
                        <br ></br>
                        <img src={email} height="20px" width="20px" ></img>
                        <span className="marginaligned_small admin_mail mt-2">{res.email_address}</span>
                        <br></br>
                        <RestoreExample userId={res.user_id} />
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-5" >
                        <div className='d-flex justify-content-end' style={{ marginTop: "2px" }}>
                          {res.user_role == "1" ? <span className='texts padding'>Super Admin</span> : <span className='texts padding'>Admin</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}</>
            :
            <div className='row mt-5 pt-5'>
              <span className='spanText-noData d-flex align-items-center justify-content-center'>No data found</span>
            </div>}

        </TabPane>
      </TabContent>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    getDeletedUserAccountData: state.getDeletedUserAccountData,
    getActiveAdminData: state.getActiveAdminData
  }
}
export default connect(mapStateToProps, {})(AdminAccountList)