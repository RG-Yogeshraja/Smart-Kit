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
  {
    icon: Analytics,
    width: "22px",
    height: '22px',
    title: 'Analytics',

    badge: 'light-warning',

    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/Analytics'

  },
  {
    icon: User,
    width: "22px",
    height: '22px',
    title: 'Users',

    badge: 'light-warning',

    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/users'
  },
  {
    icon: Groups,
    width: "22px",
    height: '22px',
    title: 'Groups',
    badgeText: '5',
    badge: 'light-warning',

    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/groups'
  },

  {
    icon: Events,
    width: "22px",
    height: '22px',
    title: 'Events',

    badge: 'light-warning',

    feather: rightarrow,
   
    fw: "8px",
    fh: "14px",
    navLink: '/admin/events'
  },
  {
    icon: SponserShip,
    width: "22px",
    height: '22px',
    title: 'Sponsorships',

    badge: 'light-warning',
    feather: rightarrow,
    feathers: Events,
    fw: "8px",
    fh: "14px",
    children: [
      {
        id: 'analyticsDash',
        title: 'Events',

        navLink: '/admin/sponsorsevents'
      },
      {
        id: 'eCommercePostsDash',
        title: 'Posts',

        navLink: '/admin/sponsorposts'
      },
      {
        id: 'eCommerceDash',
        title: 'Groups',

        navLink: '/admin/sponsorgroups'

      }

    ]
  },
  {
    icon: Reports,
    width: "22px",
    height: '22px',
    title: 'Reports',

    badge: 'light-warning',
    badgeText: '5',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/reportsmains'

  },
  {
    icon: Messages,
    width: "22px",
    height: '22px',
    title: 'Messages',

    badge: 'light-warning',
    badgeText: '5',
    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: '/admin/messages'

  },
  {
    icon: LegalDocuments,
    width: "22px",
    height: '22px',
    title: 'Legal Documents',

    badge: 'light-warning',

    feather: rightarrow,
    fw: "8px",
    fh: "14px",
    navLink: "/admin/Termsofservice"

  }

]