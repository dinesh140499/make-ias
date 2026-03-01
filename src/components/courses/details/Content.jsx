import React from 'react'
import VideoCard from './VideoCard'

const data = [
    {
        id: 1,
        list: "Comprehensive coverage of the syllabus"
    },
    {
        id: 2,
        list: "120+ hours of classes: 2.5 - 3 hours/day"
    },
    {
        id: 3,
        list: "Duration: 2.5 Months"
    },
    {
        id: 4,
        list: "Modes: Offline and Live/Online"
    },
    {
        id: 5,
        list: "Concise Study Material"
    },
    {
        id: 6,
        list: "Weekly and Monthly Class Test"
    },
    {
        id: 7,
        list: "12 Full Length Test"
    },
    {
        id: 8,
        list: "Personalized Attention and Doubt Resolution"
    },
]

const Content = () => {
    return (
        <section className="lg:my-5">
            <div className="container95">
                <div className="lg:flex items-start gap-10">
                    <div>
                        <h3 className='text-lg'>Foundation Course 2026</h3>
                        <p className='text-md lg:text-sm capitalize theme-para-grey mt-2'>Stock market crash today: Indian equity indices fell for the fifth day, driven down by banking, auto, metal, and IT stocks. </p>
                        <p className='text-md lg:text-sm capitalize mt-1 theme-para-grey'>Contributing factors include U.S. trade policy, weak earnings, and foreign investor selling. President Trump's tariff hike on steel and aluminum, nervousness ahead of Fed Chair Powell’s testimony, and high U.S. bond yields added to the market's decline.</p>
                        <ul className='list-disc pl-5 mt-3'>
                            {data.length > 0 && data.map((items, i) => <li key={i} className='text-md lg:text-sm theme-para-grey capitalize font-medium mb-2'>{items.list}</li>)}
                        </ul>
                    </div>
                    <VideoCard />
                </div>
            </div>
        </section>
    )
}

export default Content