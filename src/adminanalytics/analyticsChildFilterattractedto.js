import React, { useState, useEffect } from "react"
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import { connect, useSelector } from "react-redux"

const AnalyticsChildFilterAttractedTo = (props) => {

  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const [attactedToParent, setAttactedToParent] = useState([
    { id: "2", name: 'Women', checked: false, values: 'Women' },
    { id: "1", name: 'Men', checked: false, values: 'Men' },
    { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
  ])
  const [getAttractedToWomen, setAttractedToWomen] = useState([])
  const [getAttractedToBinary, setAttractedToBinary] = useState([])
  const [getAttactedToMan, setAttractedToMan] = useState([])
  const [getAttractedToShowLess, setAttractedToShowLess] = useState(true)
  const [getAttractedToOverall_val, setAttractedToOverallval] = useState(props.datavalue)
  const attractedToChangeShow = () => {
    setAttractedToShowLess(!getAttractedToShowLess)
  }

  const checkgenderval = (item, index) => {
    console.log(item.id)
    const val = [...attactedToParent]
    if (val[index].checked === true) {
      val[index].checked = false
    } else {
      val[index].checked = true
    }

    //men section
    if (val[index].name === "Men" && val[index].checked === true) {
      setAttractedToMan([
        { name: "Intersex Men", checked: false, values: "Intersex Men" },
        { name: "Trans Men", checked: false, values: "Trans Men" },
        { name: "Cis Men", checked: false, values: "Cis Men" },
        { name: "Transmasculine", checked: false, values: "Transmasculine" },
        { name: "Men & Nonbinary", checked: false, values: "Men & Nonbinary" },
        { name: "Other", checked: false, values: 'Other' }
      ])
    } else if (val[index].name === "Men" && val[index].checked === false) {
      setAttractedToMan([])
    }

    //women section
    if (val[index].name === "Women" && val[index].checked === true) {
      setAttractedToWomen([
        { name: "Intersex Women", checked: false, values: "Intersex Women" },
        { name: "Trans Women", checked: false, values: 'Trans Women' },
        { name: "Cis Women", checked: false, values: 'Cis Women' },
        { name: "Transfeminine", checked: false, values: 'Transfeminine' },
        { name: "Women & Nonbinary", checked: false, values: 'Women & Nonbinary' },
        { name: "Other", checked: false, values: 'Other' }
      ])
    } else if (val[index].name === "Women" && val[index].checked === false) {
      setAttractedToWomen([])
    }
    console.log(getAttractedToWomen)

    //nonbinary section

    if (val[index].name === "Nonbinary" && val[index].checked === true) {
      setAttractedToBinary([
        { name: "Agender", checked: false, values: 'Agender' },
        { name: "Bigender", checked: false, values: 'Bigender' },
        { name: "Genderfluid", checked: false, values: 'Genderfluid' },
        { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
        { name: "Genderqueer", checked: false, values: "Genderqueer" },
        { name: "Gender Questioning", checked: false, values: "Gender questioning" },
        { name: "Gender Variant", checked: false, values: "Gender variant" },
        { name: "Intersex", checked: false, values: "Intersex" },
        { name: "Neutrois", checked: false, values: "Neutrois" },
        { name: "Nonbinary Women", checked: false, values: "Nonbinary woman" },
        { name: "Nonbinary Men", checked: false, values: "Nonbinary man" },
        { name: "Pangender", checked: false, values: "Pangender" },
        { name: "Polygender", checked: false, values: "Polygender" },
        { name: "Transgender", checked: false, values: "Transgender" },
        { name: "Other", checked: false, values: "Other" }
      ])
    } else if (val[index].name === "Nonbinary" && val[index].checked === false) {
      setAttractedToBinary([])
    }
    console.log(getAttractedToBinary)

    //remove duplicateoption('Other' option)
    if ((val[0].name === "Women" && val[0].checked === true) && (val[index].name === "Men" && val[index].checked === true)) {
      getAttractedToWomen.splice(5, 1)
    }
    else if ((val[1].name === "Men" && val[1].checked === true) && (val[index].name === "Women" && val[index].checked === true)) {
      getAttactedToMan.splice(5, 1)
    }
    else if ((val[1].name === "Men" && val[1].checked === true) && (val[index].name === "Nonbinary" && val[index].checked === true)) {
      getAttactedToMan.splice(5, 1)
    }
    else if ((val[2].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Men" && val[index].checked === true)) {
      getAttractedToBinary.splice(14, 1)
    }
    else if ((val[0].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Nonbinary" && val[index].checked === true)) {
      getAttractedToWomen.splice(5, 1)
    }
    else if ((val[2].name === "Nonbinary" && val[2].checked === true) && (val[index].name === "Women" && val[index].checked === true)) {
      getAttractedToBinary.splice(14, 1)
    }
    else if ((val[0].name === "Women" && val[0].checked === true) &&
      (val[1].name === "Men" && val[1].checked === true) &&
      (val[2].name === "Nonbinary" && val[2].checked === true)) {
      getAttractedToWomen.splice(5, 1)
      getAttactedToMan.splice(5, 1)
    }
    console.log(getAttactedToMan)

    // 
    // const allGenders = [...man, ...women, ...binary]
    // console.log(allGenders)

    setAttactedToParent(val)
    const sendgender = val.filter(res => res.checked === true)
    console.log(sendgender)
    const mans = getAttactedToMan.filter(res => res.checked === true)
    console.log(sendgender)
    const womans = getAttractedToWomen.filter(res => res.checked === true)
    console.log(sendgender)
    const binaries = getAttractedToBinary.filter(res => res.checked === true)
    console.log(sendgender)
    props.setattraction(sendgender, mans, womans, binaries)
  }

  const overall = (item, index, e) => {
    let tags1
    if (e === "women") {
      tags1 = [...getAttractedToWomen]
    } else if (e === "men") {
      tags1 = [...getAttactedToMan]
    } else if (e === "binary") {
      tags1 = [...getAttractedToBinary]
    }
    if (tags1[index].checked === true) {
      tags1[index].checked = false
    } else {
      tags1[index].checked = true
    }
    if (e === "women") {
      setAttractedToWomen(tags1)
    } else if (e === "men") {
      setAttractedToMan(tags1)
    } else if (e === "binary") {
      setAttractedToBinary(tags1)
    }

    const sendgender = attactedToParent.filter(res => res.checked === true)
    console.log(sendgender)
    const mans = getAttactedToMan.filter(res => res.checked === true)
    console.log(sendgender)
    const womans = getAttractedToWomen.filter(res => res.checked === true)
    console.log(sendgender)
    const binaries = getAttractedToBinary.filter(res => res.checked === true)
    console.log(sendgender)
    props.setattraction(sendgender, mans, womans, binaries)
  }

    // useEffect(() => {

  //   const v = [...getAttractedToOverall_val]
  //   const mens = [...getAttactedToMan]
  //   const womens = [...getAttractedToWomen]
  //   const binarys = [...getAttractedToBinary]
  //   const overgen = [...attactedToParent]
  //   if (attactedToParent.length !== 0) {
  //     if (overgen.length >= v.length) {
  //       for (let j = 0; j < overgen.length; j++) {
  //         for (let i = 0; i < v.length; i++) {
  //           if (v[i] === overgen[j].values) {
  //             overgen[i].checked = true
  //           }
  //         }
  //       }
  //     } else if (overgen.length < v.length) {
  //       for (let i = 0; i < v.length; i++) {
  //         for (let j = 0; j < overgen.length; j++) {
  //           if (v[i] === overgen[j].values) {
  //             overgen[i].checked = true
  //           }
  //         }
  //       }
  //     }
  //   }

  //   let binary_detail = []
  //   let mens_detail = []
  //   let mens_val = []
  //   let womens_val = []
  //   let binary_val = []
  //   let women_detail = []
  //   const m = attactedToParent.filter(res => res.checked === true)
  //   if (m.length !== 0) {
  //     mens_val = attactedToParent.filter(res => res.values === 'Men')
  //     womens_val = attactedToParent.filter(res => res.values === 'Women')
  //     binary_val = attactedToParent.filter(res => res.values === 'Nonbinary')
  //   }
  //   if (mens_val.length !== 0) {
  //     mens_detail = [{ name: "Intersex Men", checked: false, values: "Intersex Men" },
  //     { name: "Trans Men", checked: false, values: "Trans Men" },
  //     { name: "Cis Men", checked: false, values: "Cis Men" },
  //     { name: "Transmasculine", checked: false, values: "Transmasculine" },
  //     { name: "Men & Nonbinary", checked: false, values: "Men & Nonbinary" },
  //     { name: "Other", checked: false, values: 'Other' }
  //     ]
  //     if (mens_detail.length >= v.length) {
  //       for (let j = 0; j < mens_detail.length; j++) {
  //         for (let i = 0; i < v.length; i++) {

  //           if (v[i] === mens_detail[j].values) {
  //             mens_detail[i].checked = true
  //           }
  //         }
  //       }
  //     } else if (mens_detail.length < v.length) {
  //       for (let i = 0; i < v.length; i++) {
  //         for (let j = 0; j < mens_detail.length; j++) {
  //           if (v[i] === mens_detail[j].values) {
  //             mens_detail[j].checked = true
  //           }
  //         }
  //       }
  //     }
  //     setAttractedToMan(mens_detail)
  //   }
  //   if (womens_val.length !== 0) {
  //     women_detail = [
  //       { name: "Intersex Women", checked: false, values: "Itersex Women" },
  //       { name: "Trans Women", checked: false, values: 'Trans Women' },
  //       { name: "Cis Women", checked: false, values: 'Cis Women' },
  //       { name: "Transfeminine", checked: false, values: 'Transfeminine' },
  //       { name: "Women & Nonbinary", checked: false, values: 'Women & Nonbinary' },
  //       { name: "Other", checked: false, values: 'Other' }
  //     ]
  //     if (women_detail.length >= v.length) {
  //       for (let j = 0; j < women_detail.length; j++) {
  //         for (let i = 0; i < v.length; i++) {
  //           if (v[i] === women_detail[j].values) {

  //             women_detail[j].checked = true
  //           }
  //         }
  //       }
  //     } else if (women_detail.length < v.length) {
  //       for (let i = 0; i < v.length; i++) {
  //         for (let j = 0; j < women_detail.length; j++) {
  //           if (v[i] === women_detail[j].values) {
  //             women_detail[j].checked = true
  //           }
  //         }
  //       }
  //     }
  //     setAttractedToWomen(women_detail)
  //   }
  //   if (binary_val.length !== 0) {
  //     binary_detail = [
  //       { name: "Agender", checked: false, values: 'Agender' },
  //       { name: "Bigender", checked: false, values: 'Bigender' },
  //       { name: "Genderfluid", checked: false, values: 'Genderfluid' },
  //       { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
  //       { name: "Genderqueer", checked: false, values: "Genderqueer" },
  //       { name: "Gender Questioning", checked: false, values: "Gender questioning" },
  //       { name: "Gender Variant", checked: false, values: "Gender variant" },
  //       { name: "Intersex", checked: false, values: "Intersex" },
  //       { name: "Neutrois", checked: false, values: "Neutrois" },
  //       { name: "Nonbinary Women", checked: false, values: "Nonbinary woman" },
  //       { name: "Nonbinary Men", checked: false, values: "Nonbinary man" },
  //       { name: "Pangender", checked: false, values: "Pangender" },
  //       { name: "Polygender", checked: false, values: "Polygender" },
  //       { name: "Transgender", checked: false, values: "Transgender" },
  //       { name: "Other", checked: false, values: "Other" }
  //     ]
  //     if (binary_detail.length >= v.length) {
  //       for (let j = 0; j < binary_detail.length; j++) {
  //         for (let i = 0; i < v.length; i++) {
  //           if (v[i] === binary_detail[j].values) {
  //             binary_detail[i].checked = true
  //           }
  //         }
  //       }
  //     } else if (binary_detail.length < v.length) {
  //       for (let i = 0; i < v.length; i++) {
  //         for (let j = 0; j < binary_detail.length; j++) {
  //           if (v[i] === binary_detail[j].values) {
  //             binary_detail[i].checked = true
  //           }
  //         }
  //       }
  //     }
  //     setAttractedToBinary(binary_detail)
  //   }
  //   console.log(v)
  //   props.setattraction(attactedToParent, mens_detail, women_detail, binary_detail)
  // }, [])

  // const handlechange = (index) => {
  //   const newTags = [...attactedToParent]
  //   if (newTags[index].checking === true) {
  //     newTags[index].checking = false
  //   } else {
  //     newTags[index].checking = true
  //   }
  //   setAttactedToParent(newTags)
  // }

  // useEffect(() => {

  //   if (authStat_childFilterData.data.responseCode == 200 && authStat_childFilterData.data.responseBody != undefined) {
  //     setAttactedToParent([
  //       { id: "2", name: 'Women', checked: false, values: 'Women' },
  //       { id: "1", name: 'Men', checked: false, values: 'Men' },
  //       { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
  //     ])
  //     setAttractedToMan([
  //       { name: "Intersex Men", checked: false, values: "Intersex Men" },
  //       { name: "Trans Men", checked: false, values: "Trans Men" },
  //       { name: "Cis Men", checked: false, values: "Cis Men" },
  //       { name: "Transmasculine", checked: false, values: "Transmasculine" },
  //       { name: "Men & Nonbinary", checked: false, values: "Men & Nonbinary" },
  //       { name: "Other", checked: false, values: 'Other' }
  //     ])
  //     setAttractedToWomen([
  //       { name: "Intersex Women", checked: false, values: "Intersex Women" },
  //       { name: "Trans Women", checked: false, values: 'Trans Women' },
  //       { name: "Cis Women", checked: false, values: 'Cis Women' },
  //       { name: "Transfeminine", checked: false, values: 'Transfeminine' },
  //       { name: "Women & Nonbinary", checked: false, values: 'Women & Nonbinary' },
  //       { name: "Other", checked: false, values: 'Other' }
  //     ])
  //     setAttractedToBinary([
  //       { name: "Agender", checked: false, values: 'Agender' },
  //       { name: "Bigender", checked: false, values: 'Bigender' },
  //       { name: "Genderfluid", checked: false, values: 'Genderfluid' },
  //       { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
  //       { name: "Genderqueer", checked: false, values: "Genderqueer" },
  //       { name: "Gender Questioning", checked: false, values: "Gender questioning" },
  //       { name: "Gender Variant", checked: false, values: "Gender variant" },
  //       { name: "Intersex", checked: false, values: "Intersex" },
  //       { name: "Neutrois", checked: false, values: "Neutrois" },
  //       { name: "Nonbinary Women", checked: false, values: "Nonbinary woman" },
  //       { name: "Nonbinary Men", checked: false, values: "Nonbinary man" },
  //       { name: "Pangender", checked: false, values: "Pangender" },
  //       { name: "Polygender", checked: false, values: "Polygender" },
  //       { name: "Transgender", checked: false, values: "Transgender" },
  //       { name: "Other", checked: false, values: "Other" }
  //     ])
  //   }
  // }, [])


  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <span className="min-header col-10">Attracted To</span>
        </div>
        <div>
          <div onClick={attractedToChangeShow}>{getAttractedToShowLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <form className="row">
        {getAttractedToShowLess ? <>
          {attactedToParent.map((items, index) => <div key={index} className="col-4">
            {index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ? <div className='mb-2 d-flex align-items-center' >
              <img onClick={() => { checkgenderval(items, index) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style col-12'>{items.name} </span><br></br>
            </div> : ""}
          </div>)}
        </> : <>
          {attactedToParent.map((items, index) => <div key={index} className="col-4">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { checkgenderval(items, index) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style  col-12'>{items.name} </span><br></br>
            </div>
          </div>)}

          {getAttractedToWomen.map((items, index) => <div key={index} className="col-4">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'women') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style  col-12'>{items.name} </span><br></br>
            </div>
          </div>)}

          {getAttactedToMan.map((items, index) => <div key={index} className="col-4">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'men') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style  col-12'>{items.name} </span><br></br>
            </div>
          </div>)}

          {getAttractedToBinary.map((items, index) => <div key={index} className="col-4">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'binary') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style  col-12'>{items.name} </span><br></br>
            </div>
          </div>)}
        </>
        }
      </form>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    analyticsChildFilterData: state.analyticsChildFilterData
  }
}

export default connect(mapStateToProps, {})(AnalyticsChildFilterAttractedTo)