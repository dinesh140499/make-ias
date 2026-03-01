import React from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'
import BookMentor from '../modals/BookMentor'
import { useSelector } from 'react-redux'
import useIsMobile from '../../customHook/useIsMobile'
// import TopNavbarMobile from '../navbar/mobile/TopNavbar'
import BottomNavbarMobile from '../navbar/mobile/BottomNavbar'
import Courses from './dropdown/Courses'
import Tests from './dropdown/Tests'
import Resources from './dropdown/Resources'

const Navbar = () => {
    const { book_mentor } = useSelector(state => state.modalsSlice)
    const isMobile = useIsMobile();

    const dropdownsMenu = [
        {
            id: 1,
            name: "Courses",
            element: <Courses itemsData={[
                { id: 1, name: "Course 1", data: [1, 2] },
                { id: 2, name: "Course 2", data: [1] },
            ]} />,
            mobileElement: [
                { id: 1, name: "Course 1", data: [1, 2] },
                { id: 2, name: "Course 2", data: [1] },
            ]
        },
        {
            id: 2,
            name: "Tests",
            element: <Tests itemsData={[
                { id: 1, name: "Data Structure Algorithms", data: [1, 2] },
                { id: 2, name: "Data Structure Algorithms", data: [1] },
            ]} />,
            mobileElement: [
                { id: 1, name: "Data Structure Algorithms", data: [1, 2] },
                { id: 2, name: "Data Structure Algorithms", data: [1] },
            ]
        },
        {
            id: 3,
            name: "Resources",
            element: <Resources itemsData={[
                {
                    id: 1,
                    name: "Current Affairs Monthly Basis",
                    new: true,
                    link: "/current-affair-monthly-base"
                },
                {
                    id: 2,
                    name: "Previous Question Paper",
                    link: "/previous-year-question-paper"
                },
                {
                    id: 3,
                    name: "Previous Answer Copy",
                    link: "/"
                },
                {
                    id: 4,
                    name: "Toppers Answer Copy",
                    link: "/toppers-answer-copies"
                },
                {
                    id: 5,
                    name: "Short Notes",
                    link: "/short-notes"
                },
                {
                    id: 6,
                    name: "MCQ Based Monthly Current Affairs",
                    link: "/mcqs"
                },
            ]} />,
            mobileElement: [
                {
                    id: 1,
                    name: "Current Affairs Monthly Basis",
                    new: true,
                    link: "/current-affair-monthly-base"
                },
                {
                    id: 2,
                    name: "Previous Question Paper",
                    link: "/previous-year-question-paper"
                },
                {
                    id: 3,
                    name: "Previous Answer Copy",
                    link: "/"
                },
                {
                    id: 4,
                    name: "Toppers Answer Copy",
                    link: "/toppers-answer-copies"
                },
                {
                    id: 5,
                    name: "Short Notes",
                    link: "/short-notes"
                },
                {
                    id: 6,
                    name: "MCQ Based Monthly Current Affairs",
                    link: "/mcqs"
                },
            ]
        },
    ]

    return (
        <>
            {isMobile ? <nav className='navbar' >
                {/* <TopNavbarMobile /> */}
                <BottomNavbarMobile dropdownsMenu={dropdownsMenu} />
                <TopNavbar />
            </nav> :
                <nav className='navbar' >
                    <TopNavbar />
                    <BottomNavbar dropdownsMenu={dropdownsMenu} />
                </nav>}
            {book_mentor.modal &&
                <BookMentor />}

        </>
    )
}

export default Navbar