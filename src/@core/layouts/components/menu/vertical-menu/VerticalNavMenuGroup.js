// ** React Imports
import { useEffect , useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
// ** Third Party Components
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

// ** Reactstrap Imports
import { Collapse, Badge } from 'reactstrap'


// ** Vertical Menu Items Component
import VerticalNavMenuItems from './VerticalNavMenuItems'

// ** Utils
import { hasActiveChild, removeChildren } from '@layouts/utils'
const VerticalNavMenuGroup = ({
  index,
  item,
  groupOpen,
  menuHover,
  activeItem,
  parentItem,
  groupActive,
  setGroupOpen,
  menuCollapsed,
  setGroupActive,
  currentActiveGroup,
  setCurrentActiveGroup,
  ...rest
}) => {
  // ** Hooks
  const { t } = useTranslation()
  const location = useLocation()
  const [showLess, setshowLess] = useState(true);

  // ** Current Val
  const currentURL = useLocation().pathname

  // ** Toggle Open Group
  const toggleOpenGroup = (item, parent) => {
   
    let openGroup = groupOpen
    const activeGroup = groupActive

    // ** If Group is already open and clicked, close the group
    if (openGroup.includes(item.id)) {
      openGroup.splice(openGroup.indexOf(item.id), 1)

      // ** If clicked Group has open group children, Also remove those children to close those groups
      if (item.children) {
        removeChildren(item.children, openGroup, groupActive)
      }
    } else if (activeGroup.includes(item.id) || currentActiveGroup.includes(item.id)) {
      // ** If Group clicked is Active Group

      // ** If Active group is closed and clicked again, we should open active group else close active group
      if (!activeGroup.includes(item.id) && currentActiveGroup.includes(item.id)) {
        activeGroup.push(item.id)
      } else {
        activeGroup.splice(activeGroup.indexOf(item.id), 1)
      }

      // ** Update Active Group
      setGroupActive([...activeGroup])
    } else if (parent) {
      // ** If Group clicked is the child of a open group, first remove all the open groups under that parent
      if (parent.children) {
        removeChildren(parent.children, openGroup, groupActive)
      }

      // ** After removing all the open groups under that parent, add the clicked group to open group array
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id)
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch

      // ** Empty Open Group array
      openGroup = []

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.id)) {
        openGroup.push(item.id)
      }
    }
    setGroupOpen([...openGroup])
  }

  // ** On Group Item Click
  const onCollapseClick = (e, item) => {
    toggleOpenGroup(item, parentItem)
setshowLess(!showLess)
    e.preventDefault()
  }

  // ** Checks url & updates active item
  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.id)) groupActive.push(item.id)
      
    } else {
      const index = groupActive.indexOf(item.id)
      if (index > -1) groupActive.splice(index, 1)
      setshowLess(true)
    }
   
    setGroupActive([...groupActive])
    setCurrentActiveGroup([...groupActive])
    setGroupOpen([])
  }, [location])

  // ** Returns condition to add open class
  const openClassCondition = id => {
   
    if ((menuCollapsed && menuHover) || menuCollapsed === false) {
      if (groupActive.includes(id) || groupOpen.includes(id)) {
        return true
      }
    } else if (groupActive.includes(id) && menuCollapsed && menuHover === false) {
      return false
    } else {
      return null
    }
    
  }

  return (
    <li
      className={classnames('nav-item has-sub', {
        open: openClassCondition(item.id),
        'menu-collapsed-open': groupActive.includes(item.id),
        'sidebar-group-active':
          groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
      })}
    >
      
      <Link 
      //  className={classnames('nav-item has-sub', {
      //   open: openClassCondition(item.id),
      //   'menu-collapsed-open': groupActive.includes(item.id),
      //   'sidebar-group-active':
      //     groupActive.includes(item.id) || groupOpen.includes(item.id) || currentActiveGroup.includes(item.id)
      // })}
      className='d-flex align-items-center'
         to='/' onClick={e => onCollapseClick(e, item)}>
      
        <img className='alignment' src={item.icon} width={item.width} />
        <span className='menu-title text-truncate menutext'>{t(item.title)}</span>

        {item.badge && item.badgeText ? (
          <div className='ms-auto me-1 rounded-pill badge'    style={{
            backgroundColor: '#003B4A'}}>
            {item.badgeText}
          </div>
        ) : <div className='ms-auto me-1'></div>}
      {showLess ?
        <img src={item.feather}   width={item.fw} height={item.fh} onError='this.style.display = "none"'></img>
        :
        <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>
      }

{/* {showLess ? <div><IoIosArrowDown style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div> : <div><IoIosArrowUp style={{ width: "22px", height: "22px", color: "#003B4A" }} /></div>} */}
      
      
     
      </Link>
      
    
      {/* Render Child Recursively Through VerticalNavMenuItems Component */}
      <ul className='menu-content' style={{marginLeft:"19px"}}>
        <Collapse isOpen={(groupActive && groupActive.includes(item.id)) || (groupOpen && groupOpen.includes(item.id))}>
          <VerticalNavMenuItems
            {...rest}
            items={item.children}
            groupActive={groupActive}
            setGroupActive={setGroupActive}
            currentActiveGroup={currentActiveGroup}
            setCurrentActiveGroup={setCurrentActiveGroup}
            groupOpen={groupOpen}
            setGroupOpen={setGroupOpen}
            parentItem={item}
            menuCollapsed={menuCollapsed}
            menuHover={menuHover}
            activeItem={activeItem}
          />
        </Collapse>
      </ul>
      <li style={{border:"1px solid #EDEDED",marginLeft:"27px",width:"78%"}} ></li>
    </li>
       
 
  )
}

export default VerticalNavMenuGroup
