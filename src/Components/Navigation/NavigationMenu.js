import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export const navigationMenu = [
    {
        title:"Home",
        icon:<HomeOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Explore",
        icon:<SearchIcon/>,
        path:"/home"
    },
    {
        title:"Notifications",
        icon:<NotificationsOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Messages",
        icon:<EmailOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Lists",
        icon:<ListAltIcon/>,
        path:"/home"
    },
    {
        title:"Bookmarks",
        icon:<BookmarkBorderOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Communities",
        icon:<GroupOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Premium",
        icon:<WorkspacePremiumOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"Profile",
        icon:<PermIdentityOutlinedIcon/>,
        path:"/home"
    },
    {
        title:"More",
        icon:<PendingOutlinedIcon/>,
        path:"/home"
    },
]