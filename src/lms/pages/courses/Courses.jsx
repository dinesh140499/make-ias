import React from 'react'
import Left from '../../components/courses/Left'
import Right from '../../components/courses/Right'
import { Helmet } from 'react-helmet'

const Courses = () => {
    return (
        <>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <div className="container95">
                <div className='lg:grid grid-cols-2 gap-10 '>
                    <Left />
                    <Right />
                </div>
            </div>
        </>
    )
}

export default Courses