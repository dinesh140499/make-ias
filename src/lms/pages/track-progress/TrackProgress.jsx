import React from 'react'
import Progress from '../../components/track-progress/Progress'
import Graph from '../../components/track-progress/Graph'
import Table from '../../components/track-progress/Table'
import { Helmet } from 'react-helmet'

const TrackProgress = () => {
    return (
        <>
            <Helmet>
                <title>Track Progress</title>
            </Helmet>
            <div className='container95'>
                <Progress />
                <Graph />
                <Table />
            </div>
        </>
    )
}

export default TrackProgress