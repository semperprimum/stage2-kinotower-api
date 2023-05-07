import React from 'react';

const Input = ({type, placeholder, onChange, name}) => {
    return (
        <div>
            <input className="px-3 py-2 w-96 border border-slate-400 rounded" name={name || ""} type={type || "text"} placeholder={placeholder || ""} onChange={onChange} />
        </div>
    );
};

export default Input;