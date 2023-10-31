import React, { useState, useEffect } from "react";

function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    return <input {...props} value={value} onChange={handleChange} />;
}

export default DebouncedInput;
