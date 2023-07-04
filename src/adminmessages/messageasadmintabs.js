import React, { useState,  useEffect } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import Messagesasadminresolved from './messagesasadmin'
function Messagesasadmin(props) {
    const [active, setActive] = useState("1")
    const [toogles, settoogle] = useState('3')
    useEffect(() => {
        
        settoogle(props.data)
        console.log(toogles)
      
    },[])
    // if (active === "1") {
    //     props.actives()
    // } else if (active === "2") {
    //     props.pendings()
    // } 

    const toggle = (tab) => {
        if (active !== tab) {
            setActive(tab)

        }
        // if (tab === "1") {
        //     props.actives()
        // } else if (tab === "2") {
        //     props.pendings()
        // }
    }


    return (
        <>
            <React.Fragment>

                <div className="row">
                    <div className="col-11" style={{marginRight:"-3px"}}>
                        <Nav
                            tabs
                            style={{
                                borderBottom: "1px solid #CCD8DB",
                                borderLeft: "none",
                                borderRight: "none",
                                borderTop: "none",
                                borderRadius: "0px",
                                width: "100%"
                            }} >

                            <div className=" p-0">
                                <div className="row maintab-section" style={{ wordSpacing: "2px" }}>
                                    <div className="col-2">
                                        <div className="d-flex justify-content between align-items-between">
                                            <NavItem >
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink me-2" active={active === "1"} onClick={() => { toggle("1") }}>
                                                Unresolved
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink " active={active === "2"} onClick={() => { toggle("2") }}>
                                                Resolved
                                                </NavLink>
                                            </NavItem>&nbsp;

                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Nav>
                    </div>

                    {/* <div className="col-1 add-infobtn d-flex justify-content-center align-items-center " style={{cursor:"pointer"}}>
                        <img src={addicon1} width="16px" height="16px" />
                        <SponsorshipGroupsInfoDialog></SponsorshipGroupsInfoDialog>
                        <button>djfdjjf</button>
                    </div> */}
                </div>
                <TabContent className="mt-1" activeTab={active}>
                    <TabPane tabId="1">
                       
                      <Messagesasadminresolved></Messagesasadminresolved>
                    </TabPane>
                    <TabPane tabId="2">
                    <Messagesasadminresolved></Messagesasadminresolved>
                    </TabPane>

                </TabContent>
            </React.Fragment>
        </>
    )
}
export default Messagesasadmin