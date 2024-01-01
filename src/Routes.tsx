import { ReactNode, lazy } from "react";

// Icons Import 

import { Home } from "react-feather";
import { AiFillQuestionCircle, AiFillStar} from "react-icons/ai"
import {FaUserFriends , FaUser, FaHome, FaSadCry } from "react-icons/fa"
import { MdPrivacyTip } from "react-icons/md";
import {DiDatabase} from "react-icons/di"
import { FiMail } from "react-icons/fi";
import {CgUnavailable} from "react-icons/cg"
import {BsCode, BsInfoCircle} from "react-icons/bs"
import {AiOutlineTransaction ,AiFillSetting ,AiFillGift} from "react-icons/ai"
import { IoIosNotificationsOutline, IoIosPaper, } from "react-icons/io";
import { BiCategory, BiLockAlt } from "react-icons/bi";
import { RiCouponFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { BsPersonFillAdd } from "react-icons/bs";

// Pages Import

import HomePage from "./Pages/Home/HomePage";
import OrderPage from "./Pages/order/OrderPage";
import TransactionPage from "./Pages/Transaction/TransactionPage";
import DriverPage from "./Pages/Driver/DriverPage";
import AppSettingPage from "./Pages/appSetting/AppSettingPage";
import SocialMediaPage from "./Pages/SocialMedia/SocialMediaPage";
import DriverOrderRatePage from "./Pages/DriverOrderRate/DriverOrderRatePage";
import NotificationPage from "./Pages/Notification/NotificationPage";
import RolePage from "./Pages/Role/RolePage";
import ViewAccountPage from "./Pages/Account/viewAccount/ViewAccountPage";
import CouponPage from "./Pages/Coupon/CouponPage";
import PrivacyPage from "./Pages/Informaition/Privacy/PrivacyPage";
import AboutUsPage from "./Pages/Informaition/AboutUs/AboutUsPage";
import ViewDriver from "./Pages/Driver/View/Page";
import NotificationView from "./Pages/Notification/View/NotificationView";
import CustomerPage from "./Pages/Customer/CustomerPage";
import SingleOrder from "./Pages/order/viewOne/SingleOrder";
import AddRolePage from "./Pages/Role/AddPage/AddRolePage";
import AddAccount from "./Pages/Account/AddAccount/AddccountPage";
import EditAccount from "./Pages/Account/EditAccount/EditAccount";
import ViewCustomer from "./Pages/Customer/View/Page";
import AddNotificationPage from "./Pages/Notification/AddPage/AddNotificationPage";
import SocketDebugPage from "./Pages/SocketDebug/SocketDebugPage";
import SystemTrackPage from "./Pages/SystemTrackDriverAndOrder/SystemTrackPage";
import FavouriteTripsPage from "./Pages/Customer/FavoriteTrip/FavouriteTripsPage";


interface RoutesLinksType {
    name?: string,
    href?: string,
    element?: ReactNode,
    icon?: any,
    Viewelement?: ReactNode,
    Viewhref?: string
    children?: any
    // Hidden the route from the navigation sidebar
    hidden?: boolean
}
export const RoutesLinks: RoutesLinksType[] = [

    {
        name: "Home",
        element: <HomePage />,
        icon: <FaHome />,
        href: "/",
    },
    {
        icon: <FaUserFriends size={30} />,
        element: <OrderPage/>,
        name: "user_management",
        children :[
        {
        name: "drivers",
        icon: <FaUser size={20} />,
        href: "/Drivers",
        element: <DriverPage/>
        },
        {
        name: "customers",
        icon: <BsPersonFillAdd size={20} />,
        href: "/customers",
        element: <CustomerPage />
        },
      ],
      
    },
    {
        name: "order",
        icon: <IoIosPaper size={20} />,
        children :[
        {
        name: "orders",
        icon: <DiDatabase size={20} />,
        href: "/Order",
        element: <OrderPage/>
        },
      ],
    },
    {
        name: "Code",        
        icon: <RiCouponFill size={20} />,
        href: "/Coupon",
        element: <CouponPage />,
    },   
    
    {
        name: "Transaction",
        icon: <AiOutlineTransaction size={20} />,
        href: "/transaction",
        element: <TransactionPage />,
    },
    {
        name: "driver_rate",
        
        icon: <AiFillStar size={20} />,
        href: "/DriverOrderRate",
        element: <DriverOrderRatePage/>,
    },
    {
        name: "notification",
        
        icon: <IoIosNotificationsOutline size={20} />,
        href: "/Notification",
        element: <NotificationPage/>,
    },
    {
        name: "social_media",
        
        icon: <FiMail size={20} />,
        href: "/SocialMedia",
        element: <SocialMediaPage/>,
    },
    
    {
        name: "app_setting",
        icon: <AiFillSetting size={20} />,
        href: "/AppSetting",
        element: <AppSettingPage/>,
    },
    {
        name: "ViewNotification",
        
        icon: <FaSadCry size={20} />,
        href: "/ViewNotification",
        element: <NotificationView/>,
        hidden:true,
    },
    {
        name: "information",
        icon: <BsInfoCircle size={20} />,
        element: <OrderPage/>,
        children :[
        {
        name: "privacy",
        icon: <MdPrivacyTip size={20} />,
        href: "/Information/privacy",
        element: <PrivacyPage/>
        },
        {
        name: "about_us",
        icon: <AiFillQuestionCircle size={20} />,
        href: "/Information/AboutUs",
        element: <AboutUsPage />
        },
      ],
    },
    {
        name: "account",
        icon: <MdOutlineManageAccounts size={20} />,
        element: <ViewAccountPage/>,
        children :[
        {
        name: "view_accounts",
        icon: <FaUserFriends size={20} />,
        href: "/Account/View",
        element: <ViewAccountPage/>
        },
        {
        name: "add_account",
        icon: <IoPersonAddSharp size={20} />,
        href: "/Account/Add",
        element: <AddAccount />
        },
        {
        name: "role",
        icon: <BiLockAlt size={20} />,
        href: "/Account/Role",
        element: <RolePage />
        },
      ],
    },
    {
        name: "socketDebug",
        icon: <TbBrandSocketIo size={20} />,
        href: "/socketDebug",
        element: <SocketDebugPage />
    },
    {
        name: "TrackDriverSystem",
        icon: <TbBrandSocketIo size={20} />,
        href: "/TrackDriverSystem",
        element: <SystemTrackPage />
    },
    

/////////////// hidden route
    {
        href: "/information/driver/:id",
        element: <ViewDriver />,
        hidden: true
    },
    {
        href: "/information/customer/:id",
        element: <ViewCustomer />,
        hidden: true
    },
    {
        href: "/favTrip/customer/:id",
        element: <FavouriteTripsPage />,
        hidden: true
    },
    {
        href: "/Account/Role/Add",
        element: <AddRolePage />,
        hidden:true
    },
    {
        href: "/Notification/Add",
        element: <AddNotificationPage />,
        hidden:true
    },
    {
        href: "/Account/Edit",
        element: <EditAccount
        location={{state: undefined}}
         />,
        hidden:true
    },
    {
        href: "/Order/:id",
        element: <SingleOrder />,
        hidden:true
    },
]