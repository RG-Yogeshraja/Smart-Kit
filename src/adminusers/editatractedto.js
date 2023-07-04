import React, { useEffect, useState } from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo2 from '../assets/images/dashboardimg/edit-logo2.png'


const EditAttractedTo = (props) => {

  const [tags, setTags] = useState([
    { id: "2", name: 'Women', checked: false, values: 'women' },
    { id: "1", name: 'Men', checked: false, values: 'men' },
   
    { id: "3", name: 'Nonbinary', checked: false, values: 'nonbinary' }


  ])
  const [women, setwomen] = useState([])
  const [binary, setBinary] = useState([])
  const [man, setman] = useState([])
  const [other, setother] = useState([])
  const [showLess, setshowLess] = useState(true)
const [getoverall_val, setoverallval] = useState(props.datavalue)
  const changeShow = () => {
    if (showLess === true) {
    setshowLess(false)
    } else {
      setshowLess(true)
    }
  }
  const checkgenderval = (item, index) => {

    console.log(item.id)
    const val = [...tags]
    if (val[index].checked === true) {
      val[index].checked = false
    } else {
      val[index].checked = true
    }
    if (val[index].name === "Men" && val[index].checked === true) {
      
      setman(
        [{ name: "Intersex Men", checked: false, values:"intersex_men" }, { name: "Trans Men", checked: false, values:"trans_men" }, { name: "Transmasculine", checked: false, values:"transmusculine" }, { name: "Cis Men", checked: false, values:"cis_men" }, { name: "Men & Nonbinary", checked: false, values:"men_nonbinary" }])
    } else if (val[index].name === "Men" && val[index].checked === false) {
      setman([])
    }

    if (val[index].name === "Women" && val[index].checked === true) {
      setwomen([{ name: "Intersex Women", checked: false, values:"intersex_women" }, { name: "Trans Women", checked: false, values:'trans_women' }, { name: "Cis Women", checked: false, values:'cis_women' }, { name: "Transfeminine", checked: false, values:'transfiminine' }, { name: "Women & Nonbinary", checked: false, values:'women_nonbinary' }])
    } else if (val[index].name === "Women" && val[index].checked === false) {
      setwomen([])
    }
    if (val[index].name === "Nonbinary" && val[index].checked === true) {
      setBinary([{ name: "Agender", checked: false, values: 'agender' }, { name: "Bigender", checked: false, values: 'bigender' }, { name: "Genderfluid", checked: false, values: 'genderfluid' }, { name: "Genderqueer", checked: false, values: "genderqueer" }, { name: "Gender nonconforming", checked: false, values: "gender_nonconforming" }, { name: "Gender questioning", checked: false, values: "gender_questioning" }, { name: "Gender variant", checked: false, values: "gender_variant" }, { name: "Intersex", checked: false, values: "intersex" }, { name: "Neutrois", checked: false, values: "neutrolis" }, { name: "Nonbinary man", checked: false, values: "nonbinary_man" }, { name: "Nonbinary woman", checked: false, values: "nonbinary_woman" }, { name: "Pangender", checked: false, values: "pangender" }, { name: "Polygender", checked: false, values: "polygender" }, { name: "Transgender", checked: false, values: "transgender" }])
    } else if (val[index].name === "Nonbinary" && val[index].checked === false) {
      setBinary([])
    }

    setTags(val)
  const sendgender = val.filter(res => res.checked === true)
console.log(sendgender)
const mans = man.filter(res => res.checked === true)
console.log(sendgender)
const womans = women.filter(res => res.checked === true)
console.log(sendgender)
const binaries = binary.filter(res => res.checked === true)
console.log(sendgender)
props.setattraction(sendgender, mans, womans, binaries)
  }
  useEffect(() => {
    const v = [...getoverall_val]
    const mens = [...man]
    const womens = [...women]
    const binarys = [...binary]
    const overgen = [...tags]
    
  
   if (tags.length !== 0) {
  
 
    if (overgen.length >= v.length) {

  for (let j = 0; j < overgen.length; j++) {
    for (let i = 0; i < v.length; i++) {
    if (v[i] === overgen[j].values) {
      overgen[i].checked = true
    }
  }
}
    } else if (overgen.length < v.length) {
      for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < overgen.length; j++) {
          if (v[i] === overgen[j].values) {
            overgen[i].checked = true
          }
        }
      } 
    }
    } else {

    }
    let  binary_detail = []
    let  mens_detail = []
    let mens_val = []
    let womens_val = []
    let binary_val = []
    let women_detail = []
    const m = tags.filter(res => res.checked === true)
    if (m.length !== 0) {
      
      setshowLess(false)
     const othersval = [{ name: "Other", checked: false, values: "other" }]
      for (let j = 0; j < v.length; j++) {
        for (let i = 0; i < othersval.length; i++) {
        if (v[j] === othersval[i].values) {
          othersval[i].checked = true
        }
      }
    }
      setother(othersval)
      
     mens_val = tags.filter(res => res.values === 'men')
      womens_val = tags.filter(res => res.values === 'women')
       binary_val = tags.filter(res => res.values === 'nonbinary')
    } 

    if (mens_val.length !== 0) {
      
     
    mens_detail = [{ name: "Intersex Men", checked: false, values:"intersex_men" }, { name: "Trans Men", checked: false, values:"trans_men" }, { name: "Transmasculine", checked: false, values:"transmusculine" }, { name: "Cis Men", checked: false, values:"cis_men" }, { name: "Men & Nonbinary", checked: false, values:"men_nonbinary" }]
       if (mens_detail.length >= v.length) {
        for (let j = 0; j < mens_detail.length; j++) {
for (let i = 0; i < v.length; i++) {
  
    if (v[i] === mens_detail[j].values) {
      mens_detail[i].checked = true
    }
  }
}
    } else if (mens_detail.length < v.length) {
      for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < mens_detail.length; j++) {
          if (v[i] === mens_detail[j].values) {
            mens_detail[j].checked = true
          }
        }
      } 
    }
    setman(mens_detail)
    }
     if (womens_val.length !== 0) {
  women_detail = [{ name: "Intersex Women", checked: false, values:"intersex_women" }, { name: "Trans Women", checked: false, values:'trans_women' }, { name: "Cis Women", checked: false, values:'cis_women' }, { name: "Transfeminine", checked: false, values:'transfiminine' }, { name: "Women & Nonbinary", checked: false, values:'women_nonbinary' }]
               if (women_detail.length >= v.length) {

  for (let j = 0; j < women_detail.length; j++) {
    for (let i = 0; i < v.length; i++) {
    if (v[i] === women_detail[j].values) {
      
      women_detail[j].checked = true
    }
  }
}
    } else if (women_detail.length < v.length) {
      
      for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < women_detail.length; j++) {
          if (v[i] === women_detail[j].values) {
            women_detail[j].checked = true
          }
        }
      } 
    }
    setwomen(women_detail)
    }
    
     if (binary_val.length !== 0) {
  binary_detail = [{ name: "Agender", checked: false, values: 'agender' }, { name: "Bigender", checked: false, values: 'bigender' }, { name: "Genderfluid", checked: false, values: 'genderfluid' }, { name: "Gender nonconforming", checked: false, values: "gender_nonconforming" }, { name: "Genderqueer", checked: false, values: "genderqueer" }, { name: "Gender Questioning", checked: false, values: "gender_questioning" }, { name: "Gender Variant", checked: false, values: "gender_variant" }, { name: "Intersex", checked: false, values: "intersex" }, { name: "Neutrois", checked: false, values: "neutrolis" },  { name: "Nonbinary woman", checked: false, values: "nonbinary_woman" }, { name: "Nonbinary man", checked: false, values: "nonbinary_man" }, { name: "Pangender", checked: false, values: "pangender" }, { name: "Polygender", checked: false, values: "polygender" }, { name: "Transgender", checked: false, values: "transgender" }]
        if (binary_detail.length >= v.length) {

  for (let j = 0; j < binary_detail.length; j++) {
    for (let i = 0; i < v.length; i++) {
    if (v[i] === binary_detail[j].values) {
      binary_detail[j].checked = true
    }
  }
}
    } else if (binary_detail.length < v.length) {
      for (let i = 0; i < v.length; i++) {
        for (let j = 0; j < binary_detail.length; j++) {
          if (v[i] === binary_detail[j].values) {

            binary_detail[j].checked = true
          }
        }
      } 
    }
    setBinary(binary_detail)
    }
    console.log(v)
    if (tags.length !== 0) {
      
    }
    
    props.setattraction(tags, mens_detail, women_detail, binary_detail)
  }, [])
  const overall = (item, index, e) => {
    let tags1
    if (e === "women") {
      tags1 = [...women]
    } else if (e === "men") {
      tags1 = [...man]
    } else if (e === "binary") {
      tags1 = [...binary]
    }
    if (tags1[index].checked === true) {
      tags1[index].checked = false
    } else {
      tags1[index].checked = true
    }
    if (e === "women") {
      setwomen(tags1)
    } else if (e === "men") {
      setman(tags1)
    } else if (e === "binary") {
      setBinary(tags1)
    }
    const sendgender = tags.filter(res => res.checked === true)
    console.log(sendgender)
    const mans = man.filter(res => res.checked === true)
    console.log(sendgender)
    const womans = women.filter(res => res.checked === true)
    console.log(sendgender)
    const binaries = binary.filter(res => res.checked === true)
    console.log(sendgender)
    props.setattraction(sendgender, mans, womans, binaries)
  }
  const handlechange = (index) => {

    const newTags = [...tags]
    if (newTags[index].checking === true) {
      newTags[index].checking = false
    } else {
      newTags[index].checking = true
    }

    setTags(newTags)
  }

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <img src={edit_logo2} width="20px" height="20px"></img>&nbsp;&nbsp;
          <span className='loc-text'>Attracted To</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show More</span>&nbsp;&nbsp;<IoIosArrowDropdown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><span className="text_ch1">Show Less</span>&nbsp;&nbsp;<IoIosArrowDropup style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>}</div>
        </div>
      </div>

      <form className="row">


        {showLess ? <>
          {tags.map((items, index) => <div key={index} className="col-4">
            {index == 0 || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ? <div className='mb-2 d-flex align-items-center' >

              <img disabled={() => { checkgenderval(items, index) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-12'>{items.name} </span><br></br>


            </div> : ""}

          </div>)}
        </> : <>
          {tags.map((items, index) => <div key={index} className="col-4">

            <div className='mb-2 d-flex align-items-center'>
              <img disabled={() => { checkgenderval(items, index) }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style  col-12'>{items.name} </span><br></br>


            </div>

          </div>)}
         
          {women.map((items, index) => <div key={index} className="col-4">

            <div className='mb-2 d-flex align-items-center'>
              <img disabled={() => { overall(items, index, 'women') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style  col-12'>{items.name} </span><br></br>


            </div>

          </div>)}
          {man.map((items, index) => <div key={index} className="col-4">

<div className='mb-2 d-flex align-items-center'>
  <img disabled={() => { overall(items, index, 'men') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

  <span className='fonting-style  col-12'>{items.name} </span><br></br>


</div>

</div>)}
          {binary.map((items, index) => <div key={index} className="col-4">

            <div className='mb-2 d-flex align-items-center'>
              <img disabled={() => { overall(items, index, 'binary') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style  col-12'>{items.name} </span><br></br>


            </div>

          </div>)}
          {other.map((items, index) => <div key={index} className="col-4">

<div className='mb-2 d-flex align-items-center'>
  <img disabled={() => { overall(items, index, 'binary') }} src={items.checked == false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

  <span className='fonting-style  col-12'>{items.name} </span><br></br>


</div>

</div>)}
        </>
        }


      </form>


    </>
  )
}

export default EditAttractedTo