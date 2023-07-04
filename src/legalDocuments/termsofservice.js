import React, { useState, useRef } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Alert } from "reactstrap"
import "../@core/scss/base/adminDashboard/analyticsmenu/analytics.scss"
import link from '../assets/images/dashboardimg/link.png'

function Termsofservice() {
  const [active, setActive] = useState("1")
const [terms, setterms] = useState(false)
const [privacy, setprivacy] = useState(false)
const [texts, settext] = useState("")
const [texts2, settext2] = useState("")
console.log(texts)
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const [uploadedFileName, setUploadedFileName] = useState(null)
  const inputRef = useRef(null)

  const handleUpload = () => {
    inputRef.current?.click()
  }
  const handleDisplayFileDetails = (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    console.log(file, url, event.target.result)
      const reader = new FileReader()
      reader.onload = async (event) => { 
        if (active === "1") {
        const text = (event.target.result)
        console.log(text)
        settext(text)
        console.log(texts)
        }else{
          const text2 = (event.target.result)
          console.log(text2)
          settext2(text2)
          console.log(texts2)
        }
      }
      console.log(texts)
      reader.readAsText(event.target.files[0])
  
     
  }
  return (
    <>
      <h1 className="tncheading  mx-0"> Legal Docs</h1>
      <React.Fragment>

        <Nav
          tabs
          style={{
            borderBottom: "1px solid #BFBFBF",
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
            borderRadius: "0px",
            width: "100%"

          }}
        >

          <div className="container p-0">
            <div className="row">
              <div className="col-8 d-flex justify-content-flex-start flex-row ">
                <NavItem>
                  <NavLink
                    className="termsofservices"
                    active={active === "1"}
                    onClick={() => {
                      toggle("1")
                    }}>TERMS OF USE
                    {/* <span className="mx-0">TERMS OF USE</span> */}
                  </NavLink>

                </NavItem>
                {/* </div>
            <div className="col-3 d-flex justify-content-flex-start flex-row "> */}
                <NavItem className="px-4" style={{
                  // paddingLeft:"40px",
                  borderRadius: "30px"

                }}>
                  <NavLink
                    className="termsofservices"
                    active={active === "2"}
                    onClick={() => {
                      toggle("2")
                    }}

                  >
                    PRIVACY POLICY
                  </NavLink>
                </NavItem>
              </div>


              <div className="col-4">
                <div className="d-flex justify-content-end  mt-0">
                <input className="d-none" type="file" accept='.doc,.docx,.txt'  ref={inputRef}
        />
                <li className="right"      >
                    <img src={link} className=""></img>
                    <a className="upload"><u>Upload Doc</u></a>
                    
                  </li>
                </div>
              </div>
            </div>
          </div>

        </Nav>

        <TabContent className="mb-2" activeTab={active}>
          <TabPane tabId="1">
           
            <div className="outerbox p-3" >
              <div className="innerbox p-2" contenteditable="true" style={{display:texts == '' ? 'none' : 'block'}}>
              <p className="tnc">
                {texts}
                </p>
              </div>
              <div className="innerbox p-2" contenteditable="true" style={{display:texts == '' ? 'block' : 'none'}}>
                
                <p className="tnc">
                  These Terms of Use constitute a legally binding agreement made
                  between you, whether personally or on behalf of an entity
                  (“you”) and Hint Social (“Company“, “we”, “us”, or “our”),
                  concerning your access to and use of the
                  thevirtualcaregroup.comwebsite as well as any other media
                  form, media channel, mobile website or mobile application
                  related, linked, or otherwise connected thereto (collectively,
                  the “Site”). You agree that by accessing the Site, you have
                  read, understood, and agreed to be bound by all of these Terms
                  of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE,
                  THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU
                  MUST DISCONTINUE USE IMMEDIATELY.
                </p>
                <br></br>
                <p className="tnc">
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use at any time and for any reason. We will alert you
                  about any changes by updating the “Last updated” date of these
                  Terms of Use, and you waive any right to receive specific
                  notice of each such change. It is your responsibility to
                  periodically review these Terms of Use to stay informed of
                  updates. You will be subject to, and will be deemed to have
                  been made aware of and to have accepted.
                </p>
                <br></br>
                <p className="tnc1">
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use at any time and for any reason. We will alert you
                  about any changes by updating the “Last updated” date of these
                  Terms of Use, and you waive any right to receive specific
                  notice of each such change. It is your responsibility to
                  periodically review these Terms of Use to stay informed of
                  updates. You will be subject to, and will be deemed to have
                  been made aware of and to have accepted.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <button className="savebutton ">Save</button>
              </div>
            </div>
           
          </TabPane>
          <TabPane tabId="2">
            <div className="outerbox p-3"  >
            <div className="innerbox p-2" contenteditable="true" style={{display:texts2 == '' ? 'none' : 'block'}}>
              <p className="tnc">
                {texts2}
              </p>
              </div>
              <div className="innerbox p-2" contenteditable="true"  style={{display:texts2 == '' ? 'block' : 'none'}}>
                <p className="tnc">
                  Thank you for choosing to be part of our community at Hint
                  Social (“Company”, “we”, “us”, or “our”). We are committed to
                  protecting your personal information and your right to
                  privacy. If you have any questions or concerns about our
                  policy or our practices with regards to your personal
                  information, please contact us at info@hintsocial.com
                </p>
                <br></br>
                <p className="tnc">
                  When you
                  visit our and use our services, you trust us with your
                  personal information. We take your privacy very seriously. In
                  this privacy policy, we describe our privacy policy. We seek
                  to explain to you in the clearest way possible what
                  information we collect, how we use it and what rights you have
                  in relation to it. We hope you take some time to read through
                  it carefully, as it is important. If there are any terms in
                  this privacy policy that you do not agree with, please
                  discontinue use of our and our services.
                </p>
                <br></br>
                <p className="tnc">
                  This privacy policy
                  applies to all information collected through our and/or any
                  related services, sales, marketing or events (we refer to them
                  collectively in this privacy policy as the “Services“).
                </p>
                <br></br>
                <p className="tnc2">
                  Please
                  read this privacy policy carefully as it will help you make
                  informed decisions about sharing your personal information with us.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <button className="savebutton ">Save</button>
              </div>
            </div>
          
          </TabPane>
        </TabContent>
      </React.Fragment>
    </>
  )
}
export default Termsofservice