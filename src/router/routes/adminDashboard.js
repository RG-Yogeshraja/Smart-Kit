import { lazy } from 'react'
import BlankLayout from '@layouts/BlankLayout'
const Analytics = lazy(() => import('../../adminanalytics/Analytics.js'))
const AdminAccount = lazy(() => import('../../adminDashboard/createEdit_adminaccount.js'))
const Termsofservice = lazy(() => import('../../legalDocuments/termsofservice.js'))
const Users = lazy(() => import('../../adminusers/usersPage'))
const Groups = lazy(() => import('../../admingroups/admingroupspage'))
const Events = lazy(() => import('../../adminevents/events-adminpage'))
const Reset = lazy(() => import('../../adminaccount/forgotpassword/passwordReset'))
const Reset1 = lazy(() => import('../../adminaccount/forgotpassword/confirmationmail.js'))
const Resets = lazy(() => import('../../adminaccount/forgotpassword/passwordResetenter.js'))
// const SponserShipEvents = lazy(()=>import('../../adminSponsorships/sponsorshipevents/sponsorshipeventmainpage'))
const SponsorshipEvents = lazy(() => import('../../adminSponsorships/sponsorshipevents/sponsorshipeventmainpage'))
const SponsorshipPosts = lazy(() => import('../../adminSponsorships/sponsorshipposts/sponsorshippostmainpage'))
const SponsorshipGroups = lazy(() => import('../../adminSponsorships/sponsorshipgroups/sponsorshipgroupmainpage'))
const ReportsMain = lazy(() => import('../../adminreports/reports-mainpage'))
const MessagesMain = lazy(() => import('../../adminmessages/MessagesmainTab'))

const AppVal = [
  { element: <AdminAccount />, path: '/admin/adminAccount' },
  { element: <Analytics />, path: '/admin/Analytics' },
  { element: <Users />, path: '/admin/users' },
  { element: <Groups />, path: '/admin/groups' },
  { element: <Events />, path: '/admin/events' },
  { element: <SponsorshipEvents />, path: '/admin/sponsorsevents' },
  { element: <SponsorshipPosts />, path: '/admin/sponsorposts' },
  { element: <SponsorshipGroups />, path: '/admin/sponsorgroups' },
  { element: <ReportsMain />, path: '/admin/reportsmains' },
  { element: <MessagesMain />, path: '/admin/messages' },
  { element: <Termsofservice />, path: '/admin/Termsofservice' },
]

export default AppVal