import React from "react";

const DropdownSelect = ({ category, items, className }) => {
    if (!items || items.length === 0) return null;

    return (
        <select className={`outline-none cursor-pointer ${className?.select}`}>
            {category && <option disabled defaultValue={items?.[0].name} selected>{category}</option>}
            {items.map((item, index) => (
                <option key={index} value={item.name} className={`${className?.option}`}>
                    {item?.name}
                </option>
            ))}
        </select>
    );
};

export default DropdownSelect;
