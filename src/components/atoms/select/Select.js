import React from 'react';

const select = ({ options }) => (
    <select>
        {options.map(option => (
            <option key={option.value} value={option.value}>
                {option.displayValue}
            </option>
        ))}
    </select>
);

export default select;