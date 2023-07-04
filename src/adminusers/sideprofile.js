import profile from '../assets/images/dashboardimg/userprofiles.png'
import location from '../assets/images/dashboardimg/location.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import Modal from 'react-bootstrap/Modal'
import Keys_details from './keys'
import '../@core/scss/base/adminDashboard/sideprofile.scss'
import Additional_info from './additionalinfo'
import Interests from './interests'
import Editprof from './editprofilepopup'
import EditPopup from './userdetails-editdialog'
import edit from '../assets/images/dashboardimg/editmenu.png'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import cake from '../assets/images/dashboardimg/cakeicon.png'
import homelogo from '../assets/images/dashboardimg/edit-logo4.png'
import Liberal from '../assets/images/dashboardimg/Politics.png'
import Agnostic from '../assets/images/dashboardimg/Religion.png'
import Active from '../assets/images/dashboardimg/weight.png'
import LatinX from '../assets/images/dashboardimg/world.png'
import Single from '../assets/images/dashboardimg/heart.png'
import arrow from '../assets/images/dashboardimg/Height.png'
import Frequent from '../assets/images/dashboardimg/Drink.png'
import HaveKids from '../assets/images/dashboardimg/twins.png'
import english from '../assets/images/dashboardimg/language.png'
import men from '../assets/images/dashboardimg/men.png'
import plus from '../assets/images/dashboardimg/plusjoin.png'
import bag from '../assets/images/dashboardimg/case.png'
import head from '../assets/images/dashboardimg/Vector.png'
import search from '../assets/images/dashboardimg/search-normal.png'
import defaultuserprofilepicture from '../assets/images/dashboardimg/defaultuserprofilepicture.png'

const SideProfile = (props) => {
  const [active, setActive] = useState('1')
  const [show, setShow] = useState(false)
  const [orginals, setorginals] = useState([{ id: '3', name: 'smith', email: "smith@hintsocial.com", super: "Super Admin", mobileno: '+919567843210', password: "@1903Rgi", confirmPassword: "@1903Rgi", buttons: 'Trigger Password Reset' }])
  const tests = props.props
  const [array, setarrays] = useState(tests)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [ind, setindex] = React.useState("")
  const [show1, setShow1] = useState(false)
  const authStat_getUsersFriends = useSelector((state) => state.getUsersFriendsListsData)
  const authStat_getUsersList = useSelector((state) => state.getUsersListsData)
  const [individualUserdata, setIndividualUserdata] = useState([])
  const [aaaa, bbbb] = useState([])
  const [userProfileImageUrl, setUserProfileImageUrl] = useState('')
  const [filterKeyInfo, setFilterKeyInfo] = useState([])
  const [additionalInfoData, setAdditionalInfoData] = useState([])
  const [additionalInfoFilter, setAdditionalInfoFilter] = useState([])
  const [intersetarr, setInterest] = useState([])
  const [setpronowns, getpronounts] = useState('')
  const [kids, setkids] = useState('')
  const [getattracted, setattracted] = useState([])
  const [additionalInfoRaw, setAdditionalInfoRaw] = useState([
    { icon: cake, name: "", width: "16.71px", height: "17.96px", des: [] }, //interest
    { icon: arrow, name: "", width: "8px", height: "15px", des: [] }, //height
    { icon: Frequent, name: "", width: "17px", height: "17px", des: [] },// drinking habits
    { icon: Active, name: "", width: "25px", height: "25px", des: [] }, //exercise
    { icon: HaveKids, name: "", width: "19px", height: "15px", des: [] },//havekids
    { icon: Single, name: "", width: "18px", height: "16px", des: [] },//relationship status
    { icon: homelogo, name: "", width: "22px", height: "22px", des: [] }, //hometown
    { icon: men, name: "", width: "15px", height: "16.67px", des: [] } // attracted to
  ])

  const [keyInfoRaw, setKeyInfoRaw] = useState([
    // { icon: dot, name: "Status:", color: "yes", width: "6px", height: "6px", subname: 'Day drinking in Seaport' },
    { icon: plus, name: "", width: "15.96px", height: "16px", description: [] },
    { icon: bag, name: "", width: "16px", height: "16px", description: [] },
    { icon: head, name: "", width: "16px", height: "14.68px", description: [] },
    { icon: search, name: "", width: "20px", height: "20px", description: [] }
  ])

  const toggle = tab => {
    if (tab == 2) {
      props.parentCallback(active)
    }
    if (active !== tab) {
      setActive(tab)
    }
  }


  useEffect(() => {
    ////
    // additionalInfoFilter(null)
    // //////
    console.log(individualUserdata)
    if (props.userVal !== undefined) {
      const data = []
      data.push(props.userVal)
      setIndividualUserdata(data)
      //

      const newAdditionalInfo = [...additionalInfoRaw]
      const data11 = newAdditionalInfo[4].name

      if (individualUserdata[0].User_details !== undefined) {

        if (individualUserdata[0].User_details.is_birthdate_enabled === 1) {
          const data1 = individualUserdata[0].User_details.birth_date
          // const vals = (moment(data1).format("MMM DD"))
          const vals = (moment(data1).format("MMM Do"))
          newAdditionalInfo[0].name = vals
        } else {
          newAdditionalInfo[0].name = ''
        }
      }
      // //////
      // height
      setUserProfileImageUrl('')
      ////
      if (individualUserdata[0].user_profile_picture[0] != undefined) {
        setUserProfileImageUrl(individualUserdata[0].user_profile_picture[0].image_url)
      } else {
        setUserProfileImageUrl('')
      }


      if (individualUserdata[0].pronouns.length !== 0) {
        let val
        const pronowns1 = individualUserdata[0].pronouns[0]
        if (pronowns1 === 'she_her') {
          val = 'she/her'
        } else if (pronowns1 === 'he_him') {
          val = 'he/him'
        }
        else if (pronowns1 === 'they_them') {
          val = 'they/them'
        }
        else if (pronowns1 === 'ze_zir') {
          val = 'ze/zir'
        } else if (pronowns1 === 'xe_xim') {
          val = 'xe/xim'
        } else if (pronowns1 === 'co_co') {
          val = 'co/co'
        } else if (pronowns1 === 'ey_em') {
          val = 'ey/em'
        } else if (pronowns1 === 've_ver') {
          val = 've/ver'
        } else if (pronowns1 === 'per_per') {
          val = 'per/per'
        } else if (pronowns1 === 'other') {
          val = 'Other'
        } else {
          val = ''
        }
        getpronounts(val)
      } else {
        getpronounts('')
      }

      //addition info section start
      // height, drinking habits, exercise, have kids, home town
      if (individualUserdata[0].addition_info[0] !== undefined) {
        for (let i = 0; i < (individualUserdata[0].addition_info).length; i++) {
          let heightValue = []
          if (individualUserdata[0].addition_info[0].height != null) {
            const val = individualUserdata[0].addition_info[0].height
            const divideNumber = parseInt(val / 12)
            const moduloNumber = parseInt(val) - (divideNumber * 12)
            const modifyValue = `${divideNumber}’${moduloNumber}”`
            const valsplit = modifyValue.split('.')
            heightValue.push(valsplit)
          }
          else if (individualUserdata[0].addition_info[0].height == null || individualUserdata[0].addition_info[0].height == '') {
            heightValue.push('')
          }
          const drinkingData = individualUserdata[0].addition_info[i].drinking
          const exerciseData = individualUserdata[0].addition_info[i].exercise
          
          const hometowns = individualUserdata[0].addition_info[i].hometown


          setkids(individualUserdata[0].addition_info[i].kids)
          console.log(newAdditionalInfo[1].name, "kkk")
          newAdditionalInfo[2].name = drinkingData
          newAdditionalInfo[3].name = exerciseData
          newAdditionalInfo[4].name = kids
          newAdditionalInfo[6].name = hometowns
          newAdditionalInfo[1].name = heightValue[0]
        }
      }
      if (individualUserdata[0].addition_info === undefined) {
        newAdditionalInfo[1].name = ''
        newAdditionalInfo[2].name = ''
        newAdditionalInfo[3].name = ''
        newAdditionalInfo[4].name = ''
        newAdditionalInfo[6].name = ''
      }

      //attracted to
      if ((individualUserdata[0].attracted_to).length != 0) {
        const attactedtoData = individualUserdata[0].attracted_to
        let val_attract
        const push_attract_value = []
        for (let i = 0; i < attactedtoData.length; i++) {
          if (attactedtoData[i] === 'women') {
            val_attract = ',\nWomen'
          }
          if (attactedtoData[i] === 'men') {
            val_attract = ',\nMen'
          }
          if (attactedtoData[i] === 'nonbinary') {
            val_attract = ',\nNonbinary'
          }
          if (attactedtoData[i] === 'intersex_women') {
            val_attract = ',\nIntersex Women'
          }
          if (attactedtoData[i] === 'trans_women') {
            val_attract = ',\nTrans Women'
          }
          if (attactedtoData[i] === 'cis_women') {
            val_attract = ',\nCis Women'
          }
          if (attactedtoData[i] === 'transfiminine') {
            val_attract = ',\nTransfeminine'
          }
          if (attactedtoData[i] === 'women_nonbinary') {
            val_attract = ',\nWomen & Nonbinary'
          }
          if (attactedtoData[i] === 'intersex_men') {
            val_attract = ',\nIntersex Men'
          }
          if (attactedtoData[i] === 'trans_men') {
            val_attract = ',\nTrans Men'
          }
          if (attactedtoData[i] === 'cis_men') {
            val_attract = ',\nCis Men'
          }
          if (attactedtoData[i] === 'transmusculine') {
            val_attract = ',\nTransmasculine'
          }
          if (attactedtoData[i] === 'men_nonbinary') {
            val_attract = ',\nMen & Nonbinary'
          }
          //nonbinary section
          if (attactedtoData[i] === 'agender') {
            val_attract = ',\nAgender'
          }
          if (attactedtoData[i] === 'bigender') {
            val_attract = ',\nBigender'
          }
          if (attactedtoData[i] === 'genderfluid') {
            val_attract = ',\nGenderfluid'
          }
          if (attactedtoData[i] === 'gender_nonconforming') {
            val_attract = ',\nGender Nonconforming'
          }
          if (attactedtoData[i] === 'genderqueer') {
            val_attract = ',\nGenderqueer'
          }
          if (attactedtoData[i] === 'gender_questioning') {
            val_attract = ',\nGender Questioning'
          }
          if (attactedtoData[i] === 'gender_variant') {
            val_attract = ',\nGender Variant'
          }
          if (attactedtoData[i] === 'intersex') {
            val_attract = ',\nIntersex'
          }
          if (attactedtoData[i] === 'neutrolis') {
            val_attract = ',\nNeutrois'
          }
          if (attactedtoData[i] === 'nonbinary_man') {
            val_attract = ',\nNonbinary Men'
          }
          if (attactedtoData[i] === 'nonbinary_woman') {
            val_attract = ',\nNonbinary Women'
          }
          if (attactedtoData[i] === 'pangender') {
            val_attract = ',\nPangender'
          }
          if (attactedtoData[i] === 'transgender') {
            val_attract = ',\nTransgender'
          }
          if (attactedtoData[i] === 'polygender') {
            val_attract = ',\nPolygender'
          }
          if (attactedtoData[i] === 'other') {
            val_attract = ',\nOther'
          }
          console.log(val_attract)
          push_attract_value.push(val_attract)
        }
        const removeStr = push_attract_value[0].replace(',', '')
        push_attract_value[0] = removeStr

        newAdditionalInfo[7].name = push_attract_value
        console.log(newAdditionalInfo[7])
      } else if ((individualUserdata[0].attracted_to).length === 0) {
        newAdditionalInfo[7].name = ''
      }

      //relationship status
      if (individualUserdata[0].relationship !== undefined) {
        const data = []
        let val = ''
        for (let i = 0; i < (individualUserdata[0].relationship).length; i++) {
          if (individualUserdata[0].relationship[i] === 'in_a_relationship') {
            val = '\nIn a Relationship'
          }
          if (individualUserdata[0].relationship[i] === 'its_complicated') {
            val = '\nIt\'s Complicated'
          }
          if (individualUserdata[0].relationship[i] === 'single') {
            val = '\nSingle'
          }
          if (individualUserdata[0].relationship[i] === 'engaged') {
            val = '\nEngaged'
          }
          if (individualUserdata[0].relationship[i] === 'married') {
            val = '\nMarried'
          }
          if (individualUserdata[0].relationship[i] === 'widowed') {
            val = '\nWidowed'
          }
          if (individualUserdata[0].relationship[i] === 'enm') {
            val = '\nENM'
          }
          if (individualUserdata[0].relationship[i] === 'separated') {
            val = '\nSeparated'
          }
          if (individualUserdata[0].relationship[i] === 'divorced') {
            val = '\nDivorced'
          }
          data.push(val)
        }
        const relationshipData = data.toString()
        newAdditionalInfo[5].name = relationshipData
      }

      //interest
      if (individualUserdata[0].interest !== undefined) {
        const data = []
        let val = ''
        for (let i = 0; i < (individualUserdata[0].interest).length; i++) {
          if (individualUserdata[0].interest[i] === 'board_games') {
            val = 'Board Games\n'
          }
          data.push(val)
        }
        setInterest(individualUserdata[0].interest)
        // const relationshipData = data.toString()
        // newAdditionalInfo[5].name = relationshipData
      }

      //key info section start
      //1. gender identity
      const dummyjson = [...keyInfoRaw]
      if ((individualUserdata[0].gender).length !== undefined) {
        if ((individualUserdata[0].gender).length != 0) {
          const genderData = individualUserdata[0].gender
          let val_gender
          const push_gender_value = []
          for (let i = 0; i < genderData.length; i++) {
            //general
            if (genderData[i] === 'woman') {
              val_gender = ',\nWoman'
            }
            if (genderData[i] === 'man') {
              val_gender = ',\nMan'
            }
            if (genderData[i] === 'nonbinary') {
              val_gender = ',\nNonbinary'
            }
            //woman section
            if (genderData[i] === 'intersex_woman') {
              val_gender = ',\nIntersex Woman'
            }
            if (genderData[i] === 'trans_woman') {
              val_gender = ',\nTrans Woman'
            }
            if (genderData[i] === 'cis_woman') {
              val_gender = ',\nCis Woman'
            }
            if (genderData[i] === 'transfeminine') {
              val_gender = ',\nTransfeminine'
            }
            if (genderData[i] === 'woman_and_nonbinary') {
              val_gender = ',\nWoman & Nonbinary'
            }
            if (genderData[i] === 'intersex_men') {
              val_gender = ',\nIntersex Men'
            }
            if (genderData[i] === 'trans_men') {
              val_gender = ',\nTrans Men'
            }
            if (genderData[i] === 'cis_men') {
              val_gender = ',\nCis Men'
            }
            if (genderData[i] === 'transmasculine') {
              val_gender = ',\nTransmasculine'
            }
            if (genderData[i] === 'men_nonbinary') {
              val_gender = ',\nMen & Nonbinary'
            }

            //men section
            if (genderData[i] === 'intersex_man') {
              val_gender = ',\nIntersex Man'
            }
            if (genderData[i] === 'trans_man') {
              val_gender = ',\nTrans Man'
            }
            if (genderData[i] === 'cis_man') {
              val_gender = ',\nCis Man'
            }
            if (genderData[i] === 'man_nonbinary') {
              val_gender = ',\nMan & Nonbinary'
            }
            if (genderData[i] === 'man_and_nonbinary') {
              val_gender = ',\nMan & Nonbinary'
            }
            //nonbinary section
            if (genderData[i] === 'agender') {
              val_gender = ',\nAgender'
            }
            if (genderData[i] === 'bigender') {
              val_gender = ',\nBigender'
            }
            if (genderData[i] === 'genderfluid') {
              val_gender = ',\nGenderfluid'
            }
            if (genderData[i] === 'gender_nonconforming') {
              val_gender = ',\nGender Nonconforming'
            }
            if (genderData[i] === 'genderqueer') {
              val_gender = ',\nGenderqueer'
            }
            if (genderData[i] === 'gender_questioning') {
              val_gender = ',\nGender Questioning'
            }
            if (genderData[i] === 'gender_variant') {
              val_gender = ',\nGender Variant'
            }
            if (genderData[i] === 'intersex') {
              val_gender = ',\nIntersex'
            }
            if (genderData[i] === 'neutrolis') {
              val_gender = ',\nNeutrois'
            }
            if (genderData[i] === 'nonbinary_man') {
              val_gender = ',\nNonbinary Man'
            }
            if (genderData[i] === 'nonbinary_woman') {
              val_gender = ',\nNonbinary Woman'
            }
            if (genderData[i] === 'pangender') {
              val_gender = ',\nPangender'
            }
            if (genderData[i] === 'transgender') {
              val_gender = ',\nTransgender'
            }
            if (genderData[i] === 'polygender') {
              val_gender = ',\nPolygender'
            }
            if (genderData[i] === 'other') {
              val_gender = ',\nOther'
            }
            console.log(val_gender)
            push_gender_value.push(val_gender)
          }
          if (push_gender_value.length !== 0) {
            const removeStr = push_gender_value[0].replace(',', '')
            push_gender_value[0] = removeStr
          }
          dummyjson[0].name = push_gender_value
          console.log(dummyjson[0])
        } else if ((individualUserdata[0].gender).length === 0) {
          dummyjson[0].name = ''
        }
      }

      //2. occupation
      if (individualUserdata[0].User_details != undefined) {
        const occupationData = individualUserdata[0].User_details.occupation
        dummyjson[1].name = occupationData
      }

      //3. education
      if (individualUserdata[0].User_details.schools !== undefined) {
        const schoolsArr = []
        for (let i = 0; i < individualUserdata[0].User_details.schools.length; i++) {
          schoolsArr.push('\n' + individualUserdata[0].User_details.schools[i])
        }
        const schools_array = schoolsArr.toString()
        dummyjson[2].name = schools_array
      }

      //4. looking_for
      if (individualUserdata[0].looking_for !== undefined) {
        const looking_fordating1 = []
        const looking_forArr = []
        let val_arr
        const val1 = individualUserdata[0].looking_for.filter(res => res === 'casual' || res === 'long_term_relationship' || res === 'marriage' || res === 'not_sure_yet')
        let val_array
        for (let i = 0; i < individualUserdata[0].looking_for.length; i++) {
          if (individualUserdata[0].looking_for[i] === "new_friends") {
            val_arr = ' New Friends'
          } else if (individualUserdata[0].looking_for[i] === "activity_partners") {
            val_arr = ' Activity Partner'
          } else if (individualUserdata[0].looking_for[i] === "things_to_do") {
            val_arr = ' Things to Do'
          } else if (individualUserdata[0].looking_for[i] === "business") {
            val_arr = ' Business'
          } else if (individualUserdata[0].looking_for[i] === "dating" && val1.length === 0) {
            val_arr = ' Dating'
          } else {
            val_arr = ''
          }
          looking_forArr.push(val_arr)
          const mal = looking_forArr.filter(res => res !== '')
          const lookingforData = mal.toString()
          dummyjson[3].name = lookingforData

          //dating
          if (individualUserdata[0].looking_for[i] === "long_term_relationship") {
            val_array = ',\nLong-Term Relationship'
            // val_array.replace(/\n/g, '<br />')
          } else if (individualUserdata[0].looking_for[i] === "casual") {
            val_array = ',\nCasual'
            // val_array.replace(/\n/g, '<br />')
          } else if (individualUserdata[0].looking_for[i] === "marriage") {
            val_array = ',\nMarriage'
            // val_array.replace(/\n/g, '<br />')
          } else if (individualUserdata[0].looking_for[i] === "not_sure_yet") {
            val_array = ',\nNot Sure Yet'
            // val_array.replace(/\n/g, '<br />')
          } else {
            val_array = ''
          }
          console.log(val_array)
          looking_fordating1.push(val_array)
          
          const val = looking_fordating1.filter(res => res !== '')

          if (val.length !== 0) {
            const removeStr = val[0].replace(',', '')
            val[0] = removeStr
          }
          dummyjson[3].description = val
        }
      }
      setKeyInfoRaw(dummyjson)
      const filterjson = [...keyInfoRaw]
      const keyInfoFilter = []
      for (let i = 0; i < filterjson.length; i++) {
        if (filterjson[i].name != "") {
          keyInfoFilter.push(filterjson[i])
        }
      }
      setFilterKeyInfo(keyInfoFilter)
      console.log(additionalInfoFilter)

      // const data2 = individualUserdata[0].addition_info.height
      // newAdditionalInfo[1].name = data2

      // individualUserdata[0].User_details.birth_date = newAdditionalInfo[0].name
      // if (individualUserdata[0].addition_info[0] != undefined) {
      //   if (individualUserdata[0].addition_info[0].hasOwnProperty("drinking")) {
      //     icon[5].name = individ
      // ualUserdata[0].addition_info[0].drinking
      //   }
      //   else {
      //     icon[0].name = ''
      //   }
      // }
      // const fil=newAdditionalInfo.filter(data=>data.name)
      // const filters = []
      // for (let i = 0; i < newAdditionalInfo.length; i++) {
      //   if (newAdditionalInfo[i].name != "") {
      //     filters.push(newAdditionalInfo[i])
      //   }
      // }


      // const fil = fetchfromStore.filter(data => data.User_details.user_id == edit_userid)

      setAdditionalInfoRaw(newAdditionalInfo)
      const newAdditionalData = [...additionalInfoRaw]
      const newData = []
      for (let i = 0; i < newAdditionalData.length; i++) {
        if (newAdditionalData[i].name != '' || newAdditionalData[i].name != null || newAdditionalData[i].name != undefined) {
          newData.push(newAdditionalData[i])
        }
      }
      setAdditionalInfoData(newData)
      ////
      const additionalInfo_new = [...additionalInfoData]
      const filterInfoData = []
      for (let i = 0; i < additionalInfo_new.length; i++) {
        if (additionalInfo_new[i].name !== "") {

          filterInfoData.push(additionalInfo_new[i])
        }
      }
      setAdditionalInfoFilter([])
      setAdditionalInfoFilter(filterInfoData)
    }
    setarrays(array)
    setorginals(orginals)
    props.logintype
  }, [props])

  const deletepopup = (data) => {
    const arr = [...array]
    const splice = arr.splice(data, 1)
    const sp = ({ id: splice[0].id, name: splice[0].name, email: splice[0].email, super: splice[0].super, buttons: splice[0].buttons })
    console.log(splice)
    console.log(tests)
    setarrays(arr)
    setErrorMessage('')
    const ori = [...orginals]
    ori.push(sp)
    setorginals(ori)
    console.log(orginals)
    props.delete()
  }

  const restorepopup = (data) => {
    const s = [...orginals]
    const splice1 = s.splice(data, 1)
    const sps = ({ id: splice1[0].id, name: splice1[0].name, email: splice1[0].email, super: splice1[0].super, buttons: splice1[0].buttons })
    setorginals(s)
    const ori = [...array]
    ori.push(sps)
    setarrays(ori)
    setActive("1")
  }

  const deleteno = (data) => {
    setErrorMessage('')
  }

  const handleClick = (i, id) => {
    console.log(i, id)
    console.log(array)
    {
      array.map((item, index) => {
        if (item.id == id) {
          setindex(index)
          setErrorMessage("Password reset triggered")
        }
      })
    }
  }

  const edited = (s, index) => {
    setErrorMessage('')
    props.edit(s)
  }

  //new fn

  const changebirth = (val) => {
    ////
    if (val !== undefined) {
      const datas = val
      const today = new Date()
      const birthDate = new Date(datas.User_details.birth_date)
      let age_now = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age_now--
      }
      ////
      if (val.User_details.age_range_enabled === 0) {
        return <>{age_now}</>
      } else {
        const age_enabled = parseInt(age_now / 10)
        const getrangeofage = age_enabled * 10
        return <>{getrangeofage}s</>
      }
    }
  }


  const creationDate = (data) => {
    const localDateTimeConversion = new Date(data)
    const monthValue = moment(localDateTimeConversion).format('MMM')
    const dateValue = moment(localDateTimeConversion).format('DD')
    const yearValue = moment(localDateTimeConversion).format('YYYY')
    return (<span>{`${monthValue} ${dateValue}, ${yearValue}`}</span>)
  }

  useEffect(() => {
    if (authStat_getUsersList.usersListsData.responseCode === 200) {
      const data = []
      data.push(authStat_getUsersList.usersListsData.responseBody[0])
      setIndividualUserdata(data)
    } else if (authStat_getUsersList.usersListsData.responseCode === 201) {
      setIndividualUserdata([])
    }
  }, [authStat_getUsersList.usersListsData])

  return (
    <>
      <div>
        {individualUserdata?.map((data, index) => {
          return (
            <div className="card p-1 flex-column cards">
              <div className="d-flex col-12 pe-25">
                <div className='col-2'>
                  {data.user_profile_picture[0] == null ? <img src={defaultuserprofilepicture} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null
                  }
                  {data.user_profile_picture.map((data, index) => {
                    return (
                      <>
                        {data.image_url != "" ? <img src={data.image_url} width="60px" height="60px" style={{ borderRadius: "15px" }}></img> : null}
                      </>
                    )
                  })}
                </div>
                <div className='col-9 ps-2'>
                  <div className='d-flex flex-column'>
                    <span className='spanprofile'>{data.User_details.full_name}</span>
                    <div className='d-flex flex-column col-11'>
                      <span className='d-flex flex-row  sideprofilemailid' style={{ wordBreak: "break-word" }}>{data.User_details.email_address}</span>
                      <span className='d-flex flex-row spansemilight pt-25'>{data.User_details.mobile_number}</span>
                    </div>
                    <div className='d-flex flex-row align-items-center '>
                      {setpronowns != "" ? <span className='font_light pe-50'>{setpronowns}</span> : null}
                      <img src={dot} width="5px" height="5px" style={{ display: setpronowns === '' ? 'none' : '' }} className='me-25'></img>
                      <span className='font_light pe-50'>{changebirth(data)}</span>
                      <img src={dot} width="5px" height="5px"></img>
                      <span className='font_light ps-50' style={{ textTransform: "capitalize" }}>{data.gender[0]}</span>
                    </div>
                    <div className='d-flex flex-row align-items-center '>
                      <img src={location} width="16px" height="16px"></img>&nbsp;
                      {/* <span className='font_l'>{data.User_details.location}</span> */}

                      {data.addition_info[0].current_location != '' ?
                        <span className='font_l'>{data.addition_info[0].current_location}</span> :
                        <span className='font_l'>{data.User_details.location}</span>
                      }
                    </div>
                    <div className='d-flex flex-row align-items-center '>
                      <span className='font_l pe-25'>Account Creation Date:</span>
                      <span className='font_l'>{creationDate(data.User_details.date_created)}</span>
                    </div>



                  </div>
                </div>
                <div className='col-1 d-flex justify-content-center'>
                  <EditPopup userVal={individualUserdata}></EditPopup>
                </div>
              </div>
              <span className='borders mt-1 mb-1'></span>

              <div className=''>
                <div className="main_cont">Key Info</div>
                <div className='row' style={{ marginLeft: "-25px" }}>
                  {filterKeyInfo.filter(res => res.name !== undefined && res.name !== null && res.name !== '').map((res) => {
                    return (
                      <div className='mt-1 '>
                        <div className='d-flex align-items-start justify-content-start'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-1'>
                                <img src={res.icon} width={res.width} height={res.height} className=''></img></div>
                              <div className='col-10 pe-0'>
                                <span className='profiles_detail' style={{ textTransform: "capitalize" }}>{res.name}</span>
                                <div className='profiles_detail' style={{ display: res.description.length === 0 ? 'none' : '' }}  >Dating: {res.description}</div>
                              </div>
                              <div className='col-1'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <span className='borders mt-1 mb-1'></span>
              <div className='row'>
                <div className="main_cont">Interests</div>
                <div className='d-flex flex-row flex-wrap   mb-1'>
                  {intersetarr.map((items, index) => <div key={index} >

                    <button className='btn-btn-green11 me-75 mt-1' >

                      <span className='btn-fonty' style={{ textTransform: "capitalize" }}>{items}</span>&nbsp;

                    </button>
                  </div>

                  )}
                </div>

              </div>
              <span className='borders  mb-1'></span>
              {/* addition indo section start */}
              <div>
                <span className="addtionalinfo_content" >Additional Info</span>
                <div className="row">
                  {additionalInfoFilter.filter(res => res.name !== undefined && res.name !== null && res.name !== '').map((res) => {
                    return (
                      <div className='col-6'>
                        <div className='d-flex align-items-center mt-1'>
                          <div className=''>
                            <img className='me-50' src={res.icon} width={res.width} height={res.height}></img>
                            <span className='profiles_detail' >{res.name}</span>
                            {res.des?.map((ref) => {
                              return (
                                <div>{ref}dlf,ld,fl,</div>
                              )
                            })}
                          </div>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* additional info section ends */}
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    getUsersFriendsListsData: state.getUsersFriendsListsData,
    getUsersListsData: state.getUsersListsData
  }
}
export default connect(mapStateToProps, {})(SideProfile)
