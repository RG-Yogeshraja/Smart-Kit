import { useEffect, useState, useRef, forwardRef } from 'react'
import '../../../scss/base/adminDashboard/adminmenu/AdminAccount.scss'
import profile from '@src/assets/images/dashboardimg/profilepic.png'
import usersquare_default from '@src/assets/images/dashboardimg/usersquare-default.png'
import settings from '@src/assets/images/dashboardimg/usersetting.png'
import checkbox from '@src/assets/images/dashboardimg/fieldbox.png'
import logout from '@src/assets/images/dashboardimg/logout.png'
import sortval from '@src/assets/images/dashboardimg/Sortables.png'
import navsearching from '@src/assets/images/dashboardimg/navsearch.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom"
import * as Icon from 'react-feather'
import ExLogpopup from './navdialog'
import { NavItem, NavLink, UncontrolledButtonDropdown } from 'reactstrap'
import Global_Popup from '../../../../adminanalytics/filter_popup'
import { Button, Popover, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap'
import { getAdminProfile_APIcall } from './slice-navbar'
import moment from 'moment'


const NavbarSearch = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [data, setData] = useState(false)
  const [adminName, setAdminName] = useState('')
  const dispatch = useDispatch()

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [icon, seticon] = useState(false)
  const [show, setshow] = useState(false)
  const [placeholder, setplaceholder] = useState('Search by user name or subject...')
  const { pathname } = useLocation()
  const [hide, sethide] = useState()
  const [getCurrentDate, setCurrentDate]= useState('')

  // useEffect(() => {
  // axios.get('/api/main-search/data').then(({ }) => {
  // setSuggestions(data.searchArr)
  // })
  // }, [])


  // const authStat = useSelector((state) => state.adminProfileData)
  // console.log("getAdminProfile_responseData", authStat)

  // useEffect(() => {
  //   const payload = {
  //     user_id: '4',
  //   }
  //   dispatch(getAdminProfile_APIcall(payload))
  // })

  // useEffect(() => {
  //   if (authStat != undefined && authStat != "") {
  //     if (authStat.data.responseCode == 200) {
  //       setAdminName(authStat.data.responseBody[0].full_name)
  //     }
  //     else if (authStat.data.responseCode === 201) {
  //       console.log('failed');
  //     }
  //   }
  // }, [authStat.data.responseBody])




  const logouts = () => {
    navigate("/adminlogin")

  }
  // ** Removes query in store
  const handleClearQueryInStore = () => dispatch(handleSearchQuery(''))

  // const handleShow = () => setShow(true)

  const test = () => {
    console.log("test")
    if (icon === false) {
      seticon(true)
    } else {
      seticon(false)
    }
  }
  const filterpopup = () => {
    props.clickhandle("triggered")
    localStorage.setItem("val", true)
  }
  const setuserDetail = () => {
    navigate("/user/userSettings")
    seticon(false)
  }
  const handleClick = (e) => {

    console.log(data)
    if (data === false && e === true) {
      setData(true)
      seticon(false)
    } else {
      setData(false)
    }

  };
  // ** Function to handle external Input click
  // const handleExternalClick = () => {
  //   if (navbarSearch === true) {
  //     setNavbarSearch(false)
  //     handleClearQueryInStore()
  //   }
  // }

  // ** Function to clear input value
  // const handleClearInput = setUserInput => {
  //   if (!navbarSearch) {
  //     setUserInput('')
  //     handleClearQueryInStore()
  //   }
  // }

  // ** Function to close search on ESC & ENTER Click
  // const onKeyDown = e => {
  //   if (e.keyCode === 27 || e.keyCode === 13) {
  //     setTimeout(() => {
  //       setNavbarSearch(false)
  //       handleClearQueryInStore()
  //     }, 1)
  //   }
  // }

  // ** Function to handle search suggestion Click
  // const handleSuggestionItemClick = () => {
  //   setNavbarSearch(false)
  //   handleClearQueryInStore()
  // }

  // ** Function to handle search list Click
  // const handleListItemClick = (func, link, e) => {
  //   func(link, e)
  //   setTimeout(() => {
  //     setNavbarSearch(false)
  //   }, 1)
  //   handleClearQueryInStore()
  // }

  const setNavbarSearch = () => {

  }

  useEffect(() => {
    if (pathname === "/admin/Analytics") {
    }
  }, [])

  useEffect(() => {
    let getCurrentDate = new Date()
    // const getTime = getDate(getCurrentDate)
    // const getMonth = getMonth(getCurrentDate)
    // const getYear = getYear(getCurrentDate)

    const monthValue = moment(getCurrentDate).format('MMM')
    const dateValue = moment(getCurrentDate).format('DD')
    const yearValue = moment(getCurrentDate).format('YYYY')

    const dateVal = monthValue + ', ' + dateValue + ' ' + yearValue
    setCurrentDate(dateVal)


  }, [])

  return (
    <NavItem className='nav-search' onClick={() => setNavbarSearch(true)} >
      {/* <NavLink className='nav-link-search' style={{ display: pathname === "/user/userSettings" || pathname === "/admin/Analytics" ? 'none' : 'flex' }}>
         <div className='inputAlignment'>
          <img src={navsearching} className="iconChange" width="24px" height="24px"></img>
          <Icon.Search className="iconChange"></Icon.Search>
          <input type="text" class="formcontrol form " style={{ width: "93%" }} placeholder={pathname === "/admin/groups" || pathname === "/admin/sponsorsevents" || pathname === "/admin/sponsorposts" || pathname === "/admin/sponsorgroups" ? "Search by event name or interest tag" : "Search by name, email, or mobile number"}>
            {pathname === "/admin/groups"? placeholder :'Search by name, email or mobile number'}
            <img src={navsearching} className="iconChange"></img>
          </input>
        </div> 
      </NavLink>
      <NavLink className='nav-link-search' style={{ display: pathname === "/admin/Analytics" ? 'flex' : 'none' }}>
        <button className='buttonalign p-1 d-flex align-items-center' id="uncontrolledPopover"><img width="18px" height="16px"src={sortval}></img> &nbsp;&nbsp; <span className="filteralign">Filter By</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon.ChevronDown className='filteralign' style={{display:icon === true ? 'none' : 'block'}}></Icon.ChevronDown><Icon.ChevronUp className='filteralign' style={{display:icon === false ? 'none' : 'block'}}></Icon.ChevronUp>
        </button>
        <span style={{ display: pathname === "/admin/Analytics" ? 'flex' : 'none' }}>
          <Global_Popup data={pathname}></Global_Popup>
        </span>

      </NavLink> */}
      {/* <div style={{display:pathname === "/admin/Analytics"?'flex':'none'}}>
          s;dls;dlsld
       </div> */}
      <li className="d-flex align-items-center text-center mt-75">
        {/* <img src={profile}  class="profilePic" ></img> */}
        <span className='dateTime me-4'>{getCurrentDate}</span>
        <img src={usersquare_default} width="40px" height="40px" class="profilePic" style={{ borderRadius: "10px", backgroundColor: "#FFFFFF" }}></img>
        <div className='user-nav d-sm-flex d-none' width="173px">
          <Dropdown autoClose="inside" className='logout-dropdown'>
            <UncontrolledButtonDropdown style={{ cursor: "pointer" }} className='d-flex align-items-center'  >
              <Dropdown.Toggle className='p-0 dropdownss d-flex ' id="dropdown-autoclose-inside"  > <div className='d-flex' onClick={test} >
                <span className='user-name fw-bold' style={{ color: 'white', fontSize: '18px', cursor: 'pointer' }}>{localStorage.getItem("user_name")}</span>
                <Icon.ChevronDown style={{ display: icon === true ? 'none' : 'block' }}></Icon.ChevronDown><Icon.ChevronUp style={{ display: icon === false ? 'none' : 'block' }}></Icon.ChevronUp></div>
              </Dropdown.Toggle>
              <Dropdown.Menu className='test ' >
                {/* <Dropdown.Item onClick={setuserDetail} style={{marginTop:"7px"}}><img src={settings} width="25px" height="25px" ></img>&nbsp;&nbsp;&nbsp;<span className='usersettings'>User Settings</span></Dropdown.Item> */}
                <Dropdown.Item onClick={() => handleClick(true)}><ExLogpopup parentToChild={handleClick} child={data} /></Dropdown.Item>
              </Dropdown.Menu>
            </UncontrolledButtonDropdown>
          </Dropdown>
        </div>
      </li>


      {/* <div
        className={classnames('search-input', {
          open: navbarSearch === true
        })}
      >
        <div className='search-input-icon'>
          <Icon.Search />
        </div>
        {navbarSearch ? (
          <Autocomplete
            className='form-control'
            suggestions={suggestions}
            filterKey='title'
            filterHeaderKey='groupTitle'
            grouped={true}
            placeholder='Explore Vuexy...'
            autoFocus={true}
            onSuggestionItemClick={handleSuggestionItemClick}
            externalClick={handleExternalClick}
            clearInput={(userInput, setUserInput) => handleClearInput(setUserInput)}
            onKeyDown={onKeyDown}
            onChange={e => dispatch(handleSearchQuery(e.target.value))}
            customRender={(item, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) => {
              const IconTag = Icon[item.icon ? item.icon : 'X']
              return (
                <li
                  className={classnames('suggestion-item', {
                    active: filteredData.indexOf(item) === activeSuggestion
                  })}
                  key={i}
                  onClick={e => handleListItemClick(onSuggestionItemClick, item.link, e)}
                  onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(item))}
                >
                  <div
                    className={classnames({
                      'd-flex justify-content-between align-items-center': item.file || item.img
                    })}
                  >
                    <div className='item-container d-flex'>
                      {item.icon ? (
                        <IconTag size={17} />
                      ) : item.file ? (
                        <img src={item.file} height='36' width='28' alt={item.title} />
                      ) : item.img ? (
                        <img className='rounded-circle mt-25' src={item.img} height='28' width='28' alt={item.title} />
                      ) : null}
                      <div className='item-info ms-1'>
                        <p className='align-middle mb-0'>{item.title}</p>
                        {item.by || item.email ? (
                          <small className='text-muted'>{item.by ? item.by : item.email ? item.email : null}</small>
                        ) : null}
                      </div>
                    </div>
                    {item.size || item.date ? (
                      <div className='meta-container'>
                        <small className='text-muted'>{item.size ? item.size : item.date ? item.date : null}</small>
                      </div>
                    ) : null}
                  </div>
                </li>
              )
            }}
          />
        ) : null}
        <div className='search-input-close'>
          <Icon.X
            className='ficon'
            onClick={e => {
              e.stopPropagation()
              setNavbarSearch(false)
              handleClearQueryInStore()
            }}
          />
        </div>
      </div> */}

    </NavItem>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     adminProfileData: state.adminProfileData
//   }
// }
// export default connect(mapStateToProps, {})(NavbarSearch)

export default NavbarSearch