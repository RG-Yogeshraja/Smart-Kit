// ** React Imports
import { NavLink } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import React, { useState } from "react"
// ** Reactstrap Imports
import { Badge } from 'reactstrap'

const VerticalNavMenuLink = ({ item, activeItem }) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? 'a' : NavLink
  const [change, setchange] = useState(false)
  // ** Hooks
  const { t } = useTranslation();
  const changes = () => {
    console.log(change)
  }
  return (
    <li
      className={classnames({
        'nav-item': !item.children,
        disabled: item.disabled,
        active: item.navLink === activeItem
      })}>
      <LinkTag className='d-flex align-items-center test1' target={item.newTab ? '_blank' : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
            href: item.navLink || '/'
          }
          : {
            to: item.navLink || '/',
            className: ({ isActive }) => {
              if (isActive && !item.disabled) {
                return 'd-flex align-items-center active'
              }
            }
          })}
        onClick={e => {
          if (item.navLink.length === 0 || item.navLink === '#' || item.disabled === true) {
            console.log(item.navLink)
            e.preventDefault()
          }
        }}>
        <img className='alignment' src={item.icon} width={item.width} height={item.height} />
        <span className='menu-item text-truncate menutext'>{t(item.title)}</span>

        {/* {item.badge && item.badgeText ? ( */}
        <div className='ms-auto me-1 rounded-pill badge'
        //  style={{backgroundColor: '#003B4A'}}
        >
          {/* {item.badgeText} */}
        </div>
        {/* ) : */}
        <div className='ms-auto me-1'></div>
        {/* } */}
        <img className='test_m' src={item.feather} width={item.fw} height={item.fh} onError='this.style.display = "none"'></img>
      </LinkTag>
      {/* <ul> */}
        <li style={{ border: "0.1px solid #EDEDED", marginLeft: "27px", width: "78%" }}></li>
      {/* </ul> */}
    </li>
  )
}

export default VerticalNavMenuLink
