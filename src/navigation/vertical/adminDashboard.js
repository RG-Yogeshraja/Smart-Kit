import { Home, Circle, ChevronRight } from 'react-feather'
import speakerIcon from '@src/assets/images/dashboardimg/accountinfo.png'
import Analytics from '@src/assets/images/dashboardimg/analytics.png'
import Groups from '@src/assets/images/dashboardimg/groups.png'
import User from '@src/assets/images/dashboardimg/peoples.png'
import SponserShip from '@src/assets/images/dashboardimg/Sponserships.png'
import Messages from '@src/assets/images/dashboardimg/messages.png'
import Reports from '@src/assets/images/dashboardimg/flags.png'
import LegalDocuments from '@src/assets/images/dashboardimg/documenttext.png'
import Events from '@src/assets/images/dashboardimg/calender.png'
import rightarrow from '@src/assets/images/dashboardimg/ra.png'
export default [
  {
    icon: speakerIcon,
    width: "20px",
    height: "21px",
    title: 'Admin Accounts',

    badge: 'light-warning',

    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/adminAccount'


  },

  //smartkit lazy path start
  {
    width: "22px",
    height: '22px',
    title: 'Home',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/home'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Team',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/teams'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Projects',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/projects'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Tasks',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/tasks'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Appraisal',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/appraisal'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Productivity',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/productivity'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Leaves',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/leaves'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Late coming',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/latecoming'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Experience',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/experience'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Onboarding',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/onboarding'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Annoncement',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/announcements'
  },
  {
    width: "22px",
    height: '22px',
    title: 'Documents',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/smartkit/documents'
  },

  //smartkit lazy path ends

]