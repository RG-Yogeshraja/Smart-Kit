import { lazy } from 'react'

const UserSettings = lazy(() => import('../../profilesettings/UserSettings.js'))
const profiles = [
    {
      element: <UserSettings />,
      path: '/user/userSettings'
    }
   
]
export default profiles