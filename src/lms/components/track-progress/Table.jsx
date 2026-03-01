import React from 'react'

const Table = () => {
    return (
        <div className='mt-10'>
            <h1>Courses</h1>
            <table width={"100%"} className='mt-3'>
                <thead className='border-b border-[#585858] '>
                    {["Rank", "Books", "Courses", "Minutes", "Completion"].map((items, i) =>
                        <th key={i} className='text-left font-medium theme-para-grey font14'>{items}</th>)}
                </thead>
                <tr>
                    <td className='py-3 w-1/4'>
                        <p className='font13 bg-[#585858] h-5 w-5 flex items-center justify-center text-white rounded-sm'>
                        1
                    </p></td>
                    <td><p className='font14 theme-para-grey w-1/4'>UPSC</p></td>
                    <td><p className='font14 theme-para-grey w-1/4'>53</p></td>
                    <td><p className='font14 theme-para-grey w-1/4'>250</p></td>
                    <td><p className='font14 theme-text-red w-1/4'>13.450</p></td>
                </tr>
            </table>
        </div>
    )
}

export default Table