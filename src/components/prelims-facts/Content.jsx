import React from 'react'
import banner from '../../assets/images/current-affairs/content_detail.png'
import { IoShareSocial } from "react-icons/io5";
import useShare from '../../customHook/useShare';

const Content = () => {
    const sharePage = useShare();
    return (
        <>
            <div className='w-[75%]'>
                <h3 className='capitalize font22 mb-5'>Prelims facts</h3>
                <img src={banner} alt="banner" />
                <article className='font15 mt-5'>
                    The West Bengal government is set to commence basalt mining on 326 acres at the Deocha-Pachami  coal mine in Birbhum district. This initiative aligns with the Bengal Global Business Summit (BGBS). The project aims to attract investors while addressing local employment concerns ahead of the 2026 elections.
                </article>
                <article className='font15'>
                    <p className='my-2'>Project Overview</p>
                    <ul className='list-disc decoration-solid pl-5'>
                        <li>The Deocha-Pachami coal mine is Asia’s second largest coal mine.</li>
                        <li>Mining basalt is crucial as it covers the coal reserves beneath.</li>
                        <li>Expected reserves: 1,240 million tonnes (MT) of coal and 675 MT of basalt</li>
                        <li>The thickness of basalt in this area ranges from 100 to 350 meters.</li>
                        <li>The state government has received all necessary environmental clearances to begin operations</li>
                    </ul>
                </article>
                <p className='my-2 font15'>Mining Operations</p>
                <article className='font15'>
                    Mining operations will start with the removal of the basalt layer. The initial phase will occur on 326 acres due to land procurement issues. The government plans to acquire an additional 50 acres within six months. Open-cast mining techniques are planned, with completion expected in over a year
                </article>
                <p className='font15 mt-1'>Basalt building materials</p>
                <p className='font15 mt-1'>Economic Impact</p>
                <article className='font15 mt-2'>The mining operation is projected to generate substantial revenue. The agency responsible for mining will share 71.5% of the revenue with the state government. Expected earnings from basalt are around ₹5,000 crore, driven by high demand in construction.
                    <p className='my-2 font15'>State-Level Investment Synergy Committee</p>
                    <ul className='list-disc decoration-solid pl-5 font15'>
                        <li className='font15'>A new committee has been set up to streamline investment-related approvals.</li>
                        <li className='font15'>It will address issues related to land, fire safety, finance, MSME, housing, agriculture, and industry.</li>
                        <li className='font15'>Headed by the Chief Secretary and will meet fortnightly for timely decision-making.
                            Political Context</li>
                    </ul>
                </article>
                <article className='font15'>
                    The timing of this project is strategic. The Bengal government aims to showcase progress at the Bengal Global Business Summit (BGBS) 2024 to attract investments. The initiative is seen as a response to criticism regarding employment opportunities in the state. Successful investment could boost the ruling party’s position ahead of upcoming elections.
                </article>
                <article>
                    <p className='my-2 font15'>Challenges and Future Prospects</p>
                    <span className='font15'>
                        The Deocha-Pachami project faces challenges, including delays in land acquisition for the full operational area. Additionally, two other major projects in the region have not progressed as planned. The government is relying on this mining project to fulfil its economic and employment objectives.
                    </span>
                    <p className='font15 my-2'>State-Level Investment Synergy Committee</p>
                    <ul className='list-disc decoration-solid pl-5'>
                        <li className='font15'>A new committee has been set up to streamline investment-related approvals.</li>
                        <li className='font15'>It will address issues related to land, fire safety, finance, MSME, housing, agriculture, and industry.</li>
                        <li className='font15'>Headed by the Chief Secretary and will meet fortnightly for timely decision-making.</li>
                    </ul>
                </article>
                
            </div>

        </>
    )
}

export default Content