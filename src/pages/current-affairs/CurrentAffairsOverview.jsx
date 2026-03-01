import React from 'react'
import FilterDate from '../../components/current-affairs/current-affairs-overview/FilterDate'
import { Helmet } from 'react-helmet'

const CurrentAffairsOverview = () => {
  return (
    <>
      <Helmet>
        <title>Current Affairs</title>
      </Helmet>
      <section>
        <FilterDate />
      </section>
    </>
  )
}

export default CurrentAffairsOverview