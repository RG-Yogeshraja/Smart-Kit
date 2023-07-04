// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import kanban from '@src/views/apps/kanban/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import adminLoginData from '../adminaccount/adminlogin/slice'
import adminForgotData from '../adminaccount/forgotpassword/slice'
import resetData from '../adminaccount/forgotpassword/resetpasswordslice'
import getUsersListsData from '../adminusers/slice-adminusers/slice-userslist-details'
import adminGroupInfo from '../admingroups/groupspanel/createandupdategroups-slice'
import groupuploaddetails from '../admingroups/groupspanel/imageupload-splice'
import invitememberinfo from '../admingroups/memberlist-splice'
import adminProfileData from '../@core/layouts/components/navbar/slice-navbar'
import deletedgroupsdata from '../admingroups/getdeletedgroups-aplice'
import activeGroupsdata from '../admingroups/groupspanel/getactive-splice'
import createAdminUserData from '../../src/adminDashboard/slice-createuser'
import getActiveAdminData from '../../src/adminDashboard/slice-active-deleteduserlist'
import adminmemberInfo from '../admingroups/groupspanel/getmemberlistsplice'
import deleteUserData from '../../src/adminDashboard/slice-deleteUser'
import getUsersFriendsListsData from '../adminusers/slice-adminusers/splice-userfriendslist'
import postGroupsdata from '../admingroups/groupspanel/postmembers-splice'
import eventsGroupsdata from '../admingroups/groupspanel/getevents-splice'
import reportsGroupsdata from '../admingroups/groupspanel/getReports-splice'
import getIndivudualGroupdata from '../admingroups/groupspanel/getgroupdetails-splice'
import getDeletedUserAccountData from '../adminDashboard/slice-getDeletedUser'
import restoreUserAccountData from '../adminDashboard/slice-restoreDeletedAccount'
import updateAdminUserData from '../adminDashboard/slice-updateuser'
import adminupdateGroupInfo from '../admingroups/groupspanel/updategroups-slice'
import deletegroupsinfo from '../admingroups/deletegroupsplice'
import getUsersGroupsData from '../adminusers/slice-adminusers/slice-usergroupslist'
import getUsersEventsData from '../adminusers/slice-adminusers/slice-usereventslist'
import getUsersPostsData from '../adminusers/slice-adminusers/slice-userpostslist'
import getUsersReportsData from '../adminusers/slice-adminusers/slice-userreportslist'
import invite_Groupmemberbyadmin from '../admingroups/groupspanel/invitememberbyadmin_splice'
import pendinglist_groupsdatainfo from '../admingroups/groupspending_splice'
import rejectpendingGroupsdata from '../admingroups/groupspanel/rejectpendinggroups-splice'
import approvependingGroupsdata from '../admingroups/groupspanel/approvependingrequest-splice'
import deleteUserAccountData from '../adminusers/slice-adminusers/slice-deleteuseraccount'
import updateUserData from '../../src/adminusers/slice-adminusers/slice-updateuserdata'
import assignasaadmingroupsdata from '../admingroups/assignasamember-splice'
import removeUsersFriendData from '../adminusers/slice-adminusers/slice-removefriend'
import removeUsersPostData from '../adminusers/slice-adminusers/slice-removeuserspost'
import removeUsersGroupData from '../adminusers/slice-adminusers/slice-removeusersgroup'
import removeUserseventData from '../adminusers/slice-adminusers/slice-removeusersevent'
import removepostGroupsdata from '../admingroups/groupspanel/removepost-splice'
import getUsersBlockListData from '../adminusers/slice-adminusers/slice-userblocklist'
import getcommentlistdata from '../admingroups/getcomment-splice'
import removecommentlistdata from '../admingroups/removecomment-splice'
import acceptpendinggroupdata from '../admingroups/acceptpendinggroupmembers-splice'
import rejectpendinggroupdata from '../admingroups/rejectgroup-splice'
import updateUserProfileImageData from '../../src/adminusers/slice-adminusers/slice-updateuserprofileimage'
import getAllActiveEventsData from '../../src/adminevents/slice-adminevents/slice-getallactiveevents'
import getEventAttendingMemberData from '../../src/adminevents/slice-adminevents/slice-geteventattendingmember'
import admin_analytics_user_data from '../adminanalytics/slice-adminanalytics/getactiveuserdetails-splice'
import admin_analytics_chart_activeuserlist from '../adminanalytics/slice-adminanalytics/activeusersdetails-splice'
import admin_analytics_viewactiveusers_data from '../adminanalytics/slice-adminanalytics/viewactiveusers-splice'
import deleteeventsGroupsdata from '../admingroups/groupspanel/deletegroupevent-splice'
import removeMemberFromAttendingData from '../../src/adminevents/slice-adminevents/slice-removememberfromattending'
import blockMemberFromAttendingData from '../../src/adminevents/slice-adminevents/slice-blockmemberfromattending'
import acceptRejectMemberFromPendingData from '../../src/adminevents/slice-adminevents/slice-acceptreject-memberfrompending'
import blockMemberFromPendingData from '../../src/adminevents/slice-adminevents/slice-blockmemberfrompending'
import addToAttendFromWaitlistData from '../../src/adminevents/slice-adminevents/slice-addtoattend-fromwaitlist'
import getAllPastEventsData from '../../src/adminevents/slice-adminevents/slice-getallpastevents'
import getAllDeletedEventsData from '../../src/adminevents/slice-adminevents/slice-getalldeletedevents'
import createNewEventData from '../../src/adminevents/slice-adminevents/slice-createevent'
import updateEventData from '../../src/adminevents/slice-adminevents/slice-updateevent'
import getEventDetailsData from '../../src/adminevents/slice-adminevents/slice-geteventdetails'
import getMembersToInviteData from '../../src/adminevents/slice-adminevents/slice-getmemberstoinvite'
import inviteMembersToAttendEventData from '../../src/adminevents/slice-adminevents/slice-invitememberstoattendevent'
import uploadEventBannerImageData from '../../src/adminevents/slice-adminevents/slice-uploadeventbannerimage'
import getUsersPostCommentsData from '../../src/adminusers/slice-adminusers/slice-getuserpostcomments'
import addToEventAttendingData from '../../src/adminevents/slice-adminevents/slice-addToEventAttending'
import removeUserspostCommentsData from '../adminusers/slice-adminusers/slice-removeuserspostcomments'
import eventsOverAllSearchData from '../../src/adminevents/slice-adminevents/slice-overallsearch'
import defaultimageget from '../admingroups/resetfile-splice'
import resetDataforMobile from '../adminaccount/forgotpassword/resetpasswordmobileslice'
import getUsersListofInvitedCodeRegData from '../adminanalytics/slice-adminanalytics/getUserslistofInvitedCodeReg'
import groupsFilterData from '../admingroups/slice-admingroups/slice-groupfilter'
import individualUserRegCodeData from '../adminusers/slice-adminusers/slice-individualuserCodeReg'
import getEvent_filterDetail from '../../src/adminevents/slice-adminevents/geteventfilter-detail-splice'
import deleteEventData from '../adminevents/slice-adminevents/slice-delete-event'
import admin_analytics_filter_global from '../adminanalytics/slice-adminanalytics/filteradmin-getsplice'
import getInactiveUsersListData from '../adminanalytics/slice-adminanalytics/slice-getInactiveUsers'
import getDeletedUsersListData from '../adminanalytics/slice-adminanalytics/slice-getDeletedUsers'
import getActiveUsersListData from '../adminanalytics/slice-adminanalytics/slice-activeuserdetails'
import getAllUsersToCreateEventData from '../../src/adminevents/slice-adminevents/slice-getAllUsersToCreateEvent'
import eventExplorerAlgorithmData from '../../src/adminevents/slice-adminevents/slice-eventControlSettings'
import analyticsParentFilterData from '../adminanalytics/slice-adminanalytics/slice-parentFilter'
import analyticsChildFilterData from '../adminanalytics/slice-adminanalytics/slice-childFilter'
import sponsoredpostsettings from '../admingroups/sponsoredpostsetting-slice'
import getAllSponsorEventsData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipEvents/slice-getAllSponsorEvents'
import searchGroupNameInterestData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipEvents/slice-searachGroupNameInterest'
import getSponsoreventDemographData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipEvents/slice-getSponsorEventDemograph'
import getAllSponsorPostsData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipPosts/slice-getAllSponsorPosts'
import getSponsorPostDemographData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipPosts/slice-getSponsorPostDemograph'
import updateSponsorEventControlSettingsData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipEvents/slice-updateSponsorControlEventSettings'
import updateSponsorPostControlSettingsData from '../adminSponsorships/slice-sponsorship/slice-sponsorshipPosts/slice-updateSponsorControlPostSettings'
import getCustomChildFilterData from '../adminanalytics/slice-adminanalytics/slice-analyticsCustomChildFilter'



const rootReducer = {
  todo,
  chat,
  email,
  users,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,


  // login and admin accounts module

  adminLoginData,
  adminForgotData,
  getDeletedUserAccountData,
  rejectpendingGroupsdata,
  restoreUserAccountData,
  updateAdminUserData,
  adminProfileData,
  createAdminUserData,
  deleteUserData,
  acceptpendinggroupdata,

  //users module
  auth,
  resetData,
  getUsersListsData,
  getActiveAdminData,
  getUsersFriendsListsData,
  getUsersGroupsData,
  getUsersEventsData,
  getUsersPostsData,
  getUsersReportsData,
  deleteUserAccountData,
  updateUserData,
  removeUsersFriendData,
  removeUsersPostData,
  removeUsersGroupData,
  removeUserseventData,
  getUsersBlockListData,
  updateUserProfileImageData,
  getUsersPostCommentsData,
  individualUserRegCodeData,

  // groups module
  removecommentlistdata,
  assignasaadmingroupsdata,
  invite_Groupmemberbyadmin,
  removepostGroupsdata,
  deletegroupsinfo,
  adminupdateGroupInfo,
  getIndivudualGroupdata,
  reportsGroupsdata,
  eventsGroupsdata,
  adminmemberInfo,
  postGroupsdata,
  deletedgroupsdata,
  adminGroupInfo,
  activeGroupsdata,
  invitememberinfo,
  groupuploaddetails,
  pendinglist_groupsdatainfo,
  approvependingGroupsdata,
  getcommentlistdata,
  rejectpendinggroupdata,
  deleteeventsGroupsdata,
  groupsFilterData,
  sponsoredpostsettings,


  //analytics Module
  admin_analytics_user_data,
  admin_analytics_chart_activeuserlist,
  admin_analytics_viewactiveusers_data,
  getUsersListofInvitedCodeRegData,
  admin_analytics_filter_global,
  getInactiveUsersListData,
  getDeletedUsersListData,
  getActiveUsersListData,
  analyticsParentFilterData,
  analyticsChildFilterData,
  getCustomChildFilterData,

  //events module
  getAllActiveEventsData,
  getEventAttendingMemberData,
  removeMemberFromAttendingData,
  blockMemberFromAttendingData,
  acceptRejectMemberFromPendingData,
  blockMemberFromPendingData,
  addToAttendFromWaitlistData,
  getAllPastEventsData,
  getAllDeletedEventsData,
  createNewEventData,
  updateEventData,
  getEventDetailsData,
  getMembersToInviteData,
  inviteMembersToAttendEventData,
  uploadEventBannerImageData,
  addToEventAttendingData,
  removeUserspostCommentsData,
  eventsOverAllSearchData,
  getEvent_filterDetail,
  deleteEventData,
  defaultimageget,
  resetDataforMobile,
  getAllUsersToCreateEventData,
  eventExplorerAlgorithmData,

  //sporsorship module
  getAllSponsorEventsData,
  searchGroupNameInterestData,
  getSponsoreventDemographData,
  getAllSponsorPostsData,
  getSponsorPostDemographData,
  updateSponsorEventControlSettingsData,
  updateSponsorPostControlSettingsData

}

export default rootReducer
