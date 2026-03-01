import React from 'react'

const TableRows = ({ className, children }) => {
    return (
        <td className={`font-medium ${className}`}>{children}</td>
    )
}

export default TableRows