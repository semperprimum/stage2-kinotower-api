import React from 'react';

const Button = ({children, className, ...rest}) => {
    return (
        <button {...rest} className={`py-2 px-4 bg-slate-950 text-slate-50 text-xs rounded ${className}`}>
            {children}
        </button>
    );
};

export default Button;