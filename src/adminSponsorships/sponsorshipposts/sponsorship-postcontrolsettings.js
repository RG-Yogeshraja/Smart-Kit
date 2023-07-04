import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import circle1 from '../../assets/images/dashboardimg/profile-2user.png'
import closecircle from '../../assets/images/dashboardimg/close-circle.png'
import plusicons from '../../assets/images/dashboardimg/plusicon.png'
import '../../@core/scss/base/adminDashboard/manageinterestt.scss'
import '../../@core/scss/base/adminDashboard/sponsorshipsmenu/sponsoreventsmenu/sponsorshipmanagesettingtag.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import search from '../../assets/images/dashboardimg/searchbar.png'
import load from '../../assets/images/dashboardimg/loadersimg.gif'
import { searchGroupInterestforEvent_APIcall } from '../slice-sponsorship/slice-sponsorshipEvents/slice-searachGroupNameInterest'
import { updateSponsorEventControSettings_APIcall } from '../slice-sponsorship/slice-sponsorshipEvents/slice-updateSponsorControlEventSettings'
import { getAllSponsorPosts_APIcall } from '../slice-sponsorship/slice-sponsorshipPosts/slice-getAllSponsorPosts'

const SponsorPostControlSettings = (props) => {

  const [show, setShow] = useState(false)
  const [loader, setLoader] = useState(false)
  const authStat_searchGroupnameInterestData = useSelector((state) => state.searchGroupNameInterestData)
  const [text, settext] = useState('')
  const dispatch = useDispatch()
  const [selectedItemsFromSearchingResult, setSelectedItemsFromSearchingResult] = useState([])
  const [researchingResult, setSearchingResult] = useState()
  const [researchingResult1, setSearchingResult1] = useState()
  const [searchString, setSearchString] = useState('')
  const authStat_updateSponsorControlEventSetting = useSelector((state) => state.updateSponsorEventControlSettingsData)
  const authStat_getAllActivePostData = useSelector((state) => state.getAllSponsorPostsData)
  const authStat_getActualSponsorEventPayload = useSelector((state) => state.getAllSponsorPostsData)
  const [selectedGroupResult, setSelectedGroupResult] = useState([])
  const [selectedInterestResult, setSelectedInterestResult] = useState([])
  const [updatedTargetGroupsList, setUpdatedTargetGroupsList] = useState([])
  const [updatedTargetInterestList, setUpdatedTargetInterestList] = useState([])
  const authStat_getSponsorPostDetails = useSelector((state) => state.getAllSponsorPostsData)

  const handleOpenDialog = () => {
    setShow(true)
    setSelectedGroupResult([])
    setSelectedInterestResult([])
    // setSearchingResult()
    // setSearchingResult1()
    setSelectedItemsFromSearchingResult([])
  }


  const handleClose = () => {
    setShow(false)
    setSearchingResult()
    setSearchingResult1()
    setUpdatedTargetGroupsList(authStat_getSponsorPostDetails.sponsorPostDetailsData.sponsor_details.targeted_groups)
    setUpdatedTargetInterestList(authStat_getSponsorPostDetails.sponsorPostDetailsData.sponsor_details.additional_interest)
    setSelectedItemsFromSearchingResult([])
  }


  const handleRemoveItem = (items, index) => {
    const newArray = [...selectedItemsFromSearchingResult]
    newArray.splice(index, 1)
    const resultArray = newArray
    console.log(resultArray)
    setSelectedItemsFromSearchingResult(newArray)
    console.log(selectedItemsFromSearchingResult)
  }

  const handleUpdatedRemoveItem = (items, index) => {

    if (items.group_name != undefined) {
      const newArray = [...updatedTargetGroupsList]
      newArray.splice(index, 1)
      setUpdatedTargetGroupsList(newArray)
    }
    else if (items.group_name == undefined) {
      const newArray = [...updatedTargetInterestList]
      newArray.splice(index, 1)
      setUpdatedTargetInterestList(newArray)
    }
  }


  const handleSelectItem = (name, index, data) => {

    const checkExistingGroupItem = []
    const checkExistingInterestItem = []
    if (data.group_id != undefined) {
      for (let i = 0; i < selectedItemsFromSearchingResult.length; i++) {
        if (selectedItemsFromSearchingResult[i].name == name) {
          checkExistingGroupItem.push(selectedItemsFromSearchingResult[i])
        }
      }
      for (let i = 0; i < updatedTargetGroupsList.length; i++) {
        if (updatedTargetGroupsList[i].group_name == name) {
          checkExistingGroupItem.push(updatedTargetGroupsList[i])
        }
      }
    }

    else if (data.group_id == undefined) {
      for (let i = 0; i < selectedItemsFromSearchingResult.length; i++) {
        // if (selectedItemsFromSearchingResult[i].interest_name != undefined) {
        if (selectedItemsFromSearchingResult[i].name == name) {
          checkExistingInterestItem.push(selectedItemsFromSearchingResult[i])
        }
        // }
      }
      for (let i = 0; i < updatedTargetInterestList.length; i++) {
        // if (updatedTargetInterestList[i].interest_name != undefined) {
        if (updatedTargetInterestList[i] == name) {
          checkExistingInterestItem.push(updatedTargetInterestList[i])
        }
        // }
      }
    }

    // if (checkExistingGroupItem.length == 0 && data.group_id != undefined) {
    //   settext(name)
    //   setSelectedItemsFromSearchingResult(oldArray => [...oldArray, { img1: circle1, name: name, img2: closecircle }])
    //   setSelectedGroupResult(items => [...items, { group_id: data.group_id, group_name: name }])
    //   settext("")
    // }
    // else if (checkExistingInterestItem.length == 0 && data.group_id == undefined) {
    //   settext(name)
    //   setSelectedItemsFromSearchingResult(oldArray => [...oldArray, { name: name, img2: closecircle, interest_name: name }])
    //   setSelectedInterestResult(items => [...items, name])
    //   settext("")
    // }

    if (checkExistingGroupItem.length === 0 && data.group_id != undefined) {
      settext(name)
      const old = [...selectedItemsFromSearchingResult]
      const newone = [{ img1: circle1, name: name, img2: closecircle, group_id: data.group_id }]
      const addArray = [...old, ...newone]
      setSelectedItemsFromSearchingResult(addArray)
      console.log(selectedItemsFromSearchingResult)
      settext("")
    }
    else if (checkExistingInterestItem.length === 0 && data.group_id == undefined) {
      settext(name)
      const old = [...selectedItemsFromSearchingResult]
      const newone = [{ name: name, img2: closecircle }]
      const addArray = [...old, ...newone]
      setSelectedItemsFromSearchingResult(addArray)
      console.log(selectedItemsFromSearchingResult)
      settext("")
    }
  }

  const handleSearchGroupInterest = (searchString) => {
    if (searchString != '') {
      setSearchString(searchString)
      const payload = {
        admin_id: localStorage.getItem('loggedIn_userId'),
        search_key: searchString
      }
      dispatch(searchGroupInterestforEvent_APIcall(payload))
    }
    else if (searchString == '') {
      setSearchingResult([])
      setSearchingResult1([])
    }
  }

  useEffect(() => {
    if (authStat_searchGroupnameInterestData.searchGroup_interestnameData_forEvent.responseBody != undefined && authStat_searchGroupnameInterestData.searchGroup_interestnameData_forEvent.responseCode == 200) {
      console.log(authStat_searchGroupnameInterestData.searchGroup_interestnameData_forEvent.responseBody)
      const responseData = [...authStat_searchGroupnameInterestData.searchGroup_interestnameData_forEvent.responseBody]
      const data = []
      const data1 = []

      if (responseData.length != 0) {
        for (let i = 0; i < responseData.length; i++) {
          if (responseData[i].includes('*:#')) {
            const splitData = responseData[i].split('*:#')
            data.push({ group_id: splitData[1], group_name: splitData[0] })
            console.log(data)
          }
          else if ((responseData[i].includes('*:#')) == false) {
            // data.push(responseData[i])
            data1.push({ interest_name: responseData[i] })
          }
        }
      }
      console.log('aaaaaaa', data)
      setSearchingResult(data)
      console.log(researchingResult)

      setSearchingResult1(data1)
      console.log('bbbbbbb', data1)
      console.log(researchingResult1)
    }
    else {
      setSearchingResult([])
      setSearchingResult1([])
    }
  }, [authStat_searchGroupnameInterestData.searchGroup_interestnameData_forEvent])

  const updateData = () => {
    setLoader(true)

    // const consolidateTargetGroups = [...selectedGroupResult, ...updatedTargetGroupsList]
    // const consolidateInterest = [...selectedInterestResult, ...updatedTargetInterestList]

    // const removeDuplicateGroups = consolidateTargetGroups.filter((obj, index) => {
    //   return index === consolidateTargetGroups.findIndex(o => obj.group_id === o.group_id && obj.name === o.name)
    // })
    // const removeDuplicateInterest=consolidateInterest.filter((item,index) => consolidateInterest.indexOf(item) === index)
    // console.log(removeDuplicateGroups)
    // console.log(removeDuplicateInterest)

    const groupsData = []
    const interestData = []
    const selectedItems = [...selectedItemsFromSearchingResult]
    for (let i = 0; i < selectedItems.length; i++) {
      if (selectedItems[i].group_id != undefined) {
        groupsData.push({ group_id: selectedItems[i].group_id, group_name: selectedItems[i].name })
      }
      else if (selectedItems[i].group_id == undefined) {
        interestData.push(selectedItems[i].name)
      }
    }
    const consolidateTargetGroups = [...groupsData, ...updatedTargetGroupsList]
    const consolidateInterest = [...interestData, ...updatedTargetInterestList]


    const payload = {
      user_id: localStorage.getItem('loggedIn_userId'),
      sponsorship_id: '2',
      targeted_groups: consolidateTargetGroups,
      additonal_interest: consolidateInterest
    }
    dispatch(updateSponsorEventControSettings_APIcall(payload))
  }

  useEffect(() => {
    if (authStat_updateSponsorControlEventSetting.data.responseCode == 200 && authStat_updateSponsorControlEventSetting.data.responseBody != undefined) {
      setSearchingResult()
      setSearchingResult1()
      setSelectedItemsFromSearchingResult([])
      const payload = {
        user_id: localStorage.getItem('loggedIn_userId')
      }

      dispatch(getAllSponsorPosts_APIcall(payload))
      setLoader(true)
      setShow(false)
    }
    else {
      setShow(false)
    }
  }, [authStat_updateSponsorControlEventSetting.data])

  useEffect(() => {
    if (authStat_getAllActivePostData.data.responseCode == 200 && authStat_getAllActivePostData.data.responseBody != undefined) {

      setLoader(false)
    }
    else {
      setLoader(true)
    }
  }, [authStat_getAllActivePostData.data])

  useEffect(() => {

    // alert('aaa')
    if (authStat_getSponsorPostDetails.data.responseBody != undefined && authStat_getSponsorPostDetails.data.responseCode == 200) {

      console.log(authStat_getSponsorPostDetails.data.responseBody)
      setUpdatedTargetGroupsList(authStat_getSponsorPostDetails.data.responseBody[0].sponsor_details.targeted_groups)
      setUpdatedTargetInterestList(authStat_getSponsorPostDetails.data.responseBody[0].sponsor_details.additional_interest)
      // alert((authStat_getSponsorPostDetails.data.responseBody[0].sponsor_details.targeted_groups).length)
      // alert((authStat_getSponsorPostDetails.data.responseBody[0].sponsor_details.additional_interest).length)

      // console.log(authStat_getSponsorPostDetails.sponsorPostDetailsData.sponsor_details.additional_interest)
    }
    else {
      setUpdatedTargetGroupsList([])
      setUpdatedTargetInterestList([])
    }
  }, [authStat_getSponsorPostDetails.data])



  return (
    <>
      <div className=''>
        <div style={{ display: loader !== false ? '' : 'none' }}>
          <div className='enable-loader1'>
            <img src={load} width="80px" height="80px"></img>
          </div>
        </div>
        <button className='btn_emptycolor d-flex flex-row justify-content-center align-items-center' style={{ backgroundColor: "white" }} onClick={() => handleOpenDialog()} >
          <span className='text_color text-center'>Control Post Settings</span>
        </button>
        <Modal className='modalss_width' show={show} onHide={() => setShow(false)} backdrop="static" >

          <div className='pt-2 pb-2 px-3'>
            <span className='font_style_top'>Control Sponsored Post Settings</span>
            <div className="mt-2">
              <span className="10 tags_boldertext">Posts showing up in these groups</span>
            </div>


            {/* actual get data */} 
            <div className='row px-1'>
              <div className='col-12 p-0 d-flex flex-row flex-wrap mb-1'>
                {updatedTargetGroupsList.length !== 0 ?
                  <>
                    {updatedTargetGroupsList?.map((items, index) => {
                      return (
                        <>
                          <div key={index} >
                            <button className='btn-btn-green11 me-50 mt-1 d-flex align-items-center'>
                              <img src={circle1} width="20px" height="20px"></img>
                              <span className='btn-fonty ms-25'>{items.group_name}</span>&nbsp;
                              <img src={closecircle} width="17px" height="17px" onClick={() => handleUpdatedRemoveItem(items, index)}></img>
                            </button>
                          </div>
                        </>
                      )
                    }
                    )}
                  </> : null
                }

                {updatedTargetInterestList.length !== 0 ?
                  <>
                    {updatedTargetInterestList?.map((items, index) => {
                      return (
                        <>
                          <div key={index} >
                            <button className='btn-btn-green11 me-50 mt-1 d-flex align-items-center'>
                              <span className='btn-fonty pb-25'>{items}</span>&nbsp;
                              <img src={closecircle} width="17px" height="17px" onClick={() => handleUpdatedRemoveItem(items, index)}></img>
                            </button>
                          </div>
                        </>
                      )
                    }
                    )}
                  </> : null
                }
              </div>
            </div>

            {/* actual get data ends */}

            <div className='mt-2'>
              <span className='bold_text'>Add groups or interest tags from groups you want the {props.value} to appear in </span>
            </div>
          </div>



          {/* new interests start*/}
          <div className='row px-4'>
            <div className='col-12 p-0 d-flex flex-row flex-wrap mb-1'>
              {selectedItemsFromSearchingResult.map((items, index) => <div key={index} >
                <button className='btn-btn-green11 me-50 mt-1 d-flex align-items-center'>
                  {items.img1 != undefined ? <img className='me-25' src={items.img1} width="20px" height="20px"></img> : null}
                  <span className='btn-fonty'>{items.name}</span>&nbsp;
                  <img src={items.img2} width="20px" height="20px" onClick={() => handleRemoveItem(items, index)}></img>
                </button>
              </div>
              )}
            </div>
          </div>


          <div className='col-10 mb-1 ms-3'>
            <div className='d-flex align-items-center border_size mb-1'>
              <img className='search ms-1' src={search} width="20px" height="20px"></img>
              <input className='w-100 height-range ms-1 text_search ' placeholder='Search interests or groups...' onChange={e => handleSearchGroupInterest(e.target.value)} defaultValue={text}></input>
              {/* <input className='w-100 height-range ms-1 text_search ' placeholder='Search interests or groups...' onChange={e => onChangeHandler(e.target.value)} defaultValue={text}></input> */}
            </div>
            <div style={{ border: "1px solid #ECECEC", marginTop: "-14px", borderRadius: "9px", display: researchingResult ? '' : 'none' }}>
              {researchingResult?.map((data, index) => {
                return (
                  <div className='mb-50 mt-50 mx-2 ' style={{ cursor: 'pointer' }} onClick={() => handleSelectItem(data.group_name, index, data)}>
                    <span className='textspan1' >{data.group_name}</span>
                  </div>
                )
              })
              }

              {researchingResult1?.map((data, index) => {
                return (
                  <div className='mb-50 mt-50 mx-2 ' style={{ cursor: 'pointer' }} onClick={() => handleSelectItem(data.interest_name, index, data)}>
                    <span className='textspan1' >{data.interest_name}</span>
                  </div>
                )
              })
              }
            </div>
          </div>
          {/* new interests ends*/}

          <div className=' mt-3 mb-2 d-flex align-items-center justify-content-center'>
            <div>
              <button className='btnstyle1 me-3' onClick={handleClose}>Cancel</button></div>
            <div>
              <button className='btnstyledetail1' onClick={updateData}>Save</button></div>
          </div>
        </Modal>
      </div>
    </>
  )
}


export default SponsorPostControlSettings