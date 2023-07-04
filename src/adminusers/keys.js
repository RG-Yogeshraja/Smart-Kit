import plus from '../assets/images/dashboardimg/plusjoin.png'
import bag from '../assets/images/dashboardimg/case.png'
import head from '../assets/images/dashboardimg/Vector.png'
import search from '../assets/images/dashboardimg/search-normal.png'
import dot from '../assets/images/dashboardimg/Ellipse11.png'
import cake from '../assets/images/dashboardimg/cakeicon.png'
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
import { useEffect, useState } from 'react'

const Keys_details = (props) => {
    const [json, setjson] = useState([{ icon: dot, name: "Status:", color: "yes", width: "6px", height: "6px", subname: 'Day drinking in Seaport' },
    { icon: plus, name: "Man", color: "no", width: "15.96px", height: "16px", subname: '' },
    { icon: bag, name: "UX Designer at Hint Social", color: "no", width: "16px", height: "16px", subname: '' },
    { icon: head, name: "Stanford University, Boston University", color: "no", width: "16px", height: "14.68px", subname: '' },
    { icon: search, name: "New Friends, Things to Do", color: "no", width: "20px", height: "20px", subname: '' },
    ])
    const [individualUserDetails, setIndividualUserDetails] = useState([])
    const [userStatus, setUserStatus] = useState([])

    useEffect(() => {
        //
        setIndividualUserDetails(props.userDetails)
        setUserStatus(props.userDetails[0].user_status[0])
    })
    return (
        <div className='row'>
            <div className="main_cont">Key Info</div>

            {json.map((res) => {
                return (
                    <div className='d-flex align-items-center flex-row mt-1'>
                        <div className={`${res.color === 'yes' ? 'bg' : ''}`}>

                            <img src={res.icon} width={res.width} height={res.height}  ></img>&nbsp;
                            <span style={{ display: res.color === 'yes' ? 'none' : '' }}>&nbsp;&nbsp;</span>
                            <span className='profiles_detail'>{res.name}&nbsp;<span style={{ fontWeight: "500" }}>{res.subname}</span></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Keys_details