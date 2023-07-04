import React, { useState, useEffect } from 'react'
import sortby from '../../src/assets/images/dashboardimg/sorts.png'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown"
import { IoIosArrowUp} from "@react-icons/all-files/io/IoIosArrowUp"
import '../@core/scss/base/messagemenu/messages.scss'
import MessagesSupporttab from './Messagessupporttab'
import MessagesChatBox from './messageschatbox.js'

const MessagesMain = () => {
    const [showLess, setshowLess] = useState(true);
   
        return (
            <div className='row'>
                <div className='sponsership-groupscenter-panel'>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="font-reports mt-1">Messages</span>
                        <button className='btn_filter d-flex flex-row justify-content-flex-start align-items-center'  style={{border:"1px solid  #95E1BF",borderRadius:"10px",cursor:'pointer'}} onClick={() => changeShow(true)} id='popBottom'>
                <div className='col-10 d-flex justify-content-center'
                
                >
               
        <img src={sortby} width="18px" height="18px"/><span className='textalgn'>&nbsp;&nbsp;&nbsp;Filter By</span></div>
        <div className='col-1'>
        {showLess ? <div><IoIosArrowDown style={{width:"22px",height:"22px", color:"#003B4A"}}/></div> : <div><IoIosArrowUp style={{width:"22px",height:"22px",color:"#003B4A"}} /></div>}
{/* <IoIosArrowDown style={{width:"22px",height:"22px",color:"#003B4A"}}/> */}
</div>
        </button>
                        {/* <Groupsfilterpopup></Groupsfilterpopup> */}
                        {/* <button>fknewkfn</button> */}
                        {/* <Groupsfilterpopup></Groupsfilterpopup> */}
                    </div>
                    <div>
                     <MessagesSupporttab></MessagesSupporttab>
                    </div>
                </div>
                <div className='sponsership-groupsright-panel'>
                    <MessagesChatBox></MessagesChatBox>
                   {/* <messagessidepanel></messagessidepanel> */}
                   {/* <GroupsSideprofile></GroupsSideprofile> */}
                {/* <GroupsSideprofile ></GroupsSideprofile> */}
                    {/* <SideProfile ></SideProfile> */}
                    {/* <Sideprofile data1={active} data2={pending} data3={deleted}></Sideprofile> */}
                </div>
            </div>
        )
    }
    
  
export default MessagesMain