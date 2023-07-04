import React, { useEffect, useState } from "react"
// import { IoIosArrowDropdown } from "react-icons/io";
import checktickboxes from '../assets/images/dashboardimg/checktickbox.png'
import checkblankboxes from '../assets/images/dashboardimg/checkblankbox.png'
import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown"
import { IoIosArrowDropup } from "@react-icons/all-files/io/IoIosArrowDropup"
import edit_logo13 from '../assets/images/dashboardimg/edit-logo13.png'

const EditGenderActivity = (props) => {
  console.log(props.data)

  const [tags, setTags] = useState([
    { id: "2", name: 'Woman', checked: false, values: 'woman' },
    { id: "1", name: 'Man', checked: false, values: 'man' },
    { id: "3", name: 'Nonbinary', checked: false, values: 'nonbinary' }
  ])
  const [showLess, setshowLess] = useState(true)
  const [genders, setgenders] = useState([props.data])
  const [women, setwomen] = useState([])
  const [binary, setBinary] = useState([])
  const [man, setman] = useState([])
  const [getallgender, setallgender] = useState([])
  const [setinput, getinput] = useState(false)
  const checkgenderval = (item, index) => {

    console.log(item.id)
    const val = [...tags]

    for (let i = 0; i < val.length; i++) {


      if (item.id === val[i].id && val[i].checked === false) {
        val[i].checked = true
        if (val[i].name === "Man" && val[i].checked === true) {
          setBinary([])
          setwomen([])
         
          setman([{ name: "Intersex Man", checked: false, values:"intersex_man" }, { name: "Trans Man", checked: false, values:"trans_man" }, { name: "Transmasculine", checked: false, values:"transmasculine" }, { name: "Man and Nonbinary", checked: false, values:"man_and_nonbinary" }, { name: "Cis Man", checked: false, values:"cis_man" }, { name: "Other", checked: false, values:'other' }])
         
        }
        if (val[i].name === "Woman" && val[i].checked === true) {
          setman([])
          setwomen([{ name: "Intersex Woman", checked: false, values:"intersex_woman" }, { name: "Trans Woman", checked: false, values:'trans_woman' }, { name: "Cis Woman", checked: false, values:'cis_woman' }, { name: "Transfeminine", checked: false, values:'transfeminine' }, { name: "Woman and Nonbinary", checked: false, values:'woman_and_nonbinary' }, { name: "Other", checked: false, values:'other' }])
          setBinary([])
        }

        if (val[index].name === "Nonbinary" && val[index].checked === true) {
          setman([])
          setwomen([])
          setBinary([{ name: "Agender", checked: false, values: 'agender' }, { name: "Bigender", checked: false, values: 'bigender' }, { name: "Genderfluid", checked: false, values: 'genderfluid' }, { name: "Genderqueer", checked: false, values: "genderqueer" }, { name: "Gender nonconforming", checked: false, values: "gender_nonconforming" }, { name: "Gender questioning", checked: false, values: "gender_questioning" }, { name: "Gender variant", checked: false, values: "gender_variant" }, { name: "Intersex", checked: false, values: "intersex" }, { name: "Neutrois", checked: false, values: "neutrolis" }, { name: "Nonbinary man", checked: false, values: "nonbinary_man" }, { name: "Nonbinary woman", checked: false, values: "nonbinary_woman" }, { name: "Pangender", checked: false, values: "pangender" }, { name: "Polygender", checked: false, values: "polygender" }, { name: "Transgender", checked: false, values: "transgender" }, { name: "Other", checked: false, values: "other" }])
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

    setTags(val)
    props.handles(women, man, binary, tags)
  }

  useEffect(() => {
    //
    
    setgenders(props.data)
    if (genders.length !== 0) {
      //
      const fgender = [...genders[0]]
      const filterbinary = fgender.filter(res => res === 'nonbinary')
      const filterfemale = fgender.filter(res => res === 'woman')
      const filtermale = fgender.filter(res => res === 'man')
  
      const gen = [...genders[0]]

      const val = [...tags]
      
    
      if (gen.length >= val.length) {
        for (let j = 0; j < gen.length; j++) {
          for (let i = 0; i < val.length; i++) {

            if (gen[j] === val[i].values) {
              //
              val[i].checked = true
            }
          }
        }
      } else if (gen.length < val.length) {
        for (let i = 0; i < val.length; i++) {
          for (let j = 0; j < gen.length; j++) {


            if (gen[j] === val[i].values) {
              //
              val[i].checked = true
            } else {

            }
          }
        }
      }
      if (filterfemale.length !== 0) {

        const valfemale = [{ name: "Intersex Woman", checked: false, values:"intersex_woman" }, { name: "Trans Woman", checked: false, values:'trans_woman' }, { name: "Cis Woman", checked: false, values:'cis_woman' }, { name: "Transfeminine", checked: false, values:'transfeminine' }, { name: "Woman and Nonbinary", checked: false, values:'woman_and_nonbinary' },, { name: "Other", checked: false, values:'other' }]
        if (gen.length >= valfemale.length) {

          for (let i = 0; i < valfemale.length; i++) {
            for (let j = 0; j < gen.length; j++) {

              if (valfemale[i] !== undefined) {
              if (gen[j] === valfemale[i].values) {
                //
                valfemale[i].checked = true
              } else {

              }
            }
          }
        }
        } else if (gen.length < valfemale.length) {
          for (let i = 0; i < valfemale.length; i++) {
            for (let j = 0; j < gen.length; j++) {

              if (valfemale[i] !== undefined) {
              if (gen[j] === valfemale[i].values) {
                //
                valfemale[i].checked = true
              } else {

              }
            }
            }
          }


        }
        setshowLess(false)
        setwomen(valfemale)
      }
      if (filtermale.length !== 0) {
        const valuesmale = [{ name: "Intersex Man", checked: false, values:"intersex_man" }, { name: "Trans Man", checked: false, values:"trans_man" }, { name: "Transmasculine", checked: false, values:"transmasculine" }, { name: "Man and Nonbinary", checked: false, values:"man_and_nonbinary" }, { name: "Cis Man", checked: false, values:"cis_man" }]
        if (gen.length >=  valuesmale.length) {
          for (let i = 0; i < valuesmale.length; i++) {
            for (let j = 0; j < gen.length; j++) {


              if (gen[j] === valuesmale[i].values) {
                //
                valuesmale[i].checked = true
              } else {

              }
            }
          }
          setshowLess(true)
        } else if (gen.length < valuesmale.length) {
          for (let i = 0; i < valuesmale.length; i++) {
            for (let j = 0; j < gen.length; j++) {


              if (gen[j] === valuesmale[i].values) {
                //
                valuesmale[i].checked = true
              } else {

              }
            }
          }


        }
        setman(valuesmale)
        setshowLess(false)
      }
      if (filterbinary.length !== 0) {
        //
        const dataa = [
          { name: "Agender", checked: false, values: 'agender' },
        { name: "Bigender", checked: false, values: 'bigender' },
        { name: "Genderfluid", checked: false, values: 'genderfluid' },
        { name: "Genderqueer", checked: false, values: "genderqueer" },
        { name: "Gender nonconforming", checked: false, values: "gender_nonconforming" },
        { name: "Gender questioning", checked: false, values: "gender_questioning" },
        { name: "Gender variant", checked: false, values: "gender_variant" },
        { name: "Intersex", checked: false, values: "intersex" },
        { name: "Neutrois", checked: false, values: "neutrolis" },
        { name: "Nonbinary man", checked: false, values: "nonbinary_man" },
        { name: "Nonbinary woman", checked: false, values: "nonbinary_woman" },
        { name: "Pangender", checked: false, values: "pangender" },
        { name: "Polygender", checked: false, values: "polygender" },
        { name: "Transgender", checked: false, values: "transgender" },
        { name: "Other", checked: false, values: "other" }
]

       
        if (gen.length >= dataa.length) {
          for (let i = 0; i < dataa.length; i++) {
            for (let j = 0; j < gen.length; j++) {


              if (gen[j] === dataa[i].values) {
                //
                dataa[i].checked = true
              } else {

              }
            }
          }
        } else if (gen.length < dataa.length) {
          for (let i = 0; i < dataa.length; i++) {
            for (let j = 0; j < gen.length; j++) {


              if (gen[j] === dataa[i].values) {
                //
                dataa[i].checked = true
              } else {

              }
            }
          }


        }
        setshowLess(false)
        setBinary(dataa)
      }

      
      setTags(val)
      
     
    
      props.handles(women, man, binary, tags)
      const overrall = women.filter(res => res.values === 'other' && res.checked === true)
      const val1 = man.filter(res => res.values === 'other' && res.checked === true)
      const val2 = binary.filter(res => res.values === 'other' && res.checked === true)
      
      if (overrall.length !== 0 || val1.length !== 0 || val2.length !== 0) {
        getinput(true)
      } else {
        getinput(false)
      }
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
      //
 
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
  
  console.log(tags)
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

  props.handles(women, man, binary, tags)
  }


  const changeShow = () => {
    if (showLess === true) {
      setshowLess(false)
    } else {
    setshowLess(true)
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between flex-row mb-2'>
        <div>
          <img src={edit_logo13} width="22px" height="26px"></img>
          <span className='loc-text'>Gender Identity</span>
        </div>
        <div>
          <div onClick={changeShow}>{showLess ? <div><span className="text_ch1">Show More</span></div> : <div><span className="text_ch1">Show Less</span></div>}</div>
        </div>
      </div>


      <form className="row">


        {showLess ? <>
          {tags.map((items, index) => <div key={index} className="col-4 ">
            {index === 0 || index === 1 || index === 2 ? <div className='mb-2 d-flex align-items-center' >
              <img disabled={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style  col-9'>{items.name} </span><br></br>


            </div> : ""}

          </div>)}
        </> : <>
          {tags.map((items, index) => <div key={index} className="col-4 ">

            <div className='mb-2 d-flex align-items-center'>

              <img disabled={() => { checkgenderval(items, index) }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-9'>{items.name} </span><br></br>


            </div>

          </div>)}
          {women.map((items, index) => <div key={index} className="col-4 ">

<div className='mb-2 d-flex align-items-center'>

  <img disabled={() => { overall(items, index, 'women') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

  <span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
          {man.map((items, index) => <div key={index} className="col-4 ">

<div className='mb-2 d-flex align-items-center'>

  <img disabled={() => { overall(items, index, 'men') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

  <span className='fonting-style col-9'>{items.name} </span><br></br>


</div>

</div>)}
       {binary.map((items, index) => <div key={index} className="col-6 ">

            <div className='mb-2 d-flex align-items-center'>

              <img disabled={() => { overall(items, index, 'binary') }} src={items.checked === false ? checkblankboxes : checktickboxes} width="20px" height="20px"></img>&nbsp;&nbsp;

              <span className='fonting-style col-9'>{items.name} </span><br></br>


            </div>

          </div>)}

          <div className='col-12 mb-1 placeholding' style={{display:setinput === true ? '' : 'none'}}>
            <div className='d-flex align-items-center border_size'>
              <input type="input" readOnly className='w-100 height-range ms-1 text_search ' value={props.data1}  placeholder='&nbsp;&nbsp;&nbsp;&nbsp;Let us know what we are missing...'></input>

            </div>
          </div>

        </>
        }


      </form>


    </>
  )
}

export default EditGenderActivity