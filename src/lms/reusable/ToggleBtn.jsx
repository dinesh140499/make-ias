import React from 'react'

const ToggleBtn = ({ name, value, onChange }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" name={name} onChange={onChange} defaultValue="" value={value} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200   dark:peer-focus:bg-[#29A744] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#29A744] dark:peer-checked:bg-[#29A744]" />
        </label>
    )
}

export default ToggleBtn