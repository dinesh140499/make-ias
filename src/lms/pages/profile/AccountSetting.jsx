import React from 'react'
import ProfileUploader from '../../components/profile/ProfileUploader'
import Form from '../../components/profile/Form'
import { Helmet } from 'react-helmet'

const AccountSetting = () => {
  return (
    <div>
      <Helmet>
        <title>Track Progress</title>
      </Helmet>
      <ProfileUploader />
      <div className='bg-[#E0E4EC] h-[2px] w-full my-10'></div>
      <Form />
    </div>
  )
}

export default AccountSetting