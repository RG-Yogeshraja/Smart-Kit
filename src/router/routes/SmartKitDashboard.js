import { lazy } from 'react'
import BlankLayout from '@layouts/BlankLayout'
const AdminAccount = lazy(() => import('../../adminDashboard/createEdit_adminaccount.js'))
const Reset = lazy(() => import('../../adminaccount/forgotpassword/passwordReset'))
const Reset1 = lazy(() => import('../../adminaccount/forgotpassword/confirmationmail.js'))
const Resets = lazy(() => import('../../adminaccount/forgotpassword/passwordResetenter.js'))

const Home = lazy(() => import('../../smartkit/home/home.js'))
const Team = lazy(() => import('../../smartkit/team/team.js'))
const Projects = lazy(() => import('../../smartkit/projects/projects.js'))
const Tasks = lazy(() => import('../../smartkit/tasks/tasks.js'))
const Apparaisal = lazy(() => import('../../smartkit/appraisal/appraisal.js'))
const Leaves = lazy(() => import('../../smartkit/leaves/leaves.js'))
const Productivity = lazy(() => import('../../smartkit/productivity/productivity.js'))
const Latecoming = lazy(() => import('../../smartkit/latecoming/latecoming.js'))
const Experience = lazy(() => import('../../smartkit/experience/experience.js'))
const Onboarding = lazy(() => import('../../smartkit/onboarding/onboarding.js'))
const Announcement = lazy(() => import('../../smartkit/annoncement/annoncement.js'))
const Documents = lazy(() => import('../../smartkit/documents/documents.js'))



const SmartKitLazyPath = [
    { element: <AdminAccount />, path: '/admin/adminAccount' },

    { element: <Home />, path: '/smartkit/home' },
    { element: <Team />, path: '/smartkit/teams' },
    { element: <Projects />, path: '/smartkit/projects' },
    { element: <Tasks />, path: '/smartkit/tasks' },
    { element: <Apparaisal />, path: '/smartkit/appraisal' },
    { element: <Productivity />, path: '/smartkit/productivity' },
    { element: <Leaves />, path: '/smartkit/leaves' },
    { element: <Latecoming />, path: '/smartkit/latecoming' },
    { element: <Experience />, path: '/smartkit/experience' },
    { element: <Onboarding />, path: '/smartkit/onboarding' },
    { element: <Announcement />, path: '/smartkit/announcements' },
    { element: <Documents />, path: '/smartkit/documents' },
]

export default SmartKitLazyPath