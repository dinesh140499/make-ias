import React from 'react'

const InputField = ({ type, placeholder, name, onChange, className, required,checked, onFocus,id }) => {
    return (
        <input type={type} placeholder={placeholder} name={name} onChange={onChange} id={id} className={className} required={required} checked={checked} onFocus={onFocus}/>
    )
}

export default InputField