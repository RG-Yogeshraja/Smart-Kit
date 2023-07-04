// 34.234.128.231->current dev server(for dev)
// 54.243.169.173->demo server(for client)

//API base URL
export const APIbaseURL = "https://devapi.hintsocialadmin.com:3002/hintsocial/api/v1"  //dev server(for dev)
//  export const APIbaseURLg = "https://demoapi.hintsocialadmin.com:3002/hintsocial/api/v1"  //demo server(for client)
// export const APIbaseURL = "https://api.hintsocialadmin.com:3002/hintsocial/api/v1"  //LIVE serer(for LIVE)

//login path
export const adminLoginPath = "/admin/admin_login"
export const adminForgoPasswordPath = "/admin/admin_forgot_password"
export const adminResetPasswordPath = "/admin/admin_reset_password"
export const usersResetPasswordPath = "/user/reset_password"

//accounts module
export const getAdminProfilePath = "/admin/get_admin_profile"
export const createAdminUserAccountPath = "/admin/create_user_account"
export const updateAdminUserAccountPath = "/admin/edit_user_account"
export const getActiveAdminAccountPath = "/admin/get_active_admin_account"
export const deleteUserAccountPath = "/admin/delete_user_account"
export const getDeletedUserAccountPath = "/admin/get_deleted_account"
export const restoreDeletedUserAccountPath = "/admin/restore_deleted_account"

//analytics module
export const get_user_list_events_list = '/admin/get_registered_users_by_admin'
export const get_analytics_performance = '/admin/get_analytics_by_admin'
export const globalfiltersval = '/admin/analytics_filter'
export const globalsubfiltersval = '/admin/analytics_sub_filter'
export const active_listuser_count = '/admin/get_blocked_users_by_admin'
export const getactiveuser_analytics = '/admin/get_active_users_by_admin'
export const getactivitycount = '/admin/get_users_activity_count_by_admin'
export const getUsersListofInvitedCodeRegPath = '/admin/get_invite_code_registration_list'
export const getInactiveUsersListPath = '/admin/get_active_users_by_admin'
export const getDeletedUsersListPath = '/admin/get_active_users_by_admin'
export const getActiveUsersListPath = '/admin/get_active_users_by_admin'

//users module
export const getUsersListsPath = "/admin/get_user_list_by_admin"
export const getuserfriendsPath = "/user/get_friends_list"
export const getUserGroupsPath = "/admin/get_user_groups"
export const getUserEventsPath = "/admin/get_user_events"
export const getUserPostsPath = "/admin/get_user_posts"
export const getUserReportsPath = "/admin/get_user_report_list"
export const deleteUserPath = "/admin/delete_user_by_admin"
export const updateUserDataPath = "/user/update_my_profile"
export const removeUsersFriendPath = "/admin/remove_friend_from_friendlist"
export const removeUsersPostPath = "/admin/remove_user_post"
export const removeUsersGroupPath = "/admin/remove_group_member"
export const removeUsersEventPath = "/admin/remove_event_member_by_admin"
export const updateUserProfileImagePath = "/user/upload_profile_picture"
export const getUsersBlockListPath = "/admin/get_user_block_list"
export const getUsersPostCommentsPath = "/admin/get_post_comments"
export const removeUsersPostCommentsPath = "/admin/delete_comment_by_admin"
export const individualUserCodeRegPath = "/admin/code_registration"

//groups module
export const adminaddgroup = "/admin/add_group"
export const adminupdatesgroup = "/admin/update_group_by_admin"
export const groupimageupload = "/admin/upload_group_banner_image"
export const invitemembersingroups = "/admin/get_group_invite_user_list"
export const getdeletedgroups = '/admin/get_deleted_group'
export const acceptjoin = '/admin/accept_join_group_request'
export const rejectjoin = '/admin/reject_join_group_request'
export const getgroupspendinglist = '/admin/get_approval_pending_groups'
export const getActivegroups = '/admin/get_active_groups'
export const getActivemembers = '/admin/get_group_members'
export const getGroupPost = '/admin/get_group_post'
export const getGroupEvents = '/admin/get_group_events_by_admin'
export const getReportEvent = '/admin/get_group_report_list'
export const getIndivudualGroups = '/admin/get_group'
export const deletegroups = '/admin/delete_group_by_admin'
export const rejectpendinggroups = '/admin/reject_group_request'
export const approvependinggroups = '/admin/approve_group_request'
export const invite_memberbyadmingroup = '/admin/invite_member_to_group_by_admin'
export const assignasamember = '/admin/assign_member_as_admin'
export const removepost = '/admin/remove_post'
export const getcomments = '/admin/get_post_comments'
export const removecomment = '/admin/delete_comment_by_admin'
export const deleteevents = '/admin/delete_event_by_admin'
export const groupsFilterPath = '/admin/filter_group_by_admin'
export const getsponsoredpostsettings = "/admin/get_sponsor_post_settings"
export const updatesponsoredpostsettings = "/admin/update_sponsor_post_settings"

//events module
export const getAllActiveEventsPath = '/admin/get_active_events'
export const getEventAttendingMemberPath = '/admin/get_event_member_by_admin'
export const removeMemberFromAttendingPath = '/admin/remove_event_member_by_admin'
export const blockMemberFromAttendingPath = '/admin/block_event_member_by_admin'
export const blockMemberFromPendingPath = '/admin/block_event_member_by_admin'
export const acceptRejectMemberFromPendingPath = '/admin/accept_or_reject_pending_event_member'
export const addToAttendFromWaitlistPath = '/admin/add_waitinglist_member_to_attend_event'
export const getAllPastEventsPath = '/admin/get_past_events'
export const createNewEventPath = '/admin/create_event_by_admin'
export const updateEventPath = '/admin/edit_event_by_admin'
export const deleteEventPath = '/admin/delete_event_by_admin'
export const getEventDetailsPath = '/admin/get_event_details'
export const getAllDeletedEventsPath='/admin/get_deleted_event_by_admin'
export const getMembersToInvitePath='/admin/get_event_invite_user_list'
export const inviteMembersToAttendEventPath='/admin/invite_member_by_admin'
export const uploadEventBannerImagePath='/admin/upload_event_banner_image'
export const addToEventAttendingPath='/admin/add_waitinglist_member_to_attend_event'
export const eventfilterdetail = '/admin/filter_event_by_admin'
export const eventsOverAllSearchPath = '/admin/search_event'
export const getEventExplorerAlgorithmPath = '/admin/event_explorer_algorithm'
export const updateEventExplorerAlgorithmPath = '/admin/update_event_explorer_algorithm'
export const eventExplorerAlgorithmPath = '/admin/update_event_explorer_algorithm'

//sponsorship module
export const getAllSponsorEventsPath= '/admin/get_active_sponsored_events'
export const searchGroupnameInterestPath= '/admin/search_group_name_and_interest'
export const getSposnorEventDemoGraphPath= '/admin/get_sponsored_event_demographics'
export const getAllSponsorPostsPath= '/admin/get_active_sponsored_posts'
export const getSposnorPostDemoGraphPath= '/admin/get_sponsored_post_demographics'
export const updateSponsorEventControlSettingsPath= '/admin/update_control_sponsored_event'
export const updateSponsorPostControlSettingsPath= '/admin/update_control_sponsored_post'

//remove user, group, event profile image
export const default_image = '/admin/remove_images_by_admin'