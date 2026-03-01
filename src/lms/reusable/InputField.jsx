import React from 'react'

const InputField = ({ type, placeholder, name, onChange, className, required,checked, onFocus, id}) => {
    return (
        <input type={type} placeholder={placeholder} name={name} onChange={onChange} className={className} required={required} checked={checked} onFocus={onFocus} id={id}/>
    )
}

export default InputField