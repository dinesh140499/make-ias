import AccountSetting from "../pages/profile/AccountSetting"
import Layout from "../pages/profile/Layout"
import LoginSecurity from "../pages/profile/LoginSecurity"
import Notifications from "../pages/profile/Notifications"


const profileRoute = [
    {
        path: "profile-and-settings",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AccountSetting />
            },
            {
                path: "login-and-security",
                element: <LoginSecurity />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
        ]
    }
]

export default profileRoute