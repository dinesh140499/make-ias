import React from 'react'
import FilterDate from '../../components/prelims-facts/FilterDate'

const PrelimsFacts = () => {
  return (
    <>
      <Helmet>
        <title>Prelims Facts</title>
      </Helmet>
      <section>
        <FilterDate />
      </section>
    </>
  )
}

export default PrelimsFacts