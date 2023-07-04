import React, { useState, useEffect } from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import { connect, useSelector } from "react-redux"

const AnalyticsChildFilterGenderActivity = (props) => {

  // console.log(props.data)
  const [genderIdentityParent, setGenderIdentityParent] = useState([
    { id: "1", name: 'Man', checked: false, values: 'Man' },
    { id: "2", name: 'Woman', checked: false, values: 'Woman' },
    { id: "3", name: 'Nonbinary', checked: false, values: 'Nonbinary' }
  ])
  const [genders, setgenders] = useState([props.data])
  const [women, setwomen] = useState([])
  const [binary, setBinary] = useState([])
  const [man, setman] = useState([])
  const [getallgender, setallgender] = useState([])
  const [setinput, getinput] = useState(false)
  const authStat_childFilterData = useSelector((state) => state.analyticsChildFilterData)
  const [genderIdentityShowLess, setGenderIdentityShowLess] = useState(true)

  const checkgenderval = (item, index) => {
    console.log(item.id)
    const val = [...genderIdentityParent]
    for (let i = 0; i < val.length; i++) {
      if (item.id === val[i].id && val[i].checked === false) {
        val[i].checked = true
        if (val[i].name === "Man" && val[i].checked === true) {
          setBinary([])
          setwomen([])
          setman([
            { name: "Intersex Man", checked: false, values: "Intersex Man" },
            { name: "Trans Man", checked: false, values: "Trans Man" },
            { name: "Cis Man", checked: false, values: "Cis Man" },
            { name: "Transmasculine", checked: false, values: "Transmasculine" },
            { name: "Man & Nonbinary", checked: false, values: "Man And Nonbinary" },
            { name: "Other", checked: false, values: 'Other' }
          ])
        }
        if (val[i].name === "Woman" && val[i].checked === true) {
          setman([])
          setwomen([
            { name: "Intersex Woman", checked: false, values: "Intersex Woman" },
            { name: "Trans Woman", checked: false, values: 'Trans Woman' },
            { name: "Cis Woman", checked: false, values: 'Cis Woman' },
            { name: "Transfeminine", checked: false, values: 'Transfeminine' },
            { name: "Woman & Nonbinary", checked: false, values: 'Woman And Nonbinary' },
            { name: "Other", checked: false, values: 'Other' }
          ])
          setBinary([])
        }
        if (val[index].name === "Nonbinary" && val[index].checked === true) {
          setman([])
          setwomen([])
          setBinary([
            { name: "Agender", checked: false, values: 'Agender' },
            { name: "Bigender", checked: false, values: 'Bigender' },
            { name: "Genderfluid", checked: false, values: 'Genderfluid' },
            { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
            { name: "Genderqueer", checked: false, values: "Genderqueer" },
            { name: "Gender Questioning", checked: false, values: "Gender questioning" },
            { name: "Gender Variant", checked: false, values: "Gender variant" },
            { name: "Intersex", checked: false, values: "Intersex" },
            { name: "Neutrois", checked: false, values: "Neutrois" },
            { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
            { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
            { name: "Pangender", checked: false, values: "Pangender" },
            { name: "Polygender", checked: false, values: "Polygender" },
            { name: "Transgender", checked: false, values: "Transgender" },
            { name: "Other", checked: false, values: "Other" }
          ])
        }
      } else {
        val[i].checked = false

        if (val[i].name === 'Man') {
          setman([])
        }
        if (val[i].name === 'Woman') {
          setwomen([])
        }
        if (val[i].name === 'Nonbinary') {
          setBinary([])
        }
      }
    }
    setGenderIdentityParent(val)
    props.handles(women, man, binary, genderIdentityParent)
  }

  useEffect(() => {
    setgenders(props.data)
    if (genders.length !== 0) {
      const fgender = [...genders[0]]
      const filterbinary = fgender.filter(res => res === 'nonbinary')
      const filterfemale = fgender.filter(res => res === 'woman')
      const filtermale = fgender.filter(res => res === 'man')
      const gen = [...genders[0]]
      const val = [...genderIdentityParent]
      if (gen.length >= val.length) {
        for (let j = 0; j < gen.length; j++) {
          for (let i = 0; i < val.length; i++) {
            if (gen[j] === val[i].values) {
              val[i].checked = true
            }
          }
        }
      } else if (gen.length < val.length) {
        for (let i = 0; i < val.length; i++) {
          for (let j = 0; j < gen.length; j++) {
            if (gen[j] === val[i].values) {
              val[i].checked = true
            }
          }
        }
      }
      if (filterfemale.length !== 0) {
        const valfemale = [
          { name: "Intersex Woman", checked: false, values: "Intersex Woman" },
          { name: "Trans Woman", checked: false, values: 'Trans Woman' },
          { name: "Cis Woman", checked: false, values: 'Cis Woman' },
          { name: "Transfeminine", checked: false, values: 'Transfeminine' },
          { name: "Woman & Nonbinary", checked: false, values: 'Woman And Nonbinary' },
          { name: "Other", checked: false, values: 'Other' }
        ]
        if (gen.length >= valfemale.length) {
          for (let i = 0; i < valfemale.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (valfemale[i] !== undefined) {
                if (gen[j] === valfemale[i].values) {
                  valfemale[i].checked = true
                }
              }
            }
          }
        } else if (gen.length < valfemale.length) {
          for (let i = 0; i < valfemale.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (valfemale[i] !== undefined) {
                if (gen[j] === valfemale[i].values) {
                  valfemale[i].checked = true
                }
              }
            }
          }
        }
        setwomen(valfemale)
      }
      if (filtermale.length !== 0) {
        const valuesmale = [
          { name: "Intersex Man", checked: false, values: "Intersex Man" },
          { name: "Trans Man", checked: false, values: "Trans Man" },
          { name: "Cis Man", checked: false, values: "Cis Man" },
          { name: "Transmasculine", checked: false, values: "Transmasculine" },
          { name: "Man and Nonbinary", checked: false, values: "Man And Nonbinary" },
          { name: "Other", checked: false, values: 'Other' }
        ]
        if (gen.length >= valuesmale.length) {
          for (let i = 0; i < valuesmale.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (gen[j] === valuesmale[i].values) {
                valuesmale[i].checked = true
              }
            }
          }
        } else if (gen.length < valuesmale.length) {
          for (let i = 0; i < valuesmale.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (gen[j] === valuesmale[i].values) {
                valuesmale[i].checked = true
              }
            }
          }
        }
        setman(valuesmale)
      }
      if (filterbinary.length !== 0) {
        const dataa = [
          { name: "Agender", checked: false, values: 'Agender' },
          { name: "Bigender", checked: false, values: 'Bigender' },
          { name: "Genderfluid", checked: false, values: 'Genderfluid' },
          { name: "Genderqueer", checked: false, values: "Genderqueer" },
          { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
          { name: "Gender Questioning", checked: false, values: "Gender questioning" },
          { name: "Gender Variant", checked: false, values: "Gender variant" },
          { name: "Intersex", checked: false, values: "Intersex" },
          { name: "Neutrois", checked: false, values: "Neutrois" },
          { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
          { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
          { name: "Pangender", checked: false, values: "Pangender" },
          { name: "Polygender", checked: false, values: "Polygender" },
          { name: "Transgender", checked: false, values: "Transgender" },
          { name: "Other", checked: false, values: "Other" }
        ]
        if (gen.length >= dataa.length) {
          for (let i = 0; i < dataa.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (gen[j] === dataa[i].values) {
                dataa[i].checked = true
              }
            }
          }
        } else if (gen.length < dataa.length) {
          for (let i = 0; i < dataa.length; i++) {
            for (let j = 0; j < gen.length; j++) {
              if (gen[j] === dataa[i].values) {
                dataa[i].checked = true
              }
            }
          }
        }
        setBinary(dataa)
      }

      setGenderIdentityParent(val)
      const overrall = women.filter(res => res.values === 'other' && res.checked === true)
      const val1 = man.filter(res => res.values === 'other' && res.checked === true)
      const val2 = binary.filter(res => res.values === 'other' && res.checked === true)
      if (overrall.length !== 0) {
        getinput(true)
      } else if (val1.length !== 0) {
        getinput(true)
      } else if (val2.length !== 0) {
        getinput(true)
      } else {
        getinput(false)
      }
      props.handles(women, man, binary, genderIdentityParent)
    }
  }, [])

  const overall = (item, index, e) => {
    let tags_overall
    const items = [...getallgender]
    if (e === "women") {
      tags_overall = [...women]
    } else if (e === "men") {
      tags_overall = [...man]
    } else if (e === "binary") {
      tags_overall = [...binary]
    }

    if (tags_overall[index] !== undefined) {
      if (tags_overall[index].checked === true) {
        tags_overall[index].checked = false
      } else {
        console.log(genders)
        tags_overall[index].checked = true
        items.push(tags_overall[index].values)
        console.log(items)
      }

      console.log(items)
      if (e === "women") {
        setwomen(tags_overall)
      } else if (e === "men") {
        setman(tags_overall)
      } else if (e === "binary") {
        setBinary(tags_overall)
      }
    }

    const val = [...women, ...man, ...binary]
    console.log(genderIdentityParent)
    const overrall = women.filter(res => res.values === 'other' && res.checked === true)
    const val1 = man.filter(res => res.values === 'other' && res.checked === true)
    const val2 = binary.filter(res => res.values === 'other' && res.checked === true)
    if (overrall.length !== 0) {
      getinput(true)
    } else if (val1.length !== 0) {
      getinput(true)
    } else if (val2.length !== 0) {
      getinput(true)
    } else {
      getinput(false)
    }
    props.handles(women, man, binary, genderIdentityParent)
  }

  const changeShow = () => {
    setGenderIdentityShowLess(!genderIdentityShowLess)
  }

  useEffect(() => {
    if (authStat_childFilterData.data.responseBody != undefined && authStat_childFilterData.data.responseCode == 200) {
      // const dataa = [
      //   { name: "Agender", checked: false, values: 'Agender' },
      //   { name: "Bigender", checked: false, values: 'Bigender' },
      //   { name: "Genderfluid", checked: false, values: 'Genderfluid' },
      //   { name: "Genderqueer", checked: false, values: "Genderqueer" },
      //   { name: "Gender Nonconforming", checked: false, values: "Gender nonconforming" },
      //   { name: "Gender Questioning", checked: false, values: "Gender questioning" },
      //   { name: "Gender Variant", checked: false, values: "Gender variant" },
      //   { name: "Intersex", checked: false, values: "Intersex" },
      //   { name: "Neutrois", checked: false, values: "Neutrois" },
      //   { name: "Nonbinary Man", checked: false, values: "Nonbinary man" },
      //   { name: "Nonbinary Woman", checked: false, values: "Nonbinary woman" },
      //   { name: "Pangender", checked: false, values: "Pangender" },
      //   { name: "Polygender", checked: false, values: "Polygender" },
      //   { name: "Transgender", checked: false, values: "Transgender" },
      //   { name: "Other", checked: false, values: "Other" }
      // ]
      // setBinary(dataa)
    }
  }, [authStat_childFilterData.data])

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <span className="min-header col-10">Gender Identity</span>
        </div>
        <div>
          <div onClick={changeShow}>{genderIdentityShowLess ? <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>


      <div className="row">
        {genderIdentityShowLess ? <>
          {genderIdentityParent.map((items, index) => <div key={index} className="col-4 ">
            {index === 0 || index === 1 || index === 2 ? <div className='mb-2 d-flex align-items-center' >
              <img onClick={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style  col-9'>{items.name} </span><br></br>
            </div> : ""}
          </div>)}

        </> : <>
          {genderIdentityParent.map((items, index) => <div key={index} className="col-4 ">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style col-9'>{items.name} </span><br></br>
            </div>
          </div>)}

          {women.map((items, index) => <div key={index} className="col-4 ">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'women') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style col-9'>{items.name} </span><br></br>
            </div>
          </div>)}

          {man.map((items, index) => <div key={index} className="col-4 ">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'men') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style col-9'>{items.name} </span><br></br>
            </div>
          </div>)}

          {binary.map((items, index) => <div key={index} className="col-4 ">
            <div className='mb-2 d-flex align-items-center'>
              <img onClick={() => { overall(items, index, 'binary') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;
              <span className='fonting-style col-9'>{items.name} </span><br></br>
            </div>

          </div>)}

          {/* <div className='col-12 mb-1 placeholding' style={{ display: setinput === true ? '' : 'none' }}>
            <div className='d-flex align-items-center border_size'>
              <input type="input" readOnly className='w-100 height-range ms-1 text_search ' value={props.data1} placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Let us know what we are missing...'></input>
            </div>
          </div> */}
        </>
        }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    analyticsChildFilterData: state.analyticsChildFilterData
  }
}

export default connect(mapStateToProps, {})(AnalyticsChildFilterGenderActivity)