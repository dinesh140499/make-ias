import { LuPencil } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { LuCrown } from "react-icons/lu";
import { GiPodium } from "react-icons/gi";


import facebook from '../../assets/images/navbar/social/facebook.png'
import x from '../../assets/images/navbar/social/x.png'
import insta from '../../assets/images/navbar/social/insta.png'
import youtube from '../../assets/images/navbar/social/youtube.png'
import linkedin from '../../assets/images/navbar/social/linkedin.png'

export const popupBtn = [
    {
        id: 1,
        btnText: "Pay Per Test",
        btnColor: "theme-bg-black",
        icon: LuPencil,
        action: "/page-per-test",
        page: true
    },
    {
        id: 2,
        btnText: "Book A Mentor Call",
        btnColor: "theme-bg-red",
        icon: IoIosCall,
        action: "book-a-mentor-call",
        page: false
    },
    {
        id: 3,
        btnText: "MakeIAS Premium",
        btnColor: "theme-bg-golden",
        icon: LuCrown,
        action: "/makeias-premium",
        page: true,
    },
    {
        id: 4,
        btnText: "Offline Test Series Result",
        btnColor: "theme-bg-green",
        icon: GiPodium,
        action: "/offline-test-series-result",
        page: true
    },
]

export const socialIcon = [
    {
        id: 1,
        icon: x,
        name: "twitter",
        link: ""
    },
    {
        id: 2,
        icon: facebook,
        name: "facebook",
        link: ""
    },
    {
        id: 3,
        icon: insta,
        name: "instagram",
        link: ""
    },
    {
        id: 4,
        icon: linkedin,
        name: "linkedin",
        link: ""
    },
    {
        id: 5,
        icon: youtube,
        name: "youtube",
        link: ""
    },
]

export const navLink = [
    {
        category: "Courses",
        link: "/courses",
        items: [
            { id: 1, name: "Course1", link: "/" },
            { id: 2, name: "Course2", link: "/" },
        ]
    },
    {
        category: "Tests",
        link: "/tests",
        items: [
            { id: 1, name: "Test1", link: "/" },
            { id: 2, name: "Test2", link: "/" },
        ]
    },
    {
        category: "Current Affairs",
        link: "/current-affairs",
    },
    {
        category: "Book & Notes",
        link: "/books-and-notes",
    },
    {
        category: "Resources",
        items: [
            { id: 1, name: "Resources 1", link: "/" },
            { id: 2, name: "Resources 2", link: "/" },
            { id: 3, name: "Resources 3", link: "/" },
        ]
    },
    {
        category: "Subscription Plans",
        link: "/subscription-plans"
    },
    {
        category: "Contact Us",
        link: "/contact-us"
    },
];

