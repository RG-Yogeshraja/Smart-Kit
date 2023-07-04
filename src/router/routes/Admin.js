// ** React Imports
import { lazy } from 'react'
const Reset = lazy(() => import('../../adminaccount/forgotpassword/passwordReset'))
import BlankLayout from '@layouts/BlankLayout'
import Reset3 from '../../adminaccount/forgotpassword/passwordResetenter'
const AdminUser = lazy(() => import('../../adminaccount/forgotpassword/passwordReset'))
const Reset1 = lazy(() => import('../../adminaccount/forgotpassword/confirmationmail'))
const Resets = lazy(() => import('../../adminaccount/forgotpassword/passwordResetenter'))
const LastReset = lazy(() => import('../../adminaccount/forgotpassword/passwordResetSuccess'))
const Reseting = lazy(() => import('../../adminaccount/forgotpassword/resetCode'))
const ResetMobile = lazy(() => import('../../adminaccount/forgotpassword/resetformmobile'))
const ResetMobileSuccess = lazy(() => import('../../adminaccount/forgotpassword/passwordsuccessmessage_mobile'))
const AppStore = lazy(() => import('../../appStore/appStorePage'))

const AdminRoutes = [
  {
    path: '/ResetPassword',
    element: <Reset />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/reset1',
    element: <Reset1 />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/Success',
    element: <ResetMobileSuccess />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/resetmobile',
    element: <ResetMobile />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/resets',
    element: <Resets />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/resetConfirmation',
    element: <LastReset />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/reseting',
    element: <Reseting />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  },
  {
    path: '/appstore?',
    // path: '/hintsocial-appstore+navigation?',
    element: <AppStore />,
    meta: {
      publicRoute: true,
      layout: 'blank'
    }
  }

]

export default AdminRoutes