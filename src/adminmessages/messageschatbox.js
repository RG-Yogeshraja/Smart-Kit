import user1 from '../assets/images/dashboardimg/blockedbyuser1.png'
import moreverticalround from '../assets/images/dashboardimg/moreverticalround.png'
import hintsociallogo2 from '../../src/assets/images/dashboardimg/hintsociallogo2.png'
import React, { useState } from "react"
import sendmessage from '../../src/assets/images/dashboardimg/sendmessage.png'
import messagetime from '../../src/assets/images/dashboardimg/messagetime.png'
import Dropdown from 'react-bootstrap/Dropdown';

const MessagesChatBox = () => {
    const [messagetrigger, setmessagetrigger] = useState([
        { id: '1', messages: 'Hello, I am having an issue with my account! It doesn’t let me see my events.', time: '11:02', img: user1 },
        { id: '2', messages: 'Hi, thanks for reaching out! Let me look into this.', time: '11:03', img: hintsociallogo2 },
        { id: '2', messages: 'It looks like you might be logged in with another account. Do you have two accounts?', time: '11:03', img: hintsociallogo2 },
        { id: '1', messages: 'Yes, I will try that and see if it works!', time: '11:03', img: user1 },
        { id: '2', messages: 'Perfect, just reach out again if you still cannot see them.', time: '11:03', img: hintsociallogo2 }
    ])
    return (
        <div className="card p-2 d-flex flex-column">
            <div className='col-12 d-flex justify-content-between align-items-center'>
                <span>
                    <img src={user1} width="40px" height="40px" className='me-1'></img>
                    <span className='messagechatbox_profile'>Amy Delacruz</span>
                </span>
                {/* <img src={moreverticalround} width="40px" height="40px"></img> */}
                <Dropdown className="reportsMessage-dropdown">
                    <Dropdown.Toggle>
                        <img src={moreverticalround} width="42px" height="42px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="reportsMessage-dropdownmenu">
                        <Dropdown.Item href="#" className="reportsMessage-dropdownitem d-flex align-items-center">
                            <span>
                                <img className="reportsMessage-dropdownitemIcon" src={messagetime} width="16px" height="16px"></img>
                            </span>
                            <span style={{ paddingTop: "2px" }} className="reportsMessage-dropdownitemName">Mark as Unread</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="#" className="reportsMessage-dropdownitem d-flex align-items-center pb-50 pt-25">
                            <span>
                                <img className="reportsMessage-dropdownitemIcon" src={messagetime} width="16px" height="16px"></img>
                            </span>
                            <span style={{ paddingTop: "2px" }} className="reportsMessage-dropdownitemName">Mark as Resolved</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <hr className='w-100' style={{ border: "1px solid #EDEDED" }}></hr>
            <div className='d-flex justify-content-center'>
                <span className='messagechatbox_subtext'>Today</span>
            </div>
            <div className='col-12'>
                {messagetrigger.map((data, index) => {
                    return (
                        <>
                            <div className='d-flex mt-2 ' style={{ justifyContent: data.id === '2' ? 'end' : 'start' }}>
                                <span style={{ display: data.id === '2' ? '' : 'none' }} className="ms-2 messagechat_prof messagechat_border2 p-1"> <span>{data.messages}</span></span>
                                <span>

                                    <img src={data.img} width="32px" height="32px" className={`${data.id === '2' ? 'ms-75' : 'me-75'}`}></img>

                                </span>
                                <span style={{ display: data.id === '1' ? '' : 'none' }} className="me-1 messagechat_prof messagechat_border1 p-1"> <span>{data.messages}</span></span>
                            </div>
                            <div>
                                <span className={`messagechat ${data.id === '2' ? 'ms-2' : 'ms-3'}`} >{data.time}</span>
                            </div>
                        </>
                    )
                }
                )
                }
                <div className="mt-5">
                    <div className="d-flex align-items-center">
                        <img src={hintsociallogo2} width="45px" height="45px" className='me-75' />
                        <input className="form-control w-100" placeholder="Type your message..." />
                        <img className="message_sendMessageBtn" src={sendmessage} width="69px" height="69px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessagesChatBox