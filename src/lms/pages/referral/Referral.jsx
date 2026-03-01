import React from 'react'
import Earn from '../../components/referral/Earn'
import { Helmet } from 'react-helmet'

const Referral = () => {
    return (
        <>
            <Helmet>
                <title>Referral</title>
            </Helmet>
            <div className='container95'>
                <Earn />
            </div>
        </>
    )
}

export default Referral