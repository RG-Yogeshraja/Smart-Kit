import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import sortby from '../../assets/images/dashboardimg/sorts.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp"
import '../../@core/scss/base/adminDashboard/groupsmenu/filtergrouppopup.scss'
import checkblankboxes from '../../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../../assets/images/dashboardimg/checktickbox.png'
import React, { useState, useEffect } from "react"
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { connect, useDispatch, useSelector } from 'react-redux'
import { groupsFilter_APIcall } from '../slice-admingroups/slice-groupfilter'
import AutoComplete1 from '../groupspopup/getlocationfilter'

// DONT REMOVE THE COMMENTED CODE-Commented code no need of current sprint

// import { use } from 'i18next';
// import FilterGrpCreatedby from './filtergrpcreatedby';
// import FiltergrpGroupType from './filtergrpgrouptype';
// import FiltergrpLocation from './filtergrplocation';
// import EditHeight from '../../adminusers/editheight';
// import FiltergrpSortby from './filtergrpsortby';
// import FilterInterests from '../../adminusers/filterinterests';
// import FilterPopularInterests from '../../adminusers/filterpopularinterests';
// import FilterGroupInterests from './fitergrpinterests';
// import FiltergrpWithin from './filtergrpheight';

const FilterGrppopup = (props) => {
  const [loader, setLoader] = useState(false)
  const [show, setShow] = useState(true)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [showLess, setshowLess] = useState(true)
  const [min, setmin] = useState('')
  const [gender, setgender] = useState('')
  const [look, setlooks] = useState('')
  const [max, setmax] = useState('')
  const [state, setstate] = useState({ data: "" })
  const [clearFilterVal, setClearFilterVal] = useState("")
  const authStat_getGroupFilterData = useSelector((state) => state.groupsFilterData)
  const [loc,setlocation] = useState('')
  const dispatch = useDispatch()
  const [filterType, setFilterType] = useState([
    { id: 0, filterName: 'Active Groups', checked: false },
    { id: 1, filterName: 'Inactive Groups', checked: false },
    { id: 2, filterName: 'Private Groups', checked: false },
    { id: 3, filterName: 'Public Groups', checked: false },
    { id: 4, filterName: 'Hint Social Groups', checked: false },
    { id: 5, filterName: 'Non-Hint Social Groups', checked: false }
    // {id:3,filterName:'Non-Hint Social Groups',checked:false},
  ])
  const locationchange = (v, lat, long) => {
    //
    console.log(v)
    setlocation(v)
  
  }
  const changeShow = () => {
    setshowLess(!showLess)
    console.log(props.data)
  }
  const popoversss = () => {
    setPopoverOpen(!popoverOpen)
    setshowLess(!showLess)

    // console.log(min, max, gender, look)
    // props.sendData({ minval: min, maxval: max, gend: gender, looks: look })
  }
  const choosegenders = (messages) => {
    setgender(messages)
    console.log(messages)
  }
  const chooselooks = (messages) => {
    setlooks(messages)
    console.log(messages)
  }
  const chooseMessage = (message) => {
    setmin(message.val)
    setmax(message.val1)
    console.log(message)
  }

  const ClearFilterCall = () => {
    
    // setstate({ data: `hhj jhi` });
    // setClearFilterVal('1')
  }

  const handlechange = (index) => {
    const newFilter = [...filterType]
    if (newFilter[index].checked === false) {
      newFilter[index].checked = true
    } else {
      newFilter[index].checked = false
    }
    setFilterType(newFilter)
    const filteredData1 = newFilter.filter(item => item.checked === true)
    const filteredTypestoSubmit = []
    for (let i = 0; i < filteredData1.length; i++) {
      if (filterType[i].checked == true) {
        filteredTypestoSubmit.push(newFilter[i].filterName)
      }
    }
  }

  useEffect(() => {
  setLoader(true)
    if (authStat_getGroupFilterData.data.responseBody !== undefined && authStat_getGroupFilterData.data.responseCode == 200) {
      setLoader(false)
    
    } else {
      setLoader(false)
     
    }
}, [authStat_getGroupFilterData.data])

  const applyGroupsFilterCall = () => {
    // 
    const filteredData = filterType.filter(item => item.checked == true)
    const filteredTypestoSubmit = []
    for (let i = 0; i < filteredData.length; i++) {
    
        filteredTypestoSubmit.push(filteredData[i].filterName)
      
    }
    
   
      setLoader(true)
      
    const payload = {
      admin_id: localStorage.getItem('loggedIn_userId'),
      location: loc,
      search_key: props.data,
      group_type: filteredTypestoSubmit
    }
    // 
    console.log(payload)
    payload
    dispatch(groupsFilter_APIcall(payload))
  
    popoversss()
    
  }


  return (
    <div>
        <div style={{ display: loader !== false ? '' : 'none' }}>
                    <div className='enable-loader1'>

                        <img src={load} width="80px" height="80px"></img>
                    </div>
                </div>
      <button className='btn_filter d-flex flex-row justify-content-flex-start align-items-center' style={{ border: "1px solid  #95E1BF", borderRadius: "10px" }} onClick={() => changeShow(true)} id='popBottom'>
        <div className='col-10 d-flex justify-content-center'>
          <img src={sortby} width="18px" height="18px" /><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
        <div className='col-1'>
          {showLess ? <div><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}
          {/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
        </div>
      </button>&nbsp;&nbsp;&nbsp;

      <UncontrolledPopover isOpen={popoverOpen} toggle={() => setPopoverOpen(!popoverOpen)} placement='bottom' target='popBottom'   >
        <div className={`card p-1 d-block ${props.data == true ? 'width_size1' : 'width_size'}`} style={{ border: "1px solid  #95E1BF", borderRadius: "15px" }}>
          <div className='d-flex justify-content-between flex-row align-items-center  mt-2 mb-1'>
            <span className='filter_by' >Filter By</span>
            <span className='clear_filter' onClick={() => ClearFilterCall()}>Clear Filters</span>
          </div>

          {/* <div>
          <FilterGrpCreatedby ></FilterGrpCreatedby>
          </div> */}

          <div>
          <AutoComplete1 handle={locationchange} ></AutoComplete1>
            {/* <FiltergrpGroupType data={clearFilterVal}></FiltergrpGroupType> */}
            <div className="mt-1 mb-2">
              <span className="font-groups">Group Type</span>
            </div>

            <form className="row">
              {filterType.map((items, index) => <div key={index} className="col-6">
                <div className='mb-2 d-flex align-items-center'>
                  <img onClick={() => { handlechange(index) }} src={items.checked ? checktickboxes : checkblankboxes} clearFilterValues={props.data} width="20px" height="20px"></img>&nbsp;&nbsp;
                  <span style={items.css} className='fonting-style11 col-9'>{items.filterName} </span><br></br>
                  {/* <p>{props.data}</p> */}
                </div>
              </div>)}
            </form>
          </div>

          {/* ---- PLEASE DON'T REMOVE THE CODE- the commented code are no need for current sprint ----- */}

          {/* 
<hr style={{color:"#CCD8DB"}}></hr>

<FiltergrpLocation></FiltergrpLocation>

<FiltergrpWithin></FiltergrpWithin>
<hr style={{color:"#CCD8DB"}}></hr>
<FilterGroupInterests ></FilterGroupInterests>
<FilterPopularInterests></FilterPopularInterests>
<hr style={{color:"#CCD8DB"}}></hr>
<FiltergrpSortby></FiltergrpSortby> */}



<div className='d-flex align-items-center justify-content-center mt-1 mb-1'>
            <button className='btn-applyy' onClick={applyGroupsFilterCall}>
              <span className='font-applyy'>Apply</span>
            </button>
          </div>
        </div>
      </UncontrolledPopover>
    </div>

  )
}

export default FilterGrppopup

