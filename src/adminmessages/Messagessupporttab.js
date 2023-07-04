import React, { useState } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import MessagesMaintab from './Messagesmainpage'
import Messagesasadmin from './messageasadmintabs'
function MessagesSupporttab() {
    const [active, setActive] = useState("3")
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
                                    <div className="">
                                        <div className="d-flex justify-content between align-items-between ">
                                            <NavItem>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink me-2" active={active === "3"} onClick={() => { toggle("3") }}>
                                                Support Messages
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="" style={{ borderRadius: "30px" }}>
                                                <NavLink className="grouptabheading-active1 sponsor-eventmain-navlink" active={active === "4"} onClick={() => { toggle("4") }}>
                                                Messages as Admin
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
                <TabContent className="mb-2" activeTab={active}>
                    <TabPane tabId="3">
                    <MessagesMaintab data={active}></MessagesMaintab>
                    </TabPane>
                    <TabPane tabId="4">
                    <Messagesasadmin></Messagesasadmin>
                    </TabPane>

                </TabContent>
            </React.Fragment>
        </>
    )
}
export default MessagesSupporttab