import React from 'react'
import Banner from '../../components/dashboard/Banner'
import Profile from '../../components/dashboard/Profile'
import EnrolledCourses from '../../components/dashboard/EnrolledCourses'
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className='container95'>
        <Profile />
        <Banner />
        <EnrolledCourses />
      </div>
    </>
  )
}

export default Dashboard