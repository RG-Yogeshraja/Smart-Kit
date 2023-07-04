import React, { useState, useEffect } from "react"
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import { connect, useSelector } from "react-redux"

const AnalyticsChildFilterRelationshipStatus = (props) => {

  const [setrelation, getrelationship] = useState(props.dataval)
  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const [getRelationStatus, setRelationStatus] = useState([])
  const [relationShow, setRelationShowLess] = useState(true)
  const [relationShipStatusParent, setRelationShipStatusParent] = useState([
    { id: "1", naming: 'Single ', checked: false, value: 'Single' },
    { id: "2", naming: 'In a Relationship', checked: false, css: { marginLeft: '-23px' }, value: 'In a Relationship' },
    { id: "3", naming: 'It’s Complicated', checked: false, value: 'Its Complicated' }
  ])

  
  useEffect(() => {
    let vals
    console.log(setrelation)
    const getrelation = [...relationShipStatusParent]
    const getrelations = [...setrelation]

    if (getrelations.length >= getrelation.length) {
      for (let i = 0; i < getrelations.length; i++) {
        for (let j = 0; j < getrelation.length; j++) {
          if (getrelations[i] === getrelation[j].value) {
            getrelation[j].checked = true
          }
        }
      }
    } else if (getrelations.length < getrelation.length) {
      for (let i = 0; i < getrelation.length; i++) {
        for (let j = 0; j < getrelations.length; j++) {
          if (getrelations[i] === getrelation[j].value) {
            getrelation[j].checked = true
          }
        }
      }
    }
    const s = getrelation.filter(res => res.checked === true)

    if (s.length !== 0) {
      vals = [
        { id: "4", naming: 'Engaged', checked: true, value: 'Engaged' },
        { id: "5", naming: 'Married', checked: true, css: { marginLeft: '-23px' }, value: 'Married' },
        { id: "6", naming: 'Widowed', checked: true, value: 'Widowed' },
        { id: "7", naming: 'ENM', checked: true, value: 'ENM' },
        { id: "8", naming: 'Separated', checked: true, css: { marginLeft: '-23px' }, value: 'Separated' },
        { id: "9", naming: 'Divorced', checked: true, value: 'Divorced' }
      ]
      setRelationShowLess(false)
      setRelationStatus(vals)
    } else {
      setRelationShowLess(true)
      setRelationStatus([])
    }
    if (s.length !== 0) {
      const getrelate = [...vals]
      if (getrelations.length >= getrelate.length) {
        for (let k = 0; k < getrelations.length; k++) {
          for (let l = 0; l < getrelate.length; l++) {
            if (getrelations[k] === getrelate[l].value) {
              getrelate[l].checked = true
            }
          }
        }
      } else if (getrelations.length < getrelate.length) {
        for (let k = 0; k < getrelations.length; k++) {
          for (let l = 0; l < getrelate.length; l++) {
            if (getrelations[k] === getrelate[l].value) {
              getrelate[l].checked = true
            }
          }
        }
      }
      setRelationStatus(getrelate)
      props.sethandle(getrelate, relationShipStatusParent)
    }
    setRelationShipStatusParent(getrelation)
    if (s.length === 0) {
      props.sethandle([], relationShipStatusParent)
    }
  }, [])

  const relationshipStatusShow = () => {
    if (relationShow === true) {
      setRelationShowLess(false)
    } else {
      setRelationShowLess(true)
    }
    const m = relationShipStatusParent.filter(res => res.checked === true)
    if (m.length !== 0 && relationShow === true) {
      setRelationStatus([
        { id: "4", naming: 'Engaged', checked: false, value: 'Engaged' },
        { id: "5", naming: 'Married', checked: false, css: { marginLeft: '-23px' }, value: 'Married' },
        { id: "6", naming: 'Widowed', checked: false, value: 'Widowed' },
        { id: "7", naming: 'ENM', checked: false, value: 'ENM' },
        { id: "8", naming: 'Separated', checked: false, css: { marginLeft: '-23px' }, value: 'Separated' },
        { id: "9", naming: 'Divorced', checked: false, value: 'Divorced' }
      ])
    } else {
      setRelationStatus([])
    }
    props.sethandle(getRelationStatus, relationShipStatusParent)
  }

  const handlechange1 = (index) => {
    const tagval = [...getRelationStatus]
    if (tagval[index].checked === true) {
      tagval[index].checked = false
    } else {
      tagval[index].checked = true
    }
    setRelationStatus(tagval)
    props.sethandle(tagval, relationShipStatusParent)
  }

  const handlechange = (index, name) => {
    const newtags = [...relationShipStatusParent]
    for (let i = 0; i < newtags.length; i++) {
      if (newtags[i].naming === name && newtags[i].checked === false) {
        newtags[i].checked = true
      } else if (newtags[i].checked === true) {
        newtags[i].checked = false
      }
    }
    const f = newtags.filter(res => res.checked === true)
    if (f.length !== 0) {
      setRelationShowLess(false)
      setRelationStatus([
        { id: "4", naming: 'Engaged', checked: false, value: 'Engaged' },
        { id: "5", naming: 'Married', checked: false, css: { marginLeft: '-23px' }, value: 'Married' },
        { id: "6", naming: 'Widowed', checked: false, value: 'Widowed' },
        { id: "7", naming: 'ENM', checked: false, value: 'ENM' },
        { id: "8", naming: 'Separated', checked: false, css: { marginLeft: '-23px' }, value: 'Separated' },
        { id: "9", naming: 'Divorced', checked: false, value: 'Divorced' }
      ])
    } else {
      setRelationShowLess(true)
      setRelationStatus([])
    }
    setRelationShipStatusParent(newtags)
    props.sethandle(getRelationStatus, relationShipStatusParent)
  }


  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2 '>
        <div>
          <span className="min-header col-10">Relationship Status</span>
        </div>
        <div>
          <div onClick={relationshipStatusShow}>{relationShow ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <form className="row">
        {relationShipStatusParent.map((items, index) => <div key={index} className="col-4">
          <div className='mb-2 d-flex align-items-center' style={items.css}>
            <img onClick={() => { handlechange(index, items.naming) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
            <span className='fonting-style '>{items.naming} </span><br></br>
          </div>
        </div>)}

        {getRelationStatus.map((items, index) => <div key={index} className="col-4">
          <div className='mb-2 d-flex align-items-center' style={items.css}>
            <img onClick={() => { handlechange1(index) }} src={items.checked ? checktickboxes : checkblankboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
            <span className='fonting-style col-9'>{items.naming} </span><br></br>
          </div>
        </div>)}
      </form>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    analyticsChildFilterData: state.analyticsChildFilterData
  }
}
export default connect(mapStateToProps, {})(AnalyticsChildFilterRelationshipStatus)