import React from 'react';

const Textarea = ({ id, placeholder, name, onChange, className, required = false, rows = 4, cols = 50 }) => {
    return (
        <textarea
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
            rows={rows}
            cols={cols}
        />
    );
}

export default Textarea;
